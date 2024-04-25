var imageQueue = [];  
window.onload = function() {
  var initialImages = document.querySelectorAll(".cactus-image");
  initialImages.forEach(function(image) {
    image.style.display = "none";
  });
};
document.body.onkeydown = function(keypress_event) {
  var key = keypress_event.key;
  var randomIndex = Math.floor(Math.random() * 10) + 1;
  var new_image = document.createElement("img");
  new_image.src = "assets/" + randomIndex + ".gif";
  new_image.alt = "cactus blooming";
  var images_div = document.getElementById("images");
  images_div.insertBefore(new_image, images_div.firstChild);
  imageQueue.unshift(new_image);
  if (imageQueue.length > 10) {
    images_div.removeChild(imageQueue.pop());
  }
  images_div.style.display = "block";
};
