
// collection with all input field containers
const fieldContainers = document.getElementsByClassName('field-limited');


for (let i = 0; i < fieldContainers.length; i++) {
    let field = fieldContainers[i].getElementsByTagName('input')[0];

    if (field == undefined) {
        // if field is textarea tag
        field = fieldContainers[i].getElementsByTagName('textarea')[0];
        if (field.dataset.max == undefined) // set data attr, if tag has not
            field.dataset.max = 0;
        if (field.dataset.min == undefined)
            field.dataset.min = 0;
    } else {
        field.dataset.max = field.max; // set data attr, because tag has not
        field.dataset.min = field.min;
    }

    // set standard amount of characters at field & max length
    if (field.dataset.max != 0) {
        var characters = `${field.value.length - field.dataset.min}/${field.dataset.max - field.dataset.min}`;
    }
    else{
        // if maximum characters is not set
        var characters = `${field.value.length-field.dataset.min}`;
    }
    fieldContainers[i].getElementsByClassName('characters-amount')[0].innerHTML
        = characters;

    field.addEventListener('input', () => {
        // update the characters amount paragraph
        // set field value length
        const p = fieldContainers[i].getElementsByClassName('characters-amount')[0];

        if (field.dataset.max != 0) {
            p.innerHTML = `${field.value.length-field.dataset.min}/${field.dataset.max-field.dataset.min}`;
        }
        else{
            // if maximum characters is not set
            p.innerHTML = `${field.value.length-field.dataset.min}`;
        }

        if (field.value.length-field.dataset.min < 0) {
            // if is no minimum number of characters in the input field
            field.classList.add('warning');
            p.classList.add('warning');
        }

        else if (field.value.length > field.dataset.max && field.dataset.max != 0) {
            // if the limit of characters was exceeded
            field.classList.add('error');
            p.classList.add('error');
        }

        if (field.classList.contains('error') && field.value.length <= field.dataset.max) {
            // if the input field has an error class
            // but no longer exceeds of length
            field.classList.remove('error');
            p.classList.remove('error');
        }

        else if (field.classList.contains('warning') && field.value.length-field.dataset.min >= 0) {
            // if the input field has an warning class
            // but characters enough already
            field.classList.remove('warning');
            p.classList.remove('warning');
        }
    })
}