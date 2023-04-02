const checkExtension = (fileName) => {
  const EXTENSIONS = ["js", "json", "txt", "html", "css", "xml"];

  const extension = fileName.slice(fileName.lastIndexOf(".") + 1);
  const result = EXTENSIONS.includes(extension);

  return { extension, result };
};

module.exports = checkExtension;
