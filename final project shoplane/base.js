$('document').ready(function() {

    var item = localStorage.getItem("product") === null ? [] : JSON.parse(localStorage.getItem("product"));


    // cart count
    var cartCount = 0;
    for (var i = 0; i < item.length; i++) {
        cartCount = cartCount + item[i].count;
    }

    $('#count').html(cartCount);
})