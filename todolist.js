const newlistUL = document.querySelector("ul");

const buttonTag = document.querySelector("button");

buttonTag.addEventListener("click", function () {
  console.log(inputTag.value);
  const newLi = document.createElement("li");
  newLi.innerText = inputTag.value;
  newlistUL.appendChild(newLi);
  inputTag.value = "";
});

const inputTag = document.querySelector("input");
