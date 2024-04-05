import { emberekLISTA } from "./adat.js";

function listaKiir() {
  for (let index = 0; index < emberekLISTA.length; index++) {
    const element = emberekLISTA[index];
    console.log(element);
    console.log(emberekLISTA[index]);
  }
}

listaKiir();

const listaKiir2 = function () {
  for (let index = 0; index < emberekLISTA.length; index++) {
    const element = emberekLISTA[index];
    console.log(element);
    console.log(emberekLISTA[index]);
  }
};

listaKiir2();

function listaKiir3() {
  /* forEach ciklus LISTA esetén alkalmazható */
  emberekLISTA.forEach(function (ember, i) {
    console.log(ember);
  });

  emberekLISTA.forEach((ember, i) => {
    console.log(ember);
  });
}
listaKiir3();

/* A 30 évnél idősebbeket írjuk ki */
function idosebb30() {
  const oregebbMint30 = emberekLISTA.filter(function (ember) {
    return ember.kor > 30;
  });

  console.log(oregebbMint30);
}

idosebb30();

/* Férfiak kilistázása */
function ferfiak() {
  const ferfiakLista = emberekLISTA.filter(function (ember) {
    return ember.nem;
  });
  console.log(ferfiakLista);
}

ferfiak();
/* Férfiak 20 évnél idősebbek kilistázása */
function ferfiak20evFelett() {
  const ferfiakLista = emberekLISTA.filter(function (ember) {
    return ember.kor > 20 && ember.nem;
  });
  console.log(ferfiakLista);
}
ferfiak20evFelett();

/* Rendezük kor szerint növekvő sorrendbe */
function rendez() {
  emberekLISTA.sort(function (e1, e2) {
    return e1.kor - e2.kor;
  });
  console.log(emberekLISTA);
}
rendez();

/* Keverjük össze, véletlenszerű sorrend */
function veletlen() {
  emberekLISTA.sort(function (e1, e2) {
    /* véletlenszerűen kapjunk negatív, vagy pozitív számot */
    return Math.random()-0.5;
  });
  console.log(emberekLISTA);
}
veletlen();

