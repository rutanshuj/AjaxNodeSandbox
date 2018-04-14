$(function () {

    //GET/READ Command

    $('#get-button').on('click', function () {
        $.ajax({
            url: '/products',
            contentType: 'application/json',
            success: function (response) {
                var tbodyEL = $('tbody');
                tbodyEL.html('');
                response.products.forEach(function(product){
                   tbodyEL.append('\
                   <tr>\
                   <td class ="id">'+product.id+'</td>\
                   <td><input type="text" class="name" value="'+product.name+'"></td>\
                   <td><button class="update">\
                   UPDATE/PUT</button>\
                   </td>\
                   <td><button class="delete-button">\
                   DELETE</button></td>\
                   </tr>\
                   ');
                });
            }
        })
    });
});