/**
 * Created by starlee on 2020/06/16.
 */
const fs = require('fs')
// insert bubble dom to  public/index.html
function insertBubble() {
    // 检查当前文件中是否存在 public/index.html 文件
    const index = fs.existsSync('public/index.html')
    console.log('index', index)
    if(index) {
        // 插入内容
        const bubbleHtml = `    <div class="bubble-container" style="width: 100px; height: 100px; background-color: aqua; border-radius: 50%; position: fixed; right: 20px; bottom: 20px">
    </div>
`
        try{
            const originIndexHtml = fs.readFileSync('public/index.html', 'utf-8')
            const isInserted = originIndexHtml.indexOf('bubble-container')
            if(isInserted<0) {
                const idx = originIndexHtml.replace('</body>', bubbleHtml + '</body>')
                fs.writeFileSync('public/index.html', idx)
            }else {
                console.log('已经存在 bubble dom')
            }
        }catch (e) {
            console.log(e)
        }

    }else {
        // 当前目录下不存在 public/index.html 文件
    }
}


function initUi() {
    insertBubble()
}

module.exports = initUi
