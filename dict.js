$(function() {
    var dict = {
        "หน้าหลัก": {
            en: "Home",
            zh: "主页",
            th: "หน้าหลัก"
        }
    };
    // Get Lang Code
    var nowlang = localStorage.getItem("nowlang");
    // Detect and set langcode to meta tag
    if (nowlang == null) {
        var _t = $('body').translate({lang: "th", t: dict});
        var str = _t.g("translate");
        console.log(str);
        localStorage.setItem("nowlang", "th");
        document.querySelector("meta[http-equiv='Content-Language']").setAttribute("content", "th");
    } else {
        var _t = $('body').translate({lang: nowlang, t: dict});
        var str = _t.g("translate");
        console.log(str);
        document.querySelector("meta[http-equiv='Content-Language']").setAttribute("content", nowlang);
    };
    // Switch language
    $(".lang_selector").click(function(ev) {
        var lang = $(this).attr("data-value");
        _t.lang(lang);
        document.querySelector("meta[http-equiv='Content-Language']").setAttribute("content", lang);
        localStorage.setItem("nowlang",lang);
        console.log(lang);
        ev.preventDefault();
    });
});