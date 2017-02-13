var userimg = document.createElement('img');
var dropbox = document.getElementById('dropbox');

dropbox.addEventListener('dragover', function(imageFile) {
  imageFile.stopPropagation();
  imageFile.preventDefault();
  imageFile.dataTransfer.dropEffect = 'copy';
});

dropbox.addEventListener('drop', function(imageFile) {
  imageFile.stopPropagation();
  imageFile.preventDefault();
  var userfile = imageFile.dataTransfer.files[0];
  if (userfile.type.match(/image.*/)) {
    var reader = new FileReader();
    reader.onload = function(image) {
      userimg.setAttribute('src', image.target.result);
    }
    reader.readAsDataURL(userfile);
  }
});

userimg.addEventListener('load', function() {
  var vibrant = new Vibrant(userimg);
  var swatches = vibrant.swatches();

  document.getElementById("imagebox").innerHTML = '<img width="50%" src="' + userimg.src +'" />';

  colorVibrant = swatches.Vibrant.getHex();
  colorMuted = swatches.Muted.getHex();
  colorDarkVibrant = swatches.DarkVibrant.getHex();
  colorDarkMuted = swatches.DarkMuted.getHex();
  colorLightVibrant = swatches.LightVibrant.getHex();
  colorLightMuted = swatches.LightMuted.getHex();

  var colorArray = [colorVibrant, colorMuted, colorDarkVibrant, colorDarkMuted, colorLightVibrant, colorLightMuted];

  document.getElementById("color_array").value = colorArray;

  document.getElementById("swatch1").style["background-color"] = colorVibrant;
  document.getElementById("swatch1").style["color"] = swatches.Vibrant.getTitleTextColor();

  document.getElementById("swatch2").style["background-color"] = colorMuted;
  document.getElementById("swatch2").style["color"] = swatches.Muted.getTitleTextColor();

  document.getElementById("swatch3").style["background-color"] = colorDarkVibrant;
  document.getElementById("swatch3").style["color"] = swatches.DarkVibrant.getTitleTextColor();

  document.getElementById("swatch4").style["background-color"] = colorDarkMuted;
  document.getElementById("swatch4").style["color"] = swatches.DarkMuted.getTitleTextColor();

  document.getElementById("swatch5").style["background-color"] = colorLightVibrant;
  document.getElementById("swatch5").style["color"] = swatches.LightVibrant.getTitleTextColor();

  document.getElementById("swatch6").style["background-color"] = colorLightMuted;
  document.getElementById("swatch6").style["color"] = swatches.LightMuted.getTitleTextColor();

});


// http post colors