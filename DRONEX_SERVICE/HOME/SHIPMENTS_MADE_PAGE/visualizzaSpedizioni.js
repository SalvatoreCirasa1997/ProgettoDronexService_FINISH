//FUNZIONE PER CARICARE LE MIE SPEDIZIONI DAL DB
let i=0;

function caricaSpedizioni(json){
    if (!json){
        const spedizione = document.querySelector('#spedizioni_effettuate');
        const no_spedizioni = document.createElement('h2');
        no_spedizioni.classList.add('nessuna_spedizione');
        no_spedizioni.textContent = 'Nessuna Spedizione Effettuata';
        spedizione.appendChild(no_spedizioni);
         return null;
        } 

        const spedizione = document.querySelector('#spedizioni_effettuate');
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

        const div_nome_cognome = document.createElement('div');
        div_nome_cognome.classList.add('container_nome_cognome');

        const nome_cognome = document.createElement('p');
        nome_cognome.textContent = "Destinatario : " + elemento.nome_dest + "  " + elemento.cognome_dest;
        nome_cognome.classList.add('text_elem');

        const div_città_data = document.createElement('div');
        div_città_data.classList.add('container_città_data');

        const città_data = document.createElement('p');
        città_data.textContent = "Città di destinazione : " + elemento.città_dest + ", Richiesta inoltrata il : " + elemento.data_spedizione;
        città_data.classList.add('text_elem');

        const div_button = document.createElement('div');
        div_button.classList.add('container_button');
        
        const button = document.createElement('button');
        button.textContent = "Annulla spedizione";
        button.classList.add('button');


        div_button.appendChild(button);
        div_città_data.appendChild(città_data);
        div_codice.appendChild(codice);
        div_nome_cognome.appendChild(nome_cognome);
        div.appendChild(div_nome_cognome);
        div.appendChild(div_codice);
        div.appendChild(div_città_data);
        div.appendChild(div_button);
        spedizione.appendChild(div);
        i++;

        check_spedizioni();
        }

        else if(elemento.stato==1 || elemento.stato==6 || elemento.stato==7 || elemento.stato==8 || elemento.stato==9){
            const div = document.createElement('div');
            div.classList.add('container_spedizione');
    
            const div_codice = document.createElement('div');
            div_codice.classList.add('container_codice');
    
            const codice = document.createElement('p');
            codice.textContent = elemento.codice_spedizione;
            codice.classList.add('text');
    
            const div_nome_cognome = document.createElement('div');
            div_nome_cognome.classList.add('container_nome_cognome');
    
            const nome_cognome = document.createElement('p');
            nome_cognome.textContent = "Destinatario : " + elemento.nome_dest + "  " + elemento.cognome_dest;
            nome_cognome.classList.add('text_elem');
    
            const div_città_data = document.createElement('div');
            div_città_data.classList.add('container_città_data');
    
            const città_data = document.createElement('p');
            città_data.textContent = "Città di destinazione : " + elemento.città_dest + ", Approvato il : " + elemento.data_spedizione;
            città_data.classList.add('text_elem');

            const div_request = document.createElement('div');
            div_request.classList.add('container_request');

            const request = document.createElement('p');
            request.textContent = "L'amministratore ha approvato la tua spedizione";
            request.classList.add('text_elem1');    
    
            div_città_data.appendChild(città_data);
            div_request.appendChild(request);
            div_codice.appendChild(codice);
            div_nome_cognome.appendChild(nome_cognome);
            div.appendChild(div_nome_cognome);
            div.appendChild(div_request);
            div.appendChild(div_codice);
            div.appendChild(div_città_data);
            spedizione.appendChild(div);
            i++;
    
            check_spedizioni();
            }

            else if(elemento.stato==3){
                const div = document.createElement('div');
                div.classList.add('container_spedizione');
        
                const div_codice = document.createElement('div');
                div_codice.classList.add('container_codice');
        
                const codice = document.createElement('p');
                codice.textContent = elemento.codice_spedizione;
                codice.classList.add('text');
        
                const div_nome_cognome = document.createElement('div');
                div_nome_cognome.classList.add('container_nome_cognome');
        
                const nome_cognome = document.createElement('p');
                nome_cognome.textContent = "Destinatario : " + elemento.nome_dest + "  " + elemento.cognome_dest;
                nome_cognome.classList.add('text_elem');
        
                const div_città_data = document.createElement('div');
                div_città_data.classList.add('container_città_data');
        
                const città_data = document.createElement('p');
                città_data.textContent = "Città di destinazione : " + elemento.città_dest + ", Richiesta inoltrata il : " + elemento.data_spedizione;
                città_data.classList.add('text_elem');
    
                const div_request = document.createElement('div');
                div_request.classList.add('container_request');
    
                const request = document.createElement('p');
                request.textContent = "L'amministratore non ha approvato la tua spedizione";
                request.classList.add('text_elem3');    

                const rimuovi_notifica = document.createElement('img');
                rimuovi_notifica.classList.add('notifica_img');
                rimuovi_notifica.src='/DRONEX_SERVICE/img/cancella.png';
        
                div_città_data.appendChild(città_data);
                div_request.appendChild(request);
                div_codice.appendChild(codice);
                div_nome_cognome.appendChild(nome_cognome);
                div.appendChild(div_nome_cognome);
                div.appendChild(div_request);
                div.appendChild(div_codice);
                div.appendChild(div_città_data);
                div.appendChild(rimuovi_notifica);
                spedizione.appendChild(div);
                i++;
        
                check_spedizioni();
                }

        else if(elemento.stato==2){
                const div = document.createElement('div');
                div.classList.add('container_spedizione');
        
                const div_codice = document.createElement('div');
                div_codice.classList.add('container_codice');
        
                const codice = document.createElement('p');
                codice.textContent = elemento.codice_spedizione;
                codice.classList.add('text');
        
                const div_nome_cognome = document.createElement('div');
                div_nome_cognome.classList.add('container_nome_cognome');
        
                const nome_cognome = document.createElement('p');
                nome_cognome.textContent = "Destinatario : " + elemento.nome_dest + "  " + elemento.cognome_dest;
                nome_cognome.classList.add('text_elem');
        
                const div_città_data = document.createElement('div');
                div_città_data.classList.add('container_città_data');
        
                const città_data = document.createElement('p');
                città_data.textContent = "Città di destinazione : " + elemento.città_dest + ", Spedizione richiesta il : " + elemento.data_spedizione;
                città_data.classList.add('text_elem');
    
                const div_request = document.createElement('div');
                div_request.classList.add('container_request');
    
                const request = document.createElement('p');
                request.textContent = "Annullamento della richiesta di spedizione inoltrato";
                request.classList.add('text_elem2');
        
                div_città_data.appendChild(città_data);
                div_request.appendChild(request);
                div_codice.appendChild(codice);
                div_nome_cognome.appendChild(nome_cognome);
                div.appendChild(div_nome_cognome);
                div.appendChild(div_request);
                div.appendChild(div_codice);
                div.appendChild(div_città_data);
                spedizione.appendChild(div);
                i++;
        
                check_spedizioni();
            }

            else if(elemento.stato==4){
                const div = document.createElement('div');
                div.classList.add('container_spedizione');
            
                const div_codice = document.createElement('div');
                div_codice.classList.add('container_codice');
            
                const codice = document.createElement('p');
                codice.textContent = elemento.codice_spedizione;
                codice.classList.add('text');
            
                const div_nome_cognome = document.createElement('div');
                div_nome_cognome.classList.add('container_nome_cognome');
            
                const nome_cognome = document.createElement('p');
                nome_cognome.textContent = "Destinatario : " + elemento.nome_dest + "  " + elemento.cognome_dest;
                nome_cognome.classList.add('text_elem');
            
                const div_città_data = document.createElement('div');
                div_città_data.classList.add('container_città_data');
            
                const città_data = document.createElement('p');
                città_data.textContent = "Città di destinazione : " + elemento.città_dest + ", spedizione richiesta il : " + elemento.data_spedizione;
                città_data.classList.add('text_elem');
        
                const div_request = document.createElement('div');
                div_request.classList.add('container_request');
        
                const request = document.createElement('p');
                request.textContent = "L'amministratore ha approvato la cancellazione della spedizione";
                request.classList.add('text_elem4');     
                
                const rimuovi_notifica = document.createElement('img');
                rimuovi_notifica.classList.add('notifica_img');
                rimuovi_notifica.src='/DRONEX_SERVICE/img/cancella.png';
            
                div_città_data.appendChild(città_data);
                div_request.appendChild(request);
                div_codice.appendChild(codice);
                div_nome_cognome.appendChild(nome_cognome);
                div.appendChild(div_nome_cognome);
                div.appendChild(div_request);
                div.appendChild(div_codice);
                div.appendChild(div_città_data);
                div.appendChild(rimuovi_notifica);
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
                    
                        const div_nome_cognome = document.createElement('div');
                        div_nome_cognome.classList.add('container_nome_cognome');
                    
                        const nome_cognome = document.createElement('p');
                        nome_cognome.textContent = "Destinatario : " + elemento.nome_dest + "  " + elemento.cognome_dest;
                        nome_cognome.classList.add('text_elem');
                    
                        const div_città_data = document.createElement('div');
                        div_città_data.classList.add('container_città_data');
                    
                        const città_data = document.createElement('p');
                        città_data.textContent = "Città di destinazione : " + elemento.città_dest + ", Non approvato il : " + elemento.data_spedizione;
                        città_data.classList.add('text_elem');
                
                        const div_request = document.createElement('div');
                        div_request.classList.add('container_request');
                
                        const request = document.createElement('p');
                        request.textContent = "L'amministratore non ha approvato la cancellazione della spedizione";
                        request.classList.add('text_elem3');       
                                        
                        div_città_data.appendChild(città_data);
                        div_request.appendChild(request);
                        div_codice.appendChild(codice);
                        div_nome_cognome.appendChild(nome_cognome);
                        div.appendChild(div_nome_cognome);
                        div.appendChild(div_request);
                        div.appendChild(div_codice);
                        div.appendChild(div_città_data);
                        spedizione.appendChild(div);
                        i++;
                    
                        check_spedizioni();
                    }

                    else if(elemento.stato==10){
                        const div = document.createElement('div');
                         div.classList.add('container_spedizione');
                            
                        const div_codice = document.createElement('div');
                        div_codice.classList.add('container_codice');
                            
                        const codice = document.createElement('p');
                        codice.textContent = elemento.codice_spedizione;
                        codice.classList.add('text');
                            
                        const div_nome_cognome = document.createElement('div');
                        div_nome_cognome.classList.add('container_nome_cognome');
                            
                        const nome_cognome = document.createElement('p');
                        nome_cognome.textContent = "Destinatario : " + elemento.nome_dest + "  " + elemento.cognome_dest;
                        nome_cognome.classList.add('text_elem');
                            
                        const div_città_data = document.createElement('div');
                        div_città_data.classList.add('container_città_data');
                            
                        const città_data = document.createElement('p');
                        città_data.textContent = "Città di destinazione : " + elemento.città_dest + ", Spedito il : " + elemento.data_spedizione;
                        città_data.classList.add('text_elem');
                        
                        const div_request = document.createElement('div');
                        div_request.classList.add('container_request');
                        
                        const request = document.createElement('p');
                        request.textContent = "Pacco consegnato con successo";
                        request.classList.add('text_elem8');   
                                    
                        const rimuovi_notifica = document.createElement('img');
                        rimuovi_notifica.classList.add('notifica_img');
                        rimuovi_notifica.src='/DRONEX_SERVICE/img/cancella.png';
                            
                        const drone = document.createElement('p');
                        drone.textContent=elemento.Drone_Spedizione;
                        drone.classList.add('hidden2');
    
                        div_città_data.appendChild(città_data);
                        div_request.appendChild(request);
                        div_codice.appendChild(codice);
                        div_nome_cognome.appendChild(nome_cognome);
                        div.appendChild(div_nome_cognome);
                        div.appendChild(div_request);
                        div.appendChild(div_codice);
                        div.appendChild(div_città_data);
                        div.appendChild(rimuovi_notifica);
                        div.appendChild(drone);
                        spedizione.appendChild(div);
                        i++;
                            
                        check_spedizioni();
                    }
    }
}

