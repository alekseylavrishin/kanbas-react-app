import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";

function Assignment4 (){
    function sayHello() {
        alert("Hello")
    }
    return (
        <>
            <h1>Assignment 4</h1>
            <Add a={1} b={2}/>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions func={sayHello()}/>
            <EventObject/>
            <Counter/>
        </>
    )
}
export default Assignment4;