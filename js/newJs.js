$(main);
function main() {
    $("nav li").click(function(){
      $("nav li").removeClass("liAtiva")
      $(this).addClass("liAtiva");
    });
    $(document).ready(function(){$("section p").delay(300).fadeIn("slow");});
    $("#liHome").click(function(){
      $("#sectionHome").fadeIn("slow");
    })
}
