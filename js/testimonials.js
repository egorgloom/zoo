const testimonials = [
    {
    name: "Michael John",
    src: "./img/user1.svg",
    local: "Local Austria",
    visit: "Yesterday",
   }, {
    name: "Oskar Samborsky",
    src: "./img/user2.svg",
    local: "Local Austria",
    visit: "Yesterday",
   }, {
    name: "Fredericka Michelin",
    src: "./img/user3.svg",
    local: "Local Austria",
    visit: "Yesterday",
   }, {
    name: "Mila Riksha",
    src: "./img/user4.svg",
    local: "Local Austria",
    visit: "Yesterday",
   }, {
    name: "Erik Owen",
    src: "./img/user1.svg",
    local: "USA",
    visit: "Yesterday",
   }, {
    name: "Mike Farlow",
    src: "./img/user1.svg",
    local: "USA",
    visit: "Yesterday",
   }, {
    name: "Kate Owen",
    src: "./img/user1.svg",
    local: "USA",
    visit: "Yesterday",
   }, {
    name: "Jasica Albret",
    src: "./img/user1.svg",
    local: "USA",
    visit: "Yesterday",
   }, {
    name: "John Wick",
    src: "./img/user1.svg",
    local: "USA",
    visit: "Yesterday",
   }, {
    name: "Nicole Manson",
    src: "./img/user1.svg",
    local: "USA",
    visit: "Yesterday",
   }, {
    name: "Ashly Anderson",
    src: "./img/user1.svg",
    local: "USA",
    visit: "Yesterday",
   }
]


const inputProgressTestimonials = document.getElementById('input-progress-testimonials')
const container = document.getElementById('user-block');
const one = document.querySelector('reviews')

function createTestimonials(slide) { //slide???
    testimonials.forEach((slide) => {
        
        const review = document.createElement('div');
        review.classList.add('reviews');
        review.innerHTML = `
                        <div class="user_info_block">
                            <div class="user_info">
                                <div class="user_photo">
                                    <img src="${slide.src}" alt="user1" height="37" width="37">
                                </div>
                                <div class="user_name">
                                    <p class="user_name_font ">${slide.name}</p>
                                    <p class="user_local_font">${slide.local}<span class="local"> • </span>${slide.visit}</p>
                                </div>
                            </div>
                        </div>
                        <div class="user_review_block">
                            <div class="user_review">
                                <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                                    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                                    </p>
                            </div>
                        </div>`;
        container.append(review);

        review.onclick = function(e) {
            createPopup(slide);
        }

        // const spanPopup = document.querySelector('.close-popup');
        // spanPopup.addEventListener('click', () => {
        //     const openPopup = document.querySelector('.open');
        //     openPopup.style.display='none';
        // })

    });
}
createTestimonials();

function moveTestimonials(event) {
    let offset = 0;
    let columnGap = 30;
    let wid = 267;
    const slideValue = event.target.value;
    offset = (parseInt(wid, 10) + columnGap) * slideValue;
    container.style.transform = `translateX(-${offset}px)`;
}

inputProgressTestimonials.addEventListener('input', moveTestimonials)


//CREATE POPUP 

const userBlock = document.querySelector('.testimonials');

function clear() {
    this.remove()
}

function createPopup(info) {

    let reviewCard = document.createElement('div');
    reviewCard.classList.add('open');
    reviewCard.innerHTML=`
                    <span class='close-popup' id='close-popup'>&times;</span>
                    <div class="reviews">
                        <div class="user_info_block">
                            <div class="user_info">
                                <div class="user_photo">
                                    <img src="${info.src}" alt="user1" height="37" width="37">
                                </div>
                                <div class="user_name">
                                    <p class="user_name_font ">${info.name}</p>
                                    <p class="user_local_font">${info.local} <span class="local"> • </span> ${info.visit}</p>
                                </div>
                            </div>
                        </div>
                        <div class="user_review_block">
                            <div class="user_review">
                                <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                                    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                                    </p>
                            </div>
                        </div>
                    </div>`;


    userBlock.append(reviewCard)
    const openPopup = document.querySelector('.open');
    const spanPopup = document.getElementById('close-popup');
    spanPopup.onclick = () => {
        const openPopup = document.querySelector('.open');
        openPopup.remove();
    }

}




