const { exec, execSync } = require('child_process');
const commands = ['npm run firefox','npm run chromium','npm run webkit']; // Replace this with your desired command
require('dotenv').config()
const fs = require('fs');
const {merged,HTMLreporter} = require('./utiles.js')
const promiseMap = commands.map((command)=>{
  child=exec(`cd ${process.env.MAIN_SYSTEM_PATH} && ${command}`, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error executing command: ${err}`);
          return;
        }
        console.log(`Command output: ${stdout}`);
      });
    })
    child.on('close',async (code) => {
      await merged()
      await HTMLreporter()
    });


      

