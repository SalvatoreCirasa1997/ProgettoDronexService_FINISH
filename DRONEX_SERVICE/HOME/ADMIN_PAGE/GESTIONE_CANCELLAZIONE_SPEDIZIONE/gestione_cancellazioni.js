//FUNZIONE PER CARICARE LE RICHIESTE DI SPEDIZIONE DAL DB
let i=0;

function caricaSpedizioni(json){

    if (!json){
        const spedizione = document.querySelector('#Richieste_ricevute');
        const no_spedizioni = document.createElement('h2');
        no_spedizioni.classList.add('nessuna_spedizione');
        no_spedizioni.textContent = 'Nessuna richiesta di cancellazione ricevuta';
        spedizione.appendChild(no_spedizioni);
         return null;
        } 

    const spedizione = document.querySelector('#Richieste_ricevute');
    spedizione.style.height = '1000px';
    console.log(json);
    for(elemento of json){
        const div = document.createElement('div');
        div.classList.add('container_spedizione');

        const div_codice = document.createElement('div');
        div_codice.classList.add('container_codice');

        const testo = document.createElement('p');
        testo.textContent = "Richiesta di cancellazione per la spedizione con codice : " ;
        testo.classList.add('text');
        const codice =document.createElement('p');
        codice.textContent = elemento.codice_spedizione;
        codice.classList.add('codice');

        const div_id = document.createElement('div');
        div_id.classList.add('container_id');

        const id_cliente = document.createElement('p');
        id_cliente.textContent = "Codice ID cliente : " + elemento.id_mittente;
        id_cliente.classList.add('text_elem');

        const div_data = document.createElement('div');
        div_data.classList.add('container_data');

        const data = document.createElement('p');
        data.textContent = "Richiesta di spedizione effettuata il : " + elemento.data_spedizione;
        data.classList.add('text_elem');

        const div_button1 = document.createElement('div');
        div_button1.classList.add('container_button1');
        
        const button1 = document.createElement('button');
        button1.textContent = "Rifiuta richiesta di cancellazione";
        button1.classList.add('button1');

        const div_button2 = document.createElement('div');
        div_button2.classList.add('container_button2');
        
        const button2 = document.createElement('button');
        button2.textContent = "Approva richiesta di cancellazione";
        button2.classList.add('button2');

        const drone_name = document.createElement('p');
        drone_name.textContent = elemento.drone_Spedizione;
        drone_name.classList.add('hidden1');

        div_button1.appendChild(button1);
        div_button2.appendChild(button2);
        div_data.appendChild(data);
        div_codice.appendChild(testo);
        div_codice.appendChild(codice);
        div_id.appendChild(id_cliente);
        div.appendChild(div_id);
        div.appendChild(div_codice);
        div.appendChild(div_data);
        div.appendChild(div_button1);
        div.appendChild(div_button2);
        div.appendChild(drone_name);
        spedizione.appendChild(div);
        i++;

        check_spedizioni();
        }
}

function check_spedizioni(){
    
    if(i==0){
        const spedizione = document.querySelector('#Richieste_ricevute');
        const no_spedizioni = document.createElement('h2');
        no_spedizioni.classList.add('nessuna_spedizione');
        no_spedizioni.textContent = 'Nessuna Richiesta di cancellazione in sospeso';
        spedizione.appendChild(no_spedizioni);
        spedizione.style.height = '400px';
    }
    else if(i==2){
        const spedizione = document.querySelector('#Richieste_ricevute');
        spedizione.style.height = '1200px';
    }
    else if(i==3){
        const spedizione = document.querySelector('#Richieste_ricevute');
        spedizione.style.height = '1500px';
    }
    else if(i>4){
        const spedizione = document.querySelector('#Richieste_ricevute');
        spedizione.style.height = '2300px';
    }
}

fetch("caricaSpedizioni.php").then(onResponse).then(caricaSpedizioni);

/*------------------------------------------------------------------------------------------------------------------------------------*/

//FUNZIONE MODIFICA STATO "CANCELLAZIONE ACCETTATA" NEL DB

function Modifica_Spedizione_cancellata(event){
    const pulsante = event.currentTarget; 
    pulsante.classList.add("hidden");

    const container_button2 = pulsante.parentNode;
    container_button2.classList.add("hidden");

    const box = container_button2.parentNode;

    const container_button1 = box.querySelector('.container_button1');
    container_button1.classList.add("hidden");

    const button1= box.querySelector('.button1');
    button1.classList.add("hidden");

    const div_request = document.createElement('div');
    div_request.classList.add('container_request');
    const request = document.createElement('p');
    request.textContent = "Conferma della richiesta di cancellazione inoltrata al cliente";
    request.classList.add('text_elem2');
    div_request.appendChild(request);
    box.appendChild(div_request);

    const codice = box.querySelector('.codice').textContent;
    const formdata = new FormData();
    formdata.append('codice_spedizione',codice);
    fetch('conferma_cancellazione.php', {method:'post',body:formdata});
    check_spedizioni();
    }

function sel_spedizione1(){
const Tutte_le_spedizioni = document.querySelectorAll(".button2");
for(spedizione of Tutte_le_spedizioni){
    spedizione.addEventListener('click',Modifica_Spedizione_cancellata);
}
}

setTimeout(sel_spedizione1, 100);

//FUNZIONE MODIFICA STATO "CANCELLAZIONE RIFIUTATA" NEL DB

function Modifica_Spedizione_non_cancellata(event){
    const pulsante = event.currentTarget; 
    pulsante.classList.add("hidden");

    const container_button1 = pulsante.parentNode;
    container_button1.classList.add("hidden");

    const box = container_button1.parentNode;

    const container_button2 = box.querySelector('.container_button2');
    container_button2.classList.add("hidden");

    const button2= box.querySelector('.button2');
    button2.classList.add("hidden");

    const div_request = document.createElement('div');
    div_request.classList.add('container_request');
    const request = document.createElement('p');
    request.textContent = "Rifiuto della richiesta di cancellazione inoltrata al cliente";
    request.classList.add('text_elem3');
    div_request.appendChild(request);
    box.appendChild(div_request);

    const codice = box.querySelector('.codice').textContent;
    const formdata = new FormData();
    formdata.append('codice_spedizione',codice);
    fetch('rifiuta_cancellazione.php', {method:'post',body:formdata});

    const drone = box.querySelector('.hidden1').textContent;
    const formdata2 = new FormData();
    formdata2.append('nome_drone',drone);
    fetch('../GESTIONE_RICHIESTE_SPEDIZIONE/aggiorna_status_droni.php', {method:'post',body:formdata2});
    fetch('../GESTIONE_RICHIESTE_SPEDIZIONE/aggiorna_data_spedizione.php',{method:'post',body:formdata});
    check_spedizioni();
    }

function sel_spedizione2(){
const Tutte_le_spedizioni = document.querySelectorAll(".button1");
for(spedizione of Tutte_le_spedizioni){
    spedizione.addEventListener('click',Modifica_Spedizione_non_cancellata);
}
}

setTimeout(sel_spedizione2, 100);



//FUNZIONE DI CHECK GENERALE DELLE FETCH EFFETTUATE
function onResponse(response){
    if(!response.ok){
        console.log('Risposta non valida');
        return null;
    }else return response.json();
}