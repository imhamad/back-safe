var $d0ba8cc6228db901$var$$html = document.querySelector("html");
var $d0ba8cc6228db901$var$$body = document.querySelector("body");
var $d0ba8cc6228db901$var$scrollLock = {
    enable: function() {
        if ($d0ba8cc6228db901$var$$html && $d0ba8cc6228db901$var$$body) {
            $d0ba8cc6228db901$var$$html.style.overflow = "hidden";
            $d0ba8cc6228db901$var$$body.style.overflow = "hidden";
        }
    },
    disable: function() {
        if ($d0ba8cc6228db901$var$$html && $d0ba8cc6228db901$var$$body) {
            $d0ba8cc6228db901$var$$html.style.removeProperty("overflow");
            $d0ba8cc6228db901$var$$body.style.removeProperty("overflow");
        }
    }
};
var $d0ba8cc6228db901$export$2e2bcd8739ae039 = $d0ba8cc6228db901$var$scrollLock;


var $77666ebffebb89e4$var$headerToggle = function(active) {
    var header = document.querySelector(".safe-header");
    if (header) {
        if (active) {
            header.classList.add("safe-header-active");
            $d0ba8cc6228db901$export$2e2bcd8739ae039.enable();
        } else {
            header.classList.remove("safe-header-active");
            $d0ba8cc6228db901$export$2e2bcd8739ae039.disable();
        }
    }
};
var $77666ebffebb89e4$var$onClickMenu = function(event) {
    event.preventDefault();
    var item = event.target;
    if (item.classList.contains("safe-menu-item")) $77666ebffebb89e4$var$headerToggle(false);
};
var $77666ebffebb89e4$export$b1e5508a851be14d = function() {
    var button = document.querySelector(".safe-header-button");
    var buttonClose = document.querySelector(".safe-header-button-close");
    if (button) button.addEventListener("click", function() {
        $77666ebffebb89e4$var$headerToggle(true);
    });
    if (buttonClose) buttonClose.addEventListener("click", function() {
        $77666ebffebb89e4$var$headerToggle(false);
    });
    var $77666ebffebb89e4$export$b1e5508a851be14d = document.querySelector(".safe-menu");
    var menuTouch = document.querySelector(".safe-menu-touch");
    if ($77666ebffebb89e4$export$b1e5508a851be14d) $77666ebffebb89e4$export$b1e5508a851be14d.addEventListener("click", $77666ebffebb89e4$var$onClickMenu);
    if (menuTouch) menuTouch.addEventListener("click", $77666ebffebb89e4$var$onClickMenu);
};


var $44de46def522f58a$var$scrollTo = function(hash) {
    var target = document.querySelector(hash);
    if (target) target.scrollIntoView({
      behavior: 'smooth'
    });
};
var $44de46def522f58a$var$navigation = function() {
    var $navs = document.querySelectorAll(".safe-navigation");
    $navs.forEach(function($nav) {
        $nav.addEventListener("click", function(event) {
            event.preventDefault();
            var anchor = event.target;
            if (anchor.classList.contains("safe-navigation-item")) {
                var hash_1 = anchor.getAttribute('href');
                window.history.pushState({}, "", hash_1);
                $44de46def522f58a$var$scrollTo(hash_1);
            }
        });
    });
 
    var hash = document.location.hash;
    if (hash) $44de46def522f58a$var$scrollTo(hash);
};
var $44de46def522f58a$export$2e2bcd8739ae039 = $44de46def522f58a$var$navigation;


(function() {
    $77666ebffebb89e4$export$b1e5508a851be14d();
    $44de46def522f58a$export$2e2bcd8739ae039();
})();

