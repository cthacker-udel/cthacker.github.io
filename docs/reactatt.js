import React from 'react';
import ReactDOM, {render} from 'react-dom';

'use strict';

class LeftTextBox extends React.Component{

    constructor(props){

        super(props);

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

        <div class="reactdiv">

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


        </div>


    }

}


ReactDOM.render(

    <React.StrictMode>


    </React.StrictMode>,
    document.getElementById('root')
    
)