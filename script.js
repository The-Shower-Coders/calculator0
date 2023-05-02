let input = document.getElementById("sonuc");
let buttons = Array.from(document.getElementsByTagName("button"));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    if (buttonText === "=") {
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Hata";
      }
    } else if (buttonText === "C") {
      input.value = "";
    } else {
      input.value += buttonText;
    }
  });
});
