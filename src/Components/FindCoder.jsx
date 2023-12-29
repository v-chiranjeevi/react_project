import Logo from "./Logo"
import Menu from "./Menu"
import Btn from "./Btn"
import style from "./findcoder.module.css"
const FindCoder =()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.Logo}>
                    <Logo/>
                </div>
                <div className={style.Menu}>
                    <Menu/>
                </div>
                <div className={style.Btn}>
                    <Btn/>
                </div>
            </article>
        </section>
    )
}
export default FindCoder