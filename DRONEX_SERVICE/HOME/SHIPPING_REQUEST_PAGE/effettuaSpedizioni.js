function checkNome(event){
    const nome = event.currentTarget.value;
    const dim_nome = nome.length;   
    if(dim_nome > 2){
        errore.classList.add('hidden');
        const span = document.querySelector('.nome_dest span');
        span.classList.remove('error');
        span.textContent="";
        i=1;
    }   
    else{
        errore.classList.remove('hidden');
        const span = document.querySelector('.nome_dest span');
        span.classList.add('error');
        span.textContent="Nome assente o non valido (min 2)";
        event.preventDefault();
        i=2;
    }
    
    if(dim_nome >15){
        errore.classList.remove('hidden');
        const span = document.querySelector('.nome_dest span');
        span.classList.add('error');
        span.textContent="nome inserito troppo lungo (max 15)";
        event.preventDefault();
        i=2;
    }
    
}

function checkCognome(event){
    const cognome = event.currentTarget.value; 
    const dim_cognome = cognome.length;
    if(dim_cognome > 2){
        errore.classList.add('hidden');
        const span = document.querySelector('.cognome_dest span');
        span.classList.remove('error');
        span.textContent="";
        j=1;
    }
    
    else{
        errore.classList.remove('hidden');
        const span = document.querySelector('.cognome_dest span');
        span.classList.add('error');
        span.textContent="Cognome assente o non valido (min 2)";
        event.preventDefault();
        j=2;
    }
    
    if(dim_cognome > 15){
        errore.classList.remove('hidden');
        const span = document.querySelector('.cognome_dest span');
        span.classList.add('error');
        span.textContent="cognome inserito troppo lungo (max 15)";
        event.preventDefault();
        j=2;
    }
  
}

function checkIndirizzo(event){
    const indirizzo = event.currentTarget.value; 
    const dim_indirizzo = indirizzo.length;
    if(dim_indirizzo > 5){
        errore.classList.add('hidden');
        const span = document.querySelector('.indirizzo_dest span');
        span.classList.remove('error');
        span.textContent="";
        k=1;
    }
    
    else{
        errore.classList.remove('hidden');
        const span = document.querySelector('.indirizzo_dest span');
        span.classList.add('error');
        span.textContent="Indirizzo assente o non valido (min 5)";
        event.preventDefault();
        k=2;
    }
    
    if(dim_indirizzo > 40){
        errore.classList.remove('hidden');
        const span = document.querySelector('.indirizzo_dest span');
        span.classList.add('error');
        span.textContent="Indirizzo inserito troppo lungo (max 40)";
        event.preventDefault();
        k=2;
    }
  
}

let i=0;
let j=0;
let k=0;
const errore = document.querySelector('.errore');
const nome_dest = document.querySelector('.nome_dest');
document.querySelector('.nome_dest input').addEventListener('blur',checkNome);
document.querySelector('.cognome_dest input').addEventListener('blur',checkCognome);
document.querySelector('.indirizzo_dest input').addEventListener('blur',checkIndirizzo);

if(document.querySelector('.error')!==null){
    checkCognome();  checkNome(); checkIndirizzo();
    document.querySelector('.nome_dest input').dispatchEvent(new Event('blur'));
    document.querySelector('.cognome_dest input').dispatchEvent(new Event ('blur'));
    document.querySelector('.indirizzo_dest input').dispatchEvent(new Event ('blur'));
}

//--------------------------------------------------------------------------------------------------------------------

//API PER OTTENERE LONGITUDINE E LATITUDINE DELLA CONSEGNA E INSERIMENTO NEL DB

function onJson(json){
    console.log(json);
    const location=json.data;
    const first_result = location[0];
    const latitudine = first_result.latitude;
    const longitudine = first_result.longitude;
    const nome_dest = document.querySelector('input[name="nome_dest"]').value;
    const cognome_dest = document.querySelector('input[name="cognome_dest"]').value;
    const indirizzo_dest  = document.querySelector('input[name="indirizzo_dest"]').value;
    const comune_dest = first_result.locality;
    const drone_sped = document.querySelector('.drone').value;
    var dataCorrente = new Date();
    var giorno = dataCorrente.getDate();
    var mese = dataCorrente.getMonth() + 1; 
    var anno = dataCorrente.getFullYear();

    if (giorno < 10) {
        giorno = '0' + giorno;
    }

    if (mese < 10) {
        mese = '0' + mese;
    }

    const data_sped = giorno + '-' + mese + '-' + anno;
    const stato=0;
    const formdata = new FormData();
    formdata.append('nome_dest',nome_dest);
    formdata.append('cognome_dest',cognome_dest);
    formdata.append('città_dest',comune_dest);
    formdata.append('indirizzo_dest',indirizzo_dest);
    formdata.append('drone_spedizione',drone_sped);
    formdata.append('latitudine',latitudine);
    formdata.append('longitudine',longitudine);
    formdata.append('data_spedizione',data_sped);
    formdata.append('stato',stato);
    fetch('Registra_Spedizione.php', {method:'post', body:formdata});
    window.location.href = "effettuaSpedizioneOK.php";
}

function onResponse(response){
    if(!response.ok){
        console.log('Risposta non valida');
        return null;
    }else return response.json();
}  
    
function API_coordinate(event){
    if(i==1 && j==1 && k==1){
    event.preventDefault();     
    const comune = document.querySelector('#comune').value;
    const indirizzo_dest  = document.querySelector('input[name="indirizzo_dest"]').value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "JSON_Coordinate.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        // Gestisci la risposta ottenuta dallo script PHP
        var jsonResponse = JSON.parse(xhr.responseText);
            onJson(jsonResponse);
        }
    };

    
    var data = "comune=" + encodeURIComponent(comune)+"&indirizzo_dest="+encodeURIComponent(indirizzo_dest);
    xhr.send(data);
    }
}


const form=document.querySelector('form');
form.addEventListener('submit',API_coordinate);
