var access_token;
var isPopular = false;
(function (){
    access_token = window.location.hash.split('=')[1];
    //alert(access_token);
})();

$('#popularButton').click(function(){
    isPopular = true;
    instagramRESTCall();
});

$('#searchButton').click(function(){
    isPopular = false;
    instagramRESTCall();
})

function instagramRESTCall(){
    $('#resultDiv').html(""); //clear the div
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: isPopular ?'https://api.instagram.com/v1/media/popular?access_token='+access_token:'https://api.instagram.com/v1/tags/'+$('#searchText').val()+'/media/recent?access_token='+access_token,
        success: function(response) {
            $.each(response.data,function(index,value){
                if(value.type == "image"){
                    $('#resultDiv').append('<div class=\'results\'><img src=\''+value.images.low_resolution.url+'\'></div>');
                }else{
                    $('#resultDiv').append('<div class=\'results\'><video style=\'max-width:90%;max-height:90%\'><source src=\''+value.videos.low_resolution.url+'\' type=\'video/mp4\'></video></div>');
                }
            });
            
            $('.results').addClass('border left');
            $('.results > video').addClass('center');
            $('.results > img').addClass('center');
            //$('.results > video').addClass('center');
            //$('.results video').addClass('mejs-mediaelement');
        }
    });
    
}