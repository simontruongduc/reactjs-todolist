import React, {Component} from "react";
import * as actions from "../actions";
import {connect} from "react-redux";

class TaskItem extends Component {

    updateStatus = () =>{
        this.props.onUpdateStatus(this.props.task.id)
    }

    delete = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseForm();
    }

    edit = () => {
        this.props.onOpenForm();
        this.props.onEdit(this.props.task);
    }

    render() {
        var {task,index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status ? "label label-success" : "label label-danger"}
                          onClick={this.updateStatus}
                    >
                        {task.status ? "Kích hoạt" : "Không kích hoạt"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button"
                            className="btn btn-warning"
                            onClick={this.edit}
                    >
                        <span className="fa fa-pencil mr-5"></span> Sửa
                    </button>
                    &nbsp;
                    <button type="button"
                            className="btn btn-danger"
                            onClick={this.delete}
                    >
                        <span className="fa fa-trash mr-5"></span> Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = state => {
    return {}
}
const mapDispathToProps = (dispatch,props) => {
    return {
        onUpdateStatus : (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDelete : (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm : () =>{
            dispatch(actions.closeForm())
        },
        onUpdate : (task) => {
            dispatch(actions.update(task))
        },
        onOpenForm : () =>{
            dispatch(actions.openForm())
        },
        onEdit : (task) =>{
            dispatch(actions.edit(task))
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(TaskItem);
