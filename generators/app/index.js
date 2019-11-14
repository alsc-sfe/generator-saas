'use strict';
const Generator = require('yeoman-generator');
const exec = require('child_process').exec;
const Ora = require('ora');

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
            name: "微应用",
            value: "saas-microapp"
          },
          {
            name: "小程序",
            value: "saas-domino"
          },
          {
            name: "H5",
            value: "saas-h5"
          },
          {
            name: "插件",
            value: "saas-plugin"
          },
          {
            name: "SAAS 小程序",
            value: "saas-mini-program"
          },
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
    // to do 小程序solution 需要在安装结束额外定制install
    // 计划1期. 将node_modules中自定义内容复制到pages/components中
    // 计划2期. 增量更新等
    const solution = this.props.solution;
    const spinner = Ora('开始安装依赖模块').start()
    const ps = exec('npm i', {
      cwd: path.join(process.cwd(), distFolder),
    }, (err) => {
      spinner.stop();
      if (err) {
        console.error(`依赖模块安装失败: ${err}`);
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
