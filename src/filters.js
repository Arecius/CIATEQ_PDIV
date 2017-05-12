/*eslint-env es_modules */

import * as Components from './components/filters';

const Filters = {};

Filters.List = [
    {
        "name": "Negativo",
        "description": "Negative filter",
        "component":"Negative",
        "script":"Negative.m"
    },
    {
        "name": "Logaritmico",
        "description": "Logaritmic filter",
        "component":"Logaritmic",
        "script": "Logaritmic.m"
    }
];

Filters.Components = Components;


export default Filters;