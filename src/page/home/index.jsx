import React from 'react'
import './inedx.css'
import PageTitle from "../../component/page-title";
class Home extends React.Component{
    render() {
        return(
            <div id="page-wrapper">
                <PageTitle title="首页">
                    <button className="btn btn-warning">啊啊啊啊</button>
                </PageTitle>
                <div className="row">
                    <div className="col-md-12">
                        body
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;