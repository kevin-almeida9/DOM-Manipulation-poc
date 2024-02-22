function menu() {
  const menu = document.querySelector(".btn-group-vertical");
  menu.style.textWrap = "nowrap";
  menu.style.flexDirection = "row";
  menu.style.gap = ".25rem";

  const buttons = menu.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.style.borderRadius = "5px";
  });
}

function header() {
  const header = document.querySelector(".jumbotron");
  header.style.textAlign = "end";
  header.style.backgroundColor = "var(--gray)";
  header.style.color = "var(--white)";

  const button = header.querySelector(".btn");

  button.addEventListener("focus", function () {
    button.style.boxShadow = "0 0 0 0.2rem rgba(175, 250, 192, 0.5)";
  });

  button.addEventListener("blur", function () {
    button.style.boxShadow = "";
  });

  button.style.backgroundColor = "var(--green)";
  button.style.borderColor = "var(--green)";
}

function cards() {
  const rows = document.querySelectorAll(".row");
  const rowsArray = Array.from(rows);
  const cardRow = rowsArray.find(
    (row) => row.querySelectorAll(".col-lg-3").length
  );

  const childrenCards = Array.from(cardRow.children);
  const [header, animals, technology, people, nature] = childrenCards;

  childrenCards.forEach((child) => {
    cardRow.removeChild(child);
  });

  const animalsButton = animals.querySelector(".btn");
  animalsButton.style.backgroundColor = "var(--green)";
  animalsButton.style.borderColor = "var(--green)";
  animalsButton.addEventListener("focus", function () {
    animalsButton.style.boxShadow = "0 0 0 0.2rem rgba(175, 250, 192, 0.5)";
  });

  animalsButton.addEventListener("blur", function () {
    animalsButton.style.boxShadow = "";
  });

  [header, nature, animals, people, technology].forEach((child) => {
    cardRow.appendChild(child);
  });
}

function list() {
  const list = document.querySelector(".list-group");
  const [itemOne, itemTwo, ItemThree] = Array.from(list.children);

  itemOne.className = "list-group-item";

  const itemFour = itemTwo.cloneNode(true);
  itemFour.textContent = "Quarto item";
  itemFour.className = "list-group-item active";
  list.appendChild(itemFour);

  const itemFive = itemTwo.cloneNode(true);
  itemFive.textContent = "Quinto item";
  list.appendChild(itemFive);
}

menu();
header();
cards();
list();
