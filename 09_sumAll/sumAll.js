const sumAll = function(a, b) {
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"
        
    }else if(b > a){
        let result = 0;
        let array = []
        const limit = b - a
        for(let i = 1; i <= limit ; i++){
            array[0] = a
            array[i] = a + i
        }
        for (let i = 0; i < array.length; i++){
          result = result + array[i];
        }
        
        return result

    } else {
        let result = 0;
        let array = []
        const limit = a - b
        for(let i = 1; i <= limit ; i++){
            array[0] = b
            array[i] = b + i
        }
        for (let i = 0; i < array.length; i++){
          result = result + array[i];
        }
        
        return result
    }

};


// Do not edit below this line
module.exports = sumAll;
