const Module = require('module')
const path = require('path')
const process = require('process')
const fs = require('fs')

const extensionModulesPath = path.dirname(__dirname) + '/extension/node_modules'

process.env['NODE_PATH'] = extensionModulesPath
process.env['JUNIT_REPORT_PATH'] = '../build/mocha.xml'
process.env['JUNIT_REPORT_STACK'] = 1

const errorCallback = function (err) {
  if (err) {
    return true
  }
}

// auto create .integration-credentials.js
const integrationTestCredentialFile = path.dirname(__dirname) + '/.integration-credentials.js'
fs.writeFile(integrationTestCredentialFile, 'module.exports = {\n' +
  '  shopName: \'***\',\n' +
  '  accessToken: \'***\'\n' +
  '}', {flag: 'wx'}, errorCallback)

Module._initPaths()
