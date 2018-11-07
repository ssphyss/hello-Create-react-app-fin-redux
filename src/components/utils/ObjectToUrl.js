export const objToUrl = obj => {
    let arr = [];
    for(let i in obj){
        if (obj.hasOwnProperty(i)) {
            arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
    }
    return arr.join("&");
}
