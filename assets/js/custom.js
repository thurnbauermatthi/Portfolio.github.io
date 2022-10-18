function enlargeImg($element) {
    img = $element
    img.style.transform = "scale(1.5)"
    img.style.transition = "transform 0.25s ease";
}

function resetImg($element) {
    img = $element
    img.style.transform = "scale(1)"
    img.style.transition = "transform 0.25s ease";
}