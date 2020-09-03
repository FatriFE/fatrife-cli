const div = document.createElement('div')
div.style.position = 'fixed'
div.style.right = '0'
div.style.bottom = '0'
div.style.width = '100px'
div.style.height = '100px'
div.style.backgroundColor = 'red'

document.body.appendChild(div)

div.addEventListener('click', () => {
  const buddleModel = document.getElementById('bundleModel')
  if(!buddleModel) createBuddleMode()
  else document.body.removeChild(buddleModel)
})

function createBuddleMode() {
  const buddleModel = document.createElement('div')
  buddleModel.id = 'bundleModel'
  buddleModel.style.position = 'fixed'
  buddleModel.style.width = '80%'
  buddleModel.style.height = '80%'
  buddleModel.style.top = '10%'
  buddleModel.style.left = '10%'
  buddleModel.style.zIndex = 1000
  buddleModel.style.border = '1px solid rgb(0,0,0)'
  buddleModel.innerHTML = `
    <header style="display: flex;justify-content: space-between;padding: 10px;background-color: darkslateblue;">
      <h3>FATRI UI</h3>
      <a>进入完整版</a>
    </header>
    <iframe width="100%" height="100%" src="http://localhost:3000" frameborder="0"></iframe>
  `
  document.body.appendChild(buddleModel)
}
