function heliodetect(){
  if (window.mlWorld) {
    // this is the Helio browser and is capable of rendering spatialized content

    document.getElementByClassName("astro2d").style.visibility = "none";

    console.log('helio detected');

  } else {
    // this is not Helio
    document.getElementByClassName("astro2d").style.visibility = "block";

    console.log('twoD browser');
}
}
heliodetect();
