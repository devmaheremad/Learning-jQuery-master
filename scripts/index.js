$(function() {

    window.addEventListener('touchmove', function() {
        console.log(event);
        event.preventDefault();
    }, { passive: true });

    // Calculate Body Padding Top Depond On Navbar Height

    $('body').css('paddingTop', $('.navbar').innerHeight());

    // Smoothly Scroll To Element

    $('.navbar li a').click(function(e) {

        e.preventDefault();

        $('body, html').animate({

            scrollTop: ($('#' + $(this).data('scrollto')).offset().top - $('.navbar').innerHeight() + 2)

        }, 1200);

    });

});

// Add Active Class On Navbar Link And Remove From Siblings

$('.navbar li a').click(function() {

    $(this).addClass('active').parent().siblings().find('a').removeClass('active');

});

$(window).scroll(function() {

    // Add Active Class On Sync Links With Sections

    $('.block').each(function() {

        let hyperlinkInNavbar = $('.navbar li a');

        if ($(window).scrollTop() + $('.navbar').innerHeight() + 1 > $(this).offset().top) {

            let blockId = $(this).attr('id');

            if (hyperlinkInNavbar.hasClass('active')) {

                hyperlinkInNavbar.removeClass('active');

            };

            $(`.navbar li a[data-scrollto="${blockId}"]`).addClass('active');

        };

    });

});

$(document).ready(function() {

    let scrollToTopBtn = $('#scroll-to-top');

    // Add slide Effect To Scroll To Top Button

    $(window).scroll(function() {

        if ($(this).scrollTop() >= 1000) {

            if (scrollToTopBtn.is(':hidden')) {

                scrollToTopBtn.slideDown('fast');

            };

        } else {

            if ($(this).scrollTop() < 1000) {

                scrollToTopBtn.slideUp('fast');

            };
        };

    });

    // Scroll To Top Button

    scrollToTopBtn.on('click', function(e) {

        event.preventDefault();

        $('body, html').animate({

            scrollTop: 0

        }, 1200);

    });

});


// Show the popup

$('.showpopup').on('click', function(e) {

    e.preventDefault();

    $($(this).data('popup')).fadeIn('fast');

});

// close the popup

$('.popup .innerpopup .closepopup').on('click', function(e) {

    e.preventDefault();

    $(this).parentsUntil('.popup').parent().fadeOut('fast');

});

$('.popup').on('click', function(e) {

    e.preventDefault();

    $(this).fadeOut('fast');

});

$('.popup .innerpopup').on('click', function(e) {

    e.stopPropagation();

});

$(document).keydown(function(e) {

    if (e.keyCode == 27) {

        $('.popup').fadeOut('fast');

    };

});

// Add Empty Span In The First Of Buttons To Make The Effect On It

$('.container-buttons button').each(function() {
    $(this).prepend('<span></span>');
});

// Add Effect From Left To Right For Buttons
// Add Border Effect From Left To Right For Buttons

$('.from-left, .border-left').hover(function() {

    $(this).find('span:eq(0)').animate({
        width: '100%'
    }, 300);

}, function() {

    $(this).find('span:eq(0)').animate({
        width: 0
    }, 300);

});

// Add Effect From Top To Bottom For Buttons
// Add Border Effect From Top To Bottom For Buttons 

$('.from-top, .border-top').hover(function() {

    $(this).find('span:eq(0)').animate({
        height: '100%'
    }, 300)

}, function() {

    $(this).find('span:eq(0)').animate({
        height: 0
    }, 300);

});

// Add Effect From Bottom To Top For Buttons

$('.from-bottom').hover(function() {

    $(this).find('span:eq(0)').animate({
        height: '100%'
    }, 300);

}, function() {

    $(this).find('span:eq(0)').animate({
        height: 0
    }, 300);

});

// Add Effect From Right To Left For Buttons

$('.from-right').hover(function() {

    $(this).find('span:eq(0)').animate({
        width: '100%'
    }, 300);

}, function() {

    $(this).find('span:eq(0)').animate({
        width: 0
    }, 300);

});

// Add Function For Bouncs

function bounceElement(selector, times, distance, speed) {

    for (let i = 0; i < times; i++) {

        $(selector).animate({
            top: '-=' + distance
        }, speed).animate({
            top: '+=' + distance
        }, speed);

    };

};

