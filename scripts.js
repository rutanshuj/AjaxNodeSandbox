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

    // CREATE/POST
    $('#create-form').on('submit', function (event) {
        event.preventDefault();
        var createInput = $('#create-input');
        $.ajax({
            url: '/products',
            method: 'post',
            contentType: 'application/json',
            data: JSON.stringify({name: createInput.val()}),
            success: function(response){
                console.log(response);
                createInput.val('');
                $('#get-button').click();
            }
        })
    });
});