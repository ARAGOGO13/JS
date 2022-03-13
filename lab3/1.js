function capitalize(str) {
    let flag = 1;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === ' ') {
            flag = 1;
        }
        if (flag === 1 && str[i] != ' ') {
            str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            flag = 0;
        }
    }
    return str;
}
module.exports = capitalize;