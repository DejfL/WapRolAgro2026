document.getElementById('ZmienBackgrunt').addEventListener("click", zmienBackgrunt);

function zmienBackgrunt() {
    var el = document.getElementById('header');

    if (el.classList.contains('masthead')) {
        el.classList.remove('masthead');
        el.classList.add('mastheadGif');
    } else {
        el.classList.remove('mastheadGif');
        el.classList.add('masthead');
    }
}