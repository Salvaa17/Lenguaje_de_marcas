var indice = 0;
var slider = document.getElementsByClassName("fotos");
mostrarSlider();
function mostrarSlider(){
    let i;
    for(i = 0; i < slider.length; i++){
        slider[i].style.display='none';
    }
    indice ++;
    if(indice > slider.length){
        indice = 1;
    }
    slider[indice - 1].style.display = 'block';
    setTimeout(mostrarSlider,3000);
}