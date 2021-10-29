var imgNow = 1;
dotUpdate(1);

function changeImg(direction) {
  if (direction == 0) {
    imgNow--;
    if (imgNow < 1) {
      imgNow = 5;
    }
  }

  if (direction == 1) {
    imgNow++;
    if (imgNow > 5) {
      imgNow = 1;
    }
  }

  var imgShow = document.getElementById("img-show");
  imgShow.src = "img/img" + imgNow + ".jpg";

  dotUpdate(imgNow);
}

function toImg(num) {
  var imgShow = document.getElementById("img-show");
  imgShow.src = "img/img" + num + ".jpg";

  dotUpdate(num);
}

function dotUpdate(current) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById("dot" + i).style.backgroundColor = "silver";
  }
  var currentDot = document.getElementById("dot" + current);
  currentDot.style.backgroundColor = "gray";
}
