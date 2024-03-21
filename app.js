"use strict";

$(document).ready(function() {
    $('.btn').click(function(e) {
        e.preventDefault();
        var inputValue = $('input').val().trim();
        if (inputValue !== '') {
            if (!isNaN(inputValue)) {
                var num = parseInt(inputValue);
                for (var i = 0; i < num; i++) {
                    $('.box').append(`<h2>${num}</h2>`);
                }
            } else {
                $('.box').append(`<h2>${inputValue}</h2>`);
            }
        }
        $('input').val('');
    });
});
