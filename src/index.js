const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/tasks.routes'));

app.get('/agenda', agenda);
app.get('/competencias', competencias);

function agenda(peticion, resultado){
  resultado.send("<strong>Esta es la Agenda del Evento</strong>");
}

function competencias(peticion, resultado){
  resultado.send("<strong>Esta es la lista de Competencias</strong>");
}

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})