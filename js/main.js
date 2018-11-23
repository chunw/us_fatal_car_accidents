// Global variables
const scrollSpyOffset = 80;

// Init Materialize components
M.AutoInit();

// Setup scroll spy
var loadScrollTop = ($(document).scrollTop() > 0 ? $(document).scrollTop() : null);
var section = document.querySelectorAll("section");
var sections = {};
var i = 0;
Array.prototype.forEach.call(section, function(e) {
  sections[e.id] = e.offsetTop;
});
var startAnalysisPos = $("#section-collection").offset().top - scrollSpyOffset * 2;
$(document).scroll(function (e) {
    const currentTop = $(document).scrollTop();
    if ( currentTop !== loadScrollTop) {
      const nav = $("#analysis-nav");
      if (currentTop > startAnalysisPos) {
        nav.show();
      } else {
        nav.hide();
      }
    }
    loadScrollTop = null;
});
window.onscroll = function() {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  for (i in sections) {
    if (sections[i] <= scrollPosition + scrollSpyOffset) {
       document.querySelector('.active').setAttribute('class', 'text');
      document.querySelector('a[href*=' + i + ']').setAttribute('class', 'text active');
    }
  }
};
