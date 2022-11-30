let entradaNome = document.getElementById('entradaNome');
let radioSim = document.getElementById('radioSim');
let radioNao = document.getElementById('radioNao');
let radioPresencial = document.getElementById('radioPresencial');
let radioDigital = document.getElementById('radioDigital');
let radioPos = document.getElementById('radioPos');
let radioShowSim = document.getElementById('radioShowSim');
let radioShowNao = document.getElementById('radioShowNao');
let buttConfirmar = document.getElementById('buttConfirmar');





// Ao clicar no botão
buttConfirmar.addEventListener('click', function () {

    return alert("test")

    // let ingress = document.getElementById("corpIngres2")
    // let buscaJuv = document.getElementById("codJuv").value.toUpperCase();
    // let index = bancoJuv.findIndex(object => {
    //     return object.NOME == buscaJuv;
    // });
    


    // if (buscaJuv == "") {
    //     return alert("Insira seu Nome");

    // } else if(index == -1){
    //     return confirmaZap();

    // }    else {
    //     ingress.style = "display:unset";
    //     document.getElementById("p").innerHTML = bancoJuv[index].PNOME + " " +  bancoJuv[index].SNOME;
    // }

    // create(codJuv.value);


    // function create(validacao) {
    //     let data = {
    //         cont: "DOWNLOAD",
    //     };

    //     let cont = {
    //         INDEX: index,
    //         NOME: bancoJuv[index].NOME ,            
    //     };

    //     firebase.database().ref().child(index).push(data);
    //     firebase.database().ref().child('BOLSA').push(cont);
    // }



    // document.getElementById("codJuv").value = '';

});