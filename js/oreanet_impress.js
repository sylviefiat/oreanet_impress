

/** Step by Step */

/**  BOX : ACANTHASTER */
var videoAcanthaster = document.getElementById("video-acanthaster");
var videoAca = document.getElementById("video-aca");
var acanthasterText = [ "<i>Acanthaster planci</i> est une grande étoile de mer peuplant les récifs coralliens de la zone Indo-Pacifique.", 
"Elle peut atteindre 70 cm de diamètre et dépasser les <b>3 kg</b> !",
"On la reconnait facilement à ses nombreux bras hérissés d’épines <u>très venimeuses</u>.", 
"Peu visible durant la journée, l’acanthaster est surtout active de nuit. ",
"Elle sort alors de sa cachette pour partir en quête de nourriture...","...se déplaçant sur les récifs ou les fonds sableux grâce à l’action coordonnée de ses centaines de pieds.",
"Elle peut atteindre une vitesse de 10-20 mètres <u>à l’heure</u> !"];
videoAcanthaster.addEventListener("impress:stepenter", function() {
  videoAca.currentTime = 0;
  videoAca.play();  
  needStop["acanthasterText"]=false; 
  StartTextAnimation("acanthasterText",acanthasterText,0);
}, videoAcanthaster);
videoAcanthaster.addEventListener("impress:stepleave", function() {
  videoAca.pause();  
  StopTextAnimation("acanthasterText");
}, false);

/**  BOX : TRITON */
var videoTriton = document.getElementById("video-triton");
var videoTri = document.getElementById("video-tri");
var tritonText = [ "La toutoute ou grand triton (<i>Charonia tritonis</i>) est le principal prédateur des acanthasters.", 
"Totalement insensible à ses épines, elle l’attire à l’intérieur de sa carapace pour la consommer vivante. ",
"Mais son appétit est limité : pas plus d’une acanthaster par semaine !", 
"Et comme le nombre de toutoutes diminue fortement à cause de la surpêche, elles ne jouent plus leur rôle de « maintien de l’ordre ».", 
"Pour protéger nos récifs, il faut aussi protéger les toutoutes…"];
videoTriton.addEventListener("impress:stepenter", function() {
  videoTri.currentTime = 0;
  videoTri.play();  
  needStop["tritonText"]=false; 
  StartTextAnimation("tritonText",tritonText,0);
}, videoTriton);
videoTriton.addEventListener("impress:stepleave", function() {
  videoTri.pause(); 
  StopTextAnimation("tritonText");          
}, false);

/** BOX : BLANCHISSEMENT */
var videoBlanchissement = document.getElementById("video-blanchissement");
var videoBla = document.getElementById("video-bla");
var blanchissementText = [ "A la différence des autres étoiles de mer, les acanthasters adultes se nourrissent exclusivement de corail vivant. ",
"Elles le digèrent directement sur pied, en régurgitant leur estomac par leur bouche pour l’étaler sur leur proie qu’elles dissolvent à l’aide de leurs sucs digestifs.", 
"Si vous apercevez des cicatrices blanches à la surface du corail, il y a de fortes chances qu’une acanthaster soit passée par là récemment et fasse sa sieste digestive bien cachée à proximité...", 
"Les acanthasters jouent un rôle important au sein des récifs : en consommant de préférence les espèces de coraux à croissance rapide (par exemple les Acropora branchus), elles laissent à d’autres espèces la possibilité de s’installer.", 
"Une acanthaster adulte peut consommer environ 10 m² de corail par an.",
"Elles contribuent ainsi au maintien de la biodiversité corallienne et au dynamisme de l’écosystème."];
videoBlanchissement.addEventListener("impress:stepenter", function() {
  videoBla.currentTime = 0;
  videoBla.play(); 
  needStop["blanchissementText"]=false; 
  StartTextAnimation("blanchissementText",blanchissementText,0);
}, videoBlanchissement);
videoBlanchissement.addEventListener("impress:stepleave", function() {
  videoBla.pause(); 
  StopTextAnimation("blanchissementText");           
}, false);

