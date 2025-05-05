const razas = {
    "Protoss": {
      "nome": "Protoss",
      "descricion": "Durante milleiros de anos, os antigos e misteriosos protoss dominaron a súa parte da galaxia. Os guerreiros protoss non teñen igual en destreza e valor, grazas á combinación da tecnoloxía coa súa formidable forza psiónica.",
      "imaxeFondo": "../assets/razas/protoss_background_1600_desktop.avif",
      "imaxeFondoMobile": "../assets/razas/races_protoss_960_mobile.avif",
      "iconoBotonDefault": "../assets/icons/protoss_icon_default.avif",
      "iconoBotonActive": "../assets/icons/protoss_icon_active.avif"
    },
    "Terran": {
      "nome": "Terran",
      "descricion": "Prácticamente acabados de chegar ao sector Koprulu, os terran son os descendentes dunha desastrosa expedición de colonización que partiu da Terra hai séculos. Sen a avanzada tecnoloxía dos protoss nin o talento natural dos zerg, as forzas militares terran apóianse nunha variada combinación de unidades versátiles e resistentes para superar aos seus rivais.",
      "imaxeFondo": "../assets/razas/terran_background_1600_desktop.avif",
      "imaxeFondoMobile": "../assets/razas/races_terran_960_mobile.avif",
      "iconoBotonDefault": "../assets/icons/terran_icon_default.avif",
      "iconoBotonActive": "../assets/icons/terran_icon_active.avif"
    },
    "Zerg": {
      "nome": "Zerg",
      "descricion": "Liderados pola astuta Raíña de Espadas, os alieníxenas zerg teñen a intención de desatar os seus horrores pola galaxia e consumir a todo aquel que se interponga no seu camiño. Os zerg non empregan tecnoloxía para crear as súas armas, armaduras e naves estelares. No seu lugar, esas funcións cúmprenas de forma eficiente mediante adaptación biolóxica e mutación planificada.",
      "imaxeFondo": "../assets/razas/zerg_background_1600_desktop.avif",
      "imaxeFondoMobile": "../assets/razas/races_zerg_960_mobile.avif",
      "iconoBotonDefault": "../assets/icons/zerg_icon_default.avif",
      "iconoBotonActive": "../assets/icons/zerg_icon_active.avif"
    }
  }

  //establezo as variables ás cales lles vou vambiar os elemntos cos datos do Json

  let razasH3 =document.getElementById("razasH3");
  let razasP=document.getElementById("razasP");
  let contedorRazas=document.getElementById("razas");
  let botonProtoss=document.getElementById("botonProtoss");
  let botonTerran=document.getElementById("botonTerran");
  let botonZerg=document.getElementById("botonZerg");
  let activarProtoss=document.getElementById("activarProtoss");
  let activarTerran=document.getElementById("activarTerran")

 //creo a funcion para cambiar entre as diferentes razas
 //nota -por algunha razón non se me cambia o fondo só co json (a consola non da erro de ningún tipo), así que aplico cambio de clases

 function cambiarRaza(raza){
  switch(raza){

    case"Protoss":
    razasH3.textContent= razas["Protoss"].nome;
    razasP.textContent=razas["Protoss"].descricion;
    //contedorRazas.style.backgroundImage.url=razas["Protoss"].imaxeFondo;
    botonProtoss.src=razas["Protoss"].iconoBotonActive;
    botonTerran.src=razas["Terran"].iconoBotonDefault;
    botonZerg.src=razas["Zerg"].iconoBotonDefault;
    contedorRazas.classList.add("razas__protoss");
    contedorRazas.classList.remove("razas__terran");
    contedorRazas.classList.remove("razas__zerg")

    break;
    case"Terran":
    razasH3.textContent= razas["Terran"].nome;
    razasP.textContent=razas["Terran"].descricion;
    //contedorRazas.style.backgroundImage.url=razas["Terran"].imaxeFondo;
    botonTerran.src=razas["Terran"].iconoBotonActive;
    botonProtoss.src=razas["Protoss"].iconoBotonDefault;
    botonZerg.src=razas["Zerg"].iconoBotonDefault;
    contedorRazas.classList.remove("razas__protoss");
    contedorRazas.classList.add("razas__terran");
    contedorRazas.classList.remove("razas__zerg")

    break;
    case"Zerg":
    razasH3.textContent= razas["Zerg"].nome;
    razasP.textContent=razas["Zerg"].descricion;
    //contedorRazas.style.backgroundImage.url=razas["Zerg"].imaxeFondo;
    botonZerg.src=razas["Zerg"].iconoBotonActive;
    botonProtoss.src=razas["Protoss"].iconoBotonDefault;
    botonTerran.src=razas["Terran"].iconoBotonDefault;
    contedorRazas.classList.remove("razas__protoss");
    contedorRazas.classList.remove("razas__terran");
    contedorRazas.classList.add("razas__zerg")
    break;
    
  }
 }
 //adxudico a cada boton a funcion para cambiar a raza cos datos do Json  e cambio de clases
 botonProtoss.addEventListener('click',function(){
  cambiarRaza("Protoss")
 })
botonTerran.addEventListener('click',function(){
  cambiarRaza("Terran")
})  
botonZerg.addEventListener('click',function(){
  cambiarRaza("Zerg")
})  

//programar desplegar e replegar menú desplegable

let botonMenu=document.getElementById("botonMenu");
let menuDesplegable=document.getElementById("menuDespegable");
let clickCountMenu=0;


botonMenu.addEventListener('click',function(){
  desplegarMenu()
})

function desplegarMenu(){
  clickCountMenu++;
  if(clickCountMenu==1){menuDesplegable.style.display=("block")}
  if(clickCountMenu==2){menuDesplegable.style.display=("none"); clickCountMenu=0}

}






//solucioin correcta pra facer enlaces no json
// contedorRazas.style.backgroundImage = `url(${razas["Terran"].imaxeFondo})`;




  