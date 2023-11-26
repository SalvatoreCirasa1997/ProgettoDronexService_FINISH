//FUNZIONE CARICAMENTO DINAMICO DELLA PANNELLO DI CONTROLLO

function onJSON(json){
    let i =0;
    console.log(json);
   for(elemento of json){
        const container = document.createElement('div');
        container.classList.add('container');
        container.setAttribute('id',[i]);
        const immagine = document.createElement('img');
        immagine.src=elemento.immagine;
        immagine.classList.add('Sfondo');
        const title = document.createElement('h1');
        title.textContent = elemento.titolo;
        title.classList.add('Titolo');
        const link = document.createElement('a');
        link.setAttribute('class','pre_a');
        link.textContent= elemento.link;
        link.href= elemento.href;
        link.classList.add('pre_a');
        const section = document.querySelector('#control-panel');
        section.appendChild(container);
        container.appendChild(immagine);
        container.appendChild(title);
        container.appendChild(link);
        i++; 
    }
}


fetch("HOME_ADMIN_FUNCTIONS/control-panel.php").then(onResponse).then(onJSON);

//FUNZIONE AVVISO DELLE RICHIESTE DI SPEDIZIONE

function CaricaSpedizioni(json){
    
    if (!json){
        console.log('Nessun like salvato nel db.');
         return null;
        } 

    var i=0;

    for(elemento of json){
        if(i==1){   
            const box = document.getElementById('3');    
            const notifica = document.createElement('p'); 
            notifica.textContent="Hai "+elemento.quantita+" richieste in sospeso"  
            box.appendChild(notifica);

            if(elemento.quantita!=0){
                notifica.classList.add('notifica_spedizione_attiva');      
            }
            else{
                notifica.classList.remove('notifica_spedizione_attiva');
                notifica.classList.add('hidden');
            }

            i--;
        } 

        else if(i==0){             
            const box = document.getElementById('0');    
            const notifica = document.createElement('p'); 
            notifica.textContent="Hai "+elemento.quantita+" richieste in sospeso"    
            box.appendChild(notifica);

            if(elemento.quantita!=0){
                notifica.classList.add('notifica_spedizione_attiva');      
            }
            else{
                notifica.classList.remove('notifica_spedizione_attiva');
                notifica.classList.add('hidden');
            }         
         i++;
        }
    }
}

function C_richieste(){
fetch("HOME_ADMIN_FUNCTIONS/carica_richieste_spedizione.php").then(onResponse).then(CaricaSpedizioni);
}
setTimeout(C_richieste,100);



//----------------------------------------------------------------------------------------------------------------------------------

function onResponse(response){
    if(!response.ok){
        console.log('Risposta non valida');
        return null;
    }else return response.json();
}
