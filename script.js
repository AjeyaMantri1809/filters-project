var imgStandard = null;
var fileInput = document.getElementById("imageInput");
var canvas = document.getElementById("imgCanvas");

function uploadImage(){
  imgStandard = new SimpleImage(fileInput);
  imgStandard.drawTo(canvas);
}

function isImageLoaded () {
  if(imgStandard == null || !imgStandard.complete()){
    alert ("No image uploaded");
    return false;
  } else {
    return true;
}
}

function removeImage(){
  if(isImageLoaded()) {
  imgStandard = null;
  fileInput.value = null;
  var context = canvas.getContext("2d");
  context.clearRect(0,0, canvas.width, canvas.height);
  }
}

function resetImage(){
  if(isImageLoaded()) {
imgStandard.drawTo(canvas);
  }
}

function filterGrayscale() {
 if(isImageLoaded()) {
    var grayscaleImage = new SimpleImage(imgStandard.width, imgStandard.height);
    var avg = 0;
    
    for(var pix of imgStandard.values()){
      
       gsPix = grayscaleImage.getPixel(pix.getX(), pix.getY());
      avg = (pix.getRed() + pix.getGreen() + pix.getBlue()) /3;
      gsPix.setRed(avg);
      gsPix.setGreen(avg);
      gsPix.setBlue(avg);
    }
    grayscaleImage.drawTo(canvas);
  }
}

function filterRedSplash() {
  if(isImageLoaded()) {
    var redImage = new SimpleImage(imgStandard.width, imgStandard.height);
    
    for(var pix of imgStandard.values()){
      redPix = redImage.getPixel(pix.getX(), pix.getY());
      redPix.setRed(255);
      redPix.setGreen(pix.getGreen());
      redPix.setBlue(pix.getBlue());
    }
    redImage.drawTo(canvas);
  }
}

function filterGreenSplash() {
  if(isImageLoaded()) {
    var greenImage = new SimpleImage(imgStandard.width, imgStandard.height);
    
    for(var pix of imgStandard.values()){
      greenPix = greenImage.getPixel(pix.getX(), pix.getY());
      greenPix.setRed(pix.getRed());
      greenPix.setGreen(255);
      greenPix.setBlue(pix.getBlue());
    }
    greenImage.drawTo(canvas);
  }
}

function filterBlueSplash() {
  if(isImageLoaded()) {
    var blueImage = new SimpleImage(imgStandard.width, imgStandard.height);
    
    for(var pix of imgStandard.values()){
      bluePix = blueImage.getPixel(pix.getX(), pix.getY());
      bluePix.setRed(pix.getRed());
      bluePix.setGreen(pix.getGreen());
      bluePix.setBlue(255);
    }
    blueImage.drawTo(canvas);
  }
}

function filterRedHue() {
 if(isImageLoaded()) {
    var redImage = new SimpleImage(imgStandard.width, imgStandard.height);
    
    for(var pix of imgStandard.values()){
      redPix = redImage.getPixel(pix.getX(), pix.getY());
      var avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
      
      if(avg <128){
      redPix.setRed(2* avg);
      redPix.setGreen(0);
      redPix.setBlue(0);
      } else {
      redPix.setRed(255);
      redPix.setGreen(2*avg - 255);
      redPix.setBlue(2*avg - 255);
      }
    
    }
    redImage.drawTo(canvas);
  }
}

function filterGreenHue() {
 if(isImageLoaded()) {
    var greenImage = new SimpleImage(imgStandard.width, imgStandard.height);
    
    for(var pix of imgStandard.values()){
      greenPix = greenImage.getPixel(pix.getX(), pix.getY());
      var avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
      
      if(avg <128){
      greenPix.setRed(0);
      greenPix.setGreen(2*avg);
      greenPix.setBlue(0);
      } else {
      greenPix.setRed(2*avg - 255);
      greenPix.setGreen(255);
      greenPix.setBlue(2*avg - 255);
      }
    
    }
    greenImage.drawTo(canvas);
  }
}

function filterBlueHue() {
 if(isImageLoaded()) {
    var blueImage = new SimpleImage(imgStandard.width, imgStandard.height);
    
    for(var pix of imgStandard.values()){
      bluePix = blueImage.getPixel(pix.getX(), pix.getY());
      var avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
      
      if(avg <128){
      bluePix.setRed(0);
      bluePix.setGreen(0);
      bluePix.setBlue(2*avg);
      } else {
      bluePix.setRed(2*avg - 255);
      bluePix.setGreen(2*avg - 255);
      bluePix.setBlue(255);
      }
    
    }
    blueImage.drawTo(canvas);
  }
}

