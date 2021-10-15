import { food } from './food.js';

export function getFood(food, name){
    const tr = document.createElement('tr');

    const foodName = document.createElement('td');
    foodName.textContent = food.name;

    return tr;
}


