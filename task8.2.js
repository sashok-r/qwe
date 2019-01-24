
function qwe(a, b) {
    let c = 0;
    while (a.indexOf(b) != -1) {
        c++;
        a = a.slice(a.indexOf(b) + b.length);
    }
    return c;
}
function sortMe(array, b) {
    return array.sort((a1, b1) => qwe(b1, b) - qwe(a1, b));
}
console.log( sortMe(['viper', 'meepo'], 'e'));