
$(document).ready(function () {
    var show;
    var temp;
    var count = 1;
    var frame = '#frame'
    $('.overlay').on('click', function () {
        clearInterval(refreshIntervalId);
        $(show).css('width', '800px');
        $(show + ' iframe').css('width', '800px');
        $(show).css('height', '600px');
        $(show + ' iframe').css('height', '600px');
        $('.overlay').css('display', 'none');
    });
    var refreshIntervalId = setInterval(function () {
        temp = frame + (count - 1).toString();
        $(temp).css('display', 'none');
        console.log(temp);
        if (count == 6) {
            count = 1;
        }
        show = frame + count;

        $(show).css('display', 'inline-block');

        console.log(show);

        $('#frame' + count).on('click', function () {
            clearInterval;
            console.log('ala bala');
        });
        count++;
    }, 1000);









});