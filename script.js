let addBtn = document.querySelector("#addBtn");
let addBtnPopupCont = document.querySelector(".addBtnPopupCont");
let submit = document.querySelector("#submit");
let titleInp = document.querySelector("#titleInp");
let authorInp = document.querySelector("#authorInp");
let pagesInp = document.querySelector("#pagesInp");
let readstatusInp = document.querySelector("#readstatusInp");
let library = document.querySelector(".library");
let body = document.querySelector("body");
let readstatusbtn = document.querySelector(".readstatusbtn");
let removebtn = document.querySelector(".removebtn");
let bookCont = document.querySelector(".bookCont");

const myLibrary = [];

function Book(t, a, p, r) {
  this.title = t;
  this.author = a;
  this.pages = p;
  this.readStatus = r;
}

function addBookToLibrary(t, a, p, r) {
  let book = new Book(t, a, p, r);
  myLibrary.push(book);
}
addBookToLibrary("Harry Potter", "JK Rowlings", 500, false);
addBookToLibrary("abhay", "Nikhil", 800, true);

function funcThatLoops() {
  library.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].title;
    myLibrary[i].author;
    myLibrary[i].pages;
    myLibrary[i].readStatus;
    console.log(i);
    console.log(myLibrary[i].title);
    console.log(myLibrary[i].author);
    console.log(myLibrary[i].pages);
    console.log(myLibrary[i].readStatus);
    displayBookToLibrary(
      myLibrary[i].title,
      myLibrary[i].author,
      myLibrary[i].pages,
      myLibrary[i].readStatus,
      i
    );
  }
}
funcThatLoops();

function displayBookToLibrary(t, a, p, r, iD) {
  let bookContainer = document.createElement("div");
  let bookName = document.createElement("div");
  let authorName = document.createElement("div");
  let bookPages = document.createElement("div");
  let readstatusbtnCont = document.createElement("div");
  let removebtnCont = document.createElement("div");
  let readstatusBtn = document.createElement("div");
  let removeBtn = document.createElement("div");
  bookContainer.classList = "bookCont";
  bookName.classList = "bookname";
  authorName.classList = "authorname";
  bookPages.classList = "bookpages";
  readstatusBtn.classList = "readstatusbtn";
  removeBtn.classList = "removebtn";
  readstatusBtn.innerHTML = "Read";
  removeBtn.innerHTML = "Remove";
  bookName.innerHTML = t;
  authorName.innerHTML = a;
  bookPages.innerHTML = p;
  readstatusBtn.value = r;
  bookContainer.append(bookName);
  bookContainer.append(authorName);
  bookContainer.append(bookPages);
  bookContainer.append(readstatusbtnCont);
  readstatusbtnCont.append(readstatusBtn);
  bookContainer.append(removebtnCont);
  removebtnCont.append(removeBtn);
  library.append(bookContainer);

  removeBtn.addEventListener("click", () => {
    myLibrary.splice(iD, 1);
    funcThatLoops();
  });

  if (readstatusInp.checked == true) {
    readstatusBtn.style.background = "#82e982";
  } else {
    readstatusBtn.style.background = "#ff5452";
  }

  let readstatusBtnflag = false;
  readstatusBtn.addEventListener("click", () => {
    if (readstatusBtnflag == false) {
      readstatusBtnflag = true;
      readstatusBtn.innerHTML = "Read";
      readstatusBtn.style.background = "#82e982";
      readstatusInp.checked == true;
    } else {
      readstatusBtnflag = false;
      readstatusBtn.innerHTML = "Not Read";
      readstatusBtn.style.background = "#ff5452";
      readstatusInp.checked == false;
    }
  });
}

let addBtnflag = false;
addBtn.addEventListener("click", () => {
  if (addBtnflag) {
    addBtnflag = false;
    addBtnPopupCont.style.display = "none";
  } else {
    addBtnflag = true;
    addBtnPopupCont.style.display = "flex";
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(
    titleInp.value,
    authorInp.value,
    pagesInp.value,
    readstatusInp.checked
  );

  funcThatLoops();
  console.log(myLibrary);
  addBtnflag = false;
  addBtnPopupCont.style.display = "none";
});
