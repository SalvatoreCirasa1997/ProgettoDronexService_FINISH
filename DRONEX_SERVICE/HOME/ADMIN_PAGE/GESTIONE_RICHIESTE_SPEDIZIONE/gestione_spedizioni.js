//FUNZIONE PER CARICARE LE RICHIESTE DI SPEDIZIONE DAL DB
let i=0;

function caricaSpedizioni(json){

    if (!json){
        const spedizione = document.querySelector('#Richieste_ricevute');
        const no_spedizioni = document.createElement('h2');
        no_spedizioni.classList.add('nessuna_spedizione');
        no_spedizioni.textContent = 'Nessuna richiesta di spedizione ricevuta';
        spedizione.appendChild(no_spedizioni);
         return null;
        } 

    const spedizione = document.querySelector('#Richieste_ricevute');
    spedizione.style.height = '1000px';

    for(elemento of json){
        if(elemento.stato==0){
        const div = document.createElement('div');
        div.classList.add('container_spedizione');

        const div_codice = document.createElement('div');
        div_codice.classList.add('container_codice');

        const codice = document.createElement('p');
        codice.textContent = elemento.codice_spedizione;
        codice.classList.add('text');

        const div_id = document.createElement('div');
        div_id.classList.add('container_id');

        const id_cliente = document.createElement('p');
        id_cliente.textContent = "Codice ID cliente : " + elemento.id_mittente;
        id_cliente.classList.add('text_elem');

        const div_data = document.createElement('div');
        div_data.classList.add('container_data');

        const data = document.createElement('p');
        data.textContent = "Richiesta di spedizione ricevuta il : " + elemento.data_spedizione;
        data.classList.add('text_elem');

        const div_button1 = document.createElement('div');
        div_button1.classList.add('container_button1');
        
        const button1 = document.createElement('button');
        button1.textContent = "Annulla richiesta di spedizione";
        button1.classList.add('button1');

        const div_button2 = document.createElement('div');
        div_button2.classList.add('container_button2');
        
        const button2 = document.createElement('button');
        button2.textContent = "Conferma richiesta di spedizione";
        button2.classList.add('button2');

        const drone_name = document.createElement('p');
        drone_name.textContent = elemento.drone_Spedizione;
        drone_name.classList.add('hidden1');

        div_button1.appendChild(button1);
        div_button2.appendChild(button2);
        div_data.appendChild(data);
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

        else if(elemento.stato==1){
            const div = document.createElement('div');
            div.classList.add('container_spedizione');
        
            const div_codice = document.createElement('div');
            div_codice.classList.add('container_codice');
        
            const codice = document.createElement('p');
            codice.textContent = elemento.codice_spedizione;
            codice.classList.add('text');
        
            const div_id = document.createElement('div');
            div_id.classList.add('container_id');
        
            const id_cliente = document.createElement('p');
            id_cliente.textContent = "Codice ID cliente : " + elemento.id_mittente;
            id_cliente.classList.add('text_elem');
            const drone_name = document.createElement('p');
            drone_name.textContent = elemento.drone_Spedizione;
            drone_name.classList.add('hidden1');
    
            const div_request = document.createElement('div');
            div_request.classList.add('container_request');
                
            const request = document.createElement('p');
            request.textContent = "In attesa di ritiro.." ;
            request.classList.add('text_elem8');   
    
            const div_button4 = document.createElement('div');
            div_button4.classList.add('container_button4');
            
            const button4 = document.createElement('button');
            button4.textContent = "Avvia";
            button4.classList.add('button4');
    
            div_button4.appendChild(button4);
            div_codice.appendChild(codice);
            div_id.appendChild(id_cliente);
            div_request.appendChild(request);
            div.appendChild(div_id);
            div.appendChild(div_codice);
            div.appendChild(div_request);
            div.appendChild(drone_name);
            div.appendChild(div_button4);
            spedizione.appendChild(div);
            i++;
    
            check_spedizioni();
            }

            else if(elemento.stato==5){
                const div = document.createElement('div');
                div.classList.add('container_spedizione');
            
                const div_codice = document.createElement('div');
                div_codice.classList.add('container_codice');
            
                const codice = document.createElement('p');
                codice.textContent = elemento.codice_spedizione;
                codice.classList.add('text');
            
                const div_id = document.createElement('div');
                div_id.classList.add('container_id');
            
                const id_cliente = document.createElement('p');
                id_cliente.textContent = "Codice ID cliente : " + elemento.id_mittente;
                id_cliente.classList.add('text_elem');
                const drone_name = document.createElement('p');
                drone_name.textContent = elemento.drone_Spedizione;
                drone_name.classList.add('hidden1');
        
                const div_request = document.createElement('div');
                div_request.classList.add('container_request');
                    
                const request = document.createElement('p');
                request.textContent = "In attesa di ritiro.." ;
                request.classList.add('text_elem8');   
        
                const div_button5 = document.createElement('div');
                div_button5.classList.add('container_button4');
                
                const button5 = document.createElement('button');
                button5.textContent = "Avvia";
                button5.classList.add('button4');
        
                div_button5.appendChild(button5);
                div_codice.appendChild(codice);
                div_id.appendChild(id_cliente);
                div_request.appendChild(request);
                div.appendChild(div_id);
                div.appendChild(div_codice);
                div.appendChild(div_request);
                div.appendChild(drone_name);
                div.appendChild(div_button5);
                spedizione.appendChild(div);
                i++;
        
                check_spedizioni();
                }

        else if(elemento.stato==6){
        const div = document.createElement('div');
        div.classList.add('container_spedizione');
    
        const div_codice = document.createElement('div');
        div_codice.classList.add('container_codice');
    
        const codice = document.createElement('p');
        codice.textContent = elemento.codice_spedizione;
        codice.classList.add('text');
    
        const div_id = document.createElement('div');
        div_id.classList.add('container_id');
    
        const id_cliente = document.createElement('p');
        id_cliente.textContent = "Codice ID cliente : " + elemento.id_mittente;
        id_cliente.classList.add('text_elem');
        const drone_name = document.createElement('p');
        drone_name.textContent = elemento.drone_Spedizione;
        drone_name.classList.add('hidden1');

        const div_request = document.createElement('div');
        div_request.classList.add('container_request');
            
        const request = document.createElement('p');
        request.textContent = "Ritiro del pacco in corso presso il mittente...";
        request.classList.add('text_elem5');   

        div_codice.appendChild(codice);
        div_id.appendChild(id_cliente);
        div_request.appendChild(request);
        div.appendChild(div_id);
        div.appendChild(div_codice);
        div.appendChild(div_request);
        div.appendChild(drone_name);
        spedizione.appendChild(div);
        i++;

        check_spedizioni();
        }

        else if(elemento.stato==7){
        const div = document.createElement('div');
        div.classList.add('container_spedizione');
    
        const div_codice = document.createElement('div');
        div_codice.classList.add('container_codice');
    
        const codice = document.createElement('p');
        codice.textContent = elemento.codice_spedizione;
        codice.classList.add('text');
    
        const div_id = document.createElement('div');
        div_id.classList.add('container_id');
    
        const id_cliente = document.createElement('p');
        id_cliente.textContent = "Codice ID cliente : " + elemento.id_mittente;
        id_cliente.classList.add('text_elem');
        const drone_name = document.createElement('p');
        drone_name.textContent = elemento.drone_Spedizione;
        drone_name.classList.add('hidden1');

        
        const div_request = document.createElement('div');
        div_request.classList.add('container_request');
            
        const request = document.createElement('p');
        request.textContent = "Il drone è in transito...";
        request.classList.add('text_elem6');   

        div_codice.appendChild(codice);
        div_id.appendChild(id_cliente);
        div_request.appendChild(request);
        div.appendChild(div_id);
        div.appendChild(div_codice);
        div.appendChild(div_request);
        div.appendChild(drone_name);
        spedizione.appendChild(div);
        i++;

        check_spedizioni();
        }

        else if(elemento.stato==8){
        const div = document.createElement('div');
        div.classList.add('container_spedizione');
    
        const div_codice = document.createElement('div');
        div_codice.classList.add('container_codice');
    
        const codice = document.createElement('p');
        codice.textContent = elemento.codice_spedizione;
        codice.classList.add('text');
    
        const div_id = document.createElement('div');
        div_id.classList.add('container_id');
    
        const id_cliente = document.createElement('p');
        id_cliente.textContent = "Codice ID cliente : " + elemento.id_mittente;
        id_cliente.classList.add('text_elem');
        const drone_name = document.createElement('p');
        drone_name.textContent = elemento.drone_Spedizione;
        drone_name.classList.add('hidden1');

        
        const div_request = document.createElement('div');
        div_request.classList.add('container_request');
            
        const request = document.createElement('p');
        request.textContent = "Pacco consegnato correttamente alle seguenti coordinate: lat: "+elemento.latitudine+ " , lon: "+elemento.longitudine;
        request.classList.add('text_elem7');   

        div_codice.appendChild(codice);
        div_id.appendChild(id_cliente);
        div_request.appendChild(request);
        div.appendChild(div_id);
        div.appendChild(div_codice);
        div.appendChild(div_request);
        div.appendChild(drone_name);
        spedizione.appendChild(div);
        i++;

        check_spedizioni();
        }

        else if(elemento.stato==9){
        const div = document.createElement('div');
        div.classList.add('container_spedizione');
    
        const div_codice = document.createElement('div');
        div_codice.classList.add('container_codice');
    
        const codice = document.createElement('p');
        codice.textContent = elemento.codice_spedizione;
        codice.classList.add('text');
    
        const div_id = document.createElement('div');
        div_id.classList.add('container_id');
    
        const id_cliente = document.createElement('p');
        id_cliente.textContent = "Codice ID cliente : " + elemento.id_mittente;
        id_cliente.classList.add('text_elem');
        const drone_name = document.createElement('p');
        drone_name.textContent = elemento.drone_Spedizione;
        drone_name.classList.add('hidden1');

        const div_request = document.createElement('div');
        div_request.classList.add('container_request');
            
        const request = document.createElement('p');
        request.textContent = "drone rientrato correttamente.." ;
        request.classList.add('text_elem8');   

        const div_button3 = document.createElement('div');
        div_button3.classList.add('container_button3');
        
        const button3 = document.createElement('button');
        button3.textContent = "Conferma consegna al mittente";
        button3.classList.add('button3');

        div_button3.appendChild(button3);
        div_codice.appendChild(codice);
        div_id.appendChild(id_cliente);
        div_request.appendChild(request);
        div.appendChild(div_id);
        div.appendChild(div_codice);
        div.appendChild(div_request);
        div.appendChild(drone_name);
        div.appendChild(div_button3);
        spedizione.appendChild(div);
        i++;

        check_spedizioni();
        }
    }
}

function check_spedizioni(){
    
    if(i==0){
        const spedizione = document.querySelector('#Richieste_ricevute');
        const no_spedizioni = document.createElement('h2');
        no_spedizioni.classList.add('nessuna_spedizione');
        no_spedizioni.textContent = 'Nessuna Richiesta di spedizione in sospeso';
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

//FUNZIONE MODIFICA STATO "SPEDIZIONE ACCETTATA" NEL DB

function Modifica_Spedizione_accettata(event){
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
    request.textContent = "Conferma della richiesta di spedizione inoltrato al cliente";
    request.classList.add('text_elem2');
    div_request.appendChild(request);
    box.appendChild(div_request);

    const codice = box.querySelector('.text').textContent;
    const formdata = new FormData();
    formdata.append('codice_spedizione',codice);
    fetch('conferma_spedizione.php', {method:'post',body:formdata});
    
    const drone = box.querySelector('.hidden1').textContent;
    const formdata2 = new FormData();
    formdata2.append('nome_drone',drone);
    fetch('aggiorna_status_droni.php', {method:'post',body:formdata2});
    fetch('aggiorna_data_spedizione.php',{method:'post',body:formdata});

    check_spedizioni();
    }

function sel_spedizione1(){
const Tutte_le_spedizioni = document.querySelectorAll(".button2");
for(spedizione of Tutte_le_spedizioni){
    spedizione.addEventListener('click',Modifica_Spedizione_accettata);
}
}

setTimeout(sel_spedizione1, 100);

//FUNZIONE MODIFICA STATO "SPEDIZIONE RIFIUTATA" NEL DB

function Modifica_Spedizione_rifiutata(event){
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
    request.textContent = "Rifiuto della richiesta di spedizione inoltrato al cliente";
    request.classList.add('text_elem3');
    div_request.appendChild(request);
    box.appendChild(div_request);

    const codice = box.querySelector('.text').textContent;
    const formdata = new FormData();
    formdata.append('codice_spedizione',codice);
    fetch('rifiuta_spedizione.php', {method:'post',body:formdata});
    fetch('aggiorna_data_spedizione.php',{method:'post',body:formdata});
    check_spedizioni();
    }

function sel_spedizione2(){
const Tutte_le_spedizioni = document.querySelectorAll(".button1");
for(spedizione of Tutte_le_spedizioni){
    spedizione.addEventListener('click',Modifica_Spedizione_rifiutata);
}
}

setTimeout(sel_spedizione2, 100);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

//FUNZIONI AVVIO SPEDIZIONE

function AggiornaSpedizioneAccettataDalDatabase(event) {
    console.log("click di "+event);
    const button = event.currentTarget;
    const button_box = button.parentNode;
    const box = button_box.parentNode;
    button.classList.remove('button4');
    button_box.classList.remove('container_button4');
    button.classList.add('hidden');
    button_box.classList.add('hidden');

    const text = box.querySelector('.text_elem8');
    text.textContent="Ritiro del pacco in corso presso il mittente...";
    text.classList.remove('text_elem8');
    text.classList.add('text_elem5');

    const codice_spedizione = box.querySelector('.text').textContent;
    const formdata = new FormData();
    formdata.append('codice_spedizione',codice_spedizione);
    fetch('avvia_spedizione.php', {method:'post',body:formdata});
  }
  
function avvia_sped(){
    const Tutti_gli_avvii = document.querySelectorAll(".button4");
    for(avvia of Tutti_gli_avvii){
        avvia.addEventListener('click',AggiornaSpedizioneAccettataDalDatabase);
    }
    }
    
    setTimeout(avvia_sped, 100);


//FUNZIONE CONCLUDI SPEDIZIONE
function AggiornaFineSpedizioneNelDatabase(event) {
    const button = event.currentTarget;
    const button_box = button.parentNode;
    const box = button_box.parentNode;
    const codice_spedizione = box.querySelector('.text').textContent;
    const formdata = new FormData();
    formdata.append('codice_spedizione',codice_spedizione);
    fetch('rimuovi_spedizione.php', {method:'post',body:formdata});
    box.classList.add('hidden');
    const drone = box.querySelector('.hidden1').textContent;
    const formdata2 = new FormData();
    formdata2.append('nome_drone',drone);
    fetch('aggiorna_status_droni2.php', {method:'post',body:formdata2});
  }
  
function concludi_sped(){
    const fine_sped = document.querySelectorAll(".button3");
    for(fine of fine_sped){
        fine.addEventListener('click',AggiornaFineSpedizioneNelDatabase);
    }
    }
    
    setTimeout(concludi_sped, 100);


//FUNZIONE AGGIORNA SPEDIZIONE ACCETTATA TUTTI I VARI STEP


function AggiornaSpedizione() {
    const status9 = document.querySelector('.text_elem7');
    const status8 = document.querySelector('.text_elem6');
    const status5 = document.querySelector('.text_elem5');

    if(status9){
        const box_status= status9.parentNode;
        const box=box_status.parentNode;
        status9.textContent="drone rientrato correttamente..";  
        status9.classList.remove('text_elem7');
        status9.classList.add('text_elem8');
        const codice = box.querySelector('.text').textContent;
        const formdata = new FormData();
        formdata.append('codice_spedizione',codice);
        fetch('modifica_spedizione9.php', {method:'post',body:formdata});
        const div_button3 = document.createElement('div');
        div_button3.classList.add('container_button3');
        
        const button3 = document.createElement('button');
        button3.textContent = "Conferma consegna al mittente";
        button3.classList.add('button3');

        div_button3.appendChild(button3);
        box.appendChild(div_button3);

        check_spedizioni();
    }
        

    if(status8){
    const box_status= status8.parentNode;
    const box=box_status.parentNode;
    status8.textContent="Pacco consegnato correttamente al destinatario, aggiorna la pagina per visualizzare le coordinate..";  
    status8.classList.remove('text_elem6');
    status8.classList.add('text_elem7');
    const codice = box.querySelector('.text').textContent;
    const formdata = new FormData();
    formdata.append('codice_spedizione',codice);
    fetch('modifica_spedizione8.php', {method:'post',body:formdata});
    check_spedizioni();
    }

    if(status5){
        const box_status= status5.parentNode;
        const box=box_status.parentNode;
        status5.textContent="Il drone è in transito...";  
        status5.classList.remove('text_elem5');
        status5.classList.add('text_elem6');
        const codice = box.querySelector('.text').textContent;

        const formdata = new FormData();
        formdata.append('codice_spedizione',codice);
        fetch('modifica_spedizione5.php', {method:'post',body:formdata});

        check_spedizioni();
        }
    
  }
   
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  const minimo = 10000;
  const massimo = 30000;
  
  const intervalloDiTempo = generaNumeroCasuale(minimo, massimo);  
  
  setInterval(AggiornaSpedizione, intervalloDiTempo);








//FUNZIONE DI CHECK GENERALE DELLE FETCH EFFETTUATE
function onResponse(response){
    if(!response.ok){
        console.log('Risposta non valida');
        return null;
    }else return response.json();
}