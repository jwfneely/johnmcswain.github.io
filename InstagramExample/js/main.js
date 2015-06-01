var access_token;
(function (){
    
    access_token = window.location.hash.split('=')[1];
    alert(access_token);
    
})();


$('#searchButton').click(function(){
  $.ajax({
      /*
  url: 'https://api.instagram.com/v1/tags/'+$('#searchText').val()+'/media/recent?access_token='+access_token
})
  .done(function(response) {
    console.log(response);
  });  
    */
      type: "GET",
            dataType: "jsonp",
            url: 'https://api.instagram.com/v1/tags/'+$('#searchText').val()+'/media/recent?access_token='+access_token, 
            success: function(data) {
                console.log(data);
            }
    
});
    
})
