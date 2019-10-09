import React from 'react'
import { Link, NavLink } from 'react-router-dom'
class SideNav extends React.Component{
    render() {
        return (
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            {/*/!*className="active-menu"  *!/  高亮*/}
                            <NavLink  exact  to="/" activeClassName="active-menu">
                                <i className="fa fa-dashboard"/>
                                首页
                            </NavLink>
                        </li>
                        <li className="active">
                            <Link to="/product">
                                <i className="fa fa-list"/>
                               商品
                                <span className="fa arrow"/>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/product" activeClassName="active-menu">商品管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-category" activeClassName="active-menu" >品类管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/order">
                                <i className="fa fa-check-square-o"/>
                                订单
                                <span className="fa arrow"/>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/order" activeClassName="active-menu">订单管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/user">
                                <i className="fa fa-user-o"/>
                                用户
                                <span className="fa arrow"/>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/user" activeClassName="active-menu">用户管理</NavLink>
                                </li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </nav>
        )
    }
}
export default SideNav