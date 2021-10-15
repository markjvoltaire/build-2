import { getFood } from "./app";
import { food } from ./food.js';


export function getImage(img){
    const image = document.createElement('img');
    img.src = food.img;
}

