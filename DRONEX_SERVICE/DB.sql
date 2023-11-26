

CREATE DATABASE DronexService;

USE DronexService;


CREATE TABLE users (
 id INTEGER(11) NOT NULL AUTO_INCREMENT,
 nome_utente VARCHAR(15) NOT NULL,
 cognome_utente VARCHAR(15) NOT NULL,
 username VARCHAR(15) NOT NULL,
 password VARCHAR(70) NOT NULL,
 e_mail VARCHAR(30) NOT NULL,
 PRIMARY KEY(id));

 INSERT INTO users VALUES('1','amministratore','di sistema','admin','$2y$10$dpA8mUssNVvXiXNXSSJsx.5z6uOk0IBgeZFUA2GSXuBpFRmEXAacC','amministratore@outlook.it');


CREATE TABLE drone_detail (
    preferiti VARCHAR(30) NOT NULL, 
    titolo VARCHAR(25)  NOT NULL ,
    immagine VARCHAR(50) NOT NULL ,
    descrizione VARCHAR(300) NOT NULL ,
    quantita_totale INTEGER(3) NOT NULL ,
    quantita_disponibili INTEGER(3) NOT NULL ,
    quantita_manutenzione INTEGER (3) NOT NULL ,
    quantita_prenotati INTEGER(3) NOT NULL ,
    PRIMARY KEY(titolo));

INSERT INTO drone_detail VALUES('/DRONEX_SERVICE/img/pref.png','DJI INSPIRE 2','/DRONEX_SERVICE/img/Imspire2.jpg',' Velocità : 30km/h Distanza : 50km max Peso pacco : 2kg  prezzo : 10 euro',30,30,0,0);
INSERT INTO drone_detail VALUES('/DRONEX_SERVICE/img/pref.png','DJI PHANTOM 4','/DRONEX_SERVICE/img/phantom4.jpg',' Velocità : 40km/h Distanza : 30km max Peso pacco : 2kg prezzo : 8 euro',30,30,0,0);
INSERT INTO drone_detail VALUES('/DRONEX_SERVICE/img/pref.png','DJI MAVIC PRO 2','/DRONEX_SERVICE/img/mavicpro2.jpg',' Velocità : 25km/h Distanza : 20km max Peso pacco : 2kg prezzo : 5 euro',30,30,0,0);
INSERT INTO drone_detail VALUES('/DRONEX_SERVICE/img/pref.png','FREEX MCFX','/DRONEX_SERVICE/img/freex.jpg',' Velocità : 50km/h Distanza : 60km max Peso pacco : 3kg prezzo : 20 euro',30,30,0,0);
INSERT INTO drone_detail VALUES('/DRONEX_SERVICE/img/pref.png','U PAIR 2','/DRONEX_SERVICE/img/upair.jpg',' Velocità : 20km/h Distanza : 15km max Peso pacco : 1kg prezzo : 3 euro',30,30,0,0);
INSERT INTO drone_detail VALUES('/DRONEX_SERVICE/img/pref.png','PARROT ANAFI','/DRONEX_SERVICE/img/ParrotAnafiAmazon.jpg',' Velocità : 50km/h Distanza : 20km max Peso pacco : 3kg prezzo : 15 euro',30,30,0,0);

CREATE TABLE presentazione (
     immagine VARCHAR(100) NOT NULL,
     titolo VARCHAR(50) NOT NULL,
     paragrafo VARCHAR(200) NOT NULL,
     link VARCHAR(40) NOT NULL,
     href VARCHAR (100),
     PRIMARY KEY (titolo));

INSERT INTO presentazione VALUES('/DRONEX_SERVICE/img/presentazione1.jpeg','Spedisci un pacco con il nostro servizio','Utilizza subito i nostri droni e spedisci pacchi con un solo click!','dettagli','/DRONEX_SERVICE/HOME/SHIPPING_REQUEST_PAGE/effettuaSpedizioni.php');
INSERT INTO presentazione VALUES('/DRONEX_SERVICE/img/presentazione2.jpeg','Controlla le tue spedizioni','Spedisci in tutta Catania e provincia, verifica lo stato delle tue spedizioni!','dettagli','/DRONEX_SERVICE/HOME/SHIPMENTS_MADE_PAGE/visualizzaSpedizioni.php');


 CREATE TABLE spedizioni (
 id_mittente INTEGER(11) NOT NULL,
 codice_spedizione INTEGER(11) NOT NULL AUTO_INCREMENT,
 nome_dest VARCHAR(15) NOT NULL,
 cognome_dest VARCHAR(15) NOT NULL,
 città_dest VARCHAR(35) NOT NULL,
 indirizzo_dest VARCHAR(40) NOT NULL,
 drone_Spedizione VARCHAR(20) NOT NULL,
 latitudine VARCHAR(30) NOT NULL,
 longitudine VARCHAR(30) NOT NULL,
 data_spedizione varchar(30) NOT NULL,
 stato INTEGER (2) NOT NULL,
 PRIMARY KEY(codice_spedizione));

 CREATE TABLE richieste_totali (Tipologia VARCHAR(30) NOT NULL, quantita INTEGER, PRIMARY KEY(Tipologia));
 INSERT INTO richieste_totali VALUES("RICHIESTE_CANCELLAZIONE",0);
 INSERT INTO richieste_totali VALUES("RICHIESTE_SPEDIZIONE",0);

 CREATE TABLE likes (ID_utente integer NOT NULL , ID_drone integer NOT NULL , like_drone VARCHAR(2) NOT NULL);

 CREATE TABLE likes_totali (ID_drone INTEGER NOT NULL, likes INTEGER, PRIMARY KEY(ID_drone));
 INSERT INTO likes_totali VALUES(0,0);
 INSERT INTO likes_totali VALUES(1,0);
 INSERT INTO likes_totali VALUES(2,0);
 INSERT INTO likes_totali VALUES(3,0);
 INSERT INTO likes_totali VALUES(4,0);
 INSERT INTO likes_totali VALUES(5,0);



