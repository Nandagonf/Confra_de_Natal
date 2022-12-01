// Ao clicar no botão
function envia() {

    let entradaNome = document.getElementById('entradaNome').value;
    let radioSim = document.getElementById('radioSim');
    let radioNao = document.getElementById('radioNao');
    let radioPresencial = document.getElementById('radioPresencial');
    let radioDigital = document.getElementById('radioDigital');
    let radioPos = document.getElementById('radioPos');
    let radioShowSim = document.getElementById('radioShowSim');
    let radioShowNao = document.getElementById('radioShowNao');
    let entradaTalento = document.getElementById('entradaTalento').value;
    let radio1 = document.querySelector('input[name="radio1"]:checked').value;
    let radio2 = document.querySelector('input[name="radio2"]:checked');
    let radio3 = document.querySelector('input[name="radio3"]:checked');


    if (entradaNome !== "") {


        if (radio1 === "SIM") {
            let radio2 = document.querySelector('input[name="radio2"]:checked');


            if (radio2 !== null) {
                let radio3 = document.querySelector('input[name="radio3"]:checked');
                radio2 = radio2.value;


                if (radio3 !== null) {
                    if (radio3.value === "SIM") {


                        if (entradaTalento !== "") {
                            presente()
                            reset2()


                        } else {
                            return alert("Insira seu Talento!")
                        }
                    } else {
                        presente()
                        reset2()
                    }
                } else {
                    return alert("Vai participar do Show de Talentos?")
                }
            } else {
                return alert("Selecione seu Setor!")
            }
        } else {
            faltante()
            reset()
            return alert("Escolha Enviada!")
        }
    } else {
        return alert("Insira seu Nome")
    }



    function faltante(validacao) {
        let dataFalt = {
            NOME: entradaNome,
            COMPARECE: radioNao.value
        };
        firebase.database().ref().child('Faltantes').push(dataFalt);
        // console.log(dataFalt)
    }



    function presente(validacao) {
        let dataPres = {
            NOME: entradaNome,
            COMPARECE: radioSim.value,
            PAPSA: radio2.value,
            SHOW_de_TALENTOS: radio3.value,
            TALENTO: entradaTalento

        };
        firebase.database().ref().child('Presentes').push(dataPres);
        // console.log(dataPres)
    }



    function reset() {
        document.getElementById('entradaNome').value = '';
        radioSim.checked = false;
        radioNao.checked = false;
        radioPresencial.checked = false;
        radioDigital.checked = false;
        radioPos.checked = false;
        radioShowSim.checked = false;
        radioShowNao.checked = false;
        document.getElementById('entradaTalento').value = '';
    }

    function reset2() {
        document.getElementById('entradaNome').value = '';
        radioSim.checked = false;
        radioNao.checked = false;
        radioPresencial.checked = false;
        radioDigital.checked = false;
        radioPos.checked = false;
        radioShowSim.checked = false;
        radioShowNao.checked = false;
        document.getElementById('entradaTalento').value = '';
        geralNone.style.display = "none";
        topNone.style.display = "none";
        byeBye.style.display = "block";
    }



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