/** BOX : OUTBREAKS */
var videoOutbreaks = document.getElementById("video-outbreak");
var videoOut = document.getElementById("video-out");
var outbreakText = [ "Normalement, on trouve très peu d’acanthasters sur les récifs : en 10 minutes de nage, vous ne devriez pas en voir plus de quelques-unes, surtout la journée.", 
"Mais parfois le système s’emballe : les acanthasters se multiplient de manière incontrôlable et envahissent les récifs, dévastant tout sur leur passage. Un peu comme les invasions de sauterelles en milieu terrestre !", 
"Ces épisodes d’infestation (« outbreaks ») sont parmi les plus graves perturbations affectant les récifs coralliens.", 
"Plus d’un tiers des récifs de la région Pacifique seraient actuellement affectés,  avec des mortalités de coraux massives pouvant dépasser 90% dans les zones les plus touchées.",
"On estime que près d’un quart de la grande barrière de corail australienne a déjà été dévastée par les acanthasters..."];
videoOutbreaks.addEventListener("impress:stepenter", function() {
  videoOut.currentTime = 0;
  videoOut.play();  
  needStop["outbreakText"]=false;  
  StartTextAnimation("outbreakText",outbreakText,0);
}, videoOutbreaks);
videoOutbreaks.addEventListener("impress:stepleave", function() {
  videoOut.pause();   
  StopTextAnimation("outbreakText");         
}, false);

/** BOX : OREANET */
var videoOreanet = document.getElementById("video-oreanet");
var videoOre = document.getElementById("video-ore");
var oreanetText = [ "La Nouvelle-Calédonie est vaste !", 
"Qui, mieux que les usagers du lagon, qu’ils soient pêcheurs, plongeurs ou amateurs de ballades nautiques, saurait garder un œil sur nos récifs ?", 
"Ces épisodes d’infestation (« outbreaks ») sont parmi les plus graves perturbations affectant les récifs coralliens.", 
"Depuis son lancement par l’IRD en 2014, la plate-forme de suivi participatif OREANET (« Oceania Regional Acanthaster Network ») permet à toute personne observant des acanthasters de les signaler via un site web ou une application smartphone gratuite.",
"OREANET : nous avons besoin de votre concours pour surveiller nos récifs et développer une stratégie de gestion du risque acanthaster efficace !"];
videoOreanet.addEventListener("impress:stepenter", function() {
  videoOre.currentTime = 0;
  videoOre.play();  
  needStop["oreanetText"]=false; 
  StartTextAnimation("oreanetText",oreanetText,0);
}, videoOreanet);
videoOreanet.addEventListener("impress:stepleave", function() {
  videoOre.pause();  
  StopTextAnimation("oreanetText");            
}, false);

/** BOX : La faute du changement climatique */
var videoChangement = document.getElementById("video-changement");
var videoCha = document.getElementById("video-cha");
var changementText = [ "Ces dernières années, on signale de plus en plus d’infestations d’acanthasters à travers le Pacifique.", 
"La sensibilisation du public et des scientifiques y est surement pour quelque chose, mais pas seulement.", 
"Un des grands suspects est… le changement climatique !", 
"L’augmentation de la température des eaux de surface et leur enrichissement en nutriments dans les zones côtières sont des facteurs favorables à la survie des larves d’acanthaster, donc à l’augmentation des populations d’adultes atteignant les récifs."];
videoChangement.addEventListener("impress:stepenter", function() {
  videoCha.currentTime = 0;
  videoCha.play(); 
  needStop["changementText"]=false; 
  StartTextAnimation("changementText",changementText,0);
}, videoChangement);
videoChangement.addEventListener("impress:stepleave", function() {
  videoCha.pause();   
  StopTextAnimation("changementText");          
}, false);

/** BOX : les conséquences  */
var videoConsequences = document.getElementById("video-consequences");
var videoCon = document.getElementById("video-con");
var consequencesText = [ "Même s’il existe des preuves historiques montrant que les récifs coralliens peuvent se rétablir après coup...",
"...ces proliférations ne font qu’exercer encore plus de pression sur des systèmes déjà affaiblis par la surpêche, les pollutions, le changement climatique etc.", 
"Les effets en cascade de la disparition des coraux peuvent avoir des répercussions très néfastes sur l’écosystème tout entier : ",
"baisse importante de la diversité et de l’abondance de poissons et des invertébrés associés, voire disparition complète de certaines espèces.", 
"D’où la vive inquiétude des pays dans lesquels les ressources côtières constituent la base de la pêche vivrière traditionnelle..."];
videoConsequences.addEventListener("impress:stepenter", function() {
  videoCon.currentTime = 0;
  videoCon.play();  
  needStop["consequencesText"]=false; 
  StartTextAnimation("consequencesText",consequencesText,0);
}, videoConsequences);
videoConsequences.addEventListener("impress:stepleave", function() {
  videoCon.pause(); 
  StopTextAnimation("consequencesText");           
}, false);

