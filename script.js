let addBtn = document.querySelector("#addBtn");
let addBtnPopupCont = document.querySelector(".addBtnPopupCont");
let submit = document.querySelector("#submit");
let addBtnflag = false;
addBtn.addEventListener("click", () => {
  if (addBtnflag == false) {
    addBtnflag = true;
    addBtnPopupCont.style.display = "flex";
  } else {
    addBtnflag = false;
    addBtnPopupCont.style.display = "none";
  }
});

// let submitflag = false;
submit.addEventListener("click", () => {
  //   if (submitflag == false) {
  //     submitflag = true;
  //     addBtnPopupCont.style.display = "none";
  //   } else {
  //     submitflag = false;
  //   }
  addBtnPopupCont.style.display = "none";
});















function Book(t, a, p) { 
    this.title = t;
    this.author = a;
    this.pages = p;
}
let book1 = new Book("John", 12, "VI"); 
let book2 = new Book("David", 17, "VII");



