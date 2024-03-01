const accordeonTriggers = document.querySelectorAll(".acordeon .trigger");

accordeonTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const accordeon = trigger.parentElement;
    const isOpen = accordeon.classList.contains("open");

    if (isOpen) {
      accordeon.classList.remove("open");
    } else {
      accordeon.classList.add("open");
    }
    console.log("click");
  });
});
