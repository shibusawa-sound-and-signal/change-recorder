const simpleGit = require('simple-git');
const Rsync = require('rsync');
const fs = require('fs');

var argv = require('minimist')(process.argv.slice(2));

let watchDir = argv._[0];
let targetDir = argv._[1];

console.log(targetDir);

const repo = simpleGit(targetDir);

repo.init();

const rsync = new Rsync()
  .shell('ssh')
  .flags('azP')
  .exclude(".*/")
  .exclude(".*")
  .source(watchDir)
  .destination(targetDir);


fs.watch(watchDir, {encoding: 'buffer'}, (eventType, filename) => {
  console.log("changed!");
  rsync.execute((error, code, cmd) => {
    console.log("sync!");
    repo.add("*").commit(`${new Date().valueOf()}`, () => {
      console.log("committed")
    });
  });
});

