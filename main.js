import { emberekLISTA } from "./adat.js";
import { megjelenit, tablazatLetrehoz } from "./fuggvenyek.js";

let txt = tablazatLetrehoz(emberekLISTA);
megjelenit(txt);

/* jelenitsük meg az adatainkat egy táblázatban az adatok div-ben
az urlap div-ben legyen egy űrlap, amivel ilyen adatokat tudunk a táblázatba betenni
a táblázat fejlécére kattintva rendezzük a táblázatot név szerint
Tudjuk törölni a táblázatból a sort
legyen egy szűrőmező, ami segítségével név szerint tudjuk szűrni az adtatokat.

Milyen függvények kellenek?

1. tablazatLetrehoz(lista) -> txt lista alapján készít html kódot, táblázatot, visszaadja az elkészült htlm szöveget, minden sor mellett egy törlés ikonnal
2. megjelenit(txt) -> megjeleníti a paraméterben kapott szöveget egy adott html elemben.
3. rendez() -> a lista megrendezi a listát az adott paraméter szerint és a megrendezett listát visszadja, akkor futt le, amikor rákattintunk a táblázat fejlécére
4. szures(lista, keresoSzoveg) -> visszért.: szurtLista; akkor fog lefutni, ha a szűrőmezőben változás történik (keyup) -> a listában a név mezőben keres egyezéseket és szűri a listát ez alapján -> filter
5. sorBeszur(lista) -> visszért.: ujLista; ha a submit gombra kattintunk akkor fut le a függvény, az űrlap adatokat objektumá alakítjuk, majd hozzáadjuk a listához (push)
6. torol(lista, index) -> törli a lista index-edik sorát, minden sor mellett lesz egy torol ikon, amire kattintva megkapjuk az adott sor indexét és meghívodik a torol függvény
*/

/*
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
  forEach ciklus LISTA esetén alkalmazható 
  emberekLISTA.forEach(function (ember, i) {
    console.log(ember);
  });

  emberekLISTA.forEach((ember, i) => {
    console.log(ember);
  });
}
listaKiir3();

 A 30 évnél idősebbeket írjuk ki 
function idosebb30() {
  const oregebbMint30 = emberekLISTA.filter(function (ember) {
    return ember.kor > 30;
  });

  console.log(oregebbMint30);
}

idosebb30();

Férfiak kilistázása 
function ferfiak() {
  const ferfiakLista = emberekLISTA.filter(function (ember) {
    return ember.nem;
  });
  console.log(ferfiakLista);
}

ferfiak();
 Férfiak 20 évnél idősebbek kilistázása 
function ferfiak20evFelett() {
  const ferfiakLista = emberekLISTA.filter(function (ember) {
    return ember.kor > 20 && ember.nem;
  });
  console.log(ferfiakLista);
}
ferfiak20evFelett();

Rendezük kor szerint növekvő sorrendbe 
function rendez() {
  emberekLISTA.sort(function (e1, e2) {
    return e1.kor - e2.kor;
  });
  console.log(emberekLISTA);
}
rendez();

 Keverjük össze, véletlenszerű sorrend 
function veletlen() {
  emberekLISTA.sort(function (e1, e2) {
     véletlenszerűen kapjunk negatív, vagy pozitív számot 
    return Math.random()-0.5;
  });
  console.log(emberekLISTA);
}
veletlen();*/
