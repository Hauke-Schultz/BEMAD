import React from 'react';

export default class ProductTile extends React.Component {

    constructor(props) {
        super(props);
        console.log('ProductTile constructor');
    }

    render() {
        return (
            <div>
                <h3 className="a-headline--h3">Product Tile React</h3>
            </div>
        );
    }
}
