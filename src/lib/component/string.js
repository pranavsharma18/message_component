import React from "react";

exports.Class1 = function() {
  return {
    Message: function(name) {
      return name;
    },
    add: function(a, b) {
      return a + b;
    }
  };
};