fetch("caricaSpedizioni.php").then(onResponse).then(caricaSpedizioni);


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//FUNZIONE MODIFICA STATO SPEDIZIONI NEL DB

function Modifica_Spedizione(event){
    const pulsante = event.currentTarget;
    
    pulsante.classList.add("hidden");
    const container_button = pulsante.parentNode;
    container_button.classList.add("hidden");
    const box = container_button.parentNode;
    const div_request = document.createElement('div');
    div_request.classList.add('container_request');
    const request = document.createElement('p');
    request.textContent = "Annullamento della richiesta di spedizione inoltrato";
    request.classList.add('text_elem2');
    div_request.appendChild(request);
    box.appendChild(div_request);

    const codice = box.querySelector('.text').textContent;
    const formdata = new FormData();
    formdata.append('codice_spedizione',codice);
    fetch('modifica_spedizione.php', {method:'post',body:formdata});
    check_spedizioni();
    }

function sel_spedizione(){
const Tutte_le_spedizioni = document.querySelectorAll(".button");
for(spedizione of Tutte_le_spedizioni){
    spedizione.addEventListener('click',Modifica_Spedizione);
}
}

setTimeout(sel_spedizione, 100);

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//FUNZIONE RIMOZIONE DELLE NOTIFICHE

function Rimuovi_Notifica(event){
    const pulsante_img = event.currentTarget;   
    const box = pulsante_img.parentNode;
    box.classList.add('hidden');

    const codice = box.querySelector('.text').textContent;
    const formdata = new FormData();
    formdata.append('codice_spedizione',codice);
    fetch('rimuovi_spedizione.php', {method:'post',body:formdata});
    check_spedizioni();
    }

