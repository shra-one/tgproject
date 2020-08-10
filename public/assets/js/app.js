"use strict";

$(document).ready(function () {
  $(window).resize(function () {}); //bootstrap modals

  $(document).on("hidden.bs.modal", function () {
    if ($(".modal.show").length) {
      $("body").addClass("modal-open");
    }
  });
  $('.js-navigation-menu').click(function () {
    $(this).parents('.navigation').toggleClass('navigation--open');
    $('.menu__submenu').slideUp();
  });
  $('.js-submenu-toggle').click(function () {
    $(this).parents('.menu__item').toggleClass('active');
    $(this).parents('.menu__item').find('.menu__submenu').slideToggle();
  }); //auto complete

  if ($(".js-autocomplete").length > 0) {
    var options = {
      data: ["blue", "green", "pink", "red", "yellow"]
    };
    $(".js-autocomplete").easyAutocomplete(options);
  } //flatpickr


  $(".js-calendar").flatpickr({
    inline: true
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3ciLCJyZXNpemUiLCJvbiIsImxlbmd0aCIsImFkZENsYXNzIiwiY2xpY2siLCJwYXJlbnRzIiwidG9nZ2xlQ2xhc3MiLCJzbGlkZVVwIiwiZmluZCIsInNsaWRlVG9nZ2xlIiwib3B0aW9ucyIsImRhdGEiLCJlYXN5QXV0b2NvbXBsZXRlIiwiZmxhdHBpY2tyIiwiaW5saW5lIl0sIm1hcHBpbmdzIjoiOztBQUVBQSxDQUFBLENBQUFDLFFBQUEsQ0FBQSxDQUFBQyxLQUFBLENBQUEsWUFBQTtBQUdBRixFQUFBQSxDQUFBLENBQUFHLE1BQUEsQ0FBQSxDQUFBQyxNQUFBLENBQUEsWUFBQSxDQUdBLENBSEEsRUFIQSxDQVFBOztBQUVBSixFQUFBQSxDQUFBLENBQUFDLFFBQUEsQ0FBQSxDQUFBSSxFQUFBLENBQUEsaUJBQUEsRUFBQSxZQUFBO0FBQ0EsUUFBQUwsQ0FBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBTSxNQUFBLEVBQUE7QUFDQU4sTUFBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBTyxRQUFBLENBQUEsWUFBQTtBQUNBO0FBQ0EsR0FKQTtBQU1BUCxFQUFBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxDQUFBUSxLQUFBLENBQUEsWUFBQTtBQUVBUixJQUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUFTLE9BQUEsQ0FBQSxhQUFBLEVBQUFDLFdBQUEsQ0FBQSxrQkFBQTtBQUNBVixJQUFBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBVyxPQUFBO0FBQ0EsR0FKQTtBQUtBWCxFQUFBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSxDQUFBUSxLQUFBLENBQUEsWUFBQTtBQUVBUixJQUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUFTLE9BQUEsQ0FBQSxhQUFBLEVBQUFDLFdBQUEsQ0FBQSxRQUFBO0FBQ0FWLElBQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQVMsT0FBQSxDQUFBLGFBQUEsRUFBQUcsSUFBQSxDQUFBLGdCQUFBLEVBQUFDLFdBQUE7QUFDQSxHQUpBLEVBckJBLENBNkJBOztBQUNBLE1BQUFiLENBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUFNLE1BQUEsR0FBQSxDQUFBLEVBQUE7QUFDQSxRQUFBUSxPQUFBLEdBQUE7QUFDQUMsTUFBQUEsSUFBQSxFQUFBLENBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLFFBQUE7QUFEQSxLQUFBO0FBR0FmLElBQUFBLENBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUFnQixnQkFBQSxDQUFBRixPQUFBO0FBQ0EsR0FuQ0EsQ0F1Q0E7OztBQUNBZCxFQUFBQSxDQUFBLENBQUEsY0FBQSxDQUFBLENBQUFpQixTQUFBLENBQUE7QUFDQUMsSUFBQUEsTUFBQSxFQUFBO0FBREEsR0FBQTtBQUlBLENBNUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gXHJcblxyXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICBcclxuIFxyXG4gIH0pO1xyXG5cclxuICAvL2Jvb3RzdHJhcCBtb2RhbHNcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoXCIubW9kYWwuc2hvd1wiKS5sZW5ndGgpIHtcclxuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJtb2RhbC1vcGVuXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICQoJy5qcy1uYXZpZ2F0aW9uLW1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gXHJcbiAgICQodGhpcykucGFyZW50cygnLm5hdmlnYXRpb24nKS50b2dnbGVDbGFzcygnbmF2aWdhdGlvbi0tb3BlbicpO1xyXG4gICAkKCcubWVudV9fc3VibWVudScpLnNsaWRlVXAoKTtcclxuIH0pXHJcbiAkKCcuanMtc3VibWVudS10b2dnbGUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gXHJcbiAgICQodGhpcykucGFyZW50cygnLm1lbnVfX2l0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICQodGhpcykucGFyZW50cygnLm1lbnVfX2l0ZW0nKS5maW5kKCcubWVudV9fc3VibWVudScpLnNsaWRlVG9nZ2xlKCk7XHJcbiB9KVxyXG4gXHJcbiBcclxuXHJcbiAgLy9hdXRvIGNvbXBsZXRlXHJcbiAgaWYgKCQoXCIuanMtYXV0b2NvbXBsZXRlXCIpLmxlbmd0aCA+IDApIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICBkYXRhOiBbXCJibHVlXCIsIFwiZ3JlZW5cIiwgXCJwaW5rXCIsIFwicmVkXCIsIFwieWVsbG93XCJdLFxyXG4gICAgfTtcclxuICAgICQoXCIuanMtYXV0b2NvbXBsZXRlXCIpLmVhc3lBdXRvY29tcGxldGUob3B0aW9ucyk7XHJcbiAgfVxyXG4gXHJcblxyXG4gIFxyXG4gIC8vZmxhdHBpY2tyXHJcbiAgJChcIi5qcy1jYWxlbmRhclwiKS5mbGF0cGlja3Ioe1xyXG4gICAgaW5saW5lOnRydWVcclxuICB9KTtcclxuICBcclxufSk7XHJcbiJdfQ==
