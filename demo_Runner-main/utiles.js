const fs = require('fs');
const reporter = require('cucumber-html-reporter');

function merged(){
const file1 = fs.readFileSync('./reporters/firefox-cucumber-report.json', "utf8");
const file2 = fs.readFileSync('./reporters/webkit-cucumber-report.json', "utf8");
const file3 = fs.readFileSync('./reporters/chromium-cucumber-report.json', "utf8");


const data1 = JSON.parse(file1);
const data2 = JSON.parse(file2);
const data3 = JSON.parse(file3);

const mergedObj = [
  ...data1,
  ...data2,
  ...data3
]

const json = JSON.stringify(mergedObj);
fs.writeFileSync('./reporters/merged.json', json);
}



function HTMLreporter(){
const options = {
    theme: 'bootstrap',
    jsonFile: './reporters/merged.json',
    output: './reporters/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: false
  };
  reporter.generate(options);
}


module.exports={
    merged,HTMLreporter
}
