import React ,  { Component } from 'react';

class CourseList extends Component  { 

    state ={ 
        isEdit : false
    }

    renderCourse = () => {         
        return (
            <li>
                <span> {this.props.details.name}</span>
                <button onClick={()=> this.toggleState()}>Edit Course</button>
                <button onClick={()=> this.props.deleteCourse(this.props.index)}>Delete Course</button>
                
            </li>
        )
    }

    //toggleState
    toggleState = () => { 
        let {isEdit} = this.state;
        this.setState({
            isEdit :!isEdit
        })
    }

    updateCourseItem =(e) => { 
        e.preventDefault();
        if (this.input.value) {
            this.props.editCourse(this.props.index ,this.input.value );
            this.toggleState();
        } else { 
            this.input.placeholder = 'Must enter course in this field'
        }
      
    }
    //render update form
    renderUpdateForm = () => {
        return (
            <form onSubmit ={this.updateCourseItem}> 
                <input type='text' ref ={(v) => this.input = v} defaultValue={this.props.details.name}/>
                <button>Update Course</button>
            </form>
        )
    }

    render() { 
        let {isEdit} = this.state;
        return (
            <>   
              {isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </>
        )
    }
}

export default CourseList