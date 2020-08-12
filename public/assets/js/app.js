"use strict";

$(document).ready(function () {
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


  if ($(".js-calendar").length > 0) {
    $(".js-calendar").flatpickr({
      inline: true
    });
  }

  if ($("#datatable").length > 0) {
    $('#datatable').DataTable({
      "dom": '<"top"f>t<"bottom"lp>',
      "oLanguage": {
        "sSearch": "Find the bond you need:"
      },
      language: {
        searchPlaceholder: "Search records"
      },
      "columnDefs": [{
        "orderable": false,
        "targets": 0
      }],
      "scrollX": true
    });
  }

  if ($(".dropdown-menu").length > 0) {
    $('.dropdown-menu select').click(function (e) {
      e.stopPropagation();
    });
  }
}); // $(window).on('load', function () {
//   setTimeout(function () { 
//     $(".js-loader").fadeOut("slow");
//    }, 
//     1000);
// })
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsInBhcmVudHMiLCJ0b2dnbGVDbGFzcyIsInNsaWRlVXAiLCJmaW5kIiwic2xpZGVUb2dnbGUiLCJsZW5ndGgiLCJvcHRpb25zIiwiZGF0YSIsImVhc3lBdXRvY29tcGxldGUiLCJmbGF0cGlja3IiLCJpbmxpbmUiLCJEYXRhVGFibGUiLCJsYW5ndWFnZSIsInNlYXJjaFBsYWNlaG9sZGVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFFQUEsQ0FBQSxDQUFBQyxRQUFBLENBQUEsQ0FBQUMsS0FBQSxDQUFBLFlBQUE7QUFPQUYsRUFBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQUcsS0FBQSxDQUFBLFlBQUE7QUFFQUgsSUFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBSSxPQUFBLENBQUEsYUFBQSxFQUFBQyxXQUFBLENBQUEsa0JBQUE7QUFDQUwsSUFBQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQU0sT0FBQTtBQUNBLEdBSkE7QUFLQU4sRUFBQUEsQ0FBQSxDQUFBLG9CQUFBLENBQUEsQ0FBQUcsS0FBQSxDQUFBLFlBQUE7QUFFQUgsSUFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBSSxPQUFBLENBQUEsYUFBQSxFQUFBQyxXQUFBLENBQUEsUUFBQTtBQUNBTCxJQUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUFJLE9BQUEsQ0FBQSxhQUFBLEVBQUFHLElBQUEsQ0FBQSxnQkFBQSxFQUFBQyxXQUFBO0FBQ0EsR0FKQSxFQVpBLENBb0JBOztBQUNBLE1BQUFSLENBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUFTLE1BQUEsR0FBQSxDQUFBLEVBQUE7QUFDQSxRQUFBQyxPQUFBLEdBQUE7QUFDQUMsTUFBQUEsSUFBQSxFQUFBLENBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLFFBQUE7QUFEQSxLQUFBO0FBR0FYLElBQUFBLENBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUFZLGdCQUFBLENBQUFGLE9BQUE7QUFDQSxHQTFCQSxDQThCQTs7O0FBQ0EsTUFBQVYsQ0FBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBUyxNQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQ0FULElBQUFBLENBQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQWEsU0FBQSxDQUFBO0FBQ0FDLE1BQUFBLE1BQUEsRUFBQTtBQURBLEtBQUE7QUFHQTs7QUFFQSxNQUFBZCxDQUFBLENBQUEsWUFBQSxDQUFBLENBQUFTLE1BQUEsR0FBQSxDQUFBLEVBQUE7QUFDQVQsSUFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBZSxTQUFBLENBQUE7QUFDQSxhQUFBLHVCQURBO0FBRUEsbUJBQUE7QUFBQSxtQkFBQTtBQUFBLE9BRkE7QUFHQUMsTUFBQUEsUUFBQSxFQUFBO0FBQUFDLFFBQUFBLGlCQUFBLEVBQUE7QUFBQSxPQUhBO0FBSUEsb0JBQUEsQ0FDQTtBQUFBLHFCQUFBLEtBQUE7QUFBQSxtQkFBQTtBQUFBLE9BREEsQ0FKQTtBQU9BLGlCQUFBO0FBUEEsS0FBQTtBQVNBOztBQUNBLE1BQUFqQixDQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBUyxNQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQ0FULElBQUFBLENBQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUFHLEtBQUEsQ0FBQSxVQUFBZSxDQUFBLEVBQUE7QUFDQUEsTUFBQUEsQ0FBQSxDQUFBQyxlQUFBO0FBQ0EsS0FGQTtBQUdBO0FBSUEsQ0F4REEsRSxDQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgJCgnLmpzLW5hdmlnYXRpb24tbWVudScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5uYXZpZ2F0aW9uJykudG9nZ2xlQ2xhc3MoJ25hdmlnYXRpb24tLW9wZW4nKTtcclxuICAgICQoJy5tZW51X19zdWJtZW51Jykuc2xpZGVVcCgpO1xyXG4gIH0pXHJcbiAgJCgnLmpzLXN1Ym1lbnUtdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQodGhpcykucGFyZW50cygnLm1lbnVfX2l0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5tZW51X19pdGVtJykuZmluZCgnLm1lbnVfX3N1Ym1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gIH0pXHJcblxyXG5cclxuXHJcbiAgLy9hdXRvIGNvbXBsZXRlXHJcbiAgaWYgKCQoXCIuanMtYXV0b2NvbXBsZXRlXCIpLmxlbmd0aCA+IDApIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICBkYXRhOiBbXCJibHVlXCIsIFwiZ3JlZW5cIiwgXCJwaW5rXCIsIFwicmVkXCIsIFwieWVsbG93XCJdLFxyXG4gICAgfTtcclxuICAgICQoXCIuanMtYXV0b2NvbXBsZXRlXCIpLmVhc3lBdXRvY29tcGxldGUob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8vZmxhdHBpY2tyXHJcbiAgaWYgKCQoXCIuanMtY2FsZW5kYXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgJChcIi5qcy1jYWxlbmRhclwiKS5mbGF0cGlja3Ioe1xyXG4gICAgICBpbmxpbmU6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCQoXCIjZGF0YXRhYmxlXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICQoJyNkYXRhdGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICBcImRvbVwiOiAnPFwidG9wXCJmPnQ8XCJib3R0b21cImxwPicsXHJcbiAgICAgIFwib0xhbmd1YWdlXCI6IHsgXCJzU2VhcmNoXCI6IFwiRmluZCB0aGUgYm9uZCB5b3UgbmVlZDpcIiB9LFxyXG4gICAgICBsYW5ndWFnZTogeyBzZWFyY2hQbGFjZWhvbGRlcjogXCJTZWFyY2ggcmVjb3Jkc1wiIH0sXHJcbiAgICAgIFwiY29sdW1uRGVmc1wiOiBbXHJcbiAgICAgICAgeyBcIm9yZGVyYWJsZVwiOiBmYWxzZSwgXCJ0YXJnZXRzXCI6IDAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcInNjcm9sbFhcIjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmICgkKFwiLmRyb3Bkb3duLW1lbnVcIikubGVuZ3RoID4gMCkge1xyXG4gICAgJCgnLmRyb3Bkb3duLW1lbnUgc2VsZWN0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxufSk7XHJcbi8vICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuLy8gICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgXHJcbi8vICAgICAkKFwiLmpzLWxvYWRlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuLy8gICAgfSwgXHJcbi8vICAgICAxMDAwKTtcclxuXHJcbi8vIH0pIl19
