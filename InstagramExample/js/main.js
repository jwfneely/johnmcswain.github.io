var access_token;
(function (){
    access_token = window.location.hash.split('=')[1];
    //alert(access_token);
})();


$('#searchButton').click(function(){
    $('#resultDiv').html(""); //clear the div
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: 'https://api.instagram.com/v1/tags/'+$('#searchText').val()+'/media/recent?access_token='+access_token, 
        success: function(response) {
            //console.log(response);
            $.each(response.data,function(index,value){
                $('#resultDiv').append('<div class="results"><img src=\''+value.images.low_resolution.url+'\'></div>');
            });
            
            $('.results').addClass('border left');
        }
    });
})
