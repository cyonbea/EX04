//Beatriz Teixeira exercicio 04 WEB DESIGN II 

console.log("it´s working");

//________________________________________________________________definir algumas variáveis
let hora = new Date().getHours() ;
let branco = "#FAFAFF";
let preto = "#000";

//________________________________________________________________hora x, escolhe light/dark  
if( hora < 18 && hora > 6 ){
    console.log("light mode");
$(":root").css({"--corfundo" : branco,"--cortexto": preto });

/*lógica do código em javascript vanilla
let corhora = document.querySelector(':root');
corhora.style.setProperty("--corfundo",branco);
corhora.style.setProperty("--cortexto",preto);
*/

} else{
    console.log("night mode");
}

//__________________________________________________________ carrega no h3 e aparece os "p", carrega no h2 e desaparece o
$("article p").hide(); //esconde os parágrafos dos artigos


//aqui está a dar erro 1 quando ativado (secção I)
$("#HEIS h3").on("click", function() {
    $("#HEIS p").toggle("show"); //aparece desaparece p conforme click
    $("#HEIS h3").toggle($("#HEIS h3").css("margin-bottom", "1em")); //altera margem do h3 conforme click
});

//aqui está a dar erro 2 quando ativado (secção II)
$("#MAN h3").on("click", function() {
    $("#MAN p").toggle("show");
    $("#MAN h3").toggle($("#MAN h3").css("margin-bottom", "1em"));
});


//________________________________________________________________pequena animação aside
$("aside").mouseover( function(){
 $( "aside" ).animate({
    left: '0',
    opacity: '0.5',
});
});

$("aside").mouseout( function(){
    $( "aside" ).animate({
       opacity: '1',
   });    });

//acrescentar novo elemento ; definir sources e atributos
let hank = document.createElement("IMG");
$(hank).attr({"width":"150", "height":"auto", "src":"IMG/hank.jpg"});
// acrescentar a imagem no final do aside após x segundos
setTimeout(function(){$("aside").append(hank);}, 3000);

//_____________________________________________________menuuuuuu nav javascript vanilla mixed jquery
let menu = $('nav');
let titulos = Array.from($("h3"));
let listaul = document.createElement("ul");//criar elemento (lista)

for(let i = 0; i < titulos.length; i++) {
    
    let listali = document.createElement("li");
    let link = document.createElement("a");
    link.innerHTML = titulos[i].textContent; //atribuir texto aos links
    link.setAttribute("href", "#" + titulos[i].id);//indicar a referência dos links
    
    $("nav").append(listaul); //adiciona à nav uma lista 
    $(listaul).append(listali); //adiciona à lista os elementos
    $(listali).append(link).attr("style", "display:block"); //dá link (append) e aparência (attr) aos elementos da lista 
}

$(listaul).hide();

// __________menu icon hamburguer toggle https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js 
function myFunction(x) { x.classList.toggle("change");}

//aparece e desaparece lista com click no menu icon
  $(".container").click( function(){ $(listaul).toggle("show"); });


//_______________________________scroll para baixo
let roll;

 function down() {
    scrollBy(0, 5);
}

roll = setInterval(down,10);

//parar scroll automático quando carregar no main
let parar = document.querySelector('main');

parar.onclick = function(){
clearInterval(roll);
};

//fim :)

