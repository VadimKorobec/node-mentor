const fs = require("fs").promises;
const path = require("path");
const chalk = require("chalk");

const dataValidate = require("./helpers/data-validation");
const checkExtension = require("./helpers/check-extension");

const createFile = (fileName, content) => {
  const data = {
    fileName,
    content,
  };

  const { error } = dataValidate(data);
  if (error) {
    console.log(
      chalk.red(`Please specify ${error.details[0].context.key} parametr `)
    );
  }
  const { extension, result } = checkExtension(fileName);
  if (!result) {
    console.log(
      chalk.red(`Application doesn't support files with${extension} extension `)
    );
  }

  const filePatch = path.join(__dirname + "/files", fileName);
  fs.writeFile(filePatch, content, "utf-8");
  console.log(chalk.blue("file create succssesful"));
};

module.exports = { createFile };
