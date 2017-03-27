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

  var colorArray = [];

  if (swatches.Vibrant){
    colorVibrant = swatches.Vibrant.getHex();
    document.getElementById("swatch1").style["background-color"] = colorVibrant;
    document.getElementById("swatch1").style["color"] = swatches.Vibrant.getTitleTextColor();
    colorArray.push(colorVibrant);
  };

  if (swatches.Muted){
    colorMuted = swatches.Muted.getHex(); 
    document.getElementById("swatch2").style["background-color"] = colorMuted;
    document.getElementById("swatch2").style["color"] = swatches.Muted.getTitleTextColor();
    colorArray.push(colorMuted);
  };

  if (swatches.DarkVibrant){
    colorDarkVibrant = swatches.DarkVibrant.getHex();
    document.getElementById("swatch3").style["background-color"] = colorDarkVibrant;
    document.getElementById("swatch3").style["color"] = swatches.DarkVibrant.getTitleTextColor();
    colorArray.push(colorDarkVibrant);
  }

  if (swatches.DarkMuted){
    colorDarkMuted = swatches.DarkMuted.getHex();
    document.getElementById("swatch4").style["background-color"] = colorDarkMuted;
    document.getElementById("swatch4").style["color"] = swatches.DarkMuted.getTitleTextColor();
    colorArray.push(colorDarkMuted);
  }

  if (swatches.LightVibrant){
    colorLightVibrant = swatches.LightVibrant.getHex();
    document.getElementById("swatch5").style["background-color"] = colorLightVibrant;
    document.getElementById("swatch5").style["color"] = swatches.LightVibrant.getTitleTextColor();
    colorArray.push(colorLightVibrant);
  }

  if (swatches.LightMuted){
    colorLightMuted = swatches.LightMuted.getHex();
    document.getElementById("swatch6").style["background-color"] = colorLightMuted;
    document.getElementById("swatch6").style["color"] = swatches.LightMuted.getTitleTextColor();
    colorArray.push(colorLightMuted);
  };

  document.getElementById("color_array").value = colorArray;
});


// http post colors