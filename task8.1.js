function species () {
    let fish = ['crab', 'dolphin', 'shark', 'carp', 'cod', 'eel'];
    return fish.filter(fish => fish.length > 3)
}
const result = species();

console.log(result);