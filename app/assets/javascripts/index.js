var userimg = document.createElement('img');
var dropbox = document.getElementById('dropbox');
var imagebox = document.getElementById("imagebox");
var imagetarget = document.getElementById("image");

dropbox.addEventListener('dragover', function(imageFile) {
  imageFile.stopPropagation();
  imageFile.preventDefault();
  imageFile.dataTransfer.dropEffect = 'copy';
});

dropbox.addEventListener('drop', function(imageFile) {
  imagetarget.src = "";

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

document.getElementById("imguploader").onchange = function () {
  imagebox.innerHTML = "";

  var reader = new FileReader();

  reader.onload = function (event) {
    imagetarget.src = event.target.result;
  };

  reader.readAsDataURL(this.files[0]);
};

userimg.addEventListener('load', function() {
  var vibrant = new Vibrant(userimg);
  var swatches = vibrant.swatches();

  imagebox.innerHTML = '<img width="50%" src="' + userimg.src +'" />';

  var colorArray = [];

  if (swatches.Vibrant){
    colorVibrant = swatches.Vibrant.getHex();
    document.getElementById("swatch0").style["background-color"] = colorVibrant;
    colorArray.push(colorVibrant);
  };

  if (swatches.Muted){
    colorMuted = swatches.Muted.getHex(); 
    document.getElementById("swatch1").style["background-color"] = colorMuted;
    colorArray.push(colorMuted);
  };

  if (swatches.DarkVibrant){
    colorDarkVibrant = swatches.DarkVibrant.getHex();
    document.getElementById("swatch2").style["background-color"] = colorDarkVibrant;
    colorArray.push(colorDarkVibrant);
  };

  if (swatches.DarkMuted){
    colorDarkMuted = swatches.DarkMuted.getHex();
    document.getElementById("swatch3").style["background-color"] = colorDarkMuted;
    colorArray.push(colorDarkMuted);
  };

  if (swatches.LightVibrant){
    colorLightVibrant = swatches.LightVibrant.getHex();
    document.getElementById("swatch4").style["background-color"] = colorLightVibrant;
    colorArray.push(colorLightVibrant);
  };

  // if (swatches.LightMuted){
  //   colorLightMuted = swatches.LightMuted.getHex();
  //   document.getElementById("swatch5").style["background-color"] = colorLightMuted;
  //   colorArray.push(colorLightMuted);
  // };

  document.getElementById("color_array").value = colorArray;
  // console.log(colorArray);
});
