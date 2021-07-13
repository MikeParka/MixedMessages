// This script will generate a random vegan recipe by picking a random element from three different arrays.

// This object containins arrays with three sets of ingredients:

const recipe = {
    firstIngredient: ['Sugar snap', 'Avocado', 'Sri Lankan butternut', 'Cashew', 'Mushroom stroganoff', 'Butternut squash', 'Oat cream risotto'],
    secondIngredient: ['asparagus pesto gnocchi', 'courgette', 'aubergine curry', 'chestnut mushrooms', 'crispy kale'],
    thirdIngredient: ['roasted tomatoes', 'seeds', 'roasted roots', 'pumpkin seeds'],

// This method will create a string with randomised ingredients using the items from the above sets.

    randomise() {
        const randomIngredientOne = this.firstIngredient[Math.floor(Math.random() * recipe.firstIngredient.length)];
        const randomIngredientTwo = this.secondIngredient[Math.floor(Math.random() * recipe.secondIngredient.length)];
        const randomIngredientThree = this.thirdIngredient[Math.floor(Math.random() * recipe.thirdIngredient.length)];
        return randomIngredientOne + ', ' + randomIngredientTwo + ' and ' + randomIngredientThree;
    }
};

// The random recipe is returned to the console

console.log('Your random recipe for today is:')
console.log(recipe.randomise());
console.log('Bon Appétit!')