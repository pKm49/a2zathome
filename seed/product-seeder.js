var product = require('../models/products');
var mongoose = require('mongoose');
var database = require('./config/config');
mongoose.connect(database.cosmosdb.url, { useNewUrlParser: true });

var products = [
    new product({
        mainimagePath: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image1Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image2Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image3Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image4Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image5Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        title: '114 Sneakers For Men',
        description: 'Beautiful product',
        maincategory:'More',
        subCategory:'books',
        genre:'fashion',
        oldPrice:1200,
        newPrice:1000,
        a2zPrice:500,
        codAvailable:true,
        sellerId:'qweqweqweqwe',
        availability:true
    }),
    new product({
        mainimagePath: 'https://rukminim1.flixcart.com/image/832/832/joq2qa80/pullover/b/p/j/m-9018-sarfira-original-imafby8hyywgdbse.jpeg?q=70',
        image1Path: 'https://rukminim1.flixcart.com/image/832/832/joq2qa80/pullover/b/p/j/m-9018-sarfira-original-imafby8hyywgdbse.jpeg?q=70',
        image2Path: 'https://rukminim1.flixcart.com/image/832/832/joq2qa80/pullover/b/p/j/m-9018-sarfira-original-imafby8hyywgdbse.jpeg?q=70',
        image3Path:  'https://rukminim1.flixcart.com/image/832/832/joq2qa80/pullover/b/p/j/m-9018-sarfira-original-imafby8hyywgdbse.jpeg?q=70',
        image4Path:  'https://rukminim1.flixcart.com/image/832/832/joq2qa80/pullover/b/p/j/m-9018-sarfira-original-imafby8hyywgdbse.jpeg?q=70',
        image5Path:  'https://rukminim1.flixcart.com/image/832/832/joq2qa80/pullover/b/p/j/m-9018-sarfira-original-imafby8hyywgdbse.jpeg?q=70',
        title: 'Sarfira Turtle Neck Self Design Mens Pullover',
        description: 'Beautiful product',
        maincategory:'More',
        subCategory:'sports',
        genre:'fashion',
        oldPrice:1200,
        newPrice:1000,
        a2zPrice:500,
        codAvailable:true,
        sellerId:'qweqweqweqwe',
        availability:true
    }),
    new product({
        mainimagePath: 'https://rukminim1.flixcart.com/image/800/960/jn4x47k0/watch/w/q/z/1164-br-fogg-original-imaf9stmmgg2eq2f.jpeg?q=50',
        image1Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image2Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image3Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image4Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image5Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        title: '1164-BR Brown Day and Date Unique New Watch - For Men',
        description: 'Beautiful product',
        maincategory:'More',
        subCategory:'gaming',
        genre:'fashion',
        oldPrice:1200,
        newPrice:1000,
        a2zPrice:500,
        codAvailable:true,
        sellerId:'qweqweqweqwe',
        availability:true
    }),
    new product({
        mainimagePath: 'https://rukminim1.flixcart.com/image/800/960/jnkmykw0/sunglass/u/n/r/p429bk2-one-size-fits-all-fastrack-original-imaf9w79ahb7azqx.jpeg?q=50',
        image1Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image2Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image3Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image4Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image5Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        title: 'Fastrack Wayfarer Sunglasses',
        description: 'Beautiful product',
        maincategory:'More',
        subCategory:'Automobiles',
        genre:'daily',
        oldPrice:1200,
        newPrice:1000,
        a2zPrice:500,
        codAvailable:true,
        sellerId:'qweqweqweqwe',
        availability:true
    }),
    new product({
        mainimagePath: 'https://rukminim1.flixcart.com/image/800/960/wallet-card-wallet/6/b/8/14023-hidelink-wallet-men-women-original-imae9hhmhsfc9djt.jpeg?q=50',
        image1Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image2Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image3Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image4Path:  'https://rukmproductshomenfurnitureinim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image5Path:  'https://rukmproductshomenfurnitureinim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        title: 'Men Formal Brown Gproductshomenfurnitureenuine Leather Wallet',
        description: 'Beautiful prproductshomenfurnitureoduct',
        maincategory:'More',
        subCategory:'others',
        genre:'home',
        oldPrice:1200,
        newPrice:1000,
        a2zPrice:500,
        codAvailable:true,
        sellerId:'qweqweqweqwe',
        availability:true
    }),
    new product({
        mainimagePath: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image1Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image2Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image3Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image4Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image5Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        title: '114 Sneakers For Men',
        description: 'Beautiful product',
        maincategory:'More',
        subCategory:'Others',
        genre:'fashion',
        oldPrice:1200,
        newPrice:1000,
        a2zPrice:500,
        codAvailable:true,
        sellerId:'qweqweqweqwe',
        availability:true
    }),
    new product({
        mainimagePath: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image1Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image2Path: 'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image3Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image4Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        image5Path:  'https://rukminim1.flixcart.com/image/800/960/jlqwpe80/shoe/6/u/5/camfoot-2-114-461-6-camfoot-multicolor-original-imaerj3p4qaadhfx.jpeg?q=50',
        title: '114 Sneakers For Men',
        description: 'Beautiful product',
        maincategory:'More',
        subCategory:'books',
        genre:'entertainment',
        oldPrice:1200,
        newPrice:1000,
        a2zPrice:500,
        codAvailable:true,
        sellerId:'qweqweqweqwe',
        availability:true
    }),
];

var done = 0;

for (var i = 0; i<products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            qexit();
        }
    });
}
function qexit(){
    mongoose.disconnect();
}

