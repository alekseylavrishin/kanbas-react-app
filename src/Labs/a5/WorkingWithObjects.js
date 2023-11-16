import React, {useState} from "react";
import {scryRenderedComponentsWithType} from "react-dom/test-utils";
import {type} from "@testing-library/user-event/dist/type";
import {json} from "react-router-dom";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0
    });

    const [checked, setChecked] = React.useState(false);
    function handleChange(e) {
        //setChecked(e.target.checked);
        setAssignment(...assignment, checked, e.target.value)
    }

    const URL = "http://localhost:4000/a5/assignment"

    return(
        <div>
            <h3>3.2.4 Extra Credit</h3>
            <h4>Modifying Properties: Score</h4>
            <a
                href={`${URL}/score/${assignment.score}`}
                className={"btn btn-primary me-2 float-start"}>
                Update Score
            </a>
            <input
                onChange={(e) => setAssignment({...assignment, score: e.target.value})}
                value={assignment.score}
                className={"form-control mb-2 w-25"}
                type={"number"}
            />

            <h3>Modifying Properties: Completed</h3>
            <a
                href={`${URL}/assignment/${assignment.completed}`}
                className={"btn btn-primary"}>
                Update Completed
            </a>
            <input
                value={"true"}
                type={"checkbox"}
                onChange={(e) => setAssignment(({...assignment, checked: e.target.value}))}
            />


            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a href={"http://localhost:4000/a5/assignment"}
               className={"btn btn-primary me-2"}>
                Get Assignment
            </a>

            <h4>Retrieving Properties</h4>
            <a
                href={"http://localhost:4000/a5/assignment/title"}
                className={"btn btn-primary me-2"}>
                Get Title
            </a>

            <h4>Modifying Properties</h4>
            <a
                href={`${URL}/title/${assignment.title}`}
                className={"btn btn-primary me-2 float-end"}>
                Update Title
            </a>
            <input
                onChange={(e) => setAssignment({...assignment, title: e.target.value})}
                value={assignment.title}
                className={"form-control mb-2 w-75"}
                type={"text"}
            />

        </div>
    );
}
export default WorkingWithObjects;