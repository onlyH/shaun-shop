import React from 'react'
import { Link } from 'react-router-dom'
import MyUtil from '../../util/mm'
import User from '../../service/user-service'
const _mm = new MyUtil()
const _user = new User()
class TopNav extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            username: _mm.getStorage('userInfo').username || ''
        }
    }
    //退出登录
    onLogout =()=> {
        _user.logout().then(res=> {
            _mm.removeStorage('userInfo');
            // this.props.history.push('/login')
            window.location.href='/login'
        },errorMeg => {
            _mm.errorTips(errorMeg)
        })
    };
    render() {
        return (
            <nav className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>Shaun</b>Shop</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle">
                            <i className="fa fa-user fa-fw"/>
                            <span>welcome {this.state.username}</span>
                            <i className="fa fa-caret-down"/>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={this.onLogout}>
                                    <i className="fa fa-sign-out fa-fw"/>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default TopNav