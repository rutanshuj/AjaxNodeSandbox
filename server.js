//CRUD - Create(POST), Retrieve (GET), Update(PUT), Delete(DELETE)

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var products =[
    {
        id:1,
        name: "watch"
    },
    {
        id: 2,
        name: "microwave"
    }
];
var currentId = 2;
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/products', function (req, res) {
    res.send({
        products: products
    });
});
app.post('/products', function (req, res) {
    var productName = req.body.name;
    currentId++;

    products.push({
        id: currentId,
        name: productName
    });
    res.send('Successfully created product !');
});
app.listen(PORT, function(){
    console.log('Server listening on '+PORT);
});