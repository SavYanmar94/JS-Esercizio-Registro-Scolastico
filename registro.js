alert ("Inserisci nome, cognome e voto di ogni singolo studente. Attenzione: per terminare l'inserimento digitare 'ESCI'.");
let nomecognome;
let voto;
let studenti= [];
let votazione = [];
let giudizio;

document.write("<table class='registro'><tr><th>Nome</th><th>Giudizio</th></tr>");
nomecognome = prompt("Inserisci il nome e il cognome dello studente");
while (nomecognome !== "ESCI") {
    
    voto = Number(prompt("Inserisci il voto dello studente"));
    switch (voto) {
        case 1: 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
            giudizio= "Insufficiente";
            document.write("<tr><td>" + nomecognome + "</td><td style='background-color: #ff0000'>" + giudizio + "</td></tr>");
            break;
        case 6: 
            giudizio= "Sufficiente";
            document.write("<tr><td>" + nomecognome + "</td><td style='background-color: #f9f98a'>" + giudizio + "</td></tr>");
            break;
        case 7: 
            giudizio= "Discreto";
            document.write("<tr><td>" + nomecognome + "</td><td style='background-color: #e7e728'>" + giudizio + "</td></tr>");
            break;
        case 8: 
            giudizio= "Buono";
            document.write("<tr><td>" + nomecognome + "</td><td style='background-color: #bbf16a'>" + giudizio + "</td></tr>");
            break;
        case 9: 
            giudizio= "Distinto";
            document.write("<tr><td>" + nomecognome + "</td><td style='background-color: #26ea26'>" + giudizio + "</td></tr>");
            break;
        case 10: 
            giudizio= "Ottimo";
            document.write("<tr><td>" + nomecognome + "</td><td style='background-color: #055f05'>" + giudizio + "</td></tr>");
            break;
    
        default:
            giudizio= "Non classificabile";
            break;
    }

    document.write("</font>");
    studenti.push(nomecognome);
    votazione.push(giudizio);
    
    nomecognome = prompt("Inserisci il nome e il cognome dello studente");
}

document.write("</table>");
   






