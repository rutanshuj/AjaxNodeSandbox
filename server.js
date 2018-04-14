//CRUD - Create(POST), Retrieve (GET), Update(PUT), Delete(DELETE)

const express = require('express');
const app = express();
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

app.get('/products', function (req, res) {
    res.send({
        products: products
    });
});
app.listen(PORT, function(){
    console.log('Server listening on '+PORT);
});