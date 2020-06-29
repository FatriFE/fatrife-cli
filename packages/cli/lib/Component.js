/**
 * Created by starlee on 2020/06/18.
 */
const Handlebars = require('handlebars')
const path = require('path')
const fs = require('fs')

const baseTemplate = `<template>
    <div>{{name}}</div>
</template>
<script>
    export default {
        name: '{{name}}',
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped></style>
`

const i18nTemplate = `<i18n>
    en:
       name: 'Name'
    zh-CN:
       name: '名称' 
</i18n>
`

class Component {
    constructor(props) {
        this.i18n = props.i18n || false
        this.name = props.name
        this.template = this.generatorTemplate()
        this.generatorFile()
    }

    generatorTemplate() {
        const result = Handlebars.compile(baseTemplate)({name: this.name})
        return this.i18n ? i18nTemplate + result : result
    }

    generatorFile() {
        fs.writeFile( path.resolve(process.cwd(), `src/pages/${this.name}.vue`), this.template,'utf-8', err => {
            if(err) {
                console.log('err', err)
            }
        })
    }
}

module.exports = Component
