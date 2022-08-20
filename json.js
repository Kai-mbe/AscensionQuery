    $().ready(function(){
        $.getJSON( "https://gist.githubusercontent.com/Kai-mbe/c07f6d69a62f6819002065b62ceb88a5/raw/2abceb550d9f82169eb770ad15a8ff5f018a6db0/alar.json", function( data ) {
        console.log(data);
        $("#text").html(data["slug"]);
      });
    });
