"use strict";

var dsMenus = document.querySelectorAll(".js-activeClass"); // console.log(typeof(dsMenus));

dsMenus.forEach(function (item) {
  item.addEventListener("click", function (e) {
    dsMenus.forEach(function (links) {
      links.classList.remove("active");
    });
    e.target.classList.add("active");
  });
}); // truncate multilinetext

var truncateText = document.querySelectorAll(".js-multiline-truncate");
truncateText.forEach(function (text) {
  var truncateTextEach = text;
  $clamp(truncateTextEach, {
    clamp: 2
  });
});
$(document).ready(function () {
  if ($(".js-property-image").length > 0) {
    $(".js-property-image").slick({
      infinite: false,
      variableWidth: false,
      nextArrow: "<span class=\"slick-next\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\" fill=\"white\"/>\n    </svg></span>\n    ",
      prevArrow: "<span class=\"slick-prev\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\" fill=\"white\"/>\n    </svg></span>\n    "
    });
  } // poplular propertise


  if ($(".js-properties-carousel").length > 0) {
    $(".js-properties-carousel").slick({
      infinite: false,
      slidesToShow: 1.2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: false,
      variableWidth: false,
      centerPadding: "60px",
      nextArrow: "<button class=\"carousel-arrow slick-next\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n    </svg></button>\n    ",
      prevArrow: "<button class=\"carousel-arrow slick-prev\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n    </svg></button>\n    ",
      mobileFirst: true,
      responsive: [{
        breakpoint: 1250,
        settings: {
          arrows: true,
          slidesToShow: 4
        }
      }, {
        breakpoint: 993,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      }, {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2.5
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1.5
        }
      }]
    });
  } // premium propropertise


  if ($(".js-premium-properties-carousel").length > 0) {
    $(".js-premium-properties-carousel").slick({
      infinite: false,
      slidesToShow: 1.2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: false,
      variableWidth: false,
      centerPadding: "60px",
      nextArrow: "<button class=\"carousel-arrow slick-next\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n    </svg></button>\n    ",
      prevArrow: "<button class=\"carousel-arrow slick-prev\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n    </svg></button>\n    ",
      mobileFirst: true,
      responsive: [{
        breakpoint: 993,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2.2
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1.5
        }
      }]
    });
  } // featured propropertise


  if ($(".js-featured-prperties-carousel-mobile").length > 0) {
    $(".js-featured-prperties-carousel-mobile").slick({
      infinite: false,
      slidesToShow: 1.2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: false,
      variableWidth: false,
      centerPadding: "60px",
      nextArrow: "<button class=\"carousel-arrow slick-next\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n    </svg></button>\n    ",
      prevArrow: "<button class=\"carousel-arrow slick-prev\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n    </svg></button>\n    ",
      mobileFirst: true,
      responsive: [{
        breakpoint: 992,
        settings: "unslick"
      }]
    });
  }

  if ($(".js-featured-properties-carousel-desktop").length > 0) {
    $(".js-featured-properties-carousel-desktop").slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: false,
      variableWidth: false,
      centerPadding: "60px",
      nextArrow: "<button class=\"carousel-arrow slick-next\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n    </svg></button>\n    ",
      prevArrow: "<button class=\"carousel-arrow slick-prev\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n    </svg></button>\n    ",
      mobileFirst: false,
      responsive: [{
        breakpoint: 992,
        settings: "unslick"
      }]
    });
  } // property categories : explore now


  if ($(".js-categories-carousel").length > 0) {
    $(".js-categories-carousel").slick({
      infinite: false,
      slidesToShow: 1.2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: false,
      variableWidth: true,
      centerPadding: "60px",
      appendArrows: $(".js-categories-carousel-arrows"),
      nextArrow: "<button class=\"carousel-arrow slick-next\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n      </svg></button>\n      ",
      prevArrow: "<button class=\"carousel-arrow slick-prev\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n      </svg></button>\n      ",
      mobileFirst: true,
      responsive: [{
        breakpoint: 993,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 4
        }
      }, {
        breakpoint: 767,
        settings: {
          arrows: true,
          slidesToShow: 4
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
          centerMode: false
        }
      }]
    });
  }

  $(window).resize(function () {
    if ($(".js-featured-properties-carousel-desktop").length > 0) {
      $(".js-featured-properties-carousel-desktop")[0].slick.refresh();
    }

    if ($(".js-properties-carousel").length > 0) {
      $(".js-properties-carousel")[0].slick.refresh();
    }

    if ($(".js-premium-properties-carousel").length > 0) {
      $(".js-premium-properties-carousel")[0].slick.refresh();
    }

    if ($(".js-featured-prperties-carousel-mobile").length > 0) {
      $(".js-featured-prperties-carousel-mobile")[0].slick.refresh();
    }

    if ($(".js-property-carousel-mobile").length > 0) {
      if ($(this).width() <= 767) {
        console.log($(this).width());
        $(".js-property-carousel-mobile")[0].slick.refresh();
      }
    }

    stickyCTA();

    if ($(".search-filter-top").length > 0) {
      calcSerchFilterHeight();
    }
  }); //bootstrap modals

  $(document).on("hidden.bs.modal", function () {
    if ($(".modal.show").length) {
      $("body").addClass("modal-open");
    }
  }); //sign up

  $(".js-modal").on("click", function (e) {
    e.preventDefault();
    $("#theModal").modal("show").find(".modal-dialog").load($(this).attr("href"));
  }); //material forms
  //textfield

  if ($(".js-md-textField").length > 0) {
    $(".js-md-textField").each(function () {
      var $input = $(this);

      if ($input.val()) {
        var $parent = $input.closest(".md-textField");
        $parent.addClass("md-textField--active");
      }
    });
  }

  $(".js-md-textField").focus(function () {
    if ($(this).closest(".md-textField").hasClass("md-textField--active")) {
      $(this).closest(".md-textField").removeClass("md-textField--active");
    }

    $(this).closest(".md-textField").addClass("md-textField--focus");
  }).blur(function () {
    if ($(this).val()) $(this).closest(".md-textField").addClass("md-textField--active");
    $(this).closest(".md-textField").removeClass("md-textField--focus");
  }); //password text field

  $(".js-password-toggle").on("click", function (event) {
    event.preventDefault();
    var parent = $(this).closest(".md-textField");
    var input = $(parent).find("input");
    var icon = $(parent).find(".md-textField__trailing .material-icons");
    if (!$(this).closest(".md-textField").hasClass("md-textField--active")) $(this).closest(".md-textField").addClass("md-textField--focus");

    if (input.attr("type") == "text") {
      input.attr("type", "password");
      icon.text("visibility_off");
    } else if (input.attr("type") == "password") {
      input.attr("type", "text");
      icon.text("visibility");
    }
  }); // SELECT BOX

  $(".js-md-textField--select").change(function () {
    if (!$(this).closest(".md-textField").hasClass("md-textField--active")) $(this).closest(".md-textField").addClass("md-textField--focus"); // if (!$(this).is(":selected"))
    //   $(this).next(".md-textField__trailing").find(".material-icons").css("transform", "rotate(0deg)" );
  });
  $(".js-md-textField--select").on("click", function () {
    if (!$(this).closest(".md-textField").hasClass("md-textField--active")) $(this).closest(".md-textField").addClass("md-textField--focus");
    $(this).prev(".md-textField__trailing").find(".material-icons").toggleClass("rotate");
  });
  $(document).click(function (event) {
    if (!$(event.target).hasClass("js-md-textField--select")) {
      $(".md-textField__trailing .material-icons.rotate").removeClass("rotate");
    }
  }); // no ui slider : range slider
  // var rangeSlider1 = document.getElementById("rangeSlider1");
  // noUiSlider.create(rangeSlider1, {
  //   start: [80, 120],
  //   connect: true,
  //   tooltips: [true, true],
  //   range: {
  //     min: 2,
  //     max: 200,
  //   },
  //   format: wNumb({
  //     decimals: 3,
  //     thousand: ".",
  //     suffix: " Lk",
  //     prefix: "NPR ",
  //   }),
  // });
  //ion-range slider

  if ($(".js-range-slider").length > 0) {
    $(".js-range-slider").ionRangeSlider({
      force_edges: true
    });
  }

  if ($(".js-range-slider").length > 0) {
    $(".js-range-slider").each(function () {
      var minValue = $(this).attr("data-min");
      var maxValue = $(this).attr("data-max");
      var prefix = $(this).attr("data-prefix");
      var postfix = $(this).attr("data-postfix");
      var $rangeParent = $(this).closest(".range-slider");
      $rangeParent.find(".range-labels__prefix").text(prefix);
      $rangeParent.find(".range-labels__postfix").text(postfix);
      $rangeParent.find(".range-labels__minValue").text(minValue);
      $rangeParent.find(".range-labels__maxValue").text(maxValue);
    });
  } //auto complete


  if ($(".js-autocomplete").length > 0) {
    var options = {
      data: ["blue", "green", "pink", "red", "yellow"]
    };
    $(".js-autocomplete").easyAutocomplete(options);
  } //radio checked codition for upload video or link video


  $(".js-radio-toggle").on("click", function () {
    var input = $(this).find("input");
    var targetDiv = input.attr("data-target");
    $(this).closest(".card").find(".js-radio-toggle-results").hide();

    if (input.is(":checked")) {
      $("#" + targetDiv).show();
    }
  });

  if ($(".js-radio-toggle").length > 0) {
    $(".js-radio-toggle").each(function () {
      if ($(this).find("input").is(":checked")) {
        var targetDiv = $(this).find("input").attr("data-target");
        $("#" + targetDiv).show();
        console.log(targetDiv);
      }
    });
  } //lightobx for images


  if ($(".lightbox").length > 0) {
    var $gallery = new SimpleLightbox(".lightbox", {});
  } // $(".js-property-video").lightGallery();
  // lightGallary


  if ($(".lg-gallary").length > 0) {
    $(".lg-gallary").lightGallery({
      selector: ".js-lightGallary-selector",
      share: false,
      zoom: false
    });
  }

  if ($(".lg-morePhotos").length > 0) {
    $(".lg-morePhotos").lightGallery({
      selector: ".item",
      share: false,
      zoom: false
    });
  } // poplular propertise


  if ($(".js-property-carousel-mobile").length > 0) {
    $(".js-property-carousel-mobile").slick({
      infinite: false,
      slidesToShow: 1.2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: false,
      variableWidth: false,
      centerPadding: "60px",
      nextArrow: "<button class=\"carousel-arrow slick-next\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n      </svg></button>\n      ",
      prevArrow: "<button class=\"carousel-arrow slick-prev\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M6.0001 7.2L12.0001 13.2L18.0001 7.2L20.4001 8.4L12.0001 16.8L3.6001 8.4L6.0001 7.2Z\"  />\n      </svg></button>\n      ",
      mobileFirst: true,
      responsive: [{
        breakpoint: 767,
        settings: "unslick"
      }]
    });
  } //check parent and check its children checkbox


  $(".js-parentCheckBox").click(function () {
    $(this).parents(".properties-lists").find(".js-childCheckBox").prop("checked", this.checked);
  }); //clicking the last unchecked or checked checkbox should check or uncheck the parent checkbox

  $(".js-childCheckBox").click(function () {
    var parentContainer = ".properties-lists";
    var parentCheckbox = ".js-parentCheckBox";
    if ($(this).parents(parentContainer).find(parentCheckbox).prop("checked") == true && this.checked == false) $(this).parents(parentContainer).find(parentCheckbox).prop("checked", false);

    if (this.checked == true) {
      var flag = true;
      $(this).parents(parentContainer).find(".js-childCheckBox").each(function () {
        if (this.checked == false) flag = false;
      });
      $(this).parents(parentContainer).find(parentCheckbox).prop("checked", flag);
    }
  }); //property detail page: description show more/less

  var showChar = 300; // How many characters are shown by default

  var ellipsestext = "...";
  var moretext = "Show more >";
  var lesstext = "Show less";
  $(".more").each(function () {
    var content = $(this).html();

    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);
      var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + "</a></span>";
      $(this).html(html);
    }
  });
  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }

    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  }); // chart : price history

  if ($("#priceChart").length > 0) {
    var ctx = document.getElementById("priceChart");
    var myChart = new Chart(ctx, {
      type: "line",
      aspectRatio: 2,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Price",
          data: [12, 19, 3, 5, 2, 3, 18, 20, 16, 19, 20, 20],
          backgroundColor: "#A6CEE3",
          borderColor: "#4062BB",
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  function stickyCTA() {
    if ($(window).width() >= 768) {
      if ($(".property-detail-wrapper").length > 0) {
        if ($(window).scrollTop() >= $(".property-detail-wrapper").offset().top + $(".property-detail-wrapper").outerHeight() - window.innerHeight) {
          $(".fixed-cta").addClass("position-static");
        } else {
          $(".fixed-cta").removeClass("position-static");
        }
      }
    }
  }

  $(window).on("scroll", function () {
    stickyCTA();
  }); //show hdie link

  var showhide = false;
  $(".js-showhide-link").on("click", function () {
    var target = $(this).attr("data-target");
    console.log(target);
    $(this).toggleClass("showhide-link--has-shown");

    if (showhide === false) {
      $("#" + target).removeClass("collapse");
      $("#" + target).slideDown();
      showhide = true;
    } else {
      $("#" + target).addClass("collapse");
      $("#" + target).slideUp();
      showhide = false;
    }
  }); //drag and drop file using dropzone plugin

  if ($("#preview-template").length > 0) {
    var previewNode = document.querySelector("#preview-template");
    previewNode.id = "";
    var previewTemplate = previewNode.parentNode.innerHTML;
  }

  if ($("#dropcontainer").length > 0) {
    var myDropzone = new Dropzone(document.getElementById("dropcontainer"), {
      // Make the whole body a dropzone
      url: "/target-url",
      // Set the url
      thumbnailWidth: 150,
      thumbnailHeight: 150,
      parallelUploads: 20,
      previewTemplate: previewTemplate,
      autoQueue: false,
      // Make sure the files aren't queued until manually added
      previewsContainer: ".dragndrop-images",
      // Define the container to display the previews
      // clickable: ".filesUpload", // Define the element that should be used as click trigger to select files.
      init: function init() {
        this.on("thumbnail", function (file, dataUrl) {
          $(".js-lightGallary-selector").attr("href", dataUrl);
          $(".lg-gallary").lightGallery({
            selector: ".js-lightGallary-selector",
            share: false,
            zoom: false
          });
        });
      }
    });
  } //search page map toggle


  $(".js-mapViewer").on("click", function () {
    $("body").toggleClass("is-map-visible");
  });

  function calcSerchFilterHeight() {
    var filterHeight = $(".search-filter-top").outerHeight();
    console.log(filterHeight);
    $(":root").css("--filterHeight", filterHeight + "px");
  }

  if ($(".search-filter-top").length > 0) {
    calcSerchFilterHeight();
  }

  if ($("#tokenField").length > 0) {
    $("#tokenField").tokenfield();
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZHNNZW51cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJsaW5rcyIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRhcmdldCIsImFkZCIsInRydW5jYXRlVGV4dCIsInRleHQiLCJ0cnVuY2F0ZVRleHRFYWNoIiwiJGNsYW1wIiwiY2xhbXAiLCIkIiwicmVhZHkiLCJsZW5ndGgiLCJzbGljayIsImluZmluaXRlIiwidmFyaWFibGVXaWR0aCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJtb2JpbGVGaXJzdCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJhcHBlbmRBcnJvd3MiLCJ3aW5kb3ciLCJyZXNpemUiLCJyZWZyZXNoIiwid2lkdGgiLCJjb25zb2xlIiwibG9nIiwic3RpY2t5Q1RBIiwiY2FsY1NlcmNoRmlsdGVySGVpZ2h0Iiwib24iLCJhZGRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwibW9kYWwiLCJmaW5kIiwibG9hZCIsImF0dHIiLCJlYWNoIiwiJGlucHV0IiwidmFsIiwiJHBhcmVudCIsImNsb3Nlc3QiLCJmb2N1cyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJibHVyIiwiZXZlbnQiLCJwYXJlbnQiLCJpbnB1dCIsImljb24iLCJjaGFuZ2UiLCJwcmV2IiwidG9nZ2xlQ2xhc3MiLCJjbGljayIsImlvblJhbmdlU2xpZGVyIiwiZm9yY2VfZWRnZXMiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwicHJlZml4IiwicG9zdGZpeCIsIiRyYW5nZVBhcmVudCIsIm9wdGlvbnMiLCJkYXRhIiwiZWFzeUF1dG9jb21wbGV0ZSIsInRhcmdldERpdiIsImhpZGUiLCJpcyIsInNob3ciLCIkZ2FsbGVyeSIsIlNpbXBsZUxpZ2h0Ym94IiwibGlnaHRHYWxsZXJ5Iiwic2VsZWN0b3IiLCJzaGFyZSIsInpvb20iLCJwYXJlbnRzIiwicHJvcCIsImNoZWNrZWQiLCJwYXJlbnRDb250YWluZXIiLCJwYXJlbnRDaGVja2JveCIsImZsYWciLCJzaG93Q2hhciIsImVsbGlwc2VzdGV4dCIsIm1vcmV0ZXh0IiwibGVzc3RleHQiLCJjb250ZW50IiwiaHRtbCIsImMiLCJzdWJzdHIiLCJoIiwidG9nZ2xlIiwiY3R4IiwiZ2V0RWxlbWVudEJ5SWQiLCJteUNoYXJ0IiwiQ2hhcnQiLCJ0eXBlIiwiYXNwZWN0UmF0aW8iLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJiZWdpbkF0WmVybyIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIm91dGVySGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzaG93aGlkZSIsInNsaWRlRG93biIsInNsaWRlVXAiLCJwcmV2aWV3Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsInByZXZpZXdUZW1wbGF0ZSIsInBhcmVudE5vZGUiLCJpbm5lckhUTUwiLCJteURyb3B6b25lIiwiRHJvcHpvbmUiLCJ1cmwiLCJ0aHVtYm5haWxXaWR0aCIsInRodW1ibmFpbEhlaWdodCIsInBhcmFsbGVsVXBsb2FkcyIsImF1dG9RdWV1ZSIsInByZXZpZXdzQ29udGFpbmVyIiwiaW5pdCIsImZpbGUiLCJkYXRhVXJsIiwiZmlsdGVySGVpZ2h0IiwiY3NzIiwidG9rZW5maWVsZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLFFBQUEsQ0FBQUMsZ0JBQUEsQ0FBQSxpQkFBQSxDQUFBLEMsQ0FDQTs7QUFDQUYsT0FBQSxDQUFBRyxPQUFBLENBQUEsVUFBQUMsSUFBQSxFQUFBO0FBQ0FBLEVBQUFBLElBQUEsQ0FBQUMsZ0JBQUEsQ0FBQSxPQUFB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eW9CQTs7O0FBQ0FyRSxFQUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLENBQUEwQixFQUFBLENBQUEsT0FBQSxFQUFBLFlBQUE7QUFDQTFCLElBQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQWdELFdBQUEsQ0FBQSxnQkFBQTtBQUNBLEdBRkE7O0FBSUEsV0FBQXZCLHFCQUFBLEdBQUE7QUFDQSxRQUFBc0csWUFBQSxHQUFBL0gsQ0FBQSxDQUFBLG9CQUFBLENBQUEsQ0FBQXlHLFdBQUEsRUFBQTtBQUNBbkYsSUFBQUEsT0FBQSxDQUFBQyxHQUFBLENBQUF3RyxZQUFBO0FBQ0EvSCxJQUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUFnSSxHQUFBLENBQUEsZ0JBQUEsRUFBQUQsWUFBQSxHQUFBLElBQUE7QUFDQTs7QUFDQSxNQUFBL0gsQ0FBQSxDQUFBLG9CQUFBLENBQUEsQ0FBQUUsTUFBQSxHQUFBLENBQUEsRUFBQTtBQUNBdUIsSUFBQUEscUJBQUE7QUFDQTs7QUFFQSxNQUFBekIsQ0FBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBRSxNQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQ0FGLElBQUFBLENBQUEsQ0FBQSxhQUFBLENBQUEsQ0FBQWlJLFVBQUE7QUFDQTtBQUNBLENBMXBCQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZHNNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtYWN0aXZlQ2xhc3NcIik7XHJcbi8vIGNvbnNvbGUubG9nKHR5cGVvZihkc01lbnVzKSk7XHJcbmRzTWVudXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBkc01lbnVzLmZvckVhY2goKGxpbmtzKSA9PiB7XHJcbiAgICAgIGxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gdHJ1bmNhdGUgbXVsdGlsaW5ldGV4dFxyXG5sZXQgdHJ1bmNhdGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1tdWx0aWxpbmUtdHJ1bmNhdGVcIik7XHJcblxyXG50cnVuY2F0ZVRleHQuZm9yRWFjaCgodGV4dCkgPT4ge1xyXG4gIGxldCB0cnVuY2F0ZVRleHRFYWNoID0gdGV4dDtcclxuICAkY2xhbXAodHJ1bmNhdGVUZXh0RWFjaCwgeyBjbGFtcDogMiB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCQoXCIuanMtcHJvcGVydHktaW1hZ2VcIikubGVuZ3RoID4gMCkge1xyXG4gICAgJChcIi5qcy1wcm9wZXJ0eS1pbWFnZVwiKS5zbGljayh7XHJcbiAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXHJcbiAgICAgIG5leHRBcnJvdzogYDxzcGFuIGNsYXNzPVwic2xpY2stbmV4dFwiPjxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk02LjAwMDEgNy4yTDEyLjAwMDEgMTMuMkwxOC4wMDAxIDcuMkwyMC40MDAxIDguNEwxMi4wMDAxIDE2LjhMMy42MDAxIDguNEw2LjAwMDEgNy4yWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICAgIHByZXZBcnJvdzogYDxzcGFuIGNsYXNzPVwic2xpY2stcHJldlwiPjxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk02LjAwMDEgNy4yTDEyLjAwMDEgMTMuMkwxOC4wMDAxIDcuMkwyMC40MDAxIDguNEwxMi4wMDAxIDE2LjhMMy42MDAxIDguNEw2LjAwMDEgNy4yWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHBvcGx1bGFyIHByb3BlcnRpc2VcclxuICBpZiAoJChcIi5qcy1wcm9wZXJ0aWVzLWNhcm91c2VsXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICQoXCIuanMtcHJvcGVydGllcy1jYXJvdXNlbFwiKS5zbGljayh7XHJcbiAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiAxLjIsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXHJcbiAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICBuZXh0QXJyb3c6IGA8YnV0dG9uIGNsYXNzPVwiY2Fyb3VzZWwtYXJyb3cgc2xpY2stbmV4dFwiPjxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk02LjAwMDEgNy4yTDEyLjAwMDEgMTMuMkwxOC4wMDAxIDcuMkwyMC40MDAxIDguNEwxMi4wMDAxIDE2LjhMMy42MDAxIDguNEw2LjAwMDEgNy4yWlwiICAvPlxyXG4gICAgPC9zdmc+PC9idXR0b24+XHJcbiAgICBgLFxyXG4gICAgICBwcmV2QXJyb3c6IGA8YnV0dG9uIGNsYXNzPVwiY2Fyb3VzZWwtYXJyb3cgc2xpY2stcHJldlwiPjxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk02LjAwMDEgNy4yTDEyLjAwMDEgMTMuMkwxOC4wMDAxIDcuMkwyMC40MDAxIDguNEwxMi4wMDAxIDE2LjhMMy42MDAxIDguNEw2LjAwMDEgNy4yWlwiICAvPlxyXG4gICAgPC9zdmc+PC9idXR0b24+XHJcbiAgICBgLFxyXG5cclxuICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcblxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogMTI1MCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogOTkzLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIuNSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEuNSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJlbWl1bSBwcm9wcm9wZXJ0aXNlXHJcbiAgaWYgKCQoXCIuanMtcHJlbWl1bS1wcm9wZXJ0aWVzLWNhcm91c2VsXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICQoXCIuanMtcHJlbWl1bS1wcm9wZXJ0aWVzLWNhcm91c2VsXCIpLnNsaWNrKHtcclxuICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDEuMixcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcclxuICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgIG5leHRBcnJvdzogYDxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1hcnJvdyBzbGljay1uZXh0XCI+PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTYuMDAwMSA3LjJMMTIuMDAwMSAxMy4yTDE4LjAwMDEgNy4yTDIwLjQwMDEgOC40TDEyLjAwMDEgMTYuOEwzLjYwMDEgOC40TDYuMDAwMSA3LjJaXCIgIC8+XHJcbiAgICA8L3N2Zz48L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICAgIHByZXZBcnJvdzogYDxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1hcnJvdyBzbGljay1wcmV2XCI+PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTYuMDAwMSA3LjJMMTIuMDAwMSAxMy4yTDE4LjAwMDEgNy4yTDIwLjQwMDEgOC40TDEyLjAwMDEgMTYuOEwzLjYwMDEgOC40TDYuMDAwMSA3LjJaXCIgIC8+XHJcbiAgICA8L3N2Zz48L2J1dHRvbj5cclxuICAgIGAsXHJcblxyXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA5OTMsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMi4yLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMS41LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBmZWF0dXJlZCBwcm9wcm9wZXJ0aXNlXHJcbiAgaWYgKCQoXCIuanMtZmVhdHVyZWQtcHJwZXJ0aWVzLWNhcm91c2VsLW1vYmlsZVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAkKFwiLmpzLWZlYXR1cmVkLXBycGVydGllcy1jYXJvdXNlbC1tb2JpbGVcIikuc2xpY2soe1xyXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogMS4yLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxyXG4gICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgbmV4dEFycm93OiBgPGJ1dHRvbiBjbGFzcz1cImNhcm91c2VsLWFycm93IHNsaWNrLW5leHRcIj48c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNNi4wMDAxIDcuMkwxMi4wMDAxIDEzLjJMMTguMDAwMSA3LjJMMjAuNDAwMSA4LjRMMTIuMDAwMSAxNi44TDMuNjAwMSA4LjRMNi4wMDAxIDcuMlpcIiAgLz5cclxuICAgIDwvc3ZnPjwvYnV0dG9uPlxyXG4gICAgYCxcclxuICAgICAgcHJldkFycm93OiBgPGJ1dHRvbiBjbGFzcz1cImNhcm91c2VsLWFycm93IHNsaWNrLXByZXZcIj48c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNNi4wMDAxIDcuMkwxMi4wMDAxIDEzLjJMMTguMDAwMSA3LjJMMjAuNDAwMSA4LjRMMTIuMDAwMSAxNi44TDMuNjAwMSA4LjRMNi4wMDAxIDcuMlpcIiAgLz5cclxuICAgIDwvc3ZnPjwvYnV0dG9uPlxyXG4gICAgYCxcclxuXHJcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG5cclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmICgkKFwiLmpzLWZlYXR1cmVkLXByb3BlcnRpZXMtY2Fyb3VzZWwtZGVza3RvcFwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAkKFwiLmpzLWZlYXR1cmVkLXByb3BlcnRpZXMtY2Fyb3VzZWwtZGVza3RvcFwiKS5zbGljayh7XHJcbiAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXHJcbiAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICBuZXh0QXJyb3c6IGA8YnV0dG9uIGNsYXNzPVwiY2Fyb3VzZWwtYXJyb3cgc2xpY2stbmV4dFwiPjxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk02LjAwMDEgNy4yTDEyLjAwMDEgMTMuMkwxOC4wMDAxIDcuMkwyMC40MDAxIDguNEwxMi4wMDAxIDE2LjhMMy42MDAxIDguNEw2LjAwMDEgNy4yWlwiICAvPlxyXG4gICAgPC9zdmc+PC9idXR0b24+XHJcbiAgICBgLFxyXG4gICAgICBwcmV2QXJyb3c6IGA8YnV0dG9uIGNsYXNzPVwiY2Fyb3VzZWwtYXJyb3cgc2xpY2stcHJldlwiPjxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk02LjAwMDEgNy4yTDEyLjAwMDEgMTMuMkwxOC4wMDAxIDcuMkwyMC40MDAxIDguNEwxMi4wMDAxIDE2LjhMMy42MDAxIDguNEw2LjAwMDEgNy4yWlwiICAvPlxyXG4gICAgPC9zdmc+PC9idXR0b24+XHJcbiAgICBgLFxyXG5cclxuICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxyXG5cclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuXHJcbiAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJvcGVydHkgY2F0ZWdvcmllcyA6IGV4cGxvcmUgbm93XHJcbiAgaWYgKCQoXCIuanMtY2F0ZWdvcmllcy1jYXJvdXNlbFwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAkKFwiLmpzLWNhdGVnb3JpZXMtY2Fyb3VzZWxcIikuc2xpY2soe1xyXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogMS4yLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICBhcHBlbmRBcnJvd3M6ICQoXCIuanMtY2F0ZWdvcmllcy1jYXJvdXNlbC1hcnJvd3NcIiksXHJcbiAgICAgIG5leHRBcnJvdzogYDxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1hcnJvdyBzbGljay1uZXh0XCI+PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNi4wMDAxIDcuMkwxMi4wMDAxIDEzLjJMMTguMDAwMSA3LjJMMjAuNDAwMSA4LjRMMTIuMDAwMSAxNi44TDMuNjAwMSA4LjRMNi4wMDAxIDcuMlpcIiAgLz5cclxuICAgICAgPC9zdmc+PC9idXR0b24+XHJcbiAgICAgIGAsXHJcbiAgICAgIHByZXZBcnJvdzogYDxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1hcnJvdyBzbGljay1wcmV2XCI+PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNi4wMDAxIDcuMkwxMi4wMDAxIDEzLjJMMTguMDAwMSA3LjJMMjAuNDAwMSA4LjRMMTIuMDAwMSAxNi44TDMuNjAwMSA4LjRMNi4wMDAxIDcuMlpcIiAgLz5cclxuICAgICAgPC9zdmc+PC9idXR0b24+XHJcbiAgICAgIGAsXHJcblxyXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA5OTMsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLjUsXHJcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiLmpzLWZlYXR1cmVkLXByb3BlcnRpZXMtY2Fyb3VzZWwtZGVza3RvcFwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICQoXCIuanMtZmVhdHVyZWQtcHJvcGVydGllcy1jYXJvdXNlbC1kZXNrdG9wXCIpWzBdLnNsaWNrLnJlZnJlc2goKTtcclxuICAgIH1cclxuICAgIGlmICgkKFwiLmpzLXByb3BlcnRpZXMtY2Fyb3VzZWxcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAkKFwiLmpzLXByb3BlcnRpZXMtY2Fyb3VzZWxcIilbMF0uc2xpY2sucmVmcmVzaCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQoXCIuanMtcHJlbWl1bS1wcm9wZXJ0aWVzLWNhcm91c2VsXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgJChcIi5qcy1wcmVtaXVtLXByb3BlcnRpZXMtY2Fyb3VzZWxcIilbMF0uc2xpY2sucmVmcmVzaCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQoXCIuanMtZmVhdHVyZWQtcHJwZXJ0aWVzLWNhcm91c2VsLW1vYmlsZVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICQoXCIuanMtZmVhdHVyZWQtcHJwZXJ0aWVzLWNhcm91c2VsLW1vYmlsZVwiKVswXS5zbGljay5yZWZyZXNoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJChcIi5qcy1wcm9wZXJ0eS1jYXJvdXNlbC1tb2JpbGVcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS53aWR0aCgpIDw9IDc2Nykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykud2lkdGgoKSk7XHJcbiAgICAgICAgJChcIi5qcy1wcm9wZXJ0eS1jYXJvdXNlbC1tb2JpbGVcIilbMF0uc2xpY2sucmVmcmVzaCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGlja3lDVEEoKTtcclxuICAgIGlmICgkKFwiLnNlYXJjaC1maWx0ZXItdG9wXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgY2FsY1NlcmNoRmlsdGVySGVpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vYm9vdHN0cmFwIG1vZGFsc1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJChcIi5tb2RhbC5zaG93XCIpLmxlbmd0aCkge1xyXG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcIm1vZGFsLW9wZW5cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vc2lnbiB1cFxyXG4gICQoXCIuanMtbW9kYWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJChcIiN0aGVNb2RhbFwiKVxyXG4gICAgICAubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgIC5maW5kKFwiLm1vZGFsLWRpYWxvZ1wiKVxyXG4gICAgICAubG9hZCgkKHRoaXMpLmF0dHIoXCJocmVmXCIpKTtcclxuICB9KTtcclxuXHJcbiAgLy9tYXRlcmlhbCBmb3Jtc1xyXG4gIC8vdGV4dGZpZWxkXHJcbiAgaWYgKCQoXCIuanMtbWQtdGV4dEZpZWxkXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICQoXCIuanMtbWQtdGV4dEZpZWxkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIGlmICgkaW5wdXQudmFsKCkpIHtcclxuICAgICAgICB2YXIgJHBhcmVudCA9ICRpbnB1dC5jbG9zZXN0KFwiLm1kLXRleHRGaWVsZFwiKTtcclxuICAgICAgICAkcGFyZW50LmFkZENsYXNzKFwibWQtdGV4dEZpZWxkLS1hY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJChcIi5qcy1tZC10ZXh0RmllbGRcIilcclxuICAgIC5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoXCIubWQtdGV4dEZpZWxkXCIpLmhhc0NsYXNzKFwibWQtdGV4dEZpZWxkLS1hY3RpdmVcIikpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIubWQtdGV4dEZpZWxkXCIpLnJlbW92ZUNsYXNzKFwibWQtdGV4dEZpZWxkLS1hY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiLm1kLXRleHRGaWVsZFwiKS5hZGRDbGFzcyhcIm1kLXRleHRGaWVsZC0tZm9jdXNcIik7XHJcbiAgICB9KVxyXG4gICAgLmJsdXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS52YWwoKSlcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIubWQtdGV4dEZpZWxkXCIpLmFkZENsYXNzKFwibWQtdGV4dEZpZWxkLS1hY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdChcIi5tZC10ZXh0RmllbGRcIikucmVtb3ZlQ2xhc3MoXCJtZC10ZXh0RmllbGQtLWZvY3VzXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gIC8vcGFzc3dvcmQgdGV4dCBmaWVsZFxyXG4gICQoXCIuanMtcGFzc3dvcmQtdG9nZ2xlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIHBhcmVudCA9ICQodGhpcykuY2xvc2VzdChcIi5tZC10ZXh0RmllbGRcIik7XHJcbiAgICB2YXIgaW5wdXQgPSAkKHBhcmVudCkuZmluZChcImlucHV0XCIpO1xyXG4gICAgdmFyIGljb24gPSAkKHBhcmVudCkuZmluZChcIi5tZC10ZXh0RmllbGRfX3RyYWlsaW5nIC5tYXRlcmlhbC1pY29uc1wiKTtcclxuICAgIGlmICghJCh0aGlzKS5jbG9zZXN0KFwiLm1kLXRleHRGaWVsZFwiKS5oYXNDbGFzcyhcIm1kLXRleHRGaWVsZC0tYWN0aXZlXCIpKVxyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIubWQtdGV4dEZpZWxkXCIpLmFkZENsYXNzKFwibWQtdGV4dEZpZWxkLS1mb2N1c1wiKTtcclxuICAgIGlmIChpbnB1dC5hdHRyKFwidHlwZVwiKSA9PSBcInRleHRcIikge1xyXG4gICAgICBpbnB1dC5hdHRyKFwidHlwZVwiLCBcInBhc3N3b3JkXCIpO1xyXG4gICAgICBpY29uLnRleHQoXCJ2aXNpYmlsaXR5X29mZlwiKTtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXQuYXR0cihcInR5cGVcIikgPT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgIGlucHV0LmF0dHIoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgaWNvbi50ZXh0KFwidmlzaWJpbGl0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gU0VMRUNUIEJPWFxyXG4gICQoXCIuanMtbWQtdGV4dEZpZWxkLS1zZWxlY3RcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghJCh0aGlzKS5jbG9zZXN0KFwiLm1kLXRleHRGaWVsZFwiKS5oYXNDbGFzcyhcIm1kLXRleHRGaWVsZC0tYWN0aXZlXCIpKVxyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIubWQtdGV4dEZpZWxkXCIpLmFkZENsYXNzKFwibWQtdGV4dEZpZWxkLS1mb2N1c1wiKTtcclxuXHJcbiAgICAvLyBpZiAoISQodGhpcykuaXMoXCI6c2VsZWN0ZWRcIikpXHJcbiAgICAvLyAgICQodGhpcykubmV4dChcIi5tZC10ZXh0RmllbGRfX3RyYWlsaW5nXCIpLmZpbmQoXCIubWF0ZXJpYWwtaWNvbnNcIikuY3NzKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKDBkZWcpXCIgKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5qcy1tZC10ZXh0RmllbGQtLXNlbGVjdFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghJCh0aGlzKS5jbG9zZXN0KFwiLm1kLXRleHRGaWVsZFwiKS5oYXNDbGFzcyhcIm1kLXRleHRGaWVsZC0tYWN0aXZlXCIpKVxyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIubWQtdGV4dEZpZWxkXCIpLmFkZENsYXNzKFwibWQtdGV4dEZpZWxkLS1mb2N1c1wiKTtcclxuICAgICQodGhpcylcclxuICAgICAgLnByZXYoXCIubWQtdGV4dEZpZWxkX190cmFpbGluZ1wiKVxyXG4gICAgICAuZmluZChcIi5tYXRlcmlhbC1pY29uc1wiKVxyXG4gICAgICAudG9nZ2xlQ2xhc3MoXCJyb3RhdGVcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKCEkKGV2ZW50LnRhcmdldCkuaGFzQ2xhc3MoXCJqcy1tZC10ZXh0RmllbGQtLXNlbGVjdFwiKSkge1xyXG4gICAgICAkKFwiLm1kLXRleHRGaWVsZF9fdHJhaWxpbmcgLm1hdGVyaWFsLWljb25zLnJvdGF0ZVwiKS5yZW1vdmVDbGFzcyhcInJvdGF0ZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gbm8gdWkgc2xpZGVyIDogcmFuZ2Ugc2xpZGVyXHJcbiAgLy8gdmFyIHJhbmdlU2xpZGVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZ2VTbGlkZXIxXCIpO1xyXG5cclxuICAvLyBub1VpU2xpZGVyLmNyZWF0ZShyYW5nZVNsaWRlcjEsIHtcclxuICAvLyAgIHN0YXJ0OiBbODAsIDEyMF0sXHJcbiAgLy8gICBjb25uZWN0OiB0cnVlLFxyXG4gIC8vICAgdG9vbHRpcHM6IFt0cnVlLCB0cnVlXSxcclxuICAvLyAgIHJhbmdlOiB7XHJcbiAgLy8gICAgIG1pbjogMixcclxuICAvLyAgICAgbWF4OiAyMDAsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgZm9ybWF0OiB3TnVtYih7XHJcbiAgLy8gICAgIGRlY2ltYWxzOiAzLFxyXG4gIC8vICAgICB0aG91c2FuZDogXCIuXCIsXHJcbiAgLy8gICAgIHN1ZmZpeDogXCIgTGtcIixcclxuICAvLyAgICAgcHJlZml4OiBcIk5QUiBcIixcclxuICAvLyAgIH0pLFxyXG4gIC8vIH0pO1xyXG5cclxuICAvL2lvbi1yYW5nZSBzbGlkZXJcclxuICBpZiAoJChcIi5qcy1yYW5nZS1zbGlkZXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgJChcIi5qcy1yYW5nZS1zbGlkZXJcIikuaW9uUmFuZ2VTbGlkZXIoe1xyXG4gICAgICBmb3JjZV9lZGdlczogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoJChcIi5qcy1yYW5nZS1zbGlkZXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgJChcIi5qcy1yYW5nZS1zbGlkZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBtaW5WYWx1ZSA9ICQodGhpcykuYXR0cihcImRhdGEtbWluXCIpO1xyXG4gICAgICB2YXIgbWF4VmFsdWUgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLW1heFwiKTtcclxuICAgICAgdmFyIHByZWZpeCA9ICQodGhpcykuYXR0cihcImRhdGEtcHJlZml4XCIpO1xyXG4gICAgICB2YXIgcG9zdGZpeCA9ICQodGhpcykuYXR0cihcImRhdGEtcG9zdGZpeFwiKTtcclxuXHJcbiAgICAgIHZhciAkcmFuZ2VQYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucmFuZ2Utc2xpZGVyXCIpO1xyXG4gICAgICAkcmFuZ2VQYXJlbnQuZmluZChcIi5yYW5nZS1sYWJlbHNfX3ByZWZpeFwiKS50ZXh0KHByZWZpeCk7XHJcbiAgICAgICRyYW5nZVBhcmVudC5maW5kKFwiLnJhbmdlLWxhYmVsc19fcG9zdGZpeFwiKS50ZXh0KHBvc3RmaXgpO1xyXG4gICAgICAkcmFuZ2VQYXJlbnQuZmluZChcIi5yYW5nZS1sYWJlbHNfX21pblZhbHVlXCIpLnRleHQobWluVmFsdWUpO1xyXG4gICAgICAkcmFuZ2VQYXJlbnQuZmluZChcIi5yYW5nZS1sYWJlbHNfX21heFZhbHVlXCIpLnRleHQobWF4VmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL2F1dG8gY29tcGxldGVcclxuICBpZiAoJChcIi5qcy1hdXRvY29tcGxldGVcIikubGVuZ3RoID4gMCkge1xyXG4gICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgIGRhdGE6IFtcImJsdWVcIiwgXCJncmVlblwiLCBcInBpbmtcIiwgXCJyZWRcIiwgXCJ5ZWxsb3dcIl0sXHJcbiAgICB9O1xyXG4gICAgJChcIi5qcy1hdXRvY29tcGxldGVcIikuZWFzeUF1dG9jb21wbGV0ZShvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8vcmFkaW8gY2hlY2tlZCBjb2RpdGlvbiBmb3IgdXBsb2FkIHZpZGVvIG9yIGxpbmsgdmlkZW9cclxuXHJcbiAgJChcIi5qcy1yYWRpby10b2dnbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgIHZhciB0YXJnZXREaXYgPSBpbnB1dC5hdHRyKFwiZGF0YS10YXJnZXRcIik7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoXCIuY2FyZFwiKS5maW5kKFwiLmpzLXJhZGlvLXRvZ2dsZS1yZXN1bHRzXCIpLmhpZGUoKTtcclxuICAgIGlmIChpbnB1dC5pcyhcIjpjaGVja2VkXCIpKSB7XHJcbiAgICAgICQoXCIjXCIgKyB0YXJnZXREaXYpLnNob3coKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoJChcIi5qcy1yYWRpby10b2dnbGVcIikubGVuZ3RoID4gMCkge1xyXG4gICAgJChcIi5qcy1yYWRpby10b2dnbGVcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKS5pcyhcIjpjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldERpdiA9ICQodGhpcykuZmluZChcImlucHV0XCIpLmF0dHIoXCJkYXRhLXRhcmdldFwiKTtcclxuICAgICAgICAkKFwiI1wiICsgdGFyZ2V0RGl2KS5zaG93KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0RGl2KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vbGlnaHRvYnggZm9yIGltYWdlc1xyXG4gIGlmICgkKFwiLmxpZ2h0Ym94XCIpLmxlbmd0aCA+IDApIHtcclxuICAgIHZhciAkZ2FsbGVyeSA9IG5ldyBTaW1wbGVMaWdodGJveChcIi5saWdodGJveFwiLCB7fSk7XHJcbiAgfVxyXG4gIC8vICQoXCIuanMtcHJvcGVydHktdmlkZW9cIikubGlnaHRHYWxsZXJ5KCk7XHJcbiAgLy8gbGlnaHRHYWxsYXJ5XHJcbiAgaWYgKCQoXCIubGctZ2FsbGFyeVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAkKFwiLmxnLWdhbGxhcnlcIikubGlnaHRHYWxsZXJ5KHtcclxuICAgICAgc2VsZWN0b3I6IFwiLmpzLWxpZ2h0R2FsbGFyeS1zZWxlY3RvclwiLFxyXG4gICAgICBzaGFyZTogZmFsc2UsXHJcbiAgICAgIHpvb206IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoJChcIi5sZy1tb3JlUGhvdG9zXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICQoXCIubGctbW9yZVBob3Rvc1wiKS5saWdodEdhbGxlcnkoe1xyXG4gICAgICBzZWxlY3RvcjogXCIuaXRlbVwiLFxyXG4gICAgICBzaGFyZTogZmFsc2UsXHJcbiAgICAgIHpvb206IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBwb3BsdWxhciBwcm9wZXJ0aXNlXHJcbiAgaWYgKCQoXCIuanMtcHJvcGVydHktY2Fyb3VzZWwtbW9iaWxlXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICQoXCIuanMtcHJvcGVydHktY2Fyb3VzZWwtbW9iaWxlXCIpLnNsaWNrKHtcclxuICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDEuMixcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcclxuICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgIG5leHRBcnJvdzogYDxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1hcnJvdyBzbGljay1uZXh0XCI+PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNi4wMDAxIDcuMkwxMi4wMDAxIDEzLjJMMTguMDAwMSA3LjJMMjAuNDAwMSA4LjRMMTIuMDAwMSAxNi44TDMuNjAwMSA4LjRMNi4wMDAxIDcuMlpcIiAgLz5cclxuICAgICAgPC9zdmc+PC9idXR0b24+XHJcbiAgICAgIGAsXHJcbiAgICAgIHByZXZBcnJvdzogYDxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1hcnJvdyBzbGljay1wcmV2XCI+PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNi4wMDAxIDcuMkwxMi4wMDAxIDEzLjJMMTguMDAwMSA3LjJMMjAuNDAwMSA4LjRMMTIuMDAwMSAxNi44TDMuNjAwMSA4LjRMNi4wMDAxIDcuMlpcIiAgLz5cclxuICAgICAgPC9zdmc+PC9idXR0b24+XHJcbiAgICAgIGAsXHJcbiAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG5cclxuICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL2NoZWNrIHBhcmVudCBhbmQgY2hlY2sgaXRzIGNoaWxkcmVuIGNoZWNrYm94XHJcbiAgJChcIi5qcy1wYXJlbnRDaGVja0JveFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpXHJcbiAgICAgIC5wYXJlbnRzKFwiLnByb3BlcnRpZXMtbGlzdHNcIilcclxuICAgICAgLmZpbmQoXCIuanMtY2hpbGRDaGVja0JveFwiKVxyXG4gICAgICAucHJvcChcImNoZWNrZWRcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgLy9jbGlja2luZyB0aGUgbGFzdCB1bmNoZWNrZWQgb3IgY2hlY2tlZCBjaGVja2JveCBzaG91bGQgY2hlY2sgb3IgdW5jaGVjayB0aGUgcGFyZW50IGNoZWNrYm94XHJcbiAgJChcIi5qcy1jaGlsZENoZWNrQm94XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwYXJlbnRDb250YWluZXIgPSBcIi5wcm9wZXJ0aWVzLWxpc3RzXCI7XHJcbiAgICB2YXIgcGFyZW50Q2hlY2tib3ggPSBcIi5qcy1wYXJlbnRDaGVja0JveFwiO1xyXG4gICAgaWYgKFxyXG4gICAgICAkKHRoaXMpLnBhcmVudHMocGFyZW50Q29udGFpbmVyKS5maW5kKHBhcmVudENoZWNrYm94KS5wcm9wKFwiY2hlY2tlZFwiKSA9PVxyXG4gICAgICB0cnVlICYmXHJcbiAgICAgIHRoaXMuY2hlY2tlZCA9PSBmYWxzZVxyXG4gICAgKVxyXG4gICAgICAkKHRoaXMpXHJcbiAgICAgICAgLnBhcmVudHMocGFyZW50Q29udGFpbmVyKVxyXG4gICAgICAgIC5maW5kKHBhcmVudENoZWNrYm94KVxyXG4gICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgdmFyIGZsYWcgPSB0cnVlO1xyXG4gICAgICAkKHRoaXMpXHJcbiAgICAgICAgLnBhcmVudHMocGFyZW50Q29udGFpbmVyKVxyXG4gICAgICAgIC5maW5kKFwiLmpzLWNoaWxkQ2hlY2tCb3hcIilcclxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5jaGVja2VkID09IGZhbHNlKSBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICQodGhpcylcclxuICAgICAgICAucGFyZW50cyhwYXJlbnRDb250YWluZXIpXHJcbiAgICAgICAgLmZpbmQocGFyZW50Q2hlY2tib3gpXHJcbiAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIGZsYWcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL3Byb3BlcnR5IGRldGFpbCBwYWdlOiBkZXNjcmlwdGlvbiBzaG93IG1vcmUvbGVzc1xyXG5cclxuICB2YXIgc2hvd0NoYXIgPSAzMDA7IC8vIEhvdyBtYW55IGNoYXJhY3RlcnMgYXJlIHNob3duIGJ5IGRlZmF1bHRcclxuICB2YXIgZWxsaXBzZXN0ZXh0ID0gXCIuLi5cIjtcclxuICB2YXIgbW9yZXRleHQgPSBcIlNob3cgbW9yZSA+XCI7XHJcbiAgdmFyIGxlc3N0ZXh0ID0gXCJTaG93IGxlc3NcIjtcclxuXHJcbiAgJChcIi5tb3JlXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNvbnRlbnQgPSAkKHRoaXMpLmh0bWwoKTtcclxuXHJcbiAgICBpZiAoY29udGVudC5sZW5ndGggPiBzaG93Q2hhcikge1xyXG4gICAgICB2YXIgYyA9IGNvbnRlbnQuc3Vic3RyKDAsIHNob3dDaGFyKTtcclxuICAgICAgdmFyIGggPSBjb250ZW50LnN1YnN0cihzaG93Q2hhciwgY29udGVudC5sZW5ndGggLSBzaG93Q2hhcik7XHJcblxyXG4gICAgICB2YXIgaHRtbCA9XHJcbiAgICAgICAgYyArXHJcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwibW9yZWVsbGlwc2VzXCI+JyArXHJcbiAgICAgICAgZWxsaXBzZXN0ZXh0ICtcclxuICAgICAgICAnJm5ic3A7PC9zcGFuPjxzcGFuIGNsYXNzPVwibW9yZWNvbnRlbnRcIj48c3Bhbj4nICtcclxuICAgICAgICBoICtcclxuICAgICAgICAnPC9zcGFuPiZuYnNwOyZuYnNwOzxhIGhyZWY9XCJcIiBjbGFzcz1cIm1vcmVsaW5rXCI+JyArXHJcbiAgICAgICAgbW9yZXRleHQgK1xyXG4gICAgICAgIFwiPC9hPjwvc3Bhbj5cIjtcclxuXHJcbiAgICAgICQodGhpcykuaHRtbChodG1sKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIi5tb3JlbGlua1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImxlc3NcIikpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImxlc3NcIik7XHJcbiAgICAgICQodGhpcykuaHRtbChtb3JldGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibGVzc1wiKTtcclxuICAgICAgJCh0aGlzKS5odG1sKGxlc3N0ZXh0KTtcclxuICAgIH1cclxuICAgICQodGhpcykucGFyZW50KCkucHJldigpLnRvZ2dsZSgpO1xyXG4gICAgJCh0aGlzKS5wcmV2KCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNoYXJ0IDogcHJpY2UgaGlzdG9yeVxyXG4gIGlmICgkKFwiI3ByaWNlQ2hhcnRcIikubGVuZ3RoID4gMCkge1xyXG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpY2VDaGFydFwiKTtcclxuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgYXNwZWN0UmF0aW86IDIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgIFwiSmFuXCIsXHJcbiAgICAgICAgICBcIkZlYlwiLFxyXG4gICAgICAgICAgXCJNYXJcIixcclxuICAgICAgICAgIFwiQXByXCIsXHJcbiAgICAgICAgICBcIk1heVwiLFxyXG4gICAgICAgICAgXCJKdW5cIixcclxuICAgICAgICAgIFwiSnVsXCIsXHJcbiAgICAgICAgICBcIkF1Z1wiLFxyXG4gICAgICAgICAgXCJTZXBcIixcclxuICAgICAgICAgIFwiT2N0XCIsXHJcbiAgICAgICAgICBcIk5vdlwiLFxyXG4gICAgICAgICAgXCJEZWNcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlByaWNlXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IFsxMiwgMTksIDMsIDUsIDIsIDMsIDE4LCAyMCwgMTYsIDE5LCAyMCwgMjBdLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0E2Q0VFM1wiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjNDA2MkJCXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0aWNreUNUQSgpIHtcclxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA3NjgpIHtcclxuICAgICAgaWYgKCQoXCIucHJvcGVydHktZGV0YWlsLXdyYXBwZXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoKSA+PVxyXG4gICAgICAgICAgJChcIi5wcm9wZXJ0eS1kZXRhaWwtd3JhcHBlclwiKS5vZmZzZXQoKS50b3AgK1xyXG4gICAgICAgICAgJChcIi5wcm9wZXJ0eS1kZXRhaWwtd3JhcHBlclwiKS5vdXRlckhlaWdodCgpIC1cclxuICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgJChcIi5maXhlZC1jdGFcIikuYWRkQ2xhc3MoXCJwb3NpdGlvbi1zdGF0aWNcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoXCIuZml4ZWQtY3RhXCIpLnJlbW92ZUNsYXNzKFwicG9zaXRpb24tc3RhdGljXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgc3RpY2t5Q1RBKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vc2hvdyBoZGllIGxpbmtcclxuICB2YXIgc2hvd2hpZGUgPSBmYWxzZTtcclxuICAkKFwiLmpzLXNob3doaWRlLWxpbmtcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10YXJnZXRcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcInNob3doaWRlLWxpbmstLWhhcy1zaG93blwiKTtcclxuICAgIGlmIChzaG93aGlkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgJChcIiNcIiArIHRhcmdldCkucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZVwiKTtcclxuICAgICAgJChcIiNcIiArIHRhcmdldCkuc2xpZGVEb3duKCk7XHJcbiAgICAgIHNob3doaWRlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIjXCIgKyB0YXJnZXQpLmFkZENsYXNzKFwiY29sbGFwc2VcIik7XHJcbiAgICAgICQoXCIjXCIgKyB0YXJnZXQpLnNsaWRlVXAoKTtcclxuICAgICAgc2hvd2hpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9kcmFnIGFuZCBkcm9wIGZpbGUgdXNpbmcgZHJvcHpvbmUgcGx1Z2luXHJcbiAgaWYgKCQoXCIjcHJldmlldy10ZW1wbGF0ZVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICB2YXIgcHJldmlld05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctdGVtcGxhdGVcIik7XHJcbiAgICBwcmV2aWV3Tm9kZS5pZCA9IFwiXCI7XHJcbiAgICB2YXIgcHJldmlld1RlbXBsYXRlID0gcHJldmlld05vZGUucGFyZW50Tm9kZS5pbm5lckhUTUw7XHJcbiAgfVxyXG4gIGlmICgkKFwiI2Ryb3Bjb250YWluZXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgdmFyIG15RHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wY29udGFpbmVyXCIpLCB7XHJcbiAgICAgIC8vIE1ha2UgdGhlIHdob2xlIGJvZHkgYSBkcm9wem9uZVxyXG4gICAgICB1cmw6IFwiL3RhcmdldC11cmxcIiwgLy8gU2V0IHRoZSB1cmxcclxuICAgICAgdGh1bWJuYWlsV2lkdGg6IDE1MCxcclxuICAgICAgdGh1bWJuYWlsSGVpZ2h0OiAxNTAsXHJcbiAgICAgIHBhcmFsbGVsVXBsb2FkczogMjAsXHJcbiAgICAgIHByZXZpZXdUZW1wbGF0ZTogcHJldmlld1RlbXBsYXRlLFxyXG4gICAgICBhdXRvUXVldWU6IGZhbHNlLCAvLyBNYWtlIHN1cmUgdGhlIGZpbGVzIGFyZW4ndCBxdWV1ZWQgdW50aWwgbWFudWFsbHkgYWRkZWRcclxuICAgICAgcHJldmlld3NDb250YWluZXI6IFwiLmRyYWduZHJvcC1pbWFnZXNcIiwgLy8gRGVmaW5lIHRoZSBjb250YWluZXIgdG8gZGlzcGxheSB0aGUgcHJldmlld3NcclxuICAgICAgLy8gY2xpY2thYmxlOiBcIi5maWxlc1VwbG9hZFwiLCAvLyBEZWZpbmUgdGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgdXNlZCBhcyBjbGljayB0cmlnZ2VyIHRvIHNlbGVjdCBmaWxlcy5cclxuICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMub24oXCJ0aHVtYm5haWxcIiwgZnVuY3Rpb24gKGZpbGUsIGRhdGFVcmwpIHtcclxuICAgICAgICAgICQoXCIuanMtbGlnaHRHYWxsYXJ5LXNlbGVjdG9yXCIpLmF0dHIoXCJocmVmXCIsIGRhdGFVcmwpO1xyXG4gICAgICAgICAgJChcIi5sZy1nYWxsYXJ5XCIpLmxpZ2h0R2FsbGVyeSh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcIi5qcy1saWdodEdhbGxhcnktc2VsZWN0b3JcIixcclxuICAgICAgICAgICAgc2hhcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB6b29tOiBmYWxzZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL3NlYXJjaCBwYWdlIG1hcCB0b2dnbGVcclxuICAkKFwiLmpzLW1hcFZpZXdlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiaXMtbWFwLXZpc2libGVcIik7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGNTZXJjaEZpbHRlckhlaWdodCgpIHtcclxuICAgIHZhciBmaWx0ZXJIZWlnaHQgPSAkKFwiLnNlYXJjaC1maWx0ZXItdG9wXCIpLm91dGVySGVpZ2h0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJIZWlnaHQpO1xyXG4gICAgJChcIjpyb290XCIpLmNzcyhcIi0tZmlsdGVySGVpZ2h0XCIsIGZpbHRlckhlaWdodCArIFwicHhcIik7XHJcbiAgfVxyXG4gIGlmICgkKFwiLnNlYXJjaC1maWx0ZXItdG9wXCIpLmxlbmd0aCA+IDApIHtcclxuICAgIGNhbGNTZXJjaEZpbHRlckhlaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCQoXCIjdG9rZW5GaWVsZFwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAkKFwiI3Rva2VuRmllbGRcIikudG9rZW5maWVsZCgpO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==
