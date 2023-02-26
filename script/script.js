function modifyHeaderWhenScrolling() {
    let percentage = 100 - document.documentElement.scrollTop * 0.5;

    document.getElementById("header").style.opacity = String(percentage + '%');

    if (document.documentElement.scrollTop > 100)
        document.getElementById("header").style.pointerEvents = 'none';
    else
        document.getElementById("header").style.pointerEvents = 'all';
}

function modifyPhotosWhenScrolling() {
    let percentage = 0;

    if (document.documentElement.scrollTop >= 200 && document.documentElement.scrollTop <= 400)
        percentage = 100;
    else if (document.documentElement.scrollTop < 200)
        percentage = (document.documentElement.scrollTop + 15) * 0.5;
    else if (document.documentElement.scrollTop > 400)
        percentage = 100 - (document.documentElement.scrollTop - 385) * 0.5;
    if (percentage < 15)
        percentage = 15;

    document.getElementById("coding-photo").style.opacity = String(percentage + '%');
    document.getElementById("car-photo").style.opacity = String(percentage + '%');
    document.getElementById("football-photo").style.opacity = String(percentage + '%');
}

function submitForm() {
    Swal.fire({
        icon: 'success',
        title: 'Thank you for your message!',
        showConfirmButton: false,
        background: '#c9e8e8',
        timer: 1500
    })

    const form = document.getElementsByName('contact-form')[0];

    form.submit();
    form.reset();
}

function moveElementsBelowHeader() {
    const topPadding = document.getElementById('header').offsetHeight + 2;
    document.querySelector('body').style.top = String(topPadding + 'px');
    console.log(document.getElementById('header').offsetHeight);
}

window.onresize = moveElementsBelowHeader;
window.onload = moveElementsBelowHeader;
