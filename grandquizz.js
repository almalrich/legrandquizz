var arrObj = [{"question": "combien compte-t-on de 1ers Grands Cru Classés en France legis 1855?", "reponses": "3", "couleur": "vert"},
    {"question": "Quel est la région du Fleurie?", "reponses": "4", "couleur": "rouge"},
    {"question": "Combien de fois est distillé le Cognac", "reponses": "2", "couleur": "bleu"},
    {"question": "qu'est ce que la philoxera", "reponses": "2", "couleur": "bleu"},
    {"question": "Quel est la couleur de Cheval Blanc St Emilion 1er cru classé?", "reponses": "4", "couleur": "rouge"},
    {"question": "Quel est la quantité d'une bouteille standard de vin en France?", "reponses": "4", "couleur": "rouge"},
    {"question": "De quelle couleur est la colerette d'une bouteille d'un A.O.C en France?", "reponses": "2","couleur": "bleu"},
    {"question": "Quelles est la région d'un Riesling?", "reponses": "1", "couleur": "jaune"},
    {"question": "Quel est le vin primeur le plus connu?", "reponses": "3", "couleur": "vert"},
    {"question": "Quest-ce qu'un Charles de Gaulles?", "reponses": "4", "couleur": "rouge"}
    ];
let proposition = [{"repons1": "3", "repons2": "4", "repons3": "5", "repons4": "7","correct":"5"},
    {"repons1": "bourgogne", "repons2": "bordeaux", "repons3": "côte du rhone", "repons4": "beaujolais", "correct": "beaujolais"},
    {"repons1": "1", "repons2": "2", "repons3": "3", "repons4": "4", "correct": "2"},
    {"repons1": "un champignon", "repons2": "un puceron", "repons3": "une araignée", "repons4": "une bactérie", "correct": "un puceron"},
    {"repons1": "blanc sec", "repons2": "blanc Moelleux", "repons3": "rosé", "repons4": "rouge", "correct": "rouge"},
    {"repons1": "35cl", "repons2": "50cl", "repons3": "70cl", "repons4": "75cl", "correct": "75cl"},
    {"repons1": "rouge", "repons2": "verte", "repons3": "jaune", "repons4": "noire", "correct": "verte"},
    {"repons1": "alsace", "repons2": "bourgogne", "repons3": "champagne", "repons4": "beaujolais", "correct": "Alsace"},
    {"repons1": "loire", "repons2": "bordeaux", "repons3": "beaujolais", "repons4": "alsace", "correct": "beaujolais"},
    {"repons1": "une carafe de decantation", "repons2": "un couteau", "repons3": "une sorte de verre à boire", "repons4": "un tirebouchon", "correct": "un tirebouchon"}];


let bonnereponse=0;
let mauvaisereponse=0;
let score=0;
let clik=0;
let i=0;
let seconde = "00";
let minute = "00";
let temps1;



function temps()
    {
        $("#temps").html(minute + ":" + seconde);
        seconde++;
        temps1=setTimeout(temps, 1000);


        if (seconde == 60) {
            minute++;
            seconde = 0;
        }

    }

$("#time").click (function () {

temps();



});

$("#questions").html(arrObj[0].question);
$("#a1").html(proposition[0].repons1);
$("#a2").html(proposition[0].repons2);
$("#a3").html(proposition[0].repons3);
$("#a4").html(proposition[0].repons4);


$("#rep").hide();

for (let l=1; l<=4; l++){
    $("#a"+l).click(function () {


        console.log("B :"+arrObj[i].reponses);
console.log("U :"+ l);
if (arrObj[i].reponses== l){
    score++;
    console.log("score : " +score);
    bonnereponse++;

}
else{
    mauvaisereponse++;
    $("#bonnerep").append("pour la question"+" "+arrObj[i].question+" "+"la reponse était"+" "+proposition[i].correct+"<br>");
    console.log("mauvaisereponse"+mauvaisereponse);


}

        clik++;
        i++;
        if(clik>9){
            $("#total").hide()
            $("#rep").show()
            resultat();
            clearTimeout(temps1);
            $("#times").html(minute+":"+seconde);

        }



        $("#questions").fadeOut(1000, function(){

            $("#questions").html(arrObj[i].question);
            $("#a1").html(proposition[i].repons1);
            $("#a2").html(proposition[i].repons2);
            $("#a3").html(proposition[i].repons3);
            $("#a4").html(proposition[i].repons4);

            $("#questions").fadeIn(1500);
        });



    });
}


function resultat () {
    $("#bonnes").html("vous avez"+" "+ score+" "+"bonnes réponses");
    $("#mauvaises").html("et vous avez"+" "+mauvaisereponse+" "+"mauvaises réponses");
    $("#rep").show();
}


