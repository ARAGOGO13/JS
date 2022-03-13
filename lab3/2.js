function getMinMax(str){
    let strWithoutChars = str.replace(/[^-.\d]/g," ");
    let arr = strWithoutChars.split(" ");
    arr = arr.filter(function (el){
        return (el != null && el != "" || el === 0);
    });
    mx = Math.max.apply(Math, arr);
    mn = Math.min.apply(Math, arr);
    return { "min": mn, "max": mx }
}
module.exports = getMinMax;