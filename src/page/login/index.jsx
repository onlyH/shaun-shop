import React from 'react'
import './index.css'
import myUtil from '../../util/mm.jsx'
import User from "../../service/user-service";
const _user = new User()
const _mm = new myUtil()
class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:'',
            password:'',
            redirect:_mm.getUrlParam('redirect') || '/'
        }
    }
    componentWillMount() {
        document.title='登录- shaun shop'
    }

    onInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name] : value
        })
    }
    onSubmit=()=> {
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        }
        let checkResult = _user.checkLoginInfo(loginInfo)
      //  验证通过
        if (checkResult.status) {
            _user.login(loginInfo).then(res=> {
                console.log(this.state.redirect);
               _mm.setStorage('userInfo', res)
                this.props.history.push(this.state.redirect)
            },errMsg=> {
                _mm.errorTips(errMsg)
            })
        } else  {
        //    不通过
            _mm.errorTips(checkResult.msg)
        }

    }
    onKeyUp(e) {
        if (e.keyCode === 13) {
            this.onSubmit()
        }
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">welcome</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input
                                    name="username"
                                    type="text"
                                    className="form-control"
                                    placeholder="请输入用户名"
                                    onKeyUp={e=>this.onKeyUp(e)}
                                    onChange={e=>this.onInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="请输入密码"
                                    onKeyUp={e=>this.onKeyUp(e)}
                                    onChange={e=>this.onInputChange(e)}/>
                            </div>
                            <button
                                className="btn btn-primary btn-block"
                                onClick={this.onSubmit}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login