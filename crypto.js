/* let endpoint = 'https://www.binance.me/api/v3/ticker/price?symbols=[%22ETHUSDT%22,%22BTCUSDT%22,%22SOLUSDT%22,%22DAIUSDT%22,%22USDCUSDT%22,%22BNBUSDT%22,%22ADAUSDT%22,%22MATICUSDT%22,%22DOTUSDT%22]'

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
}     */