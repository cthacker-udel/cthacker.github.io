//import React from 'react';
//import ReactDOM, {render} from 'react-dom';

'use strict';

const e = React.createElement;

class LeftTextBox extends React.Component{

    constructor(props){

        super(props);

    }


}

class OperandSelector extends React.Component{

    constructor(props){

        super(props);

    }

}


class ReactButton extends React.Component{

    constructor(props){

        super(props);

        this.state = {

            value: 'Press to compute',


        }

    }

    render(){

        return(

            <button height="200px" width="200px">

                {this.state.value};

            </button>


        );

    }

}


class RightTextBox extends React.Component{

    constructor(props){

        super(props);

    }

}


class MainPage extends React.Component{

    constructor(props){

        super(props);

    }


    render(){
        
        return(
        <div class="reactdiv">
        <script type="text/babel">

            <div class="row">

                <div class="col">

                    {/*left text box goes here*/}

                </div>

                <div class="col">

                    {/*Operand selector goes here*/}

                </div>

                <div class="col">

                    {/*Right text box goes here*/}

                </div>

            </div>

            <div class="row">

                <div class="col">

                    <ReactButton />

                </div>

            </div>

        </script>
        </div>
        );


    }

}


const domContainer = document.querySelector("#react-container");

ReactDOM.render((

    <React.StrictMode>

        <MainPage />

    </React.StrictMode>,
    document.getElementById('root')
),domContainer
    
);