const subscribe = document.getElementById('subscribe');
const subscribeButton = document.getElementById('subscribe-button');

function validateEmail() {
    const reg = /[a-z]{3,20}@[a-z]{3,10}\.[a-z]{2,4}/;
    const { value } = subscribe;
    if(reg.test(value)) {
        subscribe.classList.add('send');
        subscribeButton.classList.add('send')
        subscribeButton.disabled = false;
    } else {
        subscribe.classList.remove('send')
        subscribeButton.classList.remove('send')
        subscribe.classList.add('disable');
        subscribeButton.disabled = true;
    }
}


subscribe.oninput = validateEmail;

