/*eslint-env es_modules */

import * as Components from './components/filters';

const Filters = {};

Filters.List = [
    {
        "name": "Negativo",
        "description": "Negative filter",
        "component":"Negative"
    },
    {
        "name": "Logaritmico",
        "description": "Logaritmic filter",
        "component":"Logaritmic"
    }
];

Filters.Components = Components;


export default Filters;