import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useEffect, useState} from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    //const URL = "http://localhost:4000/api/courses";
    //const URL = "https://kanbas-node-server-app-oovm.onrender.com/api/courses";
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;

    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, [])

    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = async () => {
        // setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses]);
    };
    const deleteCourse = async (courseId) => {
        //setCourses(courses.filter((course) => course._id !== courseId));
        const response = await axios.delete(`${URL}/${courseId}`) // removes course Serverside
        // removes course locally so as not to needlessly retrieve all courses from Server
        setCourses(courses.filter(c => c._id !== courseId));
    };

    const updateCourse = async () => {
        try {
            const response = await axios.put(`${URL}/${course._id}`, course);
            setCourses(courses.map((c) => {
                    if (c._id === course._id) {
                        return course;
                    } else {
                        return c;
                    }
                })
            );
            setCourse({name: ""});
        }
        catch (error){
            console.log(error);
        }
    };


    return (
        <Provider store={store}>
        <div className="d-flex">
            <KanbasNavigation />
            <div style={{width: "100%"}}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                    />
                    } />
                    <Route path="Courses/*" element={<h1>Courses</h1>} />
                    <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                </Routes>
            </div>
        </div>
        </Provider>
    );
}
export default Kanbas;
