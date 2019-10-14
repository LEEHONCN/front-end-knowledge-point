function TransTimer(timestamp){
  this.timestamp = timestamp;
  this.timeObj = {
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minutes: 1000 * 60,
    second: 1000
  };
  this.timeMax = {
    day: Infinity,
    hour: 24,
    minutes: 60,
    second: 60
  }
}

TransTimer.prototype.getResult = function() {
  Object.keys(this.timeObj).forEach(function(timeName){
    if (this.timestamp >= this.timeObj[timeName]) {
      var targetTime = this.timeObj[timeName];
      this.timeObj[timeName] = Math.floor(this.timestamp / targetTime);
      this.timestamp %= targetTime;
    }
  }.bind(this));
  return this.timeObj;
};

TransTimer.prototype.countDown = function(){
  var keys = Object.keys(this.timeObj).reverse();
  keys.forEach(function (timeName, index) {
    if (this.timeObj[timeName] > 0) {
      this.timeObj[timeName]--;
    } else {

    }
  }.bind(this));
};

TransTimer.prototype.makeSetFunc = function(timeName){
  var keys = Object.keys(this.timeObj).reverse();
  return function() {
    var value = arguments[0];
    if (value < 0){
      if (this.timeObj[timeName] + value < 0){
        this.timeObj[timeName] += value;
      } else {  // 借位
        keys[keys.indexOf(timeName) + 1];
      }

    } else if (value >= this.timeMax[timeName]) {

    } else if (0 < value || value < this.timeMax[timeName]){
      this.timeObj[timeName] = value;
    }

  }
};

TransTimer.prototype.setSecond = function() {

};
  
  