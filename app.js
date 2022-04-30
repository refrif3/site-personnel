
var images = document.querySelectorAll('.image-gal')
var imageActive = 0;

for (let i = 1; i < images.length; i++){
    images[i].classList.add('cacher')    
}
//Button droite000000
var btn = document.getElementById('droite')
btn.addEventListener('click', function(){
    images[imageActive].classList.add('cacher')
    imageActive +=1
    if (imageActive >= images.length) {
        imageActive = 0
    }
    images[imageActive].classList.remove('cacher')
})
//Bouton gauche
var btnGauche = document.getElementById('gauche')
btnGauche.addEventListener('click', function(){
    images[imageActive].classList.add('cacher')
    imageActive -= 1
    if (imageActive < 0) {
        imageActive = images.length - 1
    }
    images[imageActive].classList.remove('cacher')
}) 