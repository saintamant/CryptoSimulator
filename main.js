
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


function datosSession(){
  let name = document.getElementById("cripto_elegida").value;
  let cantidad = document.getElementById("cantidad").value;
  let plazo = document.getElementById("plazo").value;

  const Cripto={
    name : name, 
    cantidad : cantidad, 
    plazo : plazo
  }

  
  return sessionStorage.setItem('data', JSON.stringify(Cripto));
}



function calcular(){
  let cripto_info = getInfoCripto();
  let cripto_encontrada =  buscarAPY(cripto_info);
  let cuenta = valor_aproximado(cripto_encontrada, cripto_info.cantidad, cripto_info.plazo);
  cambiar_text_ganancias(cuenta, cripto_encontrada.value);
  cambiar_text_apy(cripto_encontrada.APY)
  datosSession();
  return cuenta; 
}

//live hour
let horaArg = formatAMPMArg(new Date);

let horaEeuu = formatAMPMEeuu(new Date);


function formatAMPMEeuu(date) {
    var hours = date.getHours() - 1;
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime ;
  }

function formatAMPMArg(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime ;
  }


 addEventListener("load",function liveHour(){
    document.getElementById("hourbsas").innerHTML = horaArg;
    document.getElementById("hour").innerHTML = horaEeuu;
    
})
//live hour

//map

var map = L.map('map').setView([6.5813629,-75.9159491], 2); //central


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  


L.marker([39.455085, -75.725542], {icon: violetIcon}).addTo(map)
    .bindPopup('Middletown, DE 651 N Broad St, Ste 205 #8839')
    
    

L.marker([-34.6193485, -58.3632725], {icon: violetIcon}).addTo(map)
.bindPopup('Buenos Aires, ARG Lola Mora 421 , Puerto Madero')




//api
let endpoint = 'https://www.binance.me/api/v3/ticker/price?symbols=[%22ETHUSDT%22,%22BTCUSDT%22,%22SOLUSDT%22,%22DAIUSDT%22,%22USDCUSDT%22,%22BNBUSDT%22,%22ADAUSDT%22,%22MATICUSDT%22,%22DOTUSDT%22]'

fetch(endpoint)
    .then( respuesta => respuesta.json() )
    .then( datos => mostrarData(datos))
    .catch( e => console.log(e))


const mostrarData = (data)=>{
    console.log(data)
    let test = "";
    for (let i=0; i < data.length; i++) {
        let crypto_name = data[i].symbol.substring(0, data[i].symbol.length - 4);
        let crypto_price = data[i].price;
        var theDot = crypto_price.indexOf(".");
        var formatedPrice = crypto_price.substr(0, theDot+3);
        test += `<tr>
                <td>${crypto_name}</td>
                <td>$${formatedPrice}</td>
                </tr>`
    }
    document.getElementById('data2').innerHTML = test
}    