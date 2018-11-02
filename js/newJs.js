$(main);
function main() {
    $("nav li").click(function(){
      $("nav li").removeClass("liAtiva");
      $(this).addClass("liAtiva");
      var id = $(this).attr('id');
      var section="section"
      $("section").slideUp();
      $("#"+section+id).addClass(section+id).slideDown();
    });

  function nav() {                          //funcao q transforma a nav em sandwich
    if($(window).width()<= 414){
        $("button").click(function(event) {
        $("nav").toggle(function(){$(this).animate({height: "100vh", width:"80%"}, 400)})
      });
        $("li").click(function(event) {
        $("nav").toggle(function(){$(this).animate({height: "100vh", width:"80%"}, 400)})
      });
  }
}

  var carCount=1;
  function car(){
    if(carCount<=5){
      $(".carrossel").css("background-image","url(images/"+carCount+".jpg)").fadeIn();
      carCount = carCount+1;
    }else{
      carCount=1;
      $(".carrossel").toggle().css("background-image","url(images/"+carCount+".jpg)");
    }
  }

setInterval(car, 3000)
nav();



    /**var feed = new Instafeed({
        get: "popular",
       clientId: '1368612662'
   });
   feed.run();*/
    var userFeed = new Instafeed({
           get: 'user',
           userId: '1524641572',
           accessToken: '1524641572.1677ed0.a7899e6798e54ef2bdc161b26e449615',
           limit: "18",
           sortBy: "most-recent"
       });
       userFeed.run();
}//fim function main
