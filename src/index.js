#!/usr/bin/env node

const program = require('commander')
const pkgJson = require('../package.json')
const compiler = require('./compile')

program.version(pkgJson.version)

// compile
program
  .command('babel <src>')
  .option('-d --out-dir <output>', 'output directory')
  .alias('b')
  .action(function (src, options) {
    compiler(src, options)
  })

program.parse(process.argv)
