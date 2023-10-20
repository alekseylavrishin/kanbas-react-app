import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {FaEllipsisV, FaPlus, FaCheck, FaEdit} from "react-icons/fa";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className={"row"}>
            <div className="list-group text-wrap col-12">
                <ul className={"list-group"}>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        {/*{assignment.title}*/}


                        <li className="list-group-item wd-modules-font wd-assignment-li">
                            <div className="row">
                                <div className="col-1 wd-assignment-li-center-v">
                                    <FaEdit className={"text-success"}/>
                                </div>
                                <div className="col-10">
                                        {assignment.title}<br/>

                                    <span className="wd-assignment-span">Due {assignment.due} | {assignment.totalPoints} points </span>
                                </div>
                                <div className="col-1 wd-assignment-li-center-v float-end">
                                    <a href="#"><FaEllipsisV className={"text-secondary float-end wd-modules-c-e"}/></a>
                                    <a href="#"><FaCheck className={"text-success float-end wd-modules-c-e"}/></a>
                                </div>
                            </div>
                        </li>
                    </Link>

                ))}
                </ul>
            </div>
        </div>
    );
}
export default Assignments;