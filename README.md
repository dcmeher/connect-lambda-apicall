# This is an exanple of  Amazon Coonect integration with an external API endpoint  using lambda . In this exmaple , Amazon Connect will play the totoal number of active COVID cases to the end users.

This JavaScript code fetches COVID-19 data from the Ministry of Health and Family Welfare website in India and extracts relevant information.

## Prerequisites

Before running this script, ensure you have Node.js installed on your system.

## Installation

1. Clone this repository or download the provided JavaScript file (`covid_data_fetcher.js`).

2. Install Axios, a Promise-based HTTP client for JavaScript, using npm:

3. npm install axios

4. 
## Usage

1. Run the JavaScript file using Node.js:

2. The script will make an HTTP GET request to the Ministry of Health and Family Welfare website to fetch the COVID-19 data.

3. It will extract the active cases data for India and print it to the console.

## Configuration

You can customize the script by modifying the `url` and `headers` in the Axios configuration (`config` object) to fetch data from different sources or with different headers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Dhruba  C Meher