function del_spedizione(){
const Tutte_le_spedizioni = document.querySelectorAll(".notifica_img");
for(spedizione of Tutte_le_spedizioni){
    spedizione.addEventListener('click',Rimuovi_Notifica);
}
}

setTimeout(del_spedizione, 100);




//-------------------------------------------------------------------------------------------------------------------------------------------------------------

function check_spedizioni(){
    
    if(i==0){
        const spedizione = document.querySelector('#spedizioni_effettuate');
        const no_spedizioni = document.createElement('h2');
        no_spedizioni.classList.add('nessuna_spedizione');
        no_spedizioni.textContent = 'Nessuna Spedizione Effettuata';
        spedizione.appendChild(no_spedizioni);
        spedizione.style.height = '400px';
    }
    else if(i==2){
        const spedizione = document.querySelector('#spedizioni_effettuate');
        spedizione.style.height = '1200px';
    }
    else if(i==3){
        const spedizione = document.querySelector('#spedizioni_effettuate');
        spedizione.style.height = '1500px';
    }
    else if(i==4){
        const spedizione = document.querySelector('#spedizioni_effettuate');
        spedizione.style.height = '2300px';
    }
    else if(i>5){
        const spedizione = document.querySelector('#spedizioni_effettuate');
        spedizione.style.height = '2700px';
    }

}

//----------------------------------------------------------------------------------------------------------------------------------------------------

function onResponse(response){
    if(!response.ok){
        console.log('Risposta non valida');
        return null;
    }else return response.json();
}