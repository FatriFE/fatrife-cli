#!/usr/bin/env node
/**
 * Created by starlee on 2020/06/15.
 */
const program = require('commander')
const UI = require('../lib/ui')
const download = require('download-git-repo')
const path = require('path')
const Component = require('../lib/Component')

const dotEnv = require('dotenv')

program
    .version(require('../package.json').version)
    .name('fatrife')
    .usage('[options]')

program
    .command('new <component>')
    .description('create a component from git repo or local module')
    .option('-i --i18n', 'insert i18n construct with yaml', false)
    .option('-p, --preset <presetName>', 'Skip prompts and use saved or remote preset')
    .option('-d, --default', 'Skip prompts and use default preset')
    .option('-m, --packageManager <command>', 'Use specified npm client when installing dependencies')
    .option('-r, --registry <url>', 'Use specified npm registry when installing dependencies (only for npm)')
    .option('-g, --git [message]', 'Force git initialization with initial commit message')
    .option('-n, --no-git', 'Skip git initialization')
    .option('-f, --force', 'Overwrite target directory if it exists')
    .option('--merge', 'Merge target directory if it exists')
    .option('-c, --clone', 'Use git clone when fetching remote preset')
    .option('-x, --proxy', 'Use specified proxy when creating project')
    .option('-b, --bare', 'Scaffold project without beginner instructions')
    .option('--skipGetStarted', 'Skip displaying "Get started" instructions')
    .action((name, cmd) => {
        console.log('pull action ===', name, cleanArgs(cmd))
        // new Component({name, i18n: cmd.i18n})
    })

program
    .command('ui')
    .description('insert a iframe document in public/index.html')
    .action((name, cmd) => {
        console.log(process.argv)
        UI()
    })

program
    .description('set mode')
    .option('-m, --mode <env>', 'set config from .env.xx', '')
    .action(name => {
        dotEnv.config({path: path.resolve(process.cwd(), `.env${name.mode ? `.${name.mode}` : ''}`)})
        console.log('mode cmd', process.env)
    })

program.parse(process.argv)


function cleanArgs(cmd) {
    const args = {}
    cmd.options.forEach(o => {
        const key = o.long.replace(/^--/, '')
        if(typeof cmd[key] !== 'undefined' && typeof cmd[key] !== 'function') {
            args[key] = cmd[key]
        }
    })

    return args
}

