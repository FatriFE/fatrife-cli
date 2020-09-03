#!/usr/bin/env node
/**
 * Created by starlee on 2020/06/15.
 */
const program = require('commander')
const download = require('download-git-repo')
const fs = require('fs')
const chalk = require('chalk')
const inquirer = require('inquirer')

function exsitFile(file){
    return fs.existsSync(file)
}

const log = console.log

program
    .version(require('../package.json').version)
    .name('fatrife')
    .usage('[options]')


    /**
     * 根据项目脚手架快速生成项目目录
     */
program
    .command('create <project-name>')
    .description('create a front folder base on fatri-vue-framework')
    .action((name) => {
        log(chalk.green('开始初始化项目...'))
        if(exsitFile(name)) {
            return log(chalk.red("当前目录下已存在该项目名称的目录或文件"))
        }

        // inquirer
        //     .prompt([
        //         {
        //             type: 'confirm',
        //             name: 'toBeDelivered',
        //             message: 'Is this for delivery?',
        //             default: false
        //         },
        //         {
        //             type: 'input',
        //             name: 'phone',
        //             message: "What's your phone number?",
        //             validate: function(value) {
        //             var pass = value.match(
        //                 /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
        //             );
        //             if (pass) {
        //                 return true;
        //             }

        //             return 'Please enter a valid phone number';
        //             }
        //         },
        //         {
        //             type: 'list',
        //             name: 'size',
        //             message: 'What size do you need?',
        //             choices: ['Large', 'Medium', 'Small'],
        //             filter: function(val) {
        //               return val.toLowerCase();
        //             }
        //         },
        //     ])
        //     .then(answers => {
        //         console.log('answers', answers)
        //     })
        //     .catch(error => {
        //         console.log('answers', error)
        //     })


        //下载远端的代码
        download('FatriFE/fatri-vue-framework', name, err => {
            if(err) {
                log(chalk.red('项目初始化失败'))
            }else {
                log(chalk.green('项目初始化成功'))
                log(chalk.blue('安装依赖:'))
                log(chalk.blue(`cd ${name}  && yarn`))
                log(chalk.blue('本地开发:'))
                log(chalk.blue(`yarn start`))
            }
        })
    })


program
  .command('dev')
  .option('-m --mode <mode>', 'set dev mode')
  .description('open server base on local')
  .action((name, cmd) => {
    console.log('dev', name, cmd)
  })





program.parse(process.argv)


