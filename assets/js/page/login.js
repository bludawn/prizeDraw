// callback()
function api_login(username, password, callback) {
    console.log("email: " + username + ",password: " + password);
    local_post("login", {email: username, password: password}, function (result, status) {
        //检测权限
        if (checkRight(result)) {
            return;
        }

        var str = JSON.stringify(result);
        console.log("Ret: " + str + "\nStatus: " + status);
        if (result.errcode != 0) {
            callback(false, result.errmsg);
        } else {
            // 登录成功
            callback(true);
        }
    });
}