/** BOX : Quelles solutions ?  */
var videoSolutions = document.getElementById("video-solution");
var videoSol = document.getElementById("video-sol");
var solutionsText = [ "Aucune méthode ne permet à l’heure actuelle de lutter efficacement contre les infestations d’acanthasters.", 
"La plus courante consiste à envoyer des plongeurs pour les prélever manuellement, à l’aide d’outils simples –lances, bâtons, crochets, fusils sous-marins etc.– puis à les détruire à terre.", 
"Un travail de titan !",
"L’efficacité de ces mesures est actuellement contestée :",
"1) leur efficacité est douteuse en cas de prolifération grave et/ou très étendue",
"2) elles exigent une main-d’œuvre importante et un engagement durable, sans compter les risques importants de blessures pour les intervenants",
"3) il est essentiel de les organiser en tenant compte de la période de ponte, variable selon les latitudes",
"En 2014, une équipe de l'IRD a mené des recherches en collaboration avec le Vanuatu, où de sévères infestations d’acanthasters sévissent de façon récurrente depuis les années 2000.",
"Une nouvelle méthode a été mise au point, basée sur l’injection de solutions létales à base de jus de citron et de vinaigre !",
"Particulièrement efficaces et peu couteux, ces produits constituent désormais une alternative écologique hautement crédible aux agents chimiques habituellement employés dans le Pacifique. "];
videoSolutions.addEventListener("impress:stepenter", function() {
  videoSol.currentTime = 0;
  videoSol.play(); 
  needStop["solutionsText"]=false; 
  StartTextAnimation("solutionsText",solutionsText,0);
}, videoSolutions);
videoSolutions.addEventListener("impress:stepleave", function() {
  videoSol.pause();  
  StopTextAnimation("solutionsText");          
}, false);

/** BOX : Oreanet mobile  */
var videoOreanetMobile = document.getElementById("video-oreanet-mobile");
var videoOrm = document.getElementById("video-orm");
var oreanetMobileText = [ "Aucune méthode ne permet à l’heure actuelle de lutter efficacement contre les infestations d’acanthasters.", 
"La plus courante consiste à envoyer des plongeurs pour les prélever manuellement, à l’aide d’outils simples –lances, bâtons, crochets, fusils sous-marins etc.– puis à les détruire à terre.", 
"Un travail de titan !",
"L’efficacité de ces mesures est actuellement contestée :",
"1) leur efficacité est douteuse en cas de prolifération grave et/ou très étendue",
"2) elles exigent une main-d’œuvre importante et un engagement durable, sans compter les risques importants de blessures pour les intervenants",
"3) il est essentiel de les organiser en tenant compte de la période de ponte, variable selon les latitudes",
"En 2014, une équipe de l'IRD a mené des recherches en collaboration avec le Vanuatu, où de sévères infestations d’acanthasters sévissent de façon récurrente depuis les années 2000.",
"Une nouvelle méthode a été mise au point, basée sur l’injection de solutions létales à base de jus de citron et de vinaigre !",
"Particulièrement efficaces et peu couteux, ces produits constituent désormais une alternative écologique hautement crédible aux agents chimiques habituellement employés dans le Pacifique. "];
videoOreanetMobile.addEventListener("impress:stepenter", function() {
  videoOrm.currentTime = 0;
  videoOrm.play(); 
  needStop["oreanetMobileText"]=false; 
  StartTextAnimation("oreanetMobileText",oreanetMobileText,0);
}, videoOreanetMobile);
videoOreanetMobile.addEventListener("impress:stepleave", function() {
  videoOrm.pause();  
  StopTextAnimation("oreanetMobileText");          
}, false);

overviews = document.getElementsByClassName('overview');
for(var i = 0; i < overviews.length; i++){
  overviews.item(i).addEventListener("impress:stepenter", function() {
    toNextState();
  });
}

var needStop = {acanthasterText:false,tritonText:false,blanchissementText:false,outbreakText:false,oreanetText:false,changementText:false,consequencesText:false,solutionsText:false} ;

function typeWriter(elementID, text, i, fnCallback) {
  if(needStop[elementID]){
    return;
  }
  if (i < (text.length)) {
    document.getElementById(elementID).innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
    setTimeout(function() {
      typeWriter(elementID,text, i + 1, fnCallback)
    }, 100);
  } else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 5000);
  }
}
  
function StartTextAnimation(elementID,dataText,i) {
  if(needStop[elementID]){
    return;
  }
  if (typeof dataText[i] == 'undefined'){
    toNextState();
  } else if (i < dataText[i].length) {
    typeWriter(elementID,dataText[i], 0, function(){
      StartTextAnimation(elementID,dataText,i + 1);
    });
  } 
}

function StopTextAnimation(elementID) {
  needStop[elementID]=true;
  document.getElementById(elementID).innerHTML = "";
}

function toNextState(){
  setTimeout(function() {
      impress().next();
    }, 10000);
}