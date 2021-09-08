//let fetch = require('node-fetch');

//var httpModule = require('https');

function process_data(thedata){

    alert(`the data = ${thedata}`);
    console.log(`the data = ${thedata}`);
    document.getElementById("row3col1H1").innerHTML = String(thedata[0]);
    document.getElementById("row3col2H1").innerHTML = String(thedata[1]);

}

function modernGenerateNameV4(){

    alert('running modernGenerateNameV4');

    const url = "https://random-word-api.herokuapp.com/word?number=2&swear=0";
    
    fetch(url)
    .then((e) => {

        return e.json();

    })
    .then((e) => {
        console.log(e);
    })
    .catch((err) => {

        throw new Error('Ran into an error with fetch');

    })

}

/*


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

*/

modernGenerateNameV4();