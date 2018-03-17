$(document).ready(function () {
    AddCompanyTitle(); // add title to site pages
    AddSiteCSS(); // add site css to site pages
    UpdateNavBar(); // updating the Nav to company L&F    
});

var AddCompanyTitle = function () {
    $("head").append("<title>Roysys IS</title>");
};

var AddSiteCSS = function () {
    $("head").append('<link href="css/site.css" rel="stylesheet">');
};

var UpdateNavBar = function () {
    $("nav").removeClass("bg-dark").addClass("bg-purple");
    
    $(".navbar-brand").text(function () {
        return $(this).text().replace("{companyName}", "Roysys Information Systems")
    });
};