function filterNegative() {
  if(isImageLoaded()) {
    var negativeImage = new SimpleImage(imgStandard.width, imgStandard.height);
    
    for(var pix of imgStandard.values()){
      negativePix = negativeImage.getPixel(pix.getX(), pix.getY());
      negativePix.setRed(255 - pix.getRed());
      negativePix.setGreen(255 - pix.getGreen());
      negativePix.setBlue(255 - pix.getBlue());
    }
    negativeImage.drawTo(canvas);
  }
}
// https://www.coursera.org/learn/duke-programming-web/supplement/oUvMH/miniproject-challenge for algo
function filterRainbow() {
if(isImageLoaded()) {
    var rainbowImage = new SimpleImage(imgStandard.width, imgStandard.height);
    
    for(var pix of imgStandard.values()){
      var x = pix.getX();
      var y = pix.getY();
      var height = imgStandard.height;
      var rainbowPix = rainbowImage.getPixel(x,y);
      var avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
      
      if(avg < 128) {
      if (y < height / 7){
          rainbowPix.setRed(2*avg);
          rainbowPix.setGreen(0);
          rainbowPix.setBlue(0);
      } else if(y < (2 * height) / 7){
          rainbowPix.setRed(2*avg);
          rainbowPix.setGreen(0.8*avg);
          rainbowPix.setBlue(0);
      } else if(y < (3 * height) / 7) {
          rainbowPix.setRed(2*avg);
          rainbowPix.setGreen(2*avg);
          rainbowPix.setBlue(0);
      } else if (y < (4* height) / 7) {
          rainbowPix.setRed(0);
          rainbowPix.setGreen(2*avg);
          rainbowPix.setBlue(0);
      } else if (y < (5 * height) / 7){
          rainbowPix.setRed(0);
          rainbowPix.setGreen(0);
          rainbowPix.setBlue(2*avg);
      } else if (y < (6 * height) / 7){
          rainbowPix.setRed(0.8*avg);
          rainbowPix.setGreen(0);
          rainbowPix.setBlue(2*avg);
      } else {
          rainbowPix.setRed(1.6*avg);
          rainbowPix.setGreen(0);
          rainbowPix.setBlue(1.6*avg);
      }
      } else {
        if(y < height / 7){
          rainbowPix.setRed(255);
          rainbowPix.setGreen(2*avg - 255);
          rainbowPix.setBlue(2*avg - 255);
        } else if(y < (2 * height) / 7){
          rainbowPix.setRed(255);
          rainbowPix.setGreen(1.2*avg - 51);
          rainbowPix.setBlue(2*avg - 255);
        } else if(y < (3 * height) / 7){
          rainbowPix.setRed(255);
          rainbowPix.setGreen(255);
          rainbowPix.setBlue(2*avg - 255);
        } else if (y < (4* height) / 7){
          rainbowPix.setRed(2*avg - 255);
          rainbowPix.setGreen(255);
          rainbowPix.setBlue(2*avg - 255);
        } else if (y < (5 * height) / 7){
          rainbowPix.setRed(2*avg - 255);
          rainbowPix.setGreen(2*avg - 255);
          rainbowPix.setBlue(255);
        } else if (y < (6 * height) / 7){
          rainbowPix.setRed(1.2*avg - 51);
          rainbowPix.setGreen(2*avg - 255);
          rainbowPix.setBlue(255);
        } else {
          rainbowPix.setRed(0.4*avg+153);
          rainbowPix.setGreen(2*avg - 255);
          rainbowPix.setBlue(0.4*avg+153);
        }
      }
    }
    rainbowImage.drawTo(canvas);
  }
}

function filterBlur(){
  if(isImageLoaded()) {
    var blurImage = new SimpleImage(imgStandard.width, imgStandard.height);
    var random = 0;
    var newPixelX = -1;
    var newPixelY = -1;
    
    for(var pix of imgStandard.values()){
       var x = pix.getX();
       var y = pix.getY();
      random = Math.random();
      var c1 = 0;
      var c2 = 0;
      
      if(random < 0.5){
        c1++;
        blurImage.setPixel(x,y, pix);
      } else {
        c2++;
        //Gets a pixel within distance 10 in either direction
        newPixelX = (x - 10) + (Math.random() * 20);
        newPixelY = (y - 10) + (Math.random() * 20);
        
        // If pixel is invalid, keeps getting random pixels until a valid is found.
        while(newPixelX < 0 || newPixelX >= imgStandard.width || newPixelY < 0 || newPixelY >= imgStandard.height ) {
          newPixelX = (x - 5) + (Math.random() * 10);
        newPixelY = (y - 5) + (Math.random() * 10);
        }
        var newPixel = imgStandard.getPixel(newPixelX, newPixelY);
        blurImage.setPixel(x,y, newPixel);
      }
}
     blurImage.drawTo(canvas);
  }
}