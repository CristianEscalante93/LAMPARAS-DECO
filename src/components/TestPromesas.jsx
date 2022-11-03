import React from "react";
function TestPromesas() {

    let pago = new Promise((res, rej) => {
        res({ id: "1", name: "guille", description: "profe", stock: "1" })
    })

}



let pago = new Promise((res, rej) => {
    setTimeout(() => {
        res({ id: 100, name: "guille" });
        //rej("TODO MAL");
    }, 1000);
});

pago
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.error(e);
    })
    .finally(() => {
        console.log("aca si que termino todo!");
    });
