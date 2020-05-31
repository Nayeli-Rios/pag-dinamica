const express = require ('express');

const hbs = require ('hbs');

const app =express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index',{
        autor:'Laura Rios Juarez',
        year: new Date().getFullYear(),
        title:'Inicio'
    });
});

app.get('/Pablo', (req, res)=>{
    res.render('PabloPicasso',{
        autor:'Laura Rios Juarez',
        year: new Date().getFullYear(),
        title:'Pablo Picasso'
    });
});

app.get('/Leonardo', (req, res)=>{
    res.render('LeonardodaVinci',{
        autor:'Laura Rios Juarez',
        year: new Date().getFullYear(),
        title:'Leonardo da Vinci'
    });
});

app.get('/Frida', (req, res)=>{
    res.render('FridaKahlo',{
        autor:'Laura Rios Juarez',
        year: new Date().getFullYear(),
        title:'Frida Kahlo'
    });
});

app.get('/Diego', (req, res)=>{
    res.render('DiegoRivera',{
        autor:'Laura Rios Juarez',
        year: new Date().getFullYear(),
        title:'Diego Rivera'
    });
});

app.listen(3000,()=>{
    console.log('Escuchando el puerto 3000')
});