# Limited input field
An input field with a visual reminder about exceeding the character limit or about the lack of characters in the field.
## Examples
### Field with character maximum
![Limited field input 1 2](https://github.com/Wlad1slav/Limited-input-field/assets/98209882/d96da8e8-a181-4461-85ee-0c79f247d04c)
### Textarea with character maximum
![Limited field input 2](https://github.com/Wlad1slav/Limited-input-field/assets/98209882/f0319dd8-0478-47d3-b1b1-8519acbd2b16)
### Field with characters maximum & minimum
![Limited field input 3](https://github.com/Wlad1slav/Limited-input-field/assets/98209882/a8185ceb-e619-4dd8-a1e9-cd555f914198)


### Field widths
![Screenshot 2024-03-02 144757](https://github.com/Wlad1slav/Limited-input-field/assets/98209882/ad708ebd-e28e-4137-8690-29a884e084dc)


## Code examples
### Input tag
```
<div class="field-limited field__medium">
    <input type="text" max="20" min="5">
    <p class="characters-amount"></p>
</div>
```
### Textarea tag
You can use additionally maxlength and minlength attributes.
```
<div class="field-limited field__medium">
      <textarea data-max="300" data-min="30"></textarea>
      <p class="characters-amount"></p>
</div>
```
