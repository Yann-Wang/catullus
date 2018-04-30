const chalk = require('chalk')
const childProcess = require('child_process')

const spawn = childProcess.spawn
const log = console.log

const babelCli = require.resolve('babel-cli/bin/babel.js')
const info = text => log(chalk.green(`\n${text}`))
const remind = text => log(chalk.red(`\n${text}`))

info('Compile Server-side Js File')

const babelStarter = function (src, options) {
  if (!options.outDir) {
    return remind('the option of --out-dir is needed.')
  }
  spawn(babelCli, [
    src,
    '--out-dir', options.outDir,
    '-x', '.js'
  ], { stdio: 'inherit' })
    .on('close', function () {
      info('Compile Server-side Js File Completed!')
    })
}

module.exports = babelStarter
