/* 
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/




let buttonElemnt = document.querySelector("#btn");

buttonElemnt.addEventListener("click",
    function(){
        const busRate=0.21;

        const age=Number( document.querySelector("#age").value );
        const travel=Number( document.querySelector("#travel").value);

        console.log(age, travel);

        let price= busRate * travel;
        let totalPrice=0;


        if(age>=65){
            const discount =  price * 40 / 100;
            totalPrice= price - discount;
            document.getElementById("result").innerHTML = totalPrice.toFixed(2) + "€";
            
            document.querySelector("#type").innerHTML = "Senior -40%";

        }else if (age <18) {
            
            const discount =  price * 20 / 100;
            totalPrice= price - discount;
            document.getElementById("result").innerHTML = totalPrice.toFixed(2) + "€";
            document.querySelector("#type").innerHTML = "Young -20%";

        } else {

            document.getElementById("result").innerHTML = price.toFixed(2) + "€";

            document.querySelector("#type").innerHTML = "Standard";
        }
    }
)




buttonElemnt.addEventListener("click",
    function(){
        let fullName= document.querySelector("#fullName").value;
        document.querySelector("#ticketFullName").innerHTML = fullName;


        const codeCP= Math.floor(Math.random() * 90000 + 10000); //genera un numero casuale da 10000 a 99999 (per il codice CP)

        console.log(codeCP);
        document.querySelector("#code").innerHTML = codeCP;



        const carrozza= Math.floor(Math.random() * 20 + 1); //genera un numero casuale da 1 a 20 (per la carrozza)

        console.log(carrozza);
        document.querySelector("#carriage").innerHTML = carrozza;
    }


)

