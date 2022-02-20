const checkboxArr = document.querySelectorAll(
  'input[name="accordion-menu_item"]'
);

for (let el of checkboxArr) {
  el.addEventListener("change", () => {
    checkboxArr.forEach((checkbox) => {
      if (checkbox.id !== el.id) checkbox.checked = false;
    });
  });
}
