
//let fetch = require('node-fetch');

let httpModule = require('https');

function process_data(thedata){

    console.log(`the data = ${thedata}`);
    document.getElementById("row3col1H1").innerHTML = String(thedata[0]);
    document.getElementById("row3col2H1").innerHTML = String(thedata[1]);

}

function modernGenerateNameV3(){

    alert('using modernGenerateNameV3');

    let url = "https://random-word-api.herokuapp.com/word?number=2&swear=0";
    let data = '';

    httpModule.get(url,res => {

        res.on('data',theData => {
            data += theData;
        });

        res.on('end',() => {
            process_data(data);
        })

    })

}