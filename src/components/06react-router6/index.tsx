import React from 'react';
import About from "./about";
import Home from "./home";
interface Props{

}
function Index(props: Props) {
    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>Vue Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <a className="list-group-item active" href="./about.html">About</a>
                        <a className="list-group-item" href="./home.html">Home</a>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            <h2>我是About的内容</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
