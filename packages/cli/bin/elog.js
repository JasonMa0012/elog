#! /usr/bin/env node
import { run } from '../dist'
run().catch(() => {
  process.exit(1)
})
