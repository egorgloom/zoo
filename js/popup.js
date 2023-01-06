



function createPopup(info) {
    const userBlock = document.getElementById('user-block');

    let reviewCard = document.createElement('div');
    reviewCard.classList.add('reviews');
    reviewCard.innerHTML=`
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
                                <p>Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
                                    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                                    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                                    </p>
                            </div>
                        </div>`;
                        userBlock.append(reviewCard);
}