CREATE TABLE dislikes (ID_utente integer NOT NULL , ID_drone integer NOT NULL , dislike_drone VARCHAR(2) NOT NULL);

 CREATE TABLE dislikes_totali (ID_drone INTEGER NOT NULL, dislikes INTEGER, PRIMARY KEY(ID_drone));
 INSERT INTO dislikes_totali VALUES(0,0);
 INSERT INTO dislikes_totali VALUES(1,0);
 INSERT INTO dislikes_totali VALUES(2,0);
 INSERT INTO dislikes_totali VALUES(3,0);
 INSERT INTO dislikes_totali VALUES(4,0);
 INSERT INTO dislikes_totali VALUES(5,0);

 CREATE TABLE preferiti (
 id INTEGER(11) NOT NULL,
 id_box INTEGER(11) NOT NULL,
 img varchar(90) NOT NULL ,
 title VARCHAR(40) NOT NULL);

CREATE TABLE control_panel(
titolo VARCHAR(50)  NOT NULL ,
immagine VARCHAR(50) NOT NULL ,
link VARCHAR(15) NOT NULL,
href VARCHAR(60) NOT NULL,
PRIMARY KEY(titolo));

INSERT INTO control_panel VALUES('GESTISCI CANCELLAZIONE SPEDIZIONE','/DRONEX_SERVICE/img/cancella_spedizioni.jpg','PROCEDI','GESTIONE_CANCELLAZIONE_SPEDIZIONE/gestione_cancellazione.php');
INSERT INTO control_panel VALUES('GESTISCI RICHIESTA SPEDIZIONE','/DRONEX_SERVICE/img/gestisci_spedizioni.jpg','PROCEDI','GESTIONE_RICHIESTE_SPEDIZIONE/gestione_spedizioni.php');
INSERT INTO control_panel VALUES('GESTISCI DISPONIBILITA DRONI','/DRONEX_SERVICE/img/disponibile.jpg','PROCEDI','GESTIONE_DISPONIBILITA_DRONI/gestione_disponibilita.php');
INSERT INTO control_panel VALUES('GESTISCI MANUTENZIONE DRONI','/DRONEX_SERVICE/img/riparazione.jpg','PROCEDI','GESTIONE_MANUTENZIONE_DRONI/gestione_manutenzione.php');



 
 
Delimiter //
Create Trigger LikesTotali
After insert on likes
For each row begin
If new.ID_utente is NOT NULL then
Update likes_totali set likes = likes +1 where 
ID_drone= New.ID_drone;
End if;
End //
delimiter ;


 
Delimiter //
Create Trigger LikesTotali_removed
After delete on likes
For each row begin
If old.ID_utente is NOT NULL then
Update likes_totali set likes = likes -1 where 
ID_drone= old.ID_drone;
End if;
End //
delimiter ;


 
Delimiter //
Create trigger Stop_Like
before insert on likes
For each row begin
Declare msg_error varchar(255);
If(exists(select * from likes where 
ID_drone = new.ID_drone AND ID_utente = new.ID_utente)) then
Set msg_error = ‘ Questo utente ha già inserito un like a questo drone’;
Signal sqlstate ‘45000’ set message_text = msg_error;
End if;
End// 
delimiter ;


 
Delimiter //
Create Trigger DislikesTotali
After insert on dislikes
For each row begin
If new.ID_utente is NOT NULL then
Update dislikes_totali set dislikes = dislikes +1 where 
ID_drone= New.ID_drone;
End if;
End //
delimiter ;

 
Delimiter //
Create Trigger DislikesTotali_removed
After delete on dislikes
For each row begin
If old.ID_utente is NOT NULL then
Update dislikes_totali set dislikes = dislikes -1 where 
ID_drone= old.ID_drone;
End if;
End //
delimiter ;

 
Delimiter //
Create trigger Stop_dislike
before insert on dislikes
For each row begin
Declare msg_error varchar(255);
If(exists(select * from dislikes where 
ID_drone = new.ID_drone AND ID_utente = new.ID_utente)) then
Set msg_error = ‘ Questo utente ha già inserito un dislike a questo drone’;
Signal sqlstate ‘45000’ set message_text = msg_error;
End if;
End// 
delimiter ;


