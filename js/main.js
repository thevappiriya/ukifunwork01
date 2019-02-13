SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
    SC.stream('/tracks/547295505',function(sound){
        $('#start').click(function(e) {
            e.preventDefault();
            sound.start();
        });
        $('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
    });

    SC.stream('/tracks/496210638', function(sound) {
        $('#start1').click(function(e) {
            e.preventDefault();
            sound.start();
        });
        $('#stop1').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
    });

    SC.stream('/tracks/311732162', function(sound) {
        $('#start2').click(function(e) {
            e.preventDefault();
            sound.start();
        });
        $('#stop2').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
    });

    SC.stream('/tracks/456435057', function(sound) {
        $('#start3').click(function(e) {
            e.preventDefault();
            sound.start();
        });
        $('#stop3').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
    });

    SC.stream('/tracks/417489108', function(sound) {
        $('#start4').click(function(e) {
            e.preventDefault();
            sound.start();
        });
        $('#stop4').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
    });

    SC.stream('/tracks/94431903', function(sound) {
        $('#start5').click(function(e) {
            e.preventDefault();
            sound.start();
        });
        $('#stop5').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
    });

    SC.stream('/tracks/310866390', function(sound) {
        $('#start6').click(function(e) {
            e.preventDefault();
            sound.start();
        });
        $('#stop6').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
    });

    SC.stream('/tracks/191214159', function(sound) {
        $('#start7').click(function(e) {
            e.preventDefault();
            sound.start();
        });
        $('#stop7').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
    });

    SC.stream('/tracks/452686062', function(sound) {
        $('#start8').click(function(e) {
            e.preventDefault();
            sound.start();
        });
        $('#stop8').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
    });



});
