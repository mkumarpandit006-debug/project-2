function addBook() {
  let input = document.getElementById("bookInput");
  let bookName = input.value;

  if (bookName === "") {
    alert("Enter book name");
    return;
  }

  let li = document.createElement("li");
  li.textContent = bookName;

  let btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("bookList").appendChild(li);

  input.value = "";
}
