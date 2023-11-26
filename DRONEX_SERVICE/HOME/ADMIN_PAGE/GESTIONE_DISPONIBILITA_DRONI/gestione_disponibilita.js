 //FUNZIONE PER INSERIRE DINAMICAMENTE LA SEZIONE DEI DRONI NEL MIO SITO TRAMITE PHP

 function onJSON(json){
    console.log(json);
    let i =0;
    for(elemento of json){
        let container = document.createElement('div');
        container.classList.add('container');
        container.setAttribute('id',[i]);
        const immagine = document.createElement('img');
        immagine.src=elemento.immagine;
        immagine.classList.add('Sfondo');
        const title = document.createElement('h1');
        title.textContent = elemento.titolo;
        title.classList.add('Titolo');

        const value1 = elemento.quantita_totale;
        const p_quantita1 = document.createElement('p');
        p_quantita1.textContent = "Quantita' totali: "+value1;
        p_quantita1.classList.add('p_quantita');

        const value2 = elemento.quantita_disponibili;
        const p_quantita2 = document.createElement('p');
        p_quantita2.textContent = "Quantita' totali disponibili: "+value2;
        p_quantita2.classList.add('p_quantita');
        p_quantita2.setAttribute('id',[i+10]);

        const button1 = document.createElement('button');
        button1.textContent = "Aggiungi 1 drone";
        button1.classList.add('button1');
        
        const button2 = document.createElement('button');
        button2.textContent = "Rimuovi 1 drone";
        button2.classList.add('button2');

        const value3 = elemento.quantita_manutenzione;
        const p_quantita3 = document.createElement('p');
        p_quantita3.textContent = "Quantita' in manutenzione: "+value3;
        p_quantita3.classList.add('p_quantita');
        p_quantita3.setAttribute('id',[i+20]);

        const value4 = elemento.quantita_prenotati;
        const p_quantita4 = document.createElement('p');
        p_quantita4.textContent = "Quantita' attualmente prenotate: "+value4;
        p_quantita4.classList.add('p_quantita');

        const section = document.querySelector('#griglia');

        section.appendChild(container);
        container.appendChild(immagine);
        container.appendChild(title);
        container.appendChild(p_quantita1);
        container.appendChild(p_quantita2);
        container.appendChild(p_quantita3);
        container.appendChild(p_quantita4);
        container.appendChild(button1);
        container.appendChild(button2);
        i++;
    }
}

fetch("drone_details.php").then(onResponse).then(onJSON);



//-----------------------------------------------------------------------------------------AGGIUNGERE UN DRONE

function Modifica_Aggiungi_Drone(event){
    const pulsante = event.currentTarget; 
    const box = pulsante.parentNode;
    const drone = box.querySelector('.titolo').textContent;
    const formdata = new FormData();
    formdata.append('drone',drone);
    fetch('aggiungi_drone.php', {method:'post',body:formdata});
    fetch("drone_details.php").then(onResponse).then(Aggiorna_Droni);
    }

function aumenta_drone(){
const Tutti_i_droni = document.querySelectorAll(".button1");
for(drone of Tutti_i_droni){
    drone.addEventListener('click',Modifica_Aggiungi_Drone);
}
}

setTimeout(aumenta_drone, 100);

//-----------------------------------------------------------------------------------------RIMUOVERE UN DRONE

function Modifica_Rimuovi_Drone(event){
    const pulsante = event.currentTarget; 
    const box = pulsante.parentNode;
    const drone = box.querySelector('.titolo').textContent;
    const formdata = new FormData();
    formdata.append('drone',drone);
    fetch('rimuovi_drone.php', {method:'post',body:formdata});
    fetch('aggiorna_droni_disponibili2.php',{method:'post',body:formdata});
    fetch("drone_details.php").then(onResponse).then(Aggiorna_Droni);
 
    }

function diminuisci_drone(){
const Tutti_i_droni = document.querySelectorAll(".button2");
for(drone of Tutti_i_droni){
    drone.addEventListener('click',Modifica_Rimuovi_Drone);
}
}

setTimeout(diminuisci_drone, 100);

//------------------------------------------------------------------------------------AGGIORNA DRONI
function Aggiorna_Droni(json){
    let i =0;
    for(elemento of json){
        const value1 = elemento.quantita_totale;
        const value2 = elemento.quantita_disponibili;
        const value3 = elemento.quantita_manutenzione;

        const box = document.getElementById(i);

        const p1 = box.querySelector('.p_quantita');
        p1.textContent= "Quantita' totali: "+value1;

        const p2 = document.getElementById(i+10);
        p2.textContent= "Quantita' totali disponibili: "+value2;

        const p3 = document.getElementById(i+20);
        p3.textContent= "Quantita' in manutenzione: "+value3;

        i++;
    }
}

//------------------------------------------------------------------------------------RIMOZIONE AUTOMATICA DAL DB DEI DRONI IN MANUTENZIONE

function rimuoviManutenzioneDalDatabase() {
    const i= Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    const manutenzione = document.getElementById(i+20);
    const box = manutenzione.parentNode;
    const drone = box.querySelector('.titolo').textContent;
    const formdata = new FormData();
    formdata.append('drone',drone);
    fetch('rimuovi_manutenzione_drone.php', {method:'post',body:formdata});
    fetch("drone_details.php").then(onResponse).then(Aggiorna_Droni);
  }
  
  
// Genera un numero casuale compreso tra min e max (inclusi)
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  const minimo = 20000;
  const massimo = 30000;
  
  const intervalloDiTempo = generaNumeroCasuale(minimo, massimo);  
  
  setInterval(rimuoviManutenzioneDalDatabase, intervalloDiTempo);


//---------------------------------------------------------

function onResponse(response){
    if(!response.ok){
        console.log('Risposta non valida');
        return null;
    }else return response.json();
}