const { exec } = require('child_process');

const files = [
  'migrate/migrateBeginners.js',
  'migrate/migrateBeginnersPart2.js',
  'migrate/migrateBeginnersPart3.js'
];

async function run() {
  for (const file of files) {
    await new Promise((resolve, reject) => {
      console.log(`Running ${file}...`);
      exec(`node ${file}`, (err, stdout, stderr) => {
        console.log(stdout);
        if (err) {
          console.error(stderr);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  console.log('All migrations done!');
}

run();