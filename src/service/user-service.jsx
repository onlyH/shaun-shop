import myUtil from '../util/mm'
const _mm = new myUtil()

class User {
    // 用户登录
    login(loginInfo) {
       return  _mm.request({
            type:'post',
            url:'/manage/user/login.do',
            data: loginInfo
        })
    }
    // 检测登录接口数据是否合法
    checkLoginInfo(loginInfo) {
        let usernme = loginInfo.username.trim();
        let password = loginInfo.password.trim();
        // 判断用户名为空
        if(typeof usernme !== 'string' || usernme.length === 0) {
            return {
                status: false,
                msg:'用户名不能为空'
            }
        }
        if(typeof password !== 'string' || password.length === 0) {
            return {
                status: false,
                msg:'密码不能为空'
            }
        }
        return {
            status: true,
            msg:'验证通过'
        }
    }
    //用户退出
    logout() {
        return _mm.request({
            type:'post',
            url:'/user/logout.do',
        })
    }

}
export default User