function WiecejClick(button) {
    if (button.id == "WiecejGranWapButton") {
        GranWap(button)
    } else if (button.id == "WiecejMagWapButton") {
        MagWap(button)
    } else {
        WapnoLuzem(button);
    }
}

function GranWap(button) {
    var el = document.getElementById('WiecejGranWapContent');

    if (button.innerText == "WIĘCEJ") {
        button.innerText = "MNIEJ";

        el.classList.remove('collapse');

        // czy trzeba ukryc inne?
        var elMagWap = document.getElementById('WiecejMagWapContent');
        if (!elMagWap.classList.contains('collapse')) {
            elMagWap.classList.add('collapse');
            // i zmiana tekstu na guziczku
            document.getElementById('WiecejMagWapButton').innerHTML = "WIĘCEJ";
        }

        var elWapnoLuzem = document.getElementById('WiecejWapnoLuzemContent');
        if (!elWapnoLuzem.classList.contains('collapse')) {
            elWapnoLuzem.classList.add('collapse');
            // i zmiana tekstu na guziczku
            document.getElementById('WiecejWapnoLuzemButton').innerHTML = "WIĘCEJ";
        }

        var offsetPosition = document.getElementById("WiecejGranWapContent").offsetTop - document.getElementById("mainNav").offsetHeight - 10;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    } else {
        button.innerText = "WIĘCEJ";
        el.classList.add('collapse')
    }
}

function MagWap(button) {
    var el = document.getElementById('WiecejMagWapContent');

    if (button.innerText == "WIĘCEJ") {
        button.innerText = "MNIEJ";

        el.classList.remove('collapse');

        // czy trzeba ukryc inne?
        var elMagWap = document.getElementById('WiecejGranWapContent');
        if (!elMagWap.classList.contains('collapse')) {
            elMagWap.classList.add('collapse');
            // i zmiana tekstu na guziczku
            document.getElementById('WiecejGranWapButton').innerText = "WIĘCEJ";
        }

        var elWapnoLuzem = document.getElementById('WiecejWapnoLuzemContent');
        if (!elWapnoLuzem.classList.contains('collapse')) {
            elWapnoLuzem.classList.add('collapse');
            // i zmiana tekstu na guziczku
            document.getElementById('WiecejWapnoLuzemButton').innerHTML = "WIĘCEJ";
        }

        var offsetPosition = document.getElementById("WiecejMagWapContent").offsetTop - document.getElementById("mainNav").offsetHeight - 10;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    } else {
        button.innerText = "WIĘCEJ";
        el.classList.add('collapse')
    }
}

function WapnoLuzem(button) {
    var el = document.getElementById('WiecejWapnoLuzemContent');

    if (button.innerText == "WIĘCEJ") {
        button.innerText = "MNIEJ";

        el.classList.remove('collapse');

        // czy trzeba ukryc inne?
        var elMagWap = document.getElementById('WiecejGranWapContent');
        if (!elMagWap.classList.contains('collapse')) {
            elMagWap.classList.add('collapse');
            // i zmiana tekstu na guziczku
            document.getElementById('WiecejGranWapButton').innerText = "WIĘCEJ";
        }

        var elMagWap = document.getElementById('WiecejMagWapContent');
        if (!elMagWap.classList.contains('collapse')) {
            elMagWap.classList.add('collapse');
            // i zmiana tekstu na guziczku
            document.getElementById('WiecejMagWapButton').innerHTML = "WIĘCEJ";
        }

        var offsetPosition = document.getElementById("WiecejWapnoLuzemContent").offsetTop - document.getElementById("mainNav").offsetHeight - 10;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    } else {
        button.innerText = "WIĘCEJ";
        el.classList.add('collapse')
    }
}