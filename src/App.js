import React , { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component { 

  state = { 
    courses : [
      {name : 'HTML'},
      {name : 'CSS'},
      {name : 'JAVASCRIPT'}
    ] , 
    current : ''
  }

  //updateCourse 
  updateCourse =(e) =>{
   this.setState({current : e.target.value})
  }

  //addCourse
  addCourse = (e) =>{ 
    e.preventDefault();
    let courses = this.state.courses;
    let current = this.state.current;
    if (current) { 
      courses.push({name:current})
      this.setState({
      courses ,
      current:''
      })
    }
    
  }

  //deleteCourse
  deleteCourse = (index) => { 
    let courses = this.state.courses ; 
    courses.splice(index , 1);
    this.setState({courses})
  }

  //editCourse
  editCourse =(index ,value) => { 
    let courses = this.state.courses ; 
    let course = courses[index];
    course['name'] = value ;
    this.setState({courses})
  }

  render() { 
    const {courses} = this.state;
    const courseList = courses.map((course , index)=>{
      return <CourseList  details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse ={this.editCourse}/>
    })
    return ( 
      <section className ='App'>

        <h2>Add Course</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
        <ul>{this.state.courses.length > 0 ? courseList : <h2>All Courses Deleted</h2>}</ul>

      </section>
    );
  }
}


export default App ;