$('.bounce-top').click(function() {

    bounceElement('.bounce-top', 1, 20, 250);

});

// Add Progress To Each Span In Loading-Bar

$('.loading-bar').find('span:eq(0)').each(function() {

    $(this).animate({
        width: $(this).data('progress')
    }, 900);

    $(this).text($(this).data('progress'));

});

// Styling The Fixed Menue 

$(window).ready(function() {

    $('.fixed-menue').css({

        left: -$('.fixed-menue').innerWidth()

    });

    $('.fixed-menue .fa-cog').css({

        left: $('.fixed-menue').innerWidth()

    });

});

$('.fixed-menue .fa-cog').on('click', function() {

    let fixedMenueSel = $('.fixed-menue');

    $(this).parent('.fixed-menue').toggleClass('is-visible');

    if (fixedMenueSel.hasClass('is-visible')) {

        fixedMenueSel.animate({

            left: 0

        }, 500)

        $('body').animate({

            paddingLeft: $('.fixed-menue').innerWidth()

        }, 500);

        $('.navbar').animate({

            paddingLeft: $('.fixed-menue').innerWidth()

        }, 500);

    } else {

        fixedMenueSel.animate({

            left: -fixedMenueSel.innerWidth()

        }, 500)

        $('body').animate({

            paddingLeft: 0

        }, 500);

        $('.navbar').animate({

            paddingLeft: 0

        }, 500);

    };

});

// Start Theme

$('.colors li').on('click', function() {

    $('body').attr('data-theme-defual', $(this).data('defualt-color'));

});

// Start Gallery images Code

$('div.gallery .other-img img').on('click', function() {

    $(this).addClass('selected').siblings().removeClass('selected');

    $('div.gallery .master-img  img').hide().attr('src', $(this).attr('src')).fadeIn('slow');

});

$('.master-img .fa-chevron-circle-left').on('click', function() {

    if ($('.other-img .selected').is(':first-child')) {

        $('.other-img img:last-of-type').click();

    } else {

        $('img.selected').prev().click();

    };

});

$('.master-img .fa-chevron-circle-right').on('click', function() {

    if ($('.other-img .selected').is(':last-child')) {

        $('.other-img img:first-of-type').click();

    } else {

        $('img.selected').next().click();

    };

});

// let numOfImg = $('.other-img').children().length;

// let margBetImg = '0.5';

// let widthOfImg = (100 - (margBetImg * (numOfImg - 1))) / numOfImg

// $('div.gallery .other-img img').each(function() {

//     $(this).css({
//         width: widthOfImg + '%'
//     });

// });

let numOfImg = $('.other-img').children().length;

let widthOfImg = 100 / numOfImg

$('div.gallery .other-img img').each(function() {

    $(this).css({
        width: widthOfImg + '%'
    });

});

// Start Gallery Products Code Toggle Classes

$('div.product i, div.items i').on('click', function() {

    $(this).toggleClass('fa-plus fa-minus').next('p').slideToggle('fast');

});

// Start Gallery Products/Items Code Toggle Classes Between a List Or a Grid

// The First Way

$('i.choose-type').on('click', function() {

    $('div.items').removeClass('grid-view list-view').addClass($(this).data('type'));

    $(this).addClass('option-selected').siblings().removeClass('option-selected');

});



// the second way

// $('i.choose-type:eq(0)').on('click', function() {

//     if ($('div.items').hasClass('list-view')) {

//         $('div.items').removeClass('list-view').addClass('grid-view');

//         $(this).addClass('option-selected').siblings().removeClass('option-selected');

//     };

// });

// $('i.choose-type:eq(1)').on('click', function() {

//     if ($('div.items').hasClass('grid-view')) {

//         $('div.items').removeClass('grid-view').addClass('list-view');

//         $(this).addClass('option-selected').siblings().removeClass('option-selected');

//     };

// });

// Start Coding The Erorr Message To Show 


$(function() {

    $('.erorr-message').css({
        right: -$(this).innerWidth()
    });

    $('.erorr-message').animate({
        top: $('.navbar').innerHeight(),
        right: 0
    }, 1000).delay(2000).fadeOut();

});

