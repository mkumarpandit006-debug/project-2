// check login
if (localStorage.getItem("login") !== "true") {
  window.location.href = "login.html";
}

// load books
let books = JSON.parse(localStorage.getItem("books")) || [];

function showBooks() {
  let list = document.getElementById("bookList");
  list.innerHTML = "";

  books.forEach((book, index) => {
    let li = document.createElement("li");
    li.textContent = book;

    let btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.onclick = function () {
      books.splice(index, 1);
      localStorage.setItem("books", JSON.stringify(books));
      showBooks();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

showBooks();

// add book
function addBook() {
  let input = document.getElementById("bookInput");
  let bookName = input.value;

  if (bookName === "") return alert("Enter book");

  books.push(bookName);
  localStorage.setItem("books", JSON.stringify(books));

  input.value = "";
  showBooks();
}

// search
function searchBook() {
  let value = document.getElementById("search").value.toLowerCase();
  let items = document.querySelectorAll("li");

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
