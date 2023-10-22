const languageSwitch = document.getElementById('language-switch');

languageSwitch.addEventListener('click', function () {
    const currentPage = window.location.pathname;
    const targetPage = currentPage.includes('indextr.html') ? 'index.html' : 'indextr.html';
    window.location.href = targetPage;
});
function refreshPage() {
    location.reload();
}

setTimeout(function () {
    const text = document.querySelector('.reveal-text');
    text.classList.add('reveal');
}, 2000);

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const backToTopButton = document.getElementById('backToTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};
function scrollToTop() {
    const scrollToTop = window.setInterval(function() {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        clearInterval(scrollToTop);
      }
    }, 0.1);
}