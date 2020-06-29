#!/usr/bin/env node
/**
 * Created by starlee on 2020/06/15.
 */
const program = require('commander')
const download = require('download-git-repo')
const fs = require('fs')
const chalk = require('chalk')

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
       
        // 下载远端的代码
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




program.parse(process.argv)


