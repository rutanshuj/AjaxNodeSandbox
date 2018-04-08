const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var products =[
    {
        id: 1,
        name: 'laptop'
    },
    {
        id: 2,
        name: 'microwave'
    }
];

var currentID = 2;
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.use(bodyParser.json);
app.get('/products', function(req, res){
    console.log(req);
   res.send({
       products: products
   });
});
app.post('/products', function(req, res){
    var productName = req.body.name;
    currentID++;
    products.push({
        id: currentID,
        name: productName
    });
    res.send("Successfully created product");
});
app.listen(PORT, function(){
    console.log('Server listening to ' + PORT);
});