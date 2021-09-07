


function basicfunction(){

    //alert('using this function');
    alert(`${document.getElementById('row3col1H1').innerHTML}`);
    document.getElementById("row3col1H1").innerHTML = "HELLO WORLD";
    document.getElementById("row3col2H1").innerHTML = "THIS IS A TEST";


}

/*

let promise = new Promise((resolve,reject) => {

    resolve(123);

}).then((e) => {

    console.log(e);
    return 2323;

}).then((e) => {

    console.log(e);
    return 3123213;

}).then((e) => {

    console.log(e);

}).catch((e) => {

    console.log(e.message);

});

*/