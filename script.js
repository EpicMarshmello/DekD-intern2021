var imgNow = 1;
imgUpdate(1);

function changeImg(direction) {
  imgNow = (imgNow + direction) % 6;
  if (imgNow == 0) {
    if (direction == -1) {
      imgNow = 5;
    } else {
      imgNow = 1;
    }
  }

  imgUpdate(imgNow);
}

function toImg(num) {
  imgNow = num;
  imgUpdate(imgNow);
}

function imgUpdate(imgNow) {
  var imgShow = document.getElementById("img-show");
  imgShow.src = "img/img" + imgNow + ".jpg";
  for (let i = 1; i <= 5; i++) {
    document.getElementById("dot" + i).style.backgroundColor = "silver";
  }
  var currentDot = document.getElementById("dot" + imgNow);
  currentDot.style.backgroundColor = "gray";
}
