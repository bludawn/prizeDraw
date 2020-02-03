/**
 *  公共请求
 */
var app = "/xhtt";

function local_get(method, callback, query) {
    var url = app + "/" + method;
    if (query == null || query == undefined || query == "") {
    } else {
        url = url + "?" + query;
    }

    console.log("url: " + url);
    $.get(url, callback);
}

function local_post(method, data, callback) {
    var url = app + "/" + method;
    console.log("url: " + url);
    $.post(url, data, callback , "json");
}

/**
 * 检测权限
 */
function checkRight(result){
    //检测权限
    if(result != null && result.errcode == 203){
        layer.msg(result.errmsg, {icon: 5, time: 3000});
        return true;
    }
    return false;
}