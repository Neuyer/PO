$(main);
function main() {
    $("nav li").click(function(){
      $("nav li").removeClass("liAtiva");
      $(this).addClass("liAtiva");
      var id = $(this).attr('id');
      var section="section"
      $("section").slideUp();
      $("#"+section+id).slideDown();
    });

    /**var feed = new Instafeed({
       get: 'tagged',
       tagName: 'awesome',
       clientId: 'YOUR_CLIENT_ID'
   });
   feed.run();*/
    var userFeed = new Instafeed({
           get: 'user',
           userId: '1524641572',
           accessToken: '1524641572.1677ed0.a7899e6798e54ef2bdc161b26e449615'
       });
       userFeed.run();
}
