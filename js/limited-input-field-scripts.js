
// collection with all input field containers
const fieldContainers = document.getElementsByClassName('limited-input-field');


for (let i = 0; i < fieldContainers.length; i++) {
    const field = fieldContainers[i].getElementsByTagName('input')[0];

    // set standard amount of characters at field & max length
    fieldContainers[i].getElementsByClassName('characters-amount')[0].innerHTML
        = `${field.value.length}/${field.max}`;

    field.addEventListener('input', () => {
        // update the characters amount paragraph
        // set field value length
        const p = fieldContainers[i].getElementsByClassName('characters-amount')[0];
        p.innerHTML = `${field.value.length}/${field.max}`;

        if (field.value.length > field.max) {
            // if the limit of characters was exceeded
            field.classList.add('error');
            p.classList.add('error');
        }

        if (field.classList.contains('error') && field.value.length <= field.max) {
            // if the input field has an error class
            // but no longer exceeds of length
            field.classList.remove('error');
            p.classList.remove('error');
        }
    })
}