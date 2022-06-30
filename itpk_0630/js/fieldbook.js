//분야별추천 ajax
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"문학" },
    headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
  })
    .done(function( msg ) {

        var lis = document.getElementsByTagName('li');

        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<lis.length; i++){
            $("#field .section #list_a .box .imgbox").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");
            $("#field .section #list_a .box .imgbox").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');
            $("#field .section #list_a .box .boxTxt").eq(i).append('<p>'+msg.documents[i].sale_price+'원</p>');

        }
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"교양" },
        headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
      })
        .done(function( msg ) {
    
            var lis = document.getElementsByTagName('li');
    
            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
    
            for(var i=0; i<lis.length; i++){
                $("#field .section #list_b .box .imgbox").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");
                $("#field .section #list_b .box .imgbox").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');
                $("#field .section #list_b .box .boxTxt").eq(i).append('<p>'+msg.documents[i].sale_price+'원</p>');
    
            }
        });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"경제" },
            headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
          })
            .done(function( msg ) {
        
                var lis = document.getElementsByTagName('li');
        
                console.log( msg.documents[0].title );
                console.log( msg.documents[0].thumbnail );
        
                for(var i=0; i<lis.length; i++){
                    $("#field .section #list_c .box .imgbox").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");
                    $("#field .section #list_c .box .imgbox").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');
                    $("#field .section #list_c .box .boxTxt").eq(i).append('<p>'+msg.documents[i].sale_price+'원</p>');
        
                }
            });

            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query:"유아" },
                headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
              })
                .done(function( msg ) {
            
                    var lis = document.getElementsByTagName('li');
            
                    console.log( msg.documents[0].title );
                    console.log( msg.documents[0].thumbnail );
            
                    for(var i=0; i<lis.length; i++){
                        $("#field .section #list_d .box .imgbox").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");
                        $("#field .section #list_d .box .imgbox").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');
                        $("#field .section #list_d .box .boxTxt").eq(i).append('<p>'+msg.documents[i].sale_price+'원</p>');
            
                    }
                });

                $.ajax({
                    method: "GET",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query:"학습" },
                    headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
                  })
                    .done(function( msg ) {
                
                        var lis = document.getElementsByTagName('li');
                
                        console.log( msg.documents[0].title );
                        console.log( msg.documents[0].thumbnail );
                
                        for(var i=0; i<lis.length; i++){
                            $("#field .section #list_e .box .imgbox").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");
                            $("#field .section #list_e .box .imgbox").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');
                            $("#field .section #list_e .box .boxTxt").eq(i).append('<p>'+msg.documents[i].sale_price+'원</p>');
                
                        }
                    });

                    $.ajax({
                        method: "GET",
                        url: "https://dapi.kakao.com/v3/search/book?target=title",
                        data: { query:"ebook" },
                        headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
                      })
                        .done(function( msg ) {
                    
                            var lis = document.getElementsByTagName('li');
                    
                            console.log( msg.documents[0].title );
                            console.log( msg.documents[0].thumbnail );
                    
                            for(var i=0; i<lis.length; i++){
                                $("#field .section #list_f .box .imgbox").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");
                                $("#field .section #list_f .box .imgbox").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');
                                $("#field .section #list_f .box .boxTxt").eq(i).append('<p>'+msg.documents[i].sale_price+'원</p>');
                    
                            }
                        });