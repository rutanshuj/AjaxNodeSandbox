$(function () {
    // GET/READ command
    $('#get-button').on('click', function () {

        $.ajax({
            url: '/products',
            contentType: 'application/json',
            success: function(response){
                console.log("Get Products");
                var tbodyEl = $('tbody');
                tbodyEl.html('');
                response.products.forEach(function(product){
                   tbodyEl.append('\
                   <tr>\
                   <td class ="id">' + product.id  + '</td>\
                   <td><input type ="text" class="name" value="'+product.name+'"></td>\
                   <td>\
                   <button class="update-button">\
                   UPDATE/PUT </button>\
                   </button>\
                   <button class ="delete-button">\
                   DELETE\</button>\
                   </td>\
                   </tr>\
                   ');
                });
            }
        })
    });

    //CREATE/POST
    $('#create-form').on('submit', function (event) {
        event.preventDefault();
        var createInput = $('#createInput');
        $.ajax({
            url: '/products',
            method: 'POST', //Default is GET, hence we didn't mention it before
            contentType: 'application/json',
            data: JSON.stringify({name: createInput.val()}),
            success: function(response){
                console.log(response);
                createInput.val(' ');
                $('#get-button').click();
            }
        });
    });
});