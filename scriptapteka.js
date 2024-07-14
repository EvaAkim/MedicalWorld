


document.getElementById('open-modal').addEventListener('click',function(){
    document.getElementById('my-modal').classList.add('open')
    
});


document.getElementById('close-modal').addEventListener('click',function(){
    document.getElementById('my-modal').classList.remove('open')

});


//modal favorites

document.getElementById('open-modal-favor').addEventListener('click',function(){
    document.getElementById('my-modal-fav').classList.add('open')
});

document.getElementById('close-modal-fav').addEventListener('click',function(){
    document.getElementById('my-modal-fav').classList.remove('open')
});


//modal form

document.getElementById('open-modal-form').addEventListener('click',function(){
    document.getElementById('my-modal-form').classList.add('open')
});

document.getElementById('close-modal-form').addEventListener('click',function(){
    document.getElementById('my-modal-form').classList.remove('open')
});




document.getElementById('close-modal-reg').addEventListener('click',function(){
    document.getElementById('my-modal-form').classList.remove('open'),
    document.getElementById('my-modal').classList.remove('open')
});







document.getElementById('item-button').addEventListener('click',function(){
    
    calcCartPrice();
});




const totalPriceWrapper = document.getElementById('totalprice');

function calcCartPrice() {
    let priceall = 0; 
    

    const left = document.querySelector('.main_apteka-block-basket-products-left');
    const blocks1 = document.querySelectorAll('.main_apteka-block-basket-products-block1');

    const totalprice = document.getElementById('totalprice');


    blocks1.forEach(function(block1){

        const colvo = 1;
        const priceone = block1.querySelector('.kameronblack2');
        currentprice = parseInt(colvo) * parseInt(priceone.innerText);


        priceall = priceall + currentprice;

        
        
    });
    
    totalprice.innerText = priceall;

};
calcCartPrice();


//обертка продуктов в корзине
const cartWrapper = document.querySelector('.main_apteka-block-basket-products-left');

//отслеживание клика по кнопке в корзину
window.addEventListener('click', function(event){
    if (event.target.hasAttribute('data-cart')) {
        

        const card = event.target.closest('.main_apteka-block-catalog__region-line-link');
        
        const productInfo = {
            id : card.dataset.id,
            imgSrc : card.querySelector('.product-img').getAttribute('src'),
            title : card.querySelector('.aptkameron6').innerText,
            price: card.querySelector('.aptkameron4').innerText,
        }

        console.log(productInfo);


        const cartItemHTML = `<div class="main_apteka-block-basket-products-block1" data-id="${productInfo.id}">
                                    <div class="main_apteka-block-basket-products-block1-img">
                                        <img src="${productInfo.imgSrc}" alt="">
                                    </div>
                                    <div class="main_apteka-block-basket-products-block1-name">
                                        <p class="aptkameron6-basket">${productInfo.title}</p>
                                    </div>
                                    <div class="main_apteka-block-basket-products-block1-counter">
                                        <input type="number" class="countertitle" value="1" data-price="${productInfo.price}">
                                        <p class="countertitle">шт</p>
                                    </div>
                                    <div class="main_apteka-block-basket-products-block1-prace">
                                        <p class="kameronblack2">${productInfo.price}</p>
                                    </div>
                                </div>`;


        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        
    }



});

   

