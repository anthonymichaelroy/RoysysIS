$(document).ready(function () {
    "use strict";
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I",                    "J", "K", "L", "M", "N", "O", "P", "Q", "R",                    "S", "T", "U", "V", "W", "X", "Y", "Z"],
        token = "AIzaSyCb-6MT3R1k34g5zjsKoH2deZnrzAS85Gg ";
    
    letters.forEach(function (item) {
        var s = '<span class="index-letter">' + item + '</span>';
        $("#contacts-scroll-index").append(s);
    });
        
    $.ajax({
        url: 'https://www.google.com/m8/feeds/contacts/default/full',
        dataType: 'jsonp',
        data: { access_token: token, 'max-results': '5000', alt: 'json' },
        success: function (data) {
            $("#something").val(data);
        }
    });
    
});