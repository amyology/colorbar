var userimg = document.createElement('img'),
    dropbox = document.getElementById('dropbox'),
    imagebox = document.getElementById("imagebox"),
    imgtarget = document.getElementById("image");

dropbox.addEventListener('dragover', function(imageFile) {
  imageFile.stopPropagation();
  imageFile.preventDefault();
  imageFile.dataTransfer.dropEffect = 'copy';
});

dropbox.addEventListener('drop', function(imageFile) {
  imgtarget.src = "";
  imageFile.stopPropagation();
  imageFile.preventDefault();
  var userfile = imageFile.dataTransfer.files[0];
  if (userfile.type.match(/image.*/)) {
    var reader = new FileReader();
    reader.onload = function(image) {
      userimg.setAttribute('src', image.target.result);
    };
    reader.readAsDataURL(userfile);
  };
});

userimg.addEventListener('load', function() {
  imagebox.innerHTML = '<img width="50%" src="' + userimg.src +'" />';
  populate(userimg); 
});

document.getElementById("imguploader").onchange = function () {
  imagebox.innerHTML = "";
  var reader = new FileReader();
  reader.onload = function(event) {
    imgtarget.src = event.target.result;
  };
  reader.readAsDataURL(this.files[0]);
};

imgtarget.addEventListener('load', function() {
  populate(imgtarget);
});

function populate(source){
  var vibrant = new Vibrant(source),
      swatches = vibrant.swatches(),
      colorArray = [];

  if (swatches.Vibrant){
    var color = swatches.Vibrant.getHex(),
        el = document.getElementById("swatch0");
    el.style["background-color"] = color;
    el.style["color"] = swatches.Vibrant.getTitleTextColor();
    el.innerHTML = color;
    colorArray.push(color);
  };

  if (swatches.Muted){
    var color = swatches.Muted.getHex(),
        el = document.getElementById("swatch1");
    el.style["background-color"] = color;
    el.style["color"] = swatches.Muted.getTitleTextColor();
    el.innerHTML = color;
    colorArray.push(color);
  };

  if (swatches.DarkVibrant){
    var color = swatches.DarkVibrant.getHex(),
        el = document.getElementById("swatch2");
    el.style["background-color"] = color;
    el.style["color"] = swatches.DarkVibrant.getTitleTextColor();
    el.innerHTML = color;
    colorArray.push(color);
  };

  if (swatches.DarkMuted){
    var color = swatches.DarkMuted.getHex(),
        el = document.getElementById("swatch3");
    el.style["background-color"] = color;
    el.style["color"] = swatches.DarkMuted.getTitleTextColor();
    el.innerHTML = color;
    colorArray.push(color);
  };

  if (swatches.LightVibrant){
    var color = swatches.LightVibrant.getHex(),
        el = document.getElementById("swatch4");
    el.style["background-color"] = color;
    el.style["color"] = swatches.LightVibrant.getTitleTextColor();
    el.innerHTML = color;
    colorArray.push(color);
  };

  document.getElementById("color_array").value = colorArray;
}