// Hide Placeholder When Foucs and Back It When Blur

let placeHolder = '';

$('[placeholder]').focus(function() {

    placeHolder = $(this).attr('placeholder');

    $(this).attr('placeholder', '');

});

$('[placeholder]').blur(function() {

    $(this).attr('placeholder', placeHolder);

});

// Show Message When Field Is Empty

$('[required]').blur(function() {

    if ($(this).val() == '') {

        $(this).next('span').fadeIn().delay(1500).fadeOut();

        $(this).css({
            border: '1px solid red'
        });

        $(this).prev('span:contains("*")').css({
            color: 'red'
        })

    };

    if ($(this).val() !== '') {

        $(this).prev('span:contains("*")').css({
            color: 'black'
        });

        $(this).css({
            border: '1px solid rgb(169, 169, 169)'
        });

    };

});

// Put The Star Inside The Required Input

$('<span>*</span>').insertBefore(':input[required]');

$(':required').parent('div').css({
    position: 'relative',
});

$('span:contains("*")').each(function() {

    $(this).css({

        position: 'absolute',
        top: 19,
        left: $(this).parent().find(':input').innerWidth() - 20
    });

});

// Customize Input File 

$(function() {

    $('input[type="file"]').wrap('<div class="upload-file"></div>');

    $('.upload-file input[type="file"]').css({
        height: $('.this-form input').innerHeight()
    });

    $('<span>Upload Your Files</span>').insertBefore('input[type="file"]');

    $('.upload-file').append('<i class="fa fa-upload fa-lg skin-color"></i>');

    $('input[type="file"]').change(function() {

        $(this).prev('span').text($(this).val());

    });

});

// Detect The Uniqe Code

$('.uniqe-code').on('keyup', function(e) {

    let keyboardCode = e.keyCode || e.which

    $('.keycode').text(keyboardCode);

});

// Change Direction Depend On The Language

$('.my-form input, .my-form textarea').on('keyup', function() {

    if ($(this).val().charCodeAt(0) < 200) {

        $(this).css({
            direction: 'ltr'
        });

    } else {

        $(this).css({
            direction: 'rtl'
        });

    };

});

// Choose The Suitable Placholder Depend On The Language Of The Input

$('.my-form input, .my-form textarea').on('blur', function() {

    if ($(this).val() == '' && $(this).css('direction') == 'rtl') {

        $(this).prop('placeholder', $(this).data('placeholder'));

    } else if ($(this).val() == '' && $(this).css('direction') == 'ltr') {

        $(this).prop('placeholder', $(this).prop('placeholder'));

    };

});

// let arabicLetters = 'ابتثجحخدذرزسشصضطظعغفقكمنولاي',

//     englishLetters = 'abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

// textArabic = '',

//     textEnglish = '';


// for (let i = 0; i < arabicLetters.length; i++) {

//     textArabic += arabicLetters.charCodeAt(i) + '<br>';

//     console.log(textArabic);

// };

// for (let i = 0; i < arabicLetters.length; i++) {

//     textEnglish += englishLetters.charCodeAt(i) + '<br>';

//     console.log(textEnglish);

// };

// Making The Tags When Comma Pressed

$('.tag-input').on('keyup', function(e) {

    let commaPressed = e.keyCode || e.wich;

    let inputTagName = $(this).val().slice(0, -1);

    if (commaPressed == 188) {

        $('.tags').append(`<span class="tag"><i class="fas fa-times fa-sm"></i>${inputTagName}</span>`);

        $(this).val('');

    };

});

// Remove The Tags When Pressed On Close Icon

$('.tags').on('click', '.tag i', function() {

    $(this).parent('span.tag').remove();

});

// Make Function That Make Any Paragraph Show A Different Number Of it charactor

trimText('.p-one', 20);

trimText('.p-two', 200);

trimText('.p-three', 400);


