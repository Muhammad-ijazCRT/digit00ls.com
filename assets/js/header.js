

$(document).ready(function () {

    $("#confirm").click(function () {
        $(".sweet-overlay").fadeOut();
        $(".showSweetAlert").fadeOut();
        window.parent.location = window.parent.location.href;
    });

});


$(document).ready(function () {

    $(".buy").click(function () {

        if (confirm('Are you sure to buy this Tools')) {

            var hideId = $(this).attr('value');
            var buyId = $(this).attr('id');
            var dataString = 'id=' + buyId;

            jQuery.ajax({
                type: "POST",
                url: "buy",
                data: dataString,
                success: function (response) {
                    $("#message").append(response);
                    $('.' + hideId).fadeIn(200).hide();
                    setTimeout(function () {
                        $('.notifyjs-corner').fadeOut('fast');
                    }, 6000);
                },

                error: function (response) {
                    alert("ERROR #1001: Contat with support ");
                }

            });

            return false;

        } else {

            return false;

        } // confirm parts  


    });

});



$(document).ready(function () {

    $('.inbox').click(function () {

        var inbox_id = $(".inbox").val();
        var dataString = 'ajax=mesazhi&id=' + inbox_id;

        jQuery.ajax({
            type: "POST",
            url: "ajax",
            data: dataString,
            success: function (response) {
                $("#pergjigja").append(response);
                $(".sweet-overlay").fadeOut(200).hide();
                $(".showSweetAlert ").fadeOut(200).hide();
            }
        });

        return false;


    });


});

//mbyll popupin tek edit
function exit() {
    $(".sweet-overlay").fadeOut();
    $(".showSweetAlert").fadeOut();
}

// ora qe leviz
function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display()', refresh)
}

function display() {
    var strcount
    var x = new Date()
    var x1 = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
    document.getElementById('ct').innerHTML = x1;

    tt = display_c();
}

$(window).load(function () {
    $(".loader").fadeOut("slow");
});

$(document).ready(function () {
    $("input").prop('required', true);
});