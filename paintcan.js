const PaintCan = function (litres) {
  this.litres = litres;
};

PaintCan.prototype.isEmpty = function(){
  if (PaintCan.litres === 0);
  {
    return console.log ('Can is empty');
  }
};

PaintCan.prototype.makeItEmpty = function(){
  PaintCan.litres = 0;
}

module.exports = PaintCan;