function trimText(selector, maxLength) {

    $(selector).each(function() {

        let realText = $(this).html();

        let trimmedText = $(this).text().substr(0, maxLength);

        if ($(this).text().length > maxLength) {

            $(this).html(`${trimmedText}<span class="show-more"> Show More...</span>`);

        };

        $('p').on('click', 'span.show-more', function() {

            $(this).parent('p').html(`${realText}<span class="show-less"> Show less...</span>`);

            // $(selector).html(`${realText}<span class="show-less"> Show less...</span>`);

        });

        $('p').on('click', 'span.show-less', function() {

            $(this).parent('p').html(`${trimmedText}<span class="show-more"> Show More...</span>`);

            // $(selector).html(`${trimmedText}<span class="show-more"> Show More...</span>`);

        });

    });

};

// Make The Paragraph In The Same Height

let maxHeight = 0;

$('.p-same-height p').each(function() {

    if ($(this).innerHeight() > maxHeight) {

        maxHeight = $(this).innerHeight();

    };

});

$('.p-same-height p').innerHeight(maxHeight);

// Create Shuffle Cards

let zIndex = 0;

$('div.card').on('click', function() {

    $(this).animate({

        left: '30%',

        marginTop: 20

    }, 300, function() {

        zIndex--;

        $(this).css('z-index', zIndex);

    }).animate({

        left: $(this).css('left'),

        marginTop: 0

    }, 300);

});

// Create Blink Waning

$(function blinkWarining() {

    $('.blink-waning').fadeOut(1000, function() {

        $(this).fadeIn(1000);
        blinkWarining();

    });

});

// Add Task To ToDo List

let myInputTask = $('form.tasks input');

$('form.tasks').submit(function(e) {

    e.preventDefault();

    if (myInputTask.val() != '') {

        $(`<li>${myInputTask.val()}</li>`).appendTo('.todo-list ul');

        myInputTask.val('');

    };

});

$('.todo-list').on('click', 'li', function() {

    $(this).css('text-decoration', 'line-through').delay(500).fadeOut(400);

});

// Make Typer Machine

$(function() {

    let theText = $('.p-typer').data('text');

    let i = 0;

    let typer = setInterval(() => {

        $('.p-typer').each(function() {

            $(this).text($(this).text() + theText[i]);

            i += 1

        });

        // To Stop The SetInterval When The Text End

        if (i >= theText.length) {

            clearInterval(typer);

        };

    }, 100);

});

// Make The Total Of The Prices

let theTotal = 0;

$('tbody tr td:last-of-type').each(function() {

    if (isNaN(+$(this).text())) {

        $(this).css({
            textDecoration: 'line-through',
            color: 'red'
        });

    } else {

        theTotal += +$(this).text();

    };

});

$('#total-price').text(theTotal);

// Auto Change Content

(function autoChange() {

    $('.ul-styling li.li-active').each(function() {

        if (!$(this).is(':last-of-type')) {

            $(this).delay(1000).fadeOut(800, function() {

                $(this).removeClass('li-active').next('li').addClass('li-active').fadeIn(800);

                autoChange();

            });

        } else {

            $(this).delay(1000).fadeOut(800, function() {

                $(this).removeClass('li-active');

                $('.ul-styling li:eq(0)').addClass('li-active').fadeIn(800);

                autoChange();

            });

        };

    });

}());

// Start Create Dynamic Tabs

$(function() {

    $('.ul-style li').on('click', function() {

        $(this).addClass('liactive').siblings('li').removeClass('liactive');

        $('.content > div').hide();

        $($(this).data('content')).fadeIn()

    });

});

// Switch Veiw For The Tabs

$('#switch-veiw').on('click', function() {

    $('div.switch').toggleClass('ul-style left-tabs');

});

// Create Email Suggest Box

let myAutoComplete = ['@gmail.com', '@hotmail.com', '@outlook.com', '@yahoo.com', '@live.com'];

let finalStr = '';

$('#email').on('keyup', function() {

    finalStr = '';

    if (!$(this).next().is('ul')) {

        $(`<ul class="suggest-box"></ul>`).insertAfter(this);

    };

    $('.suggest-box').fadeIn();

    for (let i = 0; i < myAutoComplete.length; i++) {

        finalStr += `<li>${$(this).val()}${myAutoComplete[i]}</li>`;

    };

    $('.suggest-box').html(finalStr);

    $('.email-form').on('click', '.suggest-box li', function() {

        $('#email').val($(this).text());

        $('.suggest-box').delay(100).fadeOut().remove();

    });


});