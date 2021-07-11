$(document).ready(function(){

  var searchId = window.location.search.split("=")[1];
  var currentObj = null;



  function createProductImages(url, pos) {
      var image = document.createElement('img');
      image.src = url

      if(pos === 0) {
          image.classList.add("active-image");
      }

      image.onclick = function() {
          $('#preview-images img').removeClass("active-image")
          image.classList.add("active-image");
          $('#product-preview').attr('src', url);
      }

      return image;
  }
  
  $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/'+ searchId,function(response){
      $('#product-preview').attr("src",response.preview);
      $('#product-title').html(response.name);
      $('#product-brand').html(response.brand);
      $('#description').html(response.description);
      $('#price').html(response.price);
      $('#id').html(response.id);

      for(var i=0;i<response.photos.length;i++){
          $('#preview-images').append(createProductImages(response.photos[i],i))
      }
  })
  var FromStorage = localStorage.getItem("product") === null ? []:JSON.parse(localStorage.getItem("product"));

  $("#add-to-cart").click(function(e) {
     
      console.log($('#id').html())
      console.log($('#product-title').html())
      console.log($('#price').html())
      var item = localStorage.getItem("product") === null ? []:JSON.parse(localStorage.getItem("product"));
      item.push({
              id:$('id').html(),
              name:$('#product-title').html(),
              price:$('#price').html(),
              count:0,
              preview: $('#product-preview').attr('src')
      })
      localStorage.setItem("product",JSON.stringify(item));
      // var localItem = JSON.parse(localStorage.getItem('product'))
      // console.log(localItem)

      var foundAtPos = -1;
      for(var i=0; i < item.length; i++) {
          // console.log(productList[i].id);
          // if(parseInt(item[i].id) == parseInt(currentObj.id)) {
              foundAtPos = i;
          // }
      }

      if(foundAtPos > -1) {
          item[foundAtPos].count = item[foundAtPos].count + 1;
          console.log(item[foundAtPos].count);
          window.localStorage.setItem('product', JSON.stringify(item));
      } else {
          currentObj.count = 1;
          item.push(currentObj);
          console.log(item);
          window.localStorage.setItem('product', JSON.stringify(item));
      }

      // cart count
      var cartCount = 0;
      for(var i=0; i<item.length; i++) {
          cartCount = cartCount + item[i].count;
      }
  
      $('#count').html(cartCount);
  
  })

})