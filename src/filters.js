/*eslint-env es_modules */

import * as Components from './components/filters';

const Filters = {};

Filters.List = [
    {
        "name": "1.1 - Negativo",
        "description": "Negative filter",
        "component":"Negative",
        "script":"Negative.m"
    },
    {
        "name": "1.2 - Logaritmico",
        "description": "Logaritmic filter",
        "component":"Logaritmic",
        "script": "Logarithmic.m"
    },
    {
        "name": "1.3 - Exponencial",
        "description": "Exponential filter",
        "component":"Exponential",
        "script": "Exponential.m"
    },
    {
        "name": "1.4 - Contrast Stretching",
        "description": "Contrast-stretching filter",
        "component":"Contrast",
        "script": "Contrast.m"
    },
    {
        "name": "1.5 - Filtro Promediado Movil",
        "description": "Filtro Promediado Movil",
        "component":"MovingAverage",
        "script": "MovingAverage.m"
    }
];

Filters.Components = Components;


export default Filters;