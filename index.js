// jQuery Code
$(document).ready(function() {
    $('.visit').hover(
      function() {
        $('.visit-icon').css({
          "filter": "invert(39%) sepia(99%) saturate(1336%) hue-rotate(87deg) brightness(97%) contrast(91%)"
        });
      },
      function() {
        $('.visit-icon').css({
          "filter": "none"
        });
      }
    );
  
    $('.visit').hover(
      function() {
        $('.visitors').not('.specific-li').css({
          "color": "green"
        });
      },
      function() {
        $('.visitors').not('.specific-li').css({
          "color": ""  
        });
      }
    );
  
    $('.visit').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('#lulu').slideToggle();
    });
  
    $('#lulu').click(function(e){
      e.stopPropagation();
    });
  
    $(document).click(function(){
      if ($('#lulu').is(':visible')) {
        $('#lulu').slideUp();
      }
    });

    function toggleMenu() {
      $('.hide-menu-items').slideToggle();
    }
  
    $('.icon-menu').click(function() {
      toggleMenu();
    });
  
    function checkScreenWidth() {
      if ($(window).width() <= 1044) {
        $('.hide-menu-items').hide();
        $('.icon-menu').show();
      } else {
        $('.hide-menu-items').show();
        $('.icon-menu').hide();
      }
    }
  
    checkScreenWidth();
  
    $(window).resize(function() {
      checkScreenWidth();
    });
  });

  $(document).ready(function(){
    $('.fa-xmark').click(function(){
      $('.preview').hide()
    })
  })
  $(document).ready(function(){
    $('#pizaz').click(function(){
      $('#pizzza').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#mutbbq').click(function(){
      $('#motonbq').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#seafod').click(function(){
      $('#seafoodie').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#icecrem').click(function(){
      $('#cremice').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#cakee').click(function(){
      $('#pasti').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#shakee').click(function(){
      $('#faloodaa').css({
        "display" : "block"
      })
    })
  })


  $(document).ready(function(){
    $('#gallerimg1').click(function(){
      $('#galimg1').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg2').click(function(){
      $('#galimg2').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg3').click(function(){
      $('#galimg3').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg4').click(function(){
      $('#galimg4').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg5').click(function(){
      $('#galimg5').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg6').click(function(){
      $('#galimg6').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg7').click(function(){
      $('#galimg7').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg8').click(function(){
      $('#galimg8').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg9').click(function(){
      $('#galimg9').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg10').click(function(){
      $('#galimg10').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg11').click(function(){
      $('#galimg11').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#gallerimg12').click(function(){
      $('#galimg12').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#showed1').click(function(){
      $('#show').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#entertained2').click(function(){
      $('#entertain').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#rided3').click(function(){
      $('#ride').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('.restuimg7').click(function(){
      $('#restedimg7').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('.restuimg8').click(function(){
      $('#restedimg8').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('.restuimg9').click(function(){
      $('#restedimg9').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('.restuimg10').click(function(){
      $('#restedimg10').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('.restuimg11').click(function(){
      $('#restedimg11').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('.restuimg12').click(function(){
      $('#restedimg12').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg1').click(function(){
      $('#entedimg1').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg2').click(function(){
      $('#entedimg2').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg3').click(function(){
      $('#entedimg3').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg4').click(function(){
      $('#entedimg4').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg5').click(function(){
      $('#entedimg5').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg6').click(function(){
      $('#entedimg6').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg7').click(function(){
      $('#entedimg7').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg8').click(function(){
      $('#entedimg8').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg9').click(function(){
      $('#entedimg9').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg10').click(function(){
      $('#entedimg10').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg11').click(function(){
      $('#entedimg11').css({
        "display" : "block"
      })
    })
  })

  $(document).ready(function(){
    $('#enterimg12').click(function(){
      $('#entedimg12').css({
        "display" : "block"
      })
    })
  })


  $(document).ready(function(){
    $('.place-card').click(function(){
      $('.menu-preview').css({
        "width" : "100%"
      })
    })
  })

  $(document).ready(function(){
    $('.fa-xmark').click(function(){
      $('.menu-preview').css({
        "width" : "0"
      })
    })
  })



  
  // JavaScript Code

  

  
  function adjustCarouselColumnClass() {
    var screenWidth = $(window).width();
    var carouselCols = $('.carousel-col');
  
    if (screenWidth < 1201) {
      carouselCols.removeClass('col-md-6').addClass('w-100');
    } else {
      carouselCols.removeClass('w-100').addClass('col-md-6');
    }
  }
  
  $(document).ready(function() {
    adjustCarouselColumnClass();
  
    $(window).resize(function() {
      adjustCarouselColumnClass();
    });
  });
  $(document).ready(function() {
    $('#signingup').click(function() {
        window.location.href = "Sign-Up.html";
    });


    $('#submitBtn').click(function(e) {
        e.preventDefault(); 
        window.location.href = "index.html"; 
    });

    $('#submitButn').click(function(e) {
      e.preventDefault(); 
      window.location.href = "index.html"; 
  });
});


function toggleText(button) {
  var hiddenText = $(button).prevAll(".redmore").first();
  $(hiddenText).toggle();
  $(button).text(function (i, text) {
    return text === "Read More" ? "Minimize" : "Read More";
  });
}

function toggleAdditionalContent() {
  var additionalContent = $("#additionalContent");
  additionalContent.toggle();

  var loadMoreButton = $("#lomore");
  loadMoreButton.text(function (i, text) {
    return text === "LOAD MORE" ? "HIDE" : "LOAD MORE";
  });
}

function toggleAdditionalContentGallery() {
  var additionalContent = $("#conthide");
  additionalContent.toggle();

  var loadMoreButton = $("#lomore");
  loadMoreButton.text(function (i, text) {
    return text === "HIDE" ? "LOAD MORE" : "HIDE";
  });
}

function toggleAdditionalContentRestu() {
  var additionalContent = $(".restuhide");
  additionalContent.toggle();

  var loadMoreButton = $("#lomore");
  loadMoreButton.text(function (i, text) {
    return text === "HIDE" ? "LOAD MORE" : "HIDE";
  });
}




