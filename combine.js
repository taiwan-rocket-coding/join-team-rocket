const jsonConcat = require("json-concat");
const fs = require("fs");

jsonConcat(
  {
    src: "./jsonFiles",
    dest: "./public/all.json",
  },
  function () {
    return;
  }
);
