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
        url: 'https://api.instagram.com/v1/media/popular?access_token='+access_token+'&COUNT=1000',
        //'https://api.instagram.com/v1/tags/'+$('#searchText').val()+'/media/recent?access_token='+access_token+'&COUNT=1000', 
        success: function(response) {
            //console.log(response);
            $.each(response.data,function(index,value){
                if(value.type == "image"){
                    $('#resultDiv').append('<div class=\'results\'><img style=\'max-width:80%;max-height:80%\' src=\''+value.images.low_resolution.url+'\'></div>');
                }else{
                    $('#resultDiv').append('<div class=\'results\'><video style=\'max-width:80%;max-height:80%\' controls><source src=\''+value.images.low_resolution.url+'\' type=\'video/mp4\'></div>');

                }
            });
            
            $('.results').addClass('border left center');
            //$('results > img,video').addClass('');
            //$('.results video').addClass('mejs-mediaelement');
        }
    });
})
