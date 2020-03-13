# Excel Anywhere

## Installation

1. Install Node.js
2. Run `npm i` from the project directory. This will install all necessary dependencies into the /node_modules folder.

## Usage

1. Drop any spreadsheet of the supported file types (XLSX and CSV) into the /source_data directory of the project.
2. Run `node index.js` from within the project directory. Your local server is now ready to return local spreadsheet data.
3. Make a GET request to your target endpoint in the following format: http://localhost:9595/_{{file_type}}_/_{{file_name}}_

Example valid endpoint for a sample spreadsheet provided in this repo: http://localhost:9595/xlsx/people_sample
