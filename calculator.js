const calculator = {
    result: 0,
    set: function(arg) {
      return this.result = arg;
    },
    add: function(arg) {
      return this.result += arg;
    },
    sub: function(arg) {
      return this.result -= arg;
    },
    div: function(arg) {
      return this.result /= arg;
    },
    mult: function(arg) {
      return this.result *= arg;
    },
  }

  module.exports = calculator;
