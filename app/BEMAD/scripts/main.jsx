import React from 'react';

console.log('load main.jsx');

const productTiles = document.querySelectorAll('.react-component[data-react-component="productTile"]');

if (productTiles.length > 0) {
    for (let i = 0; i < productTiles.length; i += 1) {
        console.log('find productTile');
    }
}
