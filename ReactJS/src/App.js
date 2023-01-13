import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import { useEffect, useState } from 'react';


let arr = [
  {
    name: "Long",
    id: 0
  },
  {
    name: "Tùng",
    id: 1
  },
  {
    name: "Quang",
    id: 2
  },
  {
    name: "Minh",
    id: 3
  },

]

const App = () => {
  const [courses, setCourses] = useState(arr)
  const handelDelete = (id) => {
    let coursesClone = [...courses]
    console.log("Chua xoa: ", coursesClone)
    coursesClone = coursesClone.filter(item => item.id !== id)
    setCourses(coursesClone)
    console.log("Da Xoa: ", coursesClone)
  }



  return (
    <div className="App">
      <label>Name</label>
      <div>
        {courses.map((course) => {
          return (
            <div>
              <div key={course.id}>
                {course.name}
                <br />
                <button onClick={() => handelDelete(course.id)}>Delete</button>
                <hr />
              </div>
            </div>
          )
        })}
      </div>
    </div >
  );
}

export default App;
