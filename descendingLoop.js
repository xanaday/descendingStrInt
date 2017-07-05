function minusTen(){
  var descendingTriangle = [],

  i, j = 10;

  for (i = j - 1; i >= 0; i--) {
    descendingTriangle[i] = new Array(i + 2).join(" * ");
    console.log(descendingTriangle[i]);
  }
}

minusTen();
