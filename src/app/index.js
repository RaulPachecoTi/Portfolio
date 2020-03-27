import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import {Evento} from  './evento.json';

function App(){
    return(
        <div>
            <Nav title={"Evento Sin Nombre"}/>
            <Home />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));
