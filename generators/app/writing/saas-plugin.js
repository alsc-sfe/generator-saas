const path = require('path');

module.exports = function () {
  const solutionPath = path.join(__dirname, '../templates/saas-plugin');
  const distFolder = this.props.name;

  this.fs.copy(
    this.templatePath(`${solutionPath}/src/**`),
    this.destinationPath(path.join(distFolder, 'src'))
  );

  ['.babelrc', '.eslintignore', '.eslintrc', '.stylelintignore', '.stylelintrc', 'index.d.ts', 'README.md'].forEach(filename => {
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