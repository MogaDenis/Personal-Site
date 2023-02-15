function modifyOpacityWhenScrolling()
{
    let percentage = 100 - document.documentElement.scrollTop * 0.6;
    document.getElementById("header").style.opacity = String(percentage + '%');
}