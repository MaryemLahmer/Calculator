const touches=[...document.querySelectorAll('.bouton')];
const listeKeycode=touches.map(touche => touche.dataset.key);
const ecran=document.querySelector('.ecran');
//récupérer le code de la touche si on tape avec le clavier
document.addEventListener('keydown',(e)=>{
    const valeur=e.keyCode.toString();
    calculer(valeur)
});
//récupérer le code de la touche si on tape sur les touches de la calculatrice
document.addEventListener('click', (e)=>{
    const valeur=e.target.dataset.key;
    calculer(valeur)
})
//fonction qui récupére le code de la touche et fait le calcul adéquat
const calculer=(valeur)=>{
    //pour s'assurer qu'on ne tape que les touches du clavier
    if(listeKeycode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent="";
                break;
            case '13':
                const calcul=eval(ecran.textContent);
                ecran.textContent=calcul;
                break;
            default:
                const indexkeycode=listeKeycode.indexOf(valeur);
                const touche=touches[indexkeycode];
                ecran.textContent+=touche.innerHTML;
    
        }
    }

}

//au cas ou on tape n'importe quoi
window.addEventListener('error',(e)=>{
    alert('une erreur est survenue lors du calcul: ',e.message)
})