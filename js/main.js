// Global variables
const scrollSpyOffset = 80;

// Init Materialize components
M.AutoInit();
$(document).ready(function(){
    $('.tooltipped').tooltip({html: true});
  });

// Setup scroll spy
var loadScrollTop = ($(document).scrollTop() > 0 ? $(document).scrollTop() : null);
var section = document.querySelectorAll("section");
var sections = {};
var i = 0;
Array.prototype.forEach.call(section, function(e) {
  sections[e.id] = e.offsetTop;
});
var startAnalysisPos = $("#section-collection").offset().top - scrollSpyOffset * 4;
var endAnalysisPos = $("#threedmap-header").offset().top;

$(document).scroll(function () {
    showHideNav();
    selectInNav();
});

function showHideNav() {
  const currentTop = $(document).scrollTop();
  if ( currentTop !== loadScrollTop) {
    const nav = $("#analysis-nav");
    if (currentTop > startAnalysisPos && currentTop < endAnalysisPos) {
      nav.show();
    } else {
      nav.hide();
    }
  }
  loadScrollTop = null;
}

function selectInNav() {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  for (i in sections) {

    if (sections[i] <= scrollPosition + scrollSpyOffset) {
      console.log(i);
      const active = document.querySelector('.active');
      if (active) {
          console.log("active");
         active.setAttribute('class', 'text');
      }
      if (document.querySelector('a[href*=' + i + ']')) {
        console.log("has link");
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'text active');
      }
    }
  }
}
