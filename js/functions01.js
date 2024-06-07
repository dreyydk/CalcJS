export { charSet, clear };

function charSet(charKeyBtn) {
  const input = document.getElementById("input");
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
}

function clear() {
  const input = document.getElementById("input");
  input.value = "";
  input.focus();
}
