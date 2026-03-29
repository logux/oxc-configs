import { exec } from 'node:child_process'
import { join, sep } from 'node:path'
import { styleText } from 'node:util'

const JS_EXPECTED =
  'demo/a.js:5:1: Unexpected console statement. [Error/eslint(no-console)]\n' +
  'demo/a.js:7:1: Unexpected console statement. [Error/eslint(no-console)]'

const TS_EXPECTED =
  'demo/b.ts:1:15: Unexpected `any`. Specify a different type. ' +
  '[Error/typescript-eslint(no-explicit-any)]'

function oxlint(config, files) {
  let paths = files
    .split(' ')
    .map(i => join(import.meta.dirname, i))
    .join(' ')
  let configPath = join(import.meta.dirname, '..', config)
  let cmd = `pnpm oxlint --format unix --config ${configPath} ${paths}`
  process.stderr.write(
    styleText('gray', `${cmd.replaceAll(process.cwd() + sep, '')}\n`)
  )
  return new Promise(resolve => {
    exec(cmd, (_, stdout, stderr) => {
      let output = (stderr || stdout).replace(/\n\n\d+ problems?$/m, '').trim()
      resolve(output)
    })
  })
}

function check(actual, expected) {
  if (actual !== expected) {
    process.stderr.write(styleText('red', 'Expected:\n'))
    process.stderr.write(expected + '\n\n')
    process.stderr.write(styleText('red', 'Actual:\n'))
    process.stderr.write(actual + '\n')
    process.exit(1)
  }
}

check(await oxlint('demo/config.ts', 'a.js'), JS_EXPECTED)
check(await oxlint('demo/config.ts', 'b.ts'), TS_EXPECTED)
