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
    },
    {
        "name": "2.1 - Gradiente",
        "description": "Filtro Promediado Movil",
        "component":"Gradient",
        "script": "Gradient.m"
    },
    {
        "name": "2.2 - Laplaciano",
        "description": "Filtro Promediado Movil",
        "component":"Laplacian",
        "script": "Laplacian.m"
    },
    {
        "name": "2.3 - High boost",
        "description": "Filtro Promediado Movil",
        "component":"HighBoost",
        "script": "HighBoost.m"
    },
    {
        "name": "2.4 - Paso bajo Butterworth",
        "description": "Filtro Promediado Movil",
        "component":"LPButterworth",
        "script": "LPButterworth.m"
    },
    {
        "name": "2.5 - Paso alto Gaussiano",
        "description": "Filtro Promediado Movil",
        "component":"HPGaussian",
        "script": "HPGaussian.m"
    },
    {
        "name": "3.1 - Otsu",
        "description": "Filtro Promediado Movil",
        "component":"Otsu",
        "script": "Otsu.m"
    },
];

Filters.Components = Components;


export default Filters;