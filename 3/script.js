function factorial(n) {
  return n>1 ? n * factorial(n-1) : 1;
}

function lotto(total, drawn){
  return factorial(total) / (factorial(drawn) * factorial(total - drawn));
}
