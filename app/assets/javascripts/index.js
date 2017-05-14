var userimg = document.createElement('img');
var dropbox = document.getElementById('dropbox');
var imagebox = document.getElementById("imagebox");
var imgtarget = document.getElementById("image");

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
  var vibrant = new Vibrant(source);
  var swatches = vibrant.swatches();
  var colorArray = [];

  if (swatches.Vibrant){
    colorVibrant = swatches.Vibrant.getHex();
    document.getElementById("swatch0").style["background-color"] = colorVibrant;
    document.getElementById("swatch0").style["color"] = swatches.Vibrant.getTitleTextColor();
    document.getElementById("swatch0").innerHTML = colorVibrant;
    colorArray.push(colorVibrant);
  };

  if (swatches.Muted){
    colorMuted = swatches.Muted.getHex(); 
    document.getElementById("swatch1").style["background-color"] = colorMuted;
    document.getElementById("swatch1").style["color"] = swatches.Muted.getTitleTextColor();
    document.getElementById("swatch1").innerHTML = colorMuted;
    colorArray.push(colorMuted);
  };

  if (swatches.DarkVibrant){
    colorDarkVibrant = swatches.DarkVibrant.getHex();
    document.getElementById("swatch2").style["background-color"] = colorDarkVibrant;
    document.getElementById("swatch2").style["color"] = swatches.DarkVibrant.getTitleTextColor();
    document.getElementById("swatch2").innerHTML = colorDarkVibrant;
    colorArray.push(colorDarkVibrant);
  };

  if (swatches.DarkMuted){
    colorDarkMuted = swatches.DarkMuted.getHex();
    document.getElementById("swatch3").style["background-color"] = colorDarkMuted;
    document.getElementById("swatch3").style["color"] = swatches.DarkMuted.getTitleTextColor();
    document.getElementById("swatch3").innerHTML = colorDarkMuted;
    colorArray.push(colorDarkMuted);
  };

  if (swatches.LightVibrant){
    colorLightVibrant = swatches.LightVibrant.getHex();
    document.getElementById("swatch4").style["background-color"] = colorLightVibrant;
    document.getElementById("swatch4").style["color"] = swatches.LightVibrant.getTitleTextColor();
    document.getElementById("swatch4").innerHTML = colorLightVibrant;
    colorArray.push(colorLightVibrant);
  };

  // if (swatches.LightMuted){
  //   colorLightMuted = swatches.LightMuted.getHex();
  //   document.getElementById("swatch5").style["background-color"] = colorLightMuted;
  //   document.getElementById("swatch5").style["color"] = swatches.LightMuted.getTitleTextColor();
  //   document.getElementById("swatch5").innerHTML = colorLightMuted;
  //   colorArray.push(colorLightMuted);
  // };

  document.getElementById("color_array").value = colorArray;
  // console.log(colorArray);
}
