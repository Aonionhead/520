$(function () {
    'use strict';

    var $container = $('#mediaDiv');
    var $image = $container.children('div.on');
    var mediaObj;
    var iTransform, cTransform;
    var currentSongIndex = 0;

    var songs = ['幸运星 - 牛奶咖啡.mp3', '慢慢喜欢你 - 莫文蔚.mp3', 'music.mp3'];
    mediaObj = new Audio();
    mediaObj.src = 'images/media/' + songs[currentSongIndex];  // 背景音乐修改这里
    mediaObj.loop = true;
    mediaObj.autoplay = true;
    // window.mediaObj = mediaObj;

    $(document).one('touchstart.play click.play', function () {
        mediaObj.play();
        mediaPlay();
    });

    $image.bind('click', function () {
        if (mediaObj.paused) {
            mediaObj.play();
            mediaPlay();
        } else {
            setTimeout(function(){
                mediaObj.pause();
                mediaPause();
            }, 0.1e3);
        }
    });

    function mediaPlay() {
        $image.addClass('animate');
    }

    function mediaPause() {
        iTransform = $image.css('transform');
        cTransform = $container.css('transform');
        $container.css('transform', cTransform === 'none' ? iTransform : iTransform.concat(' ', cTransform));
        $image.removeClass('animate');
    }

    $(mediaObj).bind('canplaythrough', function () {
        // mediaObj.play();
    }).bind('pause ended', function () {
        mediaPause();
    }).bind('playing', function () {
        mediaPlay();
    });
    

    var random = function () {
        // var str = Math.random().toString();
        // return str.substring(str.length - 1);
        return Math.ceil(Math.random() * 15);
    };

    $image.css('backgroundImage', 'url("images/media/on' + random() + '.JPG")');
});