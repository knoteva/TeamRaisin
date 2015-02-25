
$(document).ready(function () {
    var show; // current video on the screen
    var temp; // video for hidding
    var count = 1;
    var frame = '#frame'
    var temp_old = '';
    var random;



    function random_generator() {

        random = Math.round(Math.random() * Math.floor(6));
        return random;
    }




    // overlay allow to click on the frame without directly start the video(cheat). 
    $('.overlay').on('click', function () {
        clearInterval(refreshIntervalId);
        $(show).css('width', '800px');
        $(show + ' iframe').css('width', '800px');
        $(show).css('height', '600px');
        $(show + ' iframe').css('height', '600px');
        $('.overlay').css('display', 'none');
        $('#video_frame').css('width', '800px');
        $('#video_frame').css('height', '660px');
    });


    // Looping every 10sec and showing next video frame until click on some frame (overlay).
    var refreshIntervalId = setInterval(function () {
        temp = frame + (count - 1).toString();
        $(temp).css('display', 'none');

        if (count == 7) {
            count = 1;
        }
        show = frame + count;

        $(show).css('display', 'block');

        $('#frame' + count).on('click', function () {
            clearInterval;
            console.log('ala bala');
        });
        count++;
    }, 1000);



    //on click (слуяайно Видео) activate function
    $('#random_slide').on('click', function () {
        var get = random_generator();
        if (get == 0) {
            get = random_generator();
        }
       
       


        console.log(get);
        $('.overlay').css('display', 'block');
        $(show).css('width', '420px');
        $(show + ' iframe').css('width', '420px');
        $(show).css('height', '315px');
        $(show + ' iframe').css('height', '315px');


        for (var i = 1; i < 7; i++) {

            if (i != get) {
                show = frame + i;
                temp = frame + i;
                $(temp).css('display', 'none');
                console.log('hide' + temp);
                $(show).css('display', 'none');
                console.log('hide' + show);
                $('#video_frame').css('width', '800px');
                $('#video_frame').css('height', '400px');
                $(show).css('width', '420px');
                $(show).css('height', '315px');
                $(temp).css('width', '420px');
                $(temp).css('height', '315px');
                $('iframe').css('width', '420px');
                $('iframe').css('height', '315px');
                
            }
        }

        show = frame + get;
        $(show).css('display', 'block');

        clearInterval(refreshIntervalId);
    });


    //on click (Предишно Видео) activate function to go video frames step by step by the user
    $('#left_slide').on('click', function () {
        $('.overlay').css('display', 'block');
        $('#video_frame').css('width', '800px');
        $('#video_frame').css('height', '400px');
        $(show).css('width', '420px');
        $(show).css('height', '315px');
        $('iframe').css('width', '420px');
        $('iframe').css('height', '315px');
        temp = frame + (count - 1).toString();
        $(temp).css('display', 'none');
        if (count == 7) {
            count = 1;
        }
        show = frame + count;
        $(show).css('display', 'block');
        count++;
        clearInterval(refreshIntervalId);
    });



    //on click (Следващо Видео) activate function to go video frames step by step by the user
    $('#right_slaid').on('click', function () {
       
       
        $('.overlay').css('display', 'block'); // activate the overlay
        $('#video_frame').css('width', '800px');
        $('#video_frame').css('height', '400px');
        $(show).css('width', '420px'); // 
        $(show).css('height', '315px');
        $('iframe').css('width', '420px');
        $('iframe').css('height', '315px');
        if (count == 0) {
            count = 6;
        }
        show = frame + count.toString();
        $(show).css('display', 'none');
        count--;
        if (count == 0) {
            count = 6;
        }
        temp = frame + count.toString();
        $(temp).css('display', 'block');
        temp_old = show;
        show = temp;
        temp = temp_old;
        clearInterval(refreshIntervalId);
    });

});