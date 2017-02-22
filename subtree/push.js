const exec = require('child_process').exec;
const { compose, first, forEach, get, split } = require('lodash/fp');
const argv = require('yargs').argv;
const lernaConfig = require('../lerna.json');

const branchName = argv._[0];

const prefix = compose(first, split('/'), first, get('packages'))(lernaConfig);

const subtreeKeys = lernaConfig.subtrees;

const execGitCommand = ({ branchName, prefix }) => subtreeKey => exec(
  `git subtree push --prefix=${prefix}/${subtreeKey} ${subtreeKey} ${branchName}`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  }
);

forEach(execGitCommand({ branchName, prefix }), subtreeKeys);
