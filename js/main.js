/*Functions in JS*/

/*
function savatchaniTekshir(uzatilganContainer = {78,"text",true}) {
    if (uzatilganContainer == 0){
        document.write("Savatchamiz ichida " + savatcha.lenght + "ta ma'lumot bor!")
    }
    else {
        document.write("Savatchamiz ichida " + savatcha.lenght + "dona ma'lumot bor!")
    }
}

let container = [12,"javascript"];

savatchaniTekshir();
*/

/*Data in JS*/

let sana = new Date()


sana.setFullYear(2006)
sana.setMonth(1)
sana.setDate(7)

let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftakuni = sana.getDay()
let oylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust",
    "Sentyabr","Oktyabr","Nayabr","Dekabr"]
let haftalar = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]
let soat = sana.getHours()
let minut = sana.getMinutes()
let sekund = sana.getSeconds()

document.write(yil + "-yil" + kun + "-" + oylar[oy] + " -haftaning" + haftalar[haftakuni] + "kuni" + soat + ":" + minut + ":" + sekund);
