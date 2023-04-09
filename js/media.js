$(function () {
    'use strict';

    var $container = $('#mediaDiv');
    var $image = $container.children('div.on');
    var mediaObj;
    var iTransform, cTransform;
    var currentSongIndex = 0;

    var songs = ['慢慢喜欢你 - 莫文蔚.mp3', '明天,你好 - 牛奶咖啡.mp3', '目及皆是你 - 小蓝背心.mp3', '幸运星 - 牛奶咖啡.mp3'];
    mediaObj = new Audio();
    mediaObj.src = 'images/media/' + songs[currentSongIndex];
    //mediaObj.loop = true;
    mediaObj.autoplay = true;
    
    function playSong() {
        mediaObj.src = 'images/media/' + songs[currentSongIndex];
        mediaObj.play();
    }
    
    // 绑定播放结束事件，用于自动播放下一首歌曲
    mediaObj.addEventListener('ended', function() {
        // 切换到下一首歌曲
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong();
    });

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
