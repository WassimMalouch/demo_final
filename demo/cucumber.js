require('dotenv').config()
const common = {
  require: ["support/*.js"], // to add step definitions files,
  // format: [], // to specify your output reports 
  parallel: 2,
}

module.exports = {
  default: {
    ...common,
    worldParameters: { browser: 'chromium' } 
  },
  forChromiumTest : {
    ...common,
    format : [`json:${process.env.report_path}chromium-cucumber-report.json`],
    worldParameters: { browser: 'chromium' } 
  },
  forFirefoxTest : {
    ...common,
    format : [`json:${process.env.report_path}firefox-cucumber-report.json`],
    worldParameters: { browser: 'firefox' } 
  },
  forwebkitTest : {
    ...common,
    format : [`json:${process.env.report_path}webkit-cucumber-report.json`],
    worldParameters: { browser: 'webkit' } 
  }
  // desktop: `--world-parameters '{"device": {"type":"desktop","height":720,"width":1280}}'`,
  // phone: `--world-parameters '{"device": {"type":"phone","height":568,"width":320}}'`,
  // tablet: `--world-parameters '{"device": {"type":"tablet","height":1024,"width":768}}'`,
  // chromium: `--world-parameters '{"browser": "chromium"}'`,
  // firefox: `--world-parameters '{"browser": "firefox"}'`,
  // webkit: `--world-parameters '{"browser": "webkit"}'`
};
