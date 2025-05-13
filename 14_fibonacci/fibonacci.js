const fibonacci = function(arg) {
    if(arg < 0) {
        return "OOPS"
    }

    if(typeof arg !== 'number'){
        arg = parseInt(arg)
    }

    if (arg === 0){
        return 0
    }

    const fib = [0, 1]
    for (let i = 2 ; i <= arg; i++){
      fib[i] = fib[i -1] + fib[i - 2]
    }
  return fib[arg]
};

// Do not edit below this line
module.exports = fibonacci;
