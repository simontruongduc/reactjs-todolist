import React, {Component} from "react";
import './App.css';
import TaskForm from "./Components/TaskForm";
import Filter from "./Components/Filter";
import TaskList from "./Components/TaskList";
import {connect} from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {isDisplayForm} = this.props;
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                        <TaskForm/>
                    </div>
                    <div
                        className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button"
                                className="btn btn-primary"
                                disabled={isDisplayForm}
                                onClick={this.props.onToggleForm}
                        >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <Filter/>
                        <div className="row mt-15">
                            <TaskList/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        isDisplayForm : state.isDisplayForm
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        onToggleForm : () =>{
            dispatch(actions.toggleForm())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
