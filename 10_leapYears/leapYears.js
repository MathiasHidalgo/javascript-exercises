const leapYears = function(year) {
    if(year % 100 == 0){
      let subtract = year / 4
      subtract  = subtract / 4
      if(subtract % 4 == 0) {
        return true
      }else {
        return false
      }
    }else if(year % 4 == 0){
      return true;
    }else {
      return false
    }
  };
// Do not edit below this line
module.exports = leapYears;
