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
        $("nav").toggle(function(){$(this).animate({height: "95vh", width:"80%"}, 400)})
      });
        $("li").click(function(event) {
        $("nav").toggle(function(){$(this).animate({height: "0", width:"0"}, 400)})
      });
  }
}
  function oculta(){
    if($(window).width()> 414){
    $(".sectionContato").css("display", "none")
  }
}
  var carCount=2;
  function car(){
    if(carCount<6){
      $(".carrossel").css("background-image","url(images/"+carCount+".png)").fadeIn();
      carCount = carCount+1;
    }else{
      carCount=1;
      $(".carrossel").css("background-image","url(images/"+carCount+".png)");
    }
  }

setInterval(car, 2000);
nav();
oculta();



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
