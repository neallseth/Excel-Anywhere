const express = require("express");
const XLSX = require("xlsx");
const csv = require("csvtojson");
const app = express();
const port = 9595;

app.get("/:type/:filename", async (req, res) => {
  const requestedFile = req.params.filename;
  const fileType = req.params.type;
  const fileLocation = `./source_data/${requestedFile}.${fileType}`;
  let fileData = [];
  try {
    if (fileType == "xlsx") {
      const workbook = await XLSX.readFile(fileLocation);
      const sheetList = workbook.SheetNames;
      fileData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetList[0]]);
    } else if (fileType == "csv") {
      fileData = await csv().fromFile(fileLocation);
    }
    res.send(fileData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error - Verify Request Syntax");
  }
});

app.listen(port, () => console.log(`ExcelDB listening on ${port}!`));
