import { food } from './food.js';
import { getFood } from './app.js';
import { getImage } from './render-image.js';



const foodlist = document.getElementById('food-list');

for (let foods of food){
    const showFood = getImage(foods);
    foodlist.append(showFood);

    return food
}


