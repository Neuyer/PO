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
}
