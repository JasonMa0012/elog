#! /usr/bin/env node
const { run } = require('../dist/index.js')
run().catch(() => {
  process.exit(1)
})
