function addToExpression(s) {
  document.getElementById("result").value += s;
}

function clearExpression() {
  document.getElementById("result").value = "";
}

function del() {
  let a = document.getElementById("result").value;
  let b = "";
  for (let i = 0; i < a.length - 1; i++) b += a[i];
  document.getElementById("result").value = b;
}

function evaluateExpression() {
  let exp = document.getElementById("result");
  try {
    exp.value = eval(exp.value);
  } catch (error) {
    exp.value = "Error";
  }
}
