const ServerSideCalculatorPageObjects = require("./serverSideCalculatorObjects");

module.exports = (page) => {
  return {
    ServerSideCalculatorPageObjects: new ServerSideCalculatorPageObjects(page),
  };
};
