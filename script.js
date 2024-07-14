const getItemSubTotalPrice = (countertitle) => Number(countertitle.value) * Number(countertitle.dataset.price)

const totalPriceWrapper = document.getElementById('totalprice');

const ACTION = {
    PLUS: 'plus',
    MINUS: 'minus'
};

const init = () => {
    let totalCost = 0;

    let totalProduct = 0;

    [...document.querySelectorAll('.main_apteka-block-basket-products-block1')].forEach((block1) => {
        totalCost += getItemSubTotalPrice(block1.querySelector('.countertitle'));

        //кол-во товаров
        totalProduct += Number(block1.querySelector('.countertitle').value);
    });

    
    //кол-во товаров переменная
    document.getElementById('totalproduct').textContent = totalProduct;

    totalPriceWrapper.textContent = totalCost;
};





init();
