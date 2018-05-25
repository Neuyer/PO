//	<script>
      // script cardápio coluna 1
        $(".pratosL .a").click(function(){
        var t = $(".pratosL .a").text();
        $("#destaqueprato").html(t);
        var bg = $(".pratosL .a").attr("src");
        $("#destaque").css({"background-image":"url("+bg+")","background-position":"center"}).delay(500).slideDown();
        $(".pratosC,.pratosR").fadeOut("fast");
        });
          $(".fecha").click(function(){
          $("#destaque").slideUp();
          $(".pratosC,.pratosR").delay(400).fadeIn("slow");

        });

        $(".pratosL .b").click(function(){
        var t = $(".pratosL .b").text();
        $("#destaqueprato").html(t);
        var bg = $(".pratosL .b").attr("src");
        $("#destaque").css({"background-image":"url("+bg+")","background-position":"center"}).delay(500).slideDown();
        $(".pratosC,.pratosR").fadeOut("fast");
        });
          $(".fecha").click(function(){
          $("#destaque").slideUp();
          $(".pratosC,.pratosR").delay(400).fadeIn("slow");
        });

      // script cardápio coluna 2


        $(".pratosC .a").click(function(){
        var t = $(".pratosC .a").text();
        $("#destaqueprato").html(t);
          var bg = $(".pratosC .a").attr("src");
          $("#destaque").css({"background-image":"url("+bg+")","background-position":"center"}).delay(800).slideDown();
          $(".pratosL,.pratosR").fadeOut("fast");

          });
            $(".fecha").click(function(){
            $("#destaque").slideUp();
            $(".pratosL,.pratosR").delay(400).fadeIn("slow");

          });

          $(".pratosC .b").click(function(){
          var t = $(".pratosC .b").text();
          $("#destaqueprato").html(t);
          var bg = $(".pratosC .b").attr("src");
          $("#destaque").css({"background-image":"url("+bg+")","background-position":"center"}).delay(800).slideDown();
          $(".pratosL,.pratosR").fadeOut("fast");

          });
            $(".fecha").click(function(){
            $("#destaque").slideUp();
            $(".pratosL,.pratosR").delay(400).fadeIn("slow");

          });

        // script cardápio coluna 3


        $(".pratosR .a").click(function(){
        var t = $(".pratosR .a").text();
        $("#destaqueprato").html(t);
          var bg = $(".pratosR .a").attr("src");
          $("#destaque").css("background-image","url("+bg+")").delay(800).slideDown();
          $(".pratosL,.pratosC").fadeOut("fast");

          });
            $(".fecha").click(function(){
            $("#destaque").slideUp();
            $(".pratosC,.pratosL").delay(400).fadeIn("slow");

          });

          $(".pratosR .b").click(function(){
          var t = $(".pratosR .b").text();
          $("#destaqueprato").html(t);
          var bg = $(".pratosR .b").attr("src");
          $("#destaque").css("background-image","url("+bg+")").delay(800).slideDown();
          $(".pratosC,.pratosL").fadeOut("fast");

          });
            $(".fecha").click(function(){
            $("#destaque").slideUp();
            $(".pratosL,.pratosC").delay(400).fadeIn("slow");

          });
