import React from "react";
import {useLocation, useParams} from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {FaPlus, FaEllipsisV} from "react-icons/fa";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    const { pathname } = useLocation();
    console.log(courseId)
    return (


        <div className={`wd-column wd-modules-column  col-sm-8 ${pathname.includes("Modules") ? 'col-xl-12 col-lg-10 col-md-10 ' : 'col-xl-8 col-md-7 col-lg-7 col-sm-6'}`}>

                <button type="button" className="btn btn-light btn-outline-dark wd-modules-btn-margin">Collapse All</button>
                <button type="button" className="btn btn-light btn-outline-dark wd-modules-btn-margin">View Progress</button>

                <div className="btn-group">
                    <button type="button" id="publish-all-drop-down"
                            className="btn btn-light btn-outline-dark dropdown-toggle wd-modules-btn-margin" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        Action
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="publish-all-drop-down">
                        <li><a className="dropdown-item active" aria-current="true" href="#">Publish All</a></li>
                        <li><a className="dropdown-item" href="#">Unpublish All</a></li>
                    </ul>
                </div>
                <button type="button" className="btn wd-modules-module-btn btn-danger btn-outline-dark wd-modules-btn-margin" style={{color: "white"}}><FaPlus/>&nbsp;Module
                </button>
                <button type="button" className="btn btn-light btn-outline-dark wd-modules-btn-margin"><FaEllipsisV/>
                </button>
                <hr/>




        <ul className="list-group text-wrap" >
            {
                modules.filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item bg-secondary bg-opacity-25 wd-modules-font">
                            <h4 className={"wd-modules-font"}>{module.name}</h4>
                            {
                                module.modulesList.map((moduleLi, moduleIndex) => (
                                    <li className={"list-group-item wd-modules-font"}>
                                        <h6 className={"wd-modules-font"}>{moduleLi.title}</h6>
                                    </li>
                                        ))
                            }
                        </li>
                    ))
            }
        </ul>
        </div>
    );
}
export default ModuleList;