function Machine(power) {
  this._power = power;
  this._enabled = false;
  var self = this;
  this.enable = function() { 
    self._enabled = true; 
  };
  this.disable = function() { 
    self._enabled = false; 
  };
}

function Fridge() {
  Machine.apply(this, arguments);
    //array food
    var _food = [];
    //add food
    this.addFood = function() { 
      var args = Array.prototype.slice.call(arguments, 0);
      if (this._enabled){
        for (var i=0; i< args.length; i++){
          if (_food.length <=this._power){
            _food.push(args[i])
          } else {
            console.warn('Fridge is full');
            return  
          }
        }
      } else {
        console.error('impossible to add food items');
        return
      } 

    };
  //get food
    this.getFood = function(){
      return _food.slice(0);
    }
}