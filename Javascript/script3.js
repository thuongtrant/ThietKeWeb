var timer = null
var left = 0, t = 0, incX = 10, incY = 10
function play() {
    var ball = document.getElementById("ball")
    var area = document.getElementsByClassName("ball-area")[0]
    timer = setInterval(function() {
        if( t < 0 || t + ball.offsetHeight >= area.offsetHeight )
        {
            incY =-incY
        }
        if( left < 0 || left + ball.offsetWidth >= area.offsetWidth )
        {
            incX = -incX
        }
        left += incX
        t += incY
        ball.style.top = t + "px"
        ball.style.left = left + "px"
    }, 15)
}
function stop()
{
    clearInterval(timer)
}