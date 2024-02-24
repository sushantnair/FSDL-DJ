$(function() {
    var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //  https://www.flickr.com/services/feeds/photos_public.gne 
    // - gives an XML response, which is code we don't want
    //  https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=? 
    // - this allows us to make a request to get pictures
    $.getJSON(flickrApiUrl, {
        tags: "ISKCON Chowpatty",
        tagmode: "any",
        format: "json"
    }).done(function(data) {
        console.log(data);
        $.each(data.items, function(index, item) {
            var $img = $("<img>").attr("src", item.media.m);
            $img.click(function() {
                openImagePopup(item.media.m);
            });
            $img.appendTo("#flickr_chowpatty");
            if (index === 19) {
                return false;
            }
        });
    }).fail(function(response) {
        alert('AJAX Call Unsuccessful.');
    });
});
$(function(){
    var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //https://www.flickr.com/services/feeds/photos_public.gne - gives an XML response, which is code we don't want
    //https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=? - this allows us to make a request to get pictures
    $.getJSON(flickrApiUrl, {
        tags: "ISKCON Juhu",
        tagmode: "any",
        format: "json"
    }).done(function(data){
        console.log(data);
        $.each(data.items, function(index, item){
            //Create new image and add to gallery
            $("<img>").attr("src", item.media.m).appendTo("#flickr_juhu");
            //Stop after 5 images
            if(index == 19){
                return false;
            }
        });
    }).fail(function(response){
        console.log(response);
        alert('AJAX Call Unsuccessful.');
    })
})
$(function(){
    var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //https://www.flickr.com/services/feeds/photos_public.gne - gives an XML response, which is code we don't want
    //https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=? - this allows us to make a request to get pictures
    $.getJSON(flickrApiUrl, {
        tags: "ISKCON Mira Road",
        tagmode: "any",
        format: "json"
    }).done(function(data){
        console.log(data);
        $.each(data.items, function(index, item){
            //Create new image and add to gallery
            $("<img>").attr("src", item.media.m).appendTo("#flickr_miraroad");
            //Stop after 5 images
            if(index == 19){
                return false;
            }
        });
    }).fail(function(response){
        console.log(response);
        alert('AJAX Call Unsuccessful.');
    })
})
$(function(){
    var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //https://www.flickr.com/services/feeds/photos_public.gne - gives an XML response, which is code we don't want
    //https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=? - this allows us to make a request to get pictures
    $.getJSON(flickrApiUrl, {
        tags: "ISKCON Vrindavan",
        tagmode: "any",
        format: "json"
    }).done(function(data){
        console.log(data);
        $.each(data.items, function(index, item){
            //Create new image and add to gallery
            $("<img>").attr("src", item.media.m).appendTo("#flickr_vrindavan");
            //Stop after 5 images
            if(index == 19){
                return false;
            }
        });
    }).fail(function(response){
        console.log(response);
        alert('AJAX Call Unsuccessful.');
    })
})
$(function(){
    var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //https://www.flickr.com/services/feeds/photos_public.gne - gives an XML response, which is code we don't want
    //https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=? - this allows us to make a request to get pictures
    $.getJSON(flickrApiUrl, {
        tags: "ISKCON Mayapur",
        tagmode: "any",
        format: "json"
    }).done(function(data){
        console.log(data);
        $.each(data.items, function(index, item){
            //Create new image and add to gallery
            $("<img>").attr("src", item.media.m).appendTo("#flickr_mayapur");
            //Stop after 5 images
            if(index == 19){
                return false;
            }
        });
    }).fail(function(response){
        console.log(response);
        alert('AJAX Call Unsuccessful.');
    })
})