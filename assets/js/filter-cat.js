// Check active classes
var checkClass = function() {
    if ($('.item').hasClass('hide')) {
        $('.item').removeClass('hide');
    }
};

// Category filters
$('.all').click(function() {
    checkClass();
});
$('.sensors').click(function() {
    checkClass();
    $('.item:not(.sensors)').toggleClass('hide');
});
$('.controllers').click(function() {
    checkClass();
    $('.item:not(.controllers)').toggleClass('hide');
});
$('.ic').click(function() {
    checkClass();
    $('.item:not(.ic)').toggleClass('hide');
});
$('.passive').click(function() {
    checkClass();
    $('.item:not(.passive)').toggleClass('hide');
});
$('.modules').click(function() {
    checkClass();
    $('.item:not(.modules)').toggleClass('hide');
});
$('.robotics').click(function() {
    checkClass();
    $('.item:not(.robotics)').toggleClass('hide');
});
$('.motors').click(function() {
    checkClass();
    $('.item:not(.motors)').toggleClass('hide');
});
$('.displays').click(function() {
    checkClass();
    $('.item:not(.displays)').toggleClass('hide');
});
$('.powersupply').click(function() {
    checkClass();
    $('.item:not(.powersupply)').toggleClass('hide');
});
$('.testing').click(function() {
    checkClass();
    $('.item:not(.testing)').toggleClass('hide');
});

// Active tag
$('.button, .a').click(function() {
    $('.button, .a').removeClass('active');
    $(this).addClass('active');
});


$(document).ready(function() {
    // Filter items based on category
    $('.button').click(function() {
        var category = $(this).attr('data-category'); // assuming you set data-category attribute

        // Show all items by default
        if (category === 'all') {
            $('.item').slideDown(); // Use slideDown for a smooth animation
        } else {
            // Hide all items with a smooth slideUp animation, then show only the selected category
            $('.item').slideUp(300, function() {
                $('.item.' + category).slideDown(); // Use slideDown for a smooth animation
            });
        }

        // Update active tag
        $('.button').removeClass('active');
        $(this).addClass('active');
    });
});

