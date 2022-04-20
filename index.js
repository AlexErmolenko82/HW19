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
  
  
  
  calculator.set(10);
  console.log(calculator.add(2)); // 12
  console.log(calculator.sub(5)); // 7
  console.log(calculator.mult(4)); // 28
  console.log(calculator.div(2)); // 14