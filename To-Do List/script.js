items = [];
let spanStart = '<span onclick="deleteItem(';
let spanEnd = ')">❌</span>';
function addItem() {
  let newItem = document.getElementById("item").value;
  if (newItem == "") {
    alert("List element can not be empty!");
  } else {
    items.push("<li>" + newItem);
    let html = "<ol>";
    for (let i = 0; i < items.length; i++) {
      html += items[i] + spanStart + i + spanEnd + "</li>";
    }
    html += "</ol>";
    document.getElementById("list").innerHTML = html;
    document.getElementsByClassName("deleteButton")[0].style.display = "block";
    document.getElementById("item").value = "";
  }
}
function deleteItem(index) {
  items.splice(index, 1);
  let html = "<ol>";
  for (let i = 0; i < items.length; i++) {
    html += items[i] + spanStart + i + spanEnd + "</li>";
  }
  html += "</ol>";
  document.getElementById("list").innerHTML = html;
}

function deleteAll() {
  items = [];
  document.getElementById("list").innerHTML = "";
  document.getElementsByClassName("deleteButton")[0].style.display = "none";
}
