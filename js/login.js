$(document).ready(function () {
    $('.login-btn, .login-btn-mobile').click(function (event) {

        $('.cg-mask').show();
        $('body').css({
            'overflow': 'hidden'
        })
    })
    $('.login-close').click(() => {
        console.log('1', 1);
        $('.cg-mask').hide();
        $('body').css({
            'overflow': 'auto'
        })
       
    })
    $('.cg-login-btn').click(() => {
        $('.login-warn').show();
    })

})