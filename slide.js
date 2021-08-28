window.onload = () => {
  console.log("page loaded");
};

var checkRadio = document.querySelector('input[name="radio-btn"]:checked');

function checker() {
  for (let i = 1; i < 5; i++) {
    document.getElementById("radioNav" + i).style.background = "none";
  }
  // checkRadio = document.querySelector('input[name="radio-btn"]:checked');
  document.getElementById("radioNav" + checkRadio.value).style.background =
    "pink";
}

checker();

function changeImg(n) {}
