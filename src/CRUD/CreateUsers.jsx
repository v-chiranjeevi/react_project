import style from "./home.module.css"
import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreateUsers=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let print=(x)=>{
           //x.preventDefault()
           //console.log(name,salary,company);
           let payload={
            empName:name,
            empSal:salary,
            empCompany:company
           }
           axios.post("http://localhost:3000/employees",payload)
           .then(()=>{
            console.log("data sent");
           })
           .catch(()=>{
             console.log("error");
           })
           navigate("/users")
    }   
    return(
        <section id={style.myForm}>
            <form action="">
                <h1>create users</h1> 
                <label>NAME:</label>
                <input type="text" value={name} onChange={nameData}></input>
                <br></br>
                <label>Salary:</label>
                <input type="text" value={salary} onChange={salaryData}></input>
                <br></br>
                <label>Company</label>
                <input type="text" value={company} onChange={companyData}></input>
                <br></br>
                <button type="submit" onClick={print}>Submit</button>
            </form>
        </section>
    )
}
export default CreateUsers