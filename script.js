

function myFunction0 () {
  document.getElementById("eventimage").src =
    "smartmockups_kbnd9i8g.png";
}

function myFunction1 () {
  document.getElementById("eventimage").src =
    "smartmockups_kbnda0ho.png";
}

function myFunction1a () {
  document.getElementById("eventimage").src =
    "smartmockups_kbnd9i8g.png";
}

function myFunction2 () {
  document.getElementById("eventimage").src =
     "smartmockups_kbnd9i8g.png";
}

function myFunction3 () {
  document.getElementById("eventimage").src =
    "smartmockups_kbulx3y9.png";
}

function myFunction4 () {
  document.getElementById("eventimage").src =
    "smartmockups_kbnd9i8g.png";
}

function myFunction5 () {
  document.getElementById("eventimage").src =
    "smartmockups_kbngo1nf.png";
}

function myFunction6 () {
  document.getElementById("eventimage").src =
    "smartmockups_kc39j41q.png";
}

function myFunction7 () {
  document.getElementById("eventimage").src =
    "smartmockups_kc39hvkc.png";
}

function myFunction8 () {
  document.getElementById("eventimage").src =
    "smartmockups_kc39jldi.png";
}

function myFunction9 () {
  document.getElementById("eventimage").src =
    "smartmockups_kbnd9i8g.png";
}

function myFunction10 () {
  document.getElementById("eventimage").src =
    "smartmockups_kbnd9i8g.png";
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

(function ($) {
  var controller = new ScrollMagic.Controller();

	/*------------------------------------*\
        $NUMBERS
    \*------------------------------------*/

  function animateNumber() {
    $(".js-count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo
        },
        {
          duration: 3000,
          easing: "linear",
          step: function () {
            // Count up with commas
            $this.text(Math.floor(this.countNum).toLocaleString("en"));
          },
          complete: function () {
            // Add comma after done counting
            $this.text(this.countNum.toLocaleString("en"));
          }
        }
      );
    });
  }

  new ScrollMagic.Scene({
    triggerElement: ".section"
  })
    .on("enter", function () {
      $(".section").addClass("pod--animated");
      animateNumber();
    })
    .on("leave", function () {
      $(".section").removeClass("pod--animated");
    })
    .addTo(controller);
})(jQuery);

//this is not working so i just commented it out 
$(".counter").countUp();
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-36251023-1"]);
_gaq.push(["_setDomainName", "jqueryscript.net"]);
_gaq.push(["_trackPageview"]);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol
      ? "https://ssl"
      : "http://www") + ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();


