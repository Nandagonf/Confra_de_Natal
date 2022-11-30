


// Ao clicar no botão
function envia() {

    let entradaNome = document.getElementById('entradaNome').value;
    let radioSim = document.getElementById('radioSim');
    let radioNao = document.getElementById('radioNao');
    let radioPresencial = document.getElementById('radioPresencial').value;
    let radioDigital = document.getElementById('radioDigital').value;
    let radioPos = document.getElementById('radioPos').value;
    let radioShowSim = document.getElementById('radioShowSim').value;
    let radioShowNao = document.getElementById('radioShowNao').value;
    let entradaTalento = document.getElementById('entradaTalento').value;



console.log(radioSim)
console.log(radioNao)



    if (entradaNome === "") {
        return alert("Insira seu Nome");

    } else if (radioNao.checked) {
        faltante(entradaNome, radioNao);
        document.getElementById('entradaNome').value = "";
        return alert("Resposta Salva!");

    } else if (radioSim.checked){
        return alert("SIM!");
    }


    function faltante(validacao) {
        let cont = {
            NOME: entradaNome,
            COMPARECE: radioNao
        };

        firebase.database().ref().child('Faltantes').push(cont);
    }

    // presente();


    // function presente(validacao) {
    //     let data = {
    //         cont: "DOWNLOAD",
    //     };

    //     let cont = {
    //         INDEX: index,
    //         NOME: bancoJuv[index].NOME,
    //     };

    //     firebase.database().ref().child(index).push(data);
    // }



};



//Abre/fecha blocos
function yes() {
    let entradaNome = document.getElementById('entradaNome').value;
    let radioSim = document.getElementById('radioSim');

    if (entradaNome === "") {
        radioSim.checked = false;
        return alert("Insira seu Nome");
    } else {
        bloco2.style.display = "block";
    }
}

function no() {
    bloco2.style.display = "none";
}

function yes2() {
    bloco2cont.style.display = "block";
}

function no2() {
    bloco2cont.style.display = "none";
}