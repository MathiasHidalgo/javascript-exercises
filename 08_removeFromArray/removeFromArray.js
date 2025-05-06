const removeFromArray = function(array, ...args) {
    let newArr = [];
    array.forEach(element => {
        if(!args.includes(element)){
            newArr.push(element)
        }
    });

    // If there is just one argument 
  return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
