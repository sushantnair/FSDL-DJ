$(function () {
    // Fade out element over 2000ms
    $(".red-box").fadeOut(2000);

    // Fade back in over 1000ms
    $(".red-box").fadeIn(1000);

    // Fade element to specific opacity (here 50%)
    $(".blue-box").fadeTo(1000, 0.5);

    // Note that the blue box animation starts right away, whereas the second
    // red box animation waits until the first animation finished.
    // This is because each element has its own animation queue which is
    // executed one after the other. So while the red box is still "busy" with
    // its first animation, the second animation waits in the queue.

    // Fade element in or out, depending on the current status
    $(".blue-box").fadeToggle();
    $(".blue-box").fadeToggle();

    // Notice that fadeToggle fades back to the blue box's previous opacity,
    // thus only back to 50% opacity.
});

$(function () {
    // Fade out element over 2000ms
    $(".red-box").fadeOut(2000);

    // Try to use fadeTo

    $(".red-box").fadeTo(1000, 1.0);

    // This doesn't work because fadeOut() will set display: none, and fadeTo
    // doesn't modify the display property. Thus, it's not able to make it
    // reappear.

    // Back to the original state
    $(".red-box").fadeIn(100);

    // To keep the red box in the layout, use only fadeTo
    $(".red-box").fadeTo(2000, 0);

    // Can now make it reappear in the way we tried above
    $(".red-box").fadeTo(1000, 1.0);
});

$(function () {
    // Hide an element
    $(".red-box").hide();

    // Show it again
    $(".red-box").show();

    // Just toggle visibility depending on whether the element is shown or hidden
    $(".red-box").toggle(); // hides

    // Up until this point, you can't even see what happens in the browser
    // because it happens in a matter of milliseconds.

    // Use show/hide as animations (not very commonly used)
    $(".green-box").hide(1000);

    $(".green-box").show(1000);
});

$(function () {
    // Slide element up to hide (over 2s)
    $(".blue-box").slideUp(2000);

    // Slide back down to show the element
    $(".blue-box").slideDown(2000);

    // Toggle sliding up/down depending on the current state
    $(".blue-box").slideToggle(1000);
    $(".blue-box").slideToggle(1000);
});

$(function () {
    // Move the element by gradually increasing the margin BY 200px (using +=)
    // (no matter what it was before)
    $(".green-box").animate({
        "margin-left": "+=200px"
    });
});

$(function () {
    // Fade out the red box immediately to 50% opacity (over 1 second)
    $(".red-box").fadeTo(1000, 0.5);

    // Wait 1 second, then fade out the green box to 50% opacity (over 1 second)
    // This already uses function chaining to call .fadeTo() directly on the
    // return value of .delay()
    $(".green-box").delay(1000).fadeTo(1000, 0.5);

    // Chaining even more function calls to create an animation
    $(".blue-box").delay(2000).fadeTo(1000, 0.5).fadeTo(1000, 1.0).delay(1000).fadeOut();
});

$(function () {
    // Fade out the red box over 100 seconds
    $(".red-box").fadeTo(1000, 0, function() {

        // This callback function is executed once the outer animation finishes.
        // So the green box starts fading out once the red box finished fading out.
        $(".green-box").fadeTo(1000, 0, function() {

            // Similarly, any code inside this function will start executing only once
            // the green box finishes fading out (after 2 seconds)
            $(".blue-box").fadeTo(1000, 0);
        });
    });
});
//The above functions are for demo purposes
//The below function is that one that was actually used by amination_tweet.html
$(document).ready(function(){
    $("#up").click(function(){
        $("#p1").css("color", "red").slideUp(2000);
    });
    $("#down").click(function(){
        $("#p1").css("color", "black").slideDown(2000);
    });
    $("#hide").click(function(){
        $("#header").fadeOut(2000);
        $("#footer").fadeOut(2000);
    });
    $("#show").click(function(){
        $("#header").fadeIn(4000);
        $("#footer").fadeIn(4000);
    });
    $("#tweet").click(function(){
        var tweetContent = prompt("Enter your tweet:");
        if (tweetContent) {
            var newTweet = $("<li class='tweetList'>" + tweetContent + "</li>").hide();
            $("#tweetList").prepend(newTweet);
            newTweet.slideDown("slow", function() {
                    $(this).fadeIn("fast");
            });
            $("#tweet_hide").click(function(){
                newTweet.slideDown("slow", function() {
                    $(this).fadeOut("fast", function() {
                        $(this).fadeIn("fast");
                        $(this).hide(8000);  
                    });
                });
            });
        }
    });
    
    // Animate the font size of all paragraphs
    $("p").animate({
        "font-size": "20px",
    }, 1000);

    // Custom animation to move the element by gradually increasing the margin to 200px
    $(".buttons-container").animate({
        "margin-left": "+=200px"
    });

    // Reset
    $(".buttons-container").animate({
        "margin-left": "0px"
    });

    // Define the animation duration (here 2s)
    // Default duration is 300ms
    $("#header").animate({
        "margin-left": "-=200px"
    }, 500);

    // Define the animation progression function
    // Linear updates the margin-left linearly
    $("#header").animate({
        "margin-left": "+=200px"
    }, 500, "linear");

    // Animate various CSS properties of footer
    $("#footer").animate({
        marginLeft: "200px",
        opacity: "0",
        height: "50px",
        width: "50px",
        marginTop: "25px"
    }, 500);

    $("#footer").animate({
        marginLeft: "0",         // Restore the marginLeft to its original value
        opacity: "1",            // Restore the opacity to its original value (1 for fully opaque)
        height: "350px",         // Restore the height to its original value
        width: "1349px",          // Restore the width to its original value
        marginTop: "0"           // Restore the marginTop to its original value
      }, 500);
});