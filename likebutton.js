function clicks() {
  var element = document.getElementById("likes")
  var value = element.innerHTML;
  
  ++value;
  
  console.log(value)
  document.getElementById('likes').innerHTML = value;
}
