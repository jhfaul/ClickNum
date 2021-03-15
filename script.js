var colors = ["orange", "red", "yellow"];

function boxes(colors) {
  var that = this;
  this.counter = 0;
  this.ele = document.createElement("div");
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  this.ele.style.display = "flex";
  this.ele.style.alignItems = "center";
  this.ele.style.justifyContent = "center";
  this.ele.style.textAlign = "center";
  this.ele.style.fontSize = "18px";
  this.ele.style.borderRadius = "10px";
  this.ele.style.backgroundColor = colors;
  this.ele.addEventListener("click", function(){
    that.increment();
  });
  this.ele.innerHTML = this.counter;
  document.body.appendChild(this.ele);
}

boxes.prototype.increment = function(){
  this.counter = this.counter + 1;
  this.ele.innerHTML = this.counter;
}

for (var i=0; i<colors.length; i++){
  var box = new boxes(colors[i]);
}