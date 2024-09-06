const fs = require('fs')
const chalk = require('chalk')
const root = __dirname + '/..'
main()
function main() {
  const totalFiles = nestFiles(root + '/src/components')
  if (totalFiles === 0) {
    console.log(chalk.yellow('Done!没有生成任何*.d.ts文件'))
  } else {
    console.log(chalk.green(`Done!总共生成${totalFiles}个*.d.ts文件`))
  }
  return process.exit()
}

function nestFiles(path) {
  let totalGen = 0
  const dirs = fs.readdirSync(path)
  if (dirs && dirs.length) {
    dirs.forEach((dir) => {
      const nextPath = `${path}/${dir}`
      const dirInfo = fs.statSync(nextPath)
      if (dirInfo.isFile()) {
        if (/[^\\/\\.]+\.comp\.vue/.test(nextPath)) {
          const name = /[^\\/\\.]+(?=\.comp\.vue)/.exec(nextPath)?.[0]
          const typePath = path + '/' + name + '.d.ts'

          if (!fs.existsSync(typePath)) {
            const paths = path.split('/')
            let key = paths[paths.length - 1]
            const content = fs.readFileSync(nextPath).toString()
            const exeResult = /(?<=export\s+default\s+)(\{((?!<\/script>).)+\})/gms.exec(content)
            const match = exeResult?.[0]
            if (match) {
              try {
                const obj = eval('(' + match + ')')
                if (obj.name) {
                  key = obj.name
                }
              } catch (e) {
                console.log(chalk.red(e))
              }
            }
            fs.writeFileSync(
              typePath,
              `declare module "@vue/runtime-core" {\n  interface GlobalComponents {\n    "${key}": typeof import("./${name}.comp.vue").default;\n  }\n}\nexport {};\n`
            )
            totalGen++
            console.log(chalk.green(`生成了新文件<${typePath}>!`))
          } else {
            console.log(chalk.yellow(`文件<${typePath}>已经存在，跳过生成 !`))
          }
        }
      } else {
        totalGen += nestFiles(nextPath)
      }
    })
  }
  return totalGen
}
