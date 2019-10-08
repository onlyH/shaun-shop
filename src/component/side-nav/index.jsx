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
                            <NavLink  to="/" activeClassName="active-menu">
                                <i className="fa fa-dashboard"/>
                                首页
                            </NavLink>
                        </li>
                        <li className="active">
                            <Link to="/product">
                                <i className="fa fa-sitemap"/>
                               商品
                                <span className="fa arrow"/>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/product" activeClassName="active-menu">商品管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product.category" activeClassName="active-menu" >品类管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="fa fa-sitemap"/>
                                订单
                                <span className="fa arrow"/>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <Link to="/">订单管理</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="fa fa-sitemap"/>
                                用户
                                <span className="fa arrow"/>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <Link to="/">用户管理</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/"><i className="fa fa-fw fa-file"/> Empty Page</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}
export default SideNav