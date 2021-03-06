import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "./../actions/index";

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true,
        }
    }

    componentWillMount() {
        var {itemEditing} = this.props;
        if (Object.keys(itemEditing).length !== 0) {
            this.setState({
                id: itemEditing.id,
                name: itemEditing.name,
                status: itemEditing.status ? 1 : 0,
            });
        } else {
            this.resetForm()
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (Object.keys(nextProps.itemEditing).length !== 0) {
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status ? 1 : 0,
            });
        } else {
            this.resetForm()
        }
    }

    getValue = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        var {id} = this.state;
        if (id === '') {
            this.props.onAddTask(this.state);
        } else {
            this.props.onUpdateTask(this.state);
            this.resetForm();
        }
        this.props.onCloseForm();
    }

    resetForm = () => {
        var {id} = this.state;
        if (id === '') {
            this.setState({
                id: '',
                name: '',
                status: true,
            })
        }else{
            this.props.onEdit({
                id: '',
                name: '',
                status: true,
            })
        }
    }

    close = () =>{
        var {id} = this.state;
        this.props.onCloseForm();
        if (id !== '') {
            this.resetForm();
        }
    }

    render() {
        var {id} = this.state;
        var {isDisplayForm} = this.props;
        return isDisplayForm ? (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{id === "" ? "Th??m C??ng Vi???c" : "S???a C??ng Vi???c"}</h3>
                    <span className="fa fa-times-circle text-right"
                          onClick={this.close}
                    >
                    </span>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>T??n :</label>
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                   required="required"
                                   value={this.state.name}
                                   onChange={this.getValue}
                            />
                        </div>
                        <label>Tr???ng Th??i :</label>
                        <select className="form-control"
                                required="required"
                                name="status"
                                value={this.state.status}
                                onChange={this.getValue}
                        >
                            <option value="1">K??ch Ho???t</option>
                            <option value="0">???n</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">{id === "" ? "Th??m" : "C???p nh???t"}</button>
                            &nbsp;
                            <button className="btn btn-danger" onClick={this.close}>H???y B???</button>
                        </div>
                    </form>
                </div>
            </div>
        ) : '';
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing,
    }
}
const mapDispathToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.add(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onUpdateTask: (task) => {
            dispatch(actions.update(task))
        },
        onEdit: (task) => {
            dispatch(actions.edit(task))
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(TaskForm);
