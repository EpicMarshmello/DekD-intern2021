window.onload = () => {
  console.log("page loaded");
};

function checker() {
  for (let i = 1; i < 5; i++) {
    document.getElementById("radioNav" + i).style.background = "none";
  }
  var checkRadio = document.querySelector('input[name="radio-btn"]:checked');
  document.getElementById("radioNav" + checkRadio.value).style.background =
    "pink";
}

checker();
