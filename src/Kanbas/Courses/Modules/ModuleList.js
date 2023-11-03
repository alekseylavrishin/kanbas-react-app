import React, {useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {FaPlus, FaEllipsisV} from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./moduleReducer";


function ModuleList() {
    const { courseId } = useParams();
    const { pathname } = useLocation();

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    /*const addSubModule = (subModule) => {
        setModule((prevModule) => {
            const updatedModulesList = [...prevModule.modulesList];
            updatedModulesList.push(subModule);

            return{
                ...prevModule, modulesList: updatedModulesList
            }
        })
    };*/

    console.log(courseId)
    console.log(module.modulesList[0].title)
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




        <ul className="list-group text-wrap mb-2" >
            {

                <li className="list-group-item">
                    <button className={"btn btn-success float-end"}
                            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add
                    </button>

                    <button className={"btn btn-primary float-end me-1 ms-1"}
                            onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>

                    <input className={"form-control w-75 mb-2"} value={module.name}
                           onChange={(e) =>
                               dispatch(setModule({...module, name: e.target.value}))
                           }/>

                    <input className={"form-control w-50 mb-2"} value={module.modulesList[0].title}
                           onChange={(e) =>
                               dispatch(setModule({
                                   ...module,
                                   modulesList: [
                                       {
                                           ...module.modulesList[0], title: e.target.value,
                                       }
                                   ],
                               }))
                           }/>

                    <textarea className={"form-control w-50"}   value={module.modulesList[0].description}
                              onChange={(e) =>
                                  dispatch(setModule({
                                      ...module,
                                      modulesList: [
                                          {
                                              ...module.modulesList[0], description: e.target.value,
                                          }
                                      ],
                                  }))


                              }/>
                </li>



            }
            {/*{modules.filter((module) => module.course === courseId)
                    .map((module, index) => (
                        module.modulesList.ma
                    ))

                < li className={"list-group-item"}>

                </li>
            }*/}

           {/* {module.modulesList.map((subModule, index) => (
                console.log(subModule.title),
                console.log(subModule.description),
                index === 0 ? null : (
                <li className={"list-group-item"} key={index}>
                    <h6>Title: {subModule.title}</h6>
                    <p>Type: {subModule.type}</p>
                    <p>Description: {subModule.description}</p>
                </li>
                )
            ))}*/}

            }
        </ul>
            <ul className="list-group text-wrap" >
            {
                modules.filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item bg-secondary bg-opacity-25 wd-modules-font">
                            <h4 className={"wd-modules-font"}>{module.name}</h4>
                            <button className={"btn btn-sm btn-danger float-end mb-3"}
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                            <button className={"btn btn-sm btn-success mb-2"}
                                    onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
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