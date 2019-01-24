let arr = ['a', 'b'];
function copy(arr) {
    let res = [];
    arr.forEach((el, i) => {
        res[i] = Array.isArray(el) ? copy(el) : deepObjectCopy(el);
    });