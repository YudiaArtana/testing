function nama(){
  namalengkap = "Yudia Artana"
  return namalengkap;
}

function namalengkaplagi(tes){
  nana = nama();
  a = nana + tes
  return a;
}

console.log(nama(), "dan", namalengkaplagi("hahah"))
let a = (s) => {
  persegi = s * s;
  return persegi;
}

let b = (p, l) => {
  perpan = p * l;
  return perpan;
}

console.log(a(10), "dan", b(10, 5))
