$(function(){
    //Select the element with id as 'list' and find all <li> tags it contains
    //This contains even indirect children further down in the hierarchy
    //$("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)")

    //Select the element with id as 'list' and find only those <li> tags that are direct children
    //Note that this will still produce a 
    //$("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)")

    //$("#list").parents("body").css("background-color", "red")

    //$("#list").siblings(":header").css("background-color", "red")

    //$("#list").prev().css("background-color", "red")

    //$("#list").next().css("background-color", "red")
})