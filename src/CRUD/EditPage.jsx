import React, { useEffect, useState } from "react";
import style from "./home.module.css"
import axios from "axios";
import { useParams } from "react-router-dom";


const EditPage=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let obj=useParams()

    useEffect(()=>{
            axios.get(`http://localhost:3000/employees/${obj.id}`)
            .then((response) => {
                setName(response.data.empName);
                setSalary(response.data.empSalary)
                setCompany(response.data.empCompany)
            })
            .catch(() => {
                console.log("error");
            })
    },[obj])
    let getName=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let getSalary=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    let getCompany=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    let formHandle=()=>{
        let payload={
            empName:name,
            empSalary:salary,
            empCompany:company
        }
        axios.put(`http://localhost:3000/employees/${obj.id}`,payload)
        .then(() => {
            console.log("data updated");
        })
        .catch(() => {
            console.log("error");
        })
    }
    return(
        <section id={style.editPage}>
         
        <form action="">
        <h1>edit user</h1> 
            <label>NAME:</label>
            <input type="text" value={name} onChange={getName}></input>
            <br></br>
            <label>SALARY:</label>
            <input type="text" value={salary} onChange={getSalary}></input>
            <br></br>
            <label>COMPANY:</label>
            <input type="text" value={company} onChange={getCompany}></input>
            <br></br>
            <button onClick={formHandle}>Update</button>
        </form>
    </section>
    )
}
export default EditPage