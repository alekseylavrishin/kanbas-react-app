import { Link } from "react-router-dom";
import { React, useState } from "react";
import db from "../Database";
import './index.css'

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse}) {

    return (
        <div className={"wd-dashboard-column"}>
            <div className={"row"}>
                <h1 className={"wd-dashboard-h1"}>Dashboard</h1>
                <hr/>
            </div>
            <div className={"row"}>
                <h4 className={"ms-4"}>Published Courses (7)</h4>
                <hr/>
            </div>


            <div className={"row"}>
                <div className="float-start container d-flex flex-row flex-wrap">
                    <div className={"card wd-dashboard-card justify-content-center"}>
                        <input value={course.name} className="form-control mb-1"
                               onChange={(e) => setCourse({...course, name: e.target.value})}/>

                        <input value={course.number} className="form-control mb-1"
                               onChange={(e) => setCourse({...course, number: e.target.value})}/>

                        <input value={course.startDate} className="form-control mb-1" type="date"
                               onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                        <input value={course.endDate} className="form-control" type="date"
                               onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
                        <button className={"btn btn-outline-success btn-sm mt-2 mb-2 ms-2 me-2"} onClick={addNewCourse} >
                            Add
                        </button>

                        <button className={"btn btn-outline-primary btn-sm ms-2 me-2"} onClick={updateCourse} >
                            Update
                        </button>
                    </div>

                    {courses.map((course) => (
                        <div className="card wd-dashboard-card">

                                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item wd-dashboard-card-a">
                                    <div className="wd-dashboard-card-img card-img-top"></div>

                                    <button className={"btn btn-outline-warning btn-sm me-2 mb-1 mt-1"}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        Edit
                                    </button>


                                    <button className={"btn btn-outline-danger btn-sm mb-1 mt-1"}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                        Delete
                                    </button>

                                    <h5 className={"card-title ps-1"}>{course.name}</h5>
                                    <h6 className="card-subtitle wd-dashboard-card-a ps-1">{course.number}</h6>
                                    <p className="card-text wd-dashboard-card-body-p ps-1">{course.fullId}
                                    </p>
                                </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;