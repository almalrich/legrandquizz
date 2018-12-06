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
let proposition = [{"repons1": "a=3", "repons2": "b=4", "repons3": "c=5", "repons4": "d=7","correct":"5"},
    {"repons1": "a=bourgogne", "repons2": "b=bordeaux", "repons3": "c=côte du rhone", "repons4": "d=beaujolais", "correct": "beaujolais"},
    {"repons1": "a=1", "repons2": "b=2", "repons3": "c=3", "repons4": "d=4", "correct": "2"},
    {"repons1": "a=un champignon", "repons2": "b=un puceron", "repons3": "c=une araignée", "repons4": "d=une bactérie", "correct": "un puceron"},
    {"repons1": "a=blanc sec", "repons2": "b=blanc Moelleux", "repons3": "c=rosé", "repons4": "d=rouge", "correct": "rouge"},
    {"repons1": "a=35cl", "repons2": "b=50cl", "repons3": "c=70cl", "repons4": "d=75cl", "correct": "75cl"},
    {"repons1": "a=rouge", "repons2": "b=verte", "repons3": "c=jaune", "repons4": "d=noire", "correct": "verte"},
    {"repons1": "a=alsace", "repons2": "b=bourgogne", "repons3": "c=champagne", "repons4": "d=beaujolais", "correct": "Alsace"},
    {"repons1": "a=loire", "repons2": "b=bordeaux", "repons3": "c=beaujolais", "repons4": "d=alsace", "correct": "beaujolais"},
    {"repons1": "a=une carafe de decantation", "repons2": "b=un couteau", "repons3": "c=une sorte de verre à boire", "repons4": "d=un tirebouchon", "correct": "un tirebouchon"}];


let bonnereponse=0;
let mauvaisereponse=0;
let score=0;
let clik=0;
let i=0;

$("#questions").html(arrObj[0].question);
$("#a1").html(proposition[0].repons1);
$("#a2").html(proposition[0].repons2);
$("#a3").html(proposition[0].repons3);
$("#a4").html(proposition[0].repons4);



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
    $("#bonnerep").append("pour la question"+" "+arrObj[i].question+" "+"la reponse étais"+" "+proposition[i].correct+"<br>");
    console.log("mauvaisereponse"+mauvaisereponse);


}
        clik++;
        i++;
        if(clik>9){
            $("#total").hide()
            $("#rep").show()
            resultat();
        }


        $("#questions").html(arrObj[i].question);
        $("#a1").html(proposition[i].repons1);
        $("#a2").html(proposition[i].repons2);
        $("#a3").html(proposition[i].repons3);
        $("#a4").html(proposition[i].repons4);


    });
}


function resultat () {
    $("#bonnes").html("vous avez"+" "+ score+" "+"bonnes réponses");
    $("#mauvaises").html("et vous avez"+" "+mauvaisereponse+" "+"mauvaises réponses");
}

