var access_token;
(function (){
    
    access_token = window.location.hash.split('=')[1];
   // alert(access_token);
    
})();


$('#searchButton').click(function(){
  $.ajax({
  url: 'https://api.instagram.com/v1/tags/search?q='+$('#searchText').val()+'&access_token='+access_token,
  cache: false
})
  .done(function(response) {
    console.log(response);
  });  
    
    
});
