'use strict';
const Generator = require('yeoman-generator');
const exec = require('child_process').exec;

module.exports = class extends Generator {

  // 命令行交互选择项
  prompting() {
    this.log(`欢迎使用sass套件`);

    const prompts = [{
        type: 'list',
        name: 'solution',
        message: 'Please select sass application solution',
        choices: [
          {
            name: "Saas多页应用-pc",
            value: "saas-pc"
          },
          {
            name: "Saas微前端应用-pc",
            value: "saas-pc-spa"
          },
          {
            name: "Saas插件",
            value: "saas-plugin"
          }
        ]
      }, {
        type: 'input',
        name: 'name',
        message: '应用名称',
      }, {
        type: 'input',
        name: 'description',
        message: '应用描述',
      }, {
        type: 'input',
        name: 'author',
        message: '应用开发者',
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    console.log(this.props);
    require(`./writing/${this.props.solution}.js`).bind(this)();
  }

  install() {
    const distFolder = this.props.name;
    const ps = exec('tnpm ii', {
      cwd: path.join(process.cwd(), distFolder),
    }, (err) => {
      if (err) {
        console.error(`依赖模块安装失败: ${error}`);
        return;
      } else {
        console.log('依赖模块安装成功');
      }
    });
    ps.stdout.on('data', (data) => {
      console.log(data);
    });
  }
};
