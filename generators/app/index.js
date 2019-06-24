'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

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
            name: "Saas应用 - PC",
            value: "sass-pc"
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
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    console.log(JSON.stringify(this.props, null, 2));
    const solutionPath = path.join(__dirname, 'templates/pc');
    const distFolder = this.props.name;

    this.fs.copy(
      this.templatePath(`${solutionPath}/src/**`),
      this.destinationPath(path.join(distFolder, 'src'))
    );

    ['abc.json', '.eslintignore', '.eslintrc', '.gitignore', '.stylelintignore', '.stylelintrc', 'commitlint.config.js', 'saas.config.js', 'mobile.config.js', 'README.md'].forEach(filename => {
      this.fs.copy(
        this.templatePath(`${solutionPath}/${filename}`),
        this.destinationPath(path.join(distFolder, filename))
      );
    });

    // 单独处理_gitignore
    this.fs.copy(
      this.templatePath(`${solutionPath}/_gitignore`),
      this.destinationPath(path.join(distFolder, '.gitignore'))
    );

    ['package.json'].forEach(filename => {
      this.fs.copyTpl(
        this.templatePath(`${solutionPath}/${filename}`),
        this.destinationPath(path.join(distFolder, filename)),
        this.props
      );
    });
  }

  install() {
    // this.installDependencies();
  }
};