Delimiter //
Create trigger RV1 before insert on dislikes
For each row begin
Declare msg_error varchar(255);
If(exists(select ID_utente,ID_drone from likes  where 
ID_utente = new.ID_utente AND ID_drone = new.ID_drone)) then
Set msg_error = ‘ Questo utente ha già inserito un like in questo post.’;
Signal sqlstate ‘45000’ set message_text = msg_error;
End if;
End// 
delimiter ;

Delimiter //
Create trigger RV2 before insert on likes
For each row begin
Declare msg_error varchar(255);
If(exists(select ID_utente,ID_drone from dislikes  where 
ID_utente = new.ID_utente AND ID_drone = new.ID_drone)) then
Set msg_error = ‘ Questo utente ha già inserito un dislike in questo post.’;
Signal sqlstate ‘45000’ set message_text = msg_error;
End if;
End// 
delimiter ;

 
Delimiter //
Create trigger Stop_pref
before insert on preferiti
For each row begin
Declare msg_error varchar(255);
If(exists(select * from preferiti where 
id = new.id AND id_box = new.id_box)) then
Set msg_error = ‘ Questo utente ha già inserito tra i preferiti questo drone’;
Signal sqlstate ‘45000’ set message_text = msg_error;
End if;
End// 
delimiter ;

Delimiter //
Create Trigger Richieste_Spedizioni_Totali_add
After insert on spedizioni
For each row begin
If new.stato=0 then
Update richieste_totali set quantita = quantita + 1 where 
Tipologia = "RICHIESTE_SPEDIZIONE";
End if;
End //
delimiter ;

Delimiter //
Create Trigger Richieste_Cancellazioni_Totali_add
After update on spedizioni
For each row begin
If new.stato=2 then
Update richieste_totali set quantita = quantita + 1 where 
Tipologia = "RICHIESTE_CANCELLAZIONE";
End if;
End //
delimiter ;


Delimiter //
Create Trigger Richieste_Cancellazioni_Totali_remove
After update on spedizioni
For each row begin
If old.stato=2 then
Update richieste_totali set quantita = quantita - 1 where 
Tipologia = "RICHIESTE_CANCELLAZIONE";
End if;
End //
delimiter ;

Delimiter //
Create Trigger Richieste_Spedizioni_Totali_remove
After update on spedizioni
For each row begin
If old.stato=0 then
Update richieste_totali set quantita = quantita - 1 where 
Tipologia = "RICHIESTE_SPEDIZIONE";
End if;
End //
delimiter ;

delimiter //
CREATE TRIGGER check_Richieste_Spedizioni_totali_remove
BEFORE UPDATE ON Richieste_totali
FOR EACH ROW
BEGIN
IF NEW.quantita <0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Il valore di quantita_manutenzione non può essere inferiore a 0.';
END IF;
END //
delimiter ;


delimiter //
CREATE TRIGGER check_quantita_totale
BEFORE UPDATE ON drone_detail
FOR EACH ROW
BEGIN
DECLARE sum_val INT;
SET sum_val = NEW.quantita_manutenzione + NEW.quantita_prenotati;
IF NEW.quantita_totale < sum_val THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Il valore di quantita_totale non può essere inferiore alla somma di quantita_manutenzione e quantita_prenotati.';
END IF;
END //
delimiter ;

delimiter //
CREATE TRIGGER check_quantita_disponibile
BEFORE UPDATE ON drone_detail
FOR EACH ROW
BEGIN
IF NEW.quantita_disponibili < NEW.quantita_totale - NEW.quantita_manutenzione - NEW.quantita_prenotati THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Il valore di quantita_disponibile non può essere modificato';
END IF;
END //
delimiter ;

delimiter //
CREATE TRIGGER check_quantita_manutenzione
BEFORE UPDATE ON drone_detail
FOR EACH ROW
BEGIN
IF NEW.quantita_manutenzione <0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Il valore di quantita_manutenzione non può essere inferiore a 0.';
END IF;
END //
delimiter ;

delimiter //
CREATE TRIGGER check_quantita_prenotate
BEFORE UPDATE ON drone_detail
FOR EACH ROW
BEGIN
IF NEW.quantita_prenotati <0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Il valore di quantita_prenotati non può essere inferiore a 0.';
END IF;
END //
delimiter ;
 