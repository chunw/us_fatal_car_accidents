// Global variables
const scrollSpyOffset = 80;
var bodyTypeDataVisible = false;
var loadScrollTop, section, sections, i, startAnalysisPos, endAnalysisPos;

// Init Materialize components
M.AutoInit();
$(document).ready(function(){
  console.warn("ready");
  $('.tooltipped').tooltip({html: true});
  $('.tabs').tabs();

  // Setup scroll spy
  loadScrollTop = ($(document).scrollTop() > 0 ? $(document).scrollTop() : null);
  section = document.querySelectorAll("section");
  sections = {};
  i = 0;
  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });
  startAnalysisPos = $("#section-collection").offset().top - scrollSpyOffset * 4;
  endAnalysisPos = $("#threedmap-header").offset().top;
});

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
  console.log("scrollPosition + scrollSpyOffset = " + (scrollPosition + scrollSpyOffset));
  for (i in sections) {
    if (sections[i] <= scrollPosition + scrollSpyOffset) {
      const active = document.querySelector('.active');
      if (active) {
         active.setAttribute('class', 'text');
      }
      if (document.querySelector('a[href*=' + i + ']')) {
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'text active');
      }
    }
  }
}

function onToggleBodyTypeData() {
  bodyTypeDataVisible = !bodyTypeDataVisible;
  if (bodyTypeDataVisible) {
    $("#bodyTypeData").show();
  } else {
    $("#bodyTypeData").hide();
  }
}
