import product from './API/product.js';

async function getProductDetails() {
    let response = await product('skechers-bounder-voltis-training-gym-shoes-men/p/itma0e81c129ad11', 'minimum');
    console.log(response);
};

getProductDetails();