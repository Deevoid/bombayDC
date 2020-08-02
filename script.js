function toTop() {
  window.scrollTo(0, 0);
}

let send = document.querySelector("#send");
let closebtn = document.querySelector("#close");
let form = document.querySelector(".form_div");
let formContainer = document.querySelector(".form-zero");
let newForm = form.cloneNode(true);
send.href = "#form";
function handleSend() {
  formContainer.style.display = "block";
  formContainer.appendChild(newForm);
  document.body.style.overflowY = "hidden";
}
send.addEventListener("click", handleSend);
function close() {
  formContainer.style.display = "none";
  formContainer.removeChild(newForm);
  document.body.style.overflowY = "scroll";
}
closebtn.addEventListener("click", close);

function setSelect() {
  let projectSelect = document.querySelector("#project");
  projectSelect.style.display = "block";
}
