const { defineConfig, LaunchOptions  } = require('@playwright/test');
const browserOptions = {
  slowMo: 0,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
  headless : false
};
module.exports.config = {
    browserOptions,
    BASE_URL: 'https://playwright.dev',
    IMG_THRESHOLD: { threshold: 0.4 },
    BASE_API_URL: 'https://catfact.ninja/',
  };
