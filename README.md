# Excel Anywhere

## Installation

1. Install Node.js
2. Clone this repository to your machine
3. Run `npm i` from the project directory. This will install all necessary dependencies into the /node_modules folder.

## Usage

1. Drop any spreadsheet of the supported file types (XLSX and CSV) into the /source_data directory of the project.
2. Run `node index.js` from within the project directory. Your local server is now ready to return local spreadsheet data.
3. Make an HTTP GET request to your target endpoint in the following format: http://localhost:9595/*{{file_type}}*/*{{file_name}}*. Example valid endpoint for a sample spreadsheet provided in this repo: http://localhost:9595/xlsx/people_sample
