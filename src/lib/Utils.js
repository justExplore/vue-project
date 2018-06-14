//对象转化URL
const toUrlParam = (obj) => {
    var url = "";
    Object.keys(obj).forEach(key => {
        url += key + "=" + obj[key] + "&";
    })
    if (url && url.length > 0) {
        url = url.substring(0, url.length - 1);
    }
    return url;
}

export default {
    toUrlParam
}
