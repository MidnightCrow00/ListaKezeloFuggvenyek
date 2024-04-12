export function rendez(lista, kulcs, rIrany) {
  const rlista = lista.sort(function (e1, e2) {
    // a return-be negatív vagy pozitív érték kell,
    // a nev szöveges változó, ezért < > értelmezhető
    // ezért kell egy elágazás
    return e1[kulcs] < e2[kulcs] ? -1 * rIrany : 1 * rIrany;
  });

  return rlista;

  //szorgalmi: legyen egy függvény, hogy az ékezetes karaktereket cseréljük ki nem ékezetesre és utána rendezzük. replaceAll()
}
export function szures(lista, keresoSzoveg) {
  const szLista = lista.filter(function (ember) {
    return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szLista;

  //Szorgalmi:
  const szkorLista = lista.filter(function (ember) {
    return ember.kor.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szkorLista;

  const sznemLista = lista.filter(function (ember) {
    return ember.nem.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return sznemLista;
}
