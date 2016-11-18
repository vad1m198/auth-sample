import template from './itemContainer.html';
import './itemContainer.css';

let ItemContainerComponent = {
    bindings: {
        slValue: '<',
        slSelected: '<'
    },    
    template
}

export default ItemContainerComponent;