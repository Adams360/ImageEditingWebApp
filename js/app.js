// Scale Slider
// let scaleSlider = document.querySelector('#scaleSlider');
// let scaleValue = document.querySelector('#scaleValue');

// Update the current slider value (each time you drag the slider handle)
// scaleSlider.oninput = function() {
//    scaleValue.innerHTML = this.value + '%';
// }

const inputs = document.querySelectorAll('.control');

inputs.forEach( input => input.addEventListener('input', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    // The OR || Is for inputs without dataset defined, to prevent undefined.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

   
}


