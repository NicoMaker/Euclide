function CalcolaEuclide() {
    let numero1 = InserisciNumero1();
    let numero2 = InserisciNumero2();

    if (isNaN(numero1) && isNaN(numero2)) {
        let StampaRisultato = "Inserisci numero 1 e numero 2 validi";
        let stampapassaggi = "";

        document.getElementById("passaggi").innerHTML = stampapassaggi;
        document.getElementById("risultato").innerHTML = StampaRisultato;
    }
    else {
        if (isNaN(numero1)) {
            let stampapassaggi = "";
            document.getElementById("passaggi").innerHTML = stampapassaggi;

            let StampaRisultato = "Inserisci numero 1 valido"
            document.getElementById("risultato").innerHTML = StampaRisultato
        }
        else {
            if (isNaN(numero2)) {
                let stampapassaggi = "";
                document.getElementById("passaggi").innerHTML = stampapassaggi;

                let StampaRisultato = "Inserisci numero 2 valido"
                document.getElementById("risultato").innerHTML = StampaRisultato;
            }
            else {
                if (numero1 == 0 || numero2 == 0) {
                    let risultato = CalcolaRisultato(numero1, numero2);

                    let StampaRisultato = "MCD ---> " + risultato;
                    document.getElementById("risultato").innerHTML = StampaRisultato
                }
                else {
                    let risultato = CalcolaRisultato(numero1, numero2);

                    let StampaRisultato = "MCD ---> " + risultato;
                    document.getElementById("risultato").innerHTML = StampaRisultato

                }
            }
        }

    }
}

function InserisciNumero1() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    return numero1;
}

function InserisciNumero2() {
    let numero2 = parseInt(document.getElementById("numero2").value);
    return numero2;
}

function CalcolaRisultato(numero1, numero2) {

    let passaggio = 0, resto = numero1 % numero2, quoziente = ~~(numero1 / numero2), stampaHTML = "";

    while (resto > 0) {
        passaggio++;
        stampaHTML += passaggio + ") passaggio ---> " + numero1 + " = " + numero2 + " * " + quoziente + " + " + resto;
        stampaHTML +="<br>"
        numero1 = numero2;
        numero2 = resto;
        resto = numero1 % numero2;
        quoziente = ~~(numero1 / numero2);
    }

    stampaHTML += "<br>";
    stampaHTML += "<br>";

    if (passaggio == 1)
        stampaHTML += "Per Ricavare l'MCD sono serviti --->" + passaggio + " passaggio";
    else
        stampaHTML += "Per Ricavare l'MCD sono serviti --->" + passaggio + " passaggi";

    stampaHTML += "<br>";
    stampaHTML += "<br>";

    document.getElementById("passaggi").innerHTML = stampaHTML;

    return numero2;
}