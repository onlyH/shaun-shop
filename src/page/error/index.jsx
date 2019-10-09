// 错误页
import React from 'react'



const errorStyle={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute"
}
class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return(
            <p style={errorStyle}>出错啦</p>
        )
    }
}
export default Error