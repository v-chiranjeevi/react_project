import { Link } from "react-router-dom"
import style from "./findcoder.module.css"
const Menu=()=>{
    return(
        <ol id={style.menuBlock}>
            <l1><Link to="/explore">Explore Work</Link></l1>
            <l1><Link to="/hire">Hire Talents</Link></l1>
            <l1><Link to="/dev">Dev Board</Link></l1>
            <l1><Link to="/challenge">Challenges</Link></l1>

            {/* <l1><Link to="/challenge">
                <select>
                    <option>
                        Challenges
                    </option>
                </select>
            </Link></l1> */}
        </ol>
    )
}
export default Menu