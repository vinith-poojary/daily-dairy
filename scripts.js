function calculateSum() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  var sum = parseFloat(num1) + parseFloat(num2);

  document.getElementById("result").innerText = "Sum: " + sum;
  alert("the sum is correct")
}