const Convertbutton = document.querySelector(".Convert-Button") //mapear o botão
const convertselect = document.querySelector(".convert-select")//mapear select
const convertselect1 = document.querySelector(".converter")//mapear select 1


function convertvalues () {

    const inputcurrencyvalue = document.querySelector(".input-currency").value //pega o valor dentro
    const valorReal = document.querySelector(".Brasil-america")
    const valorDolarEuro = document.querySelector(".America-Brasil")

    console.log(convertselect.value) //pego somente o valor dentro
    console.log(convertselect1.value)

    

    const dolarToday = 5.66  //valor do dolar p/ ser convertido
    const euroToday = 6.08 //valor do euro p/ ser convertido
    const libraToday = 7.20 //valor da libra p/ ser convertido
    const BiticoinToday = 372050.00 //valor da biticoin p/ ser convertido
    const pesoToday = 0.0062 //valor do peso argentino p/ ser convertido


    if(convertselect.value =="Dolar") //Se o select estiver selecionado o valor do dolar,entre aqui 
        {
        valorDolarEuro.innerHTML = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD' }).format(inputcurrencyvalue / dolarToday )
        
}

    if (convertselect.value =="Euro") //Se o select estver selecionado o valor do euro,entre aqui   
        {
        valorDolarEuro.innerHTML = new Intl.NumberFormat('de-ID', { 
            style: 'currency', 
            currency: 'EUR' }).format(inputcurrencyvalue / euroToday  )
        
}


if (convertselect.value =="Libra") //Se o select estiver selecionado o valor do euro,entre aqui   
        {
        valorDolarEuro.innerHTML = new Intl.NumberFormat('en-IN', { 
            style: 'currency', 
            currency: 'GBP' }).format(inputcurrencyvalue / libraToday   )
        
}


if (convertselect.value =="Biticoin") //Se o select estiver selecionado o valor do euro,entre aqui   
        {
        valorDolarEuro.innerHTML = new Intl.NumberFormat('en-IN', { 
            style: 'currency', 
            currency: 'BTC' }).format(inputcurrencyvalue / BiticoinToday  )
        
}

if (convertselect.value =="Peso") //Se o select estiver selecionado o valor do euro,entre aqui   
        {
        valorDolarEuro.innerHTML = new Intl.NumberFormat('en-AR', { 
            style: 'currency', 
            currency: 'ARS' }).format(inputcurrencyvalue / pesoToday  )
        
}

//ACRESCENTANDO MAIS OPÇOES


if (convertselect1.value =="Euro EUR") //Se o select estver selecionado o valor do euro,entre aqui   
        {
            valorReal.innerHTML = new Intl.NumberFormat('de-ID', { 
            style: 'currency', 
            currency: 'EUR' }).format(inputcurrencyvalue / dolarToday)
        
}






const convertvalue = inputcurrencyvalue / dolarToday    //valor convertido de real p/ dollar

    valorReal.innerHTML = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' }).format(inputcurrencyvalue) // valor digitado vai ser = input


    console.log(convertvalue)

    //console.log("botão clicado") //funçao chamada qunado o botão clicado
}

function changecurrency() {
    const currencyname = document.getElementById("americano")
    const currencyimagem = document.querySelector(".imagem")

    if(convertselect.value =="Dolar") {
        currencyname.innerHTML = "Dolar americano"
        //muda o texto do html
        currencyimagem.src = "./assets/Dolar.png"
           
    }

    if (convertselect.value =="Euro") {
        currencyname.innerHTML = "Euro"
        //muda o texto do html
        currencyimagem.src = "./assets/Euro.png"

    }

    if(convertselect.value =="Libra") {
        currencyname.innerHTML = "Libra"
        //muda o texto do html
        currencyimagem.src = "./assets/libra1.png"
           
    }

    if(convertselect.value =="Biticoin") {
        currencyname.innerHTML = "Biticoin"
        //muda o texto do html
        currencyimagem.src = "./assets/biticoin 1.png"
           
    }


    if(convertselect.value =="Peso") {
        currencyname.innerHTML = "Peso Argentino"
        //muda o texto do html
        currencyimagem.src = "./assets/Real.png"
           
    }


    //ACRESCENTANDO MAIS OPÇOES

    if(convertselect1.value =="Dolar EUA") {
        currencyname.innerHTML = "Dolar americano"
        //muda o texto do html
        currencyimagem.src = "./assets/Dolar.png"
           
    }


    convertvalues ()





}


Convertbutton.addEventListener("click",convertvalues) //Ouvir o botão quando clicado
  //eventos

convertselect.addEventListener("change",changecurrency )
                                //mudar


convertselect1.addEventListener("change",converter )
                                //mudar







