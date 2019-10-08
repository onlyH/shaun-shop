import React from 'react'
import './index.css'
class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    onInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name] : value
        })
    }
    onSubmit=()=> {

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
                                    onChange={e=>this.onInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="请输入密码"
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