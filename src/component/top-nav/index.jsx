import React from 'react'
import { Link } from 'react-router-dom'
class TopNav extends React.Component{
    //退出登录
    onLogout =()=> {

    }
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
                            <span>welcome admin</span>
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