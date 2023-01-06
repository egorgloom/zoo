const donationInput = document.getElementById('donationInput');
const form = document.getElementById("form_value");
const input = document.getElementById("donationInput");
const ratios = document.getElementsByName("amount");
const maxInputLength = 4;


input.value = [...ratios].find(element => element.checked).value;

form.onchange = onRadioItemChange;
input.addEventListener("input", onInputAmount)

function onRadioItemChange(event) {
    input.value = event.target.value;
};

function onInputAmount(event) {
    handleRatios(event);
    handleInputLength();
};

function handleRatios(event) {
    ratios.forEach(element => {
        if (element.value == event.target.value) {
            element.checked = true;
        }
    });
};

function handleInputLength() {
    if (donationInput.value.length > maxInputLength) {
        donationInput.value = donationInput.value.slice(0, maxInputLength);
    };
};