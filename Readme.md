# Listakezelő függvények gyakorlása

## Specifikáció

Jelenitsük meg az adatainkat egy táblázatban az adatok div-ben
az urlap div-ben legyen egy űrlap, amivel ilyen adatokat tudunk a táblázatba betenni
a táblázat fejlécére kattintva rendezzük a táblázatot név szerint
Tudjuk törölni a táblázatból a sort
legyen egy szűrőmező, ami segítségével név szerint tudjuk szűrni az adtatokat.

## Függvények

1. *** tablazatLetrehoz(lista) *** -> txt lista alapján készít html kódot, táblázatot, visszaadja az elkészült htlm szöveget, minden sor mellett egy törlés ikonnal
2. *** megjelenit(txt) *** -> megjeleníti a paraméterben kapott szöveget egy adott html elemben.
3. *** rendez() *** -> a lista megrendezi a listát az adott paraméter szerint és a megrendezett listát visszadja, akkor futt le, amikor rákattintunk a táblázat fejlécére
4. *** szures(lista, keresoSzoveg) *** -> visszért.: szurtLista; akkor fog lefutni, ha a szűrőmezőben változás történik (keyup) -> a listában a név mezőben keres egyezéseket és szűri a listát ez alapján -> filter
5. *** sorBeszur(lista) *** -> visszért.: ujLista; ha a submit gombra kattintunk akkor fut le a függvény, az űrlap adatokat objektumá alakítjuk, majd hozzáadjuk a listához (push)
6. *** torol(lista, index) *** -> törli a lista index-edik sorát, minden sor mellett lesz egy torol ikon, amire kattintva megkapjuk az adott sor indexét és meghívodik a torol függvény