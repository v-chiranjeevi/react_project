import axios from "axios"
import { useEffect, useState } from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom"

const Users = () => {
    let [content, setContent] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/employees")
            .then((response) => {
                setContent(response.data);
            })
            .catch(() => {
                console.log("error");
            })
    },[])
    
    let deleteUser=(id)=>{
        axios.delete(`http://localhost:3000/employees/${id}`)
        window.location.assign("/users")
    }

    return (
        <div id={style.usersPage}>
            {content.map((x) => {
                return (
                    <div>
                        <table>
                            <tr>
                                <th colSpan={2}>EMPLOYEE {x.id}</th>
                            </tr>
                            <tr>
                                <td>NAME</td>
                                <td>:{x.empName}</td>
                            </tr>
                            <tr>
                                <td>SALARY</td>
                                <td>:{x.empSalary}</td>
                            </tr>
                            <tr>
                                <td>COMPANY</td>
                                <td>:{x.empCompany}</td>
                            </tr>
                            <tr>
                                <td><button><Link to={`/edit/${x.id}`}>EDIT</Link></button></td>
                                <td><button onClick={()=>{deleteUser(x.id)}}>DELETE</button></td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
export default Users