const path = require('path');

module.exports = function () {
  const solutionPath = path.join(__dirname, '../templates/saas-weapp-child');
  const distFolder = this.props.name;

  this.fs.copy(
    this.templatePath(`${solutionPath}/src/**`),
    this.destinationPath(path.join(distFolder, 'src'))
  );

  [
    '.editorconfig',
    '.eslintignore',
    '.eslintrc',
    '.stylelintignore',
    '.stylelintrc',
    'abc.json',
    'app.config.ts',
    'commitlint.config.ts',
    'Jenkinsfile',
    'README.md',
    'tsconfig.json',
  ].forEach(filename => {
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