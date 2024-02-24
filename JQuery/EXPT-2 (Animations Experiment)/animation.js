$(function(){
    $num = window.prompt("Enter number of times to fade: ");
    $dur = window.prompt("Enter duration of fade: ")
    for($i = 0; $i < $num; $i++){
        $(".red-box").fadeOut($dur)

        $(".red-box").fadeIn($dur)
    }
    $(".green-box").fadeTo(1000, 0)
})