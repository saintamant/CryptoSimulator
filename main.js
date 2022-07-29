
const Criptos = [
  { nombre: "Bitcoin", value:"BTC", APY: 2.3 },
  { nombre: "Ethereum", value:"ETH", APY: 3.55 },
  { nombre: "USDT", value:"USDT", APY: 9.0 },
  { nombre: "DAI", value:"DAI", APY: 5.0 },
  { nombre: "USDC", value:"USDC", APY: 11.0 },
  { nombre: "BNB", value:"BNB", APY: 3.0 },
  { nombre: "Cardano", value:"ADA", APY: 2.0 },
  { nombre: "Polygon", value:"MATIC", APY: 5.0 },
  { nombre: "Solana", value:"SOL", APY: 3.5 },
  { nombre: "Polkadot", value:"DOT", APY: 3.0 }
];


function getInfoCripto(){
  let name = document.getElementById("cripto_elegida").value;
  let cantidad = document.getElementById("cantidad").value;
  let plazo = document.getElementById("plazo").value;

  const Cripto_OK={
    name : name, 
    cantidad : cantidad, 
    plazo : plazo
  }

  return Cripto_OK;
} 

function buscarAPY(cripto){
  let cripto_encontrada =  Criptos.find(valorBuscado => valorBuscado.value == cripto.name ); 
  return cripto_encontrada
}


function valor_aproximado(cripto, cantidad, tiempo) {
  let total = cantidad * Math.pow(1 + cripto.APY / 100, tiempo ) // Interes compuesto
  /* (cripto.APY / 100) * cantidad * tiempo; */ // interes estatico
  return total;
}

function cambiar_text_ganancias(resultado, cripto){
  document.getElementById("ganarias").innerHTML = `${resultado.toFixed(2)} ${cripto}`
}

function cambiar_text_apy(cripto){
  document.getElementById("APY").innerHTML = `${cripto}%`
}

function calcular(){
  let cripto_info = getInfoCripto();
  let cripto_encontrada =  buscarAPY(cripto_info);
  let cuenta = valor_aproximado(cripto_encontrada, cripto_info.cantidad, cripto_info.plazo);
  cambiar_text_ganancias(cuenta, cripto_encontrada.value);
  cambiar_text_apy(cripto_encontrada.APY)
  return cuenta; //a
}


/* aaaaaaaaa */

