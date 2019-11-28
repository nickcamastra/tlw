let nombreValorList = document.getElementById("entrada").innerHTML.split(/\n/).filter(n => n);
const nombreRE = /[a-z ]+/i; //letras y espacios
const cantidadesRE = /[0-9]* ?[0-9]+/ //numeros

let nombres = nombreValorList.map(nv => {
  if (nv){
   const r= nv.match(nombreRE)[0].trim();
   return r
  }
});

let precios = nombreValorList.map(nv => {
  if (nv){
   const r= nv.match(cantidadesRE)[0].replace(/ /g,'');
   return r
  }
});

document.getElementById("comprayventa").innerHTML = '{| class="wikitable sortable" style="width: 45%;"<br>|-<br>!style="width:18%;"| Nombre !!style="width:7%;"| Valor<br>|-<br>';

for (let i = 0; i < nombres.length; i++) {
document.getElementById("comprayventa").innerHTML += '|' + '[['+ nombres[i] +']]' + '||style="text-align:right;"|' + precios[i] + ' [[gp]]' + '<br>' + '|-<br>';
}
document.write('|}');