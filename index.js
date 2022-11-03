const mainContainer = document.querySelector("main");
const thankYouContainer = document.querySelector(".thankYou");
const submitBtn = document.querySelector("#submit");
const buttons = document.querySelectorAll(".numBtn");

submitBtn.onclick = function () {
    thankYouContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        let value = this.innerHTML;
        document.querySelector(".rating").innerHTML = value;
    }
}
