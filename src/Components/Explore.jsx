import style from "./findcoder.module.css"
const Explore = () => {
    return (
        <div >
            <div id={style.start}>
                <div id={style.left}>
                    <h1>Here Are Some -</h1>
                    <h2>Projects By Developers</h2>
                    <p>The main activity of programming is not the origination of new <br /> independent programs, but in the integration, modification, and <br /> explanation of existing ones. </p>
                </div>
                <div id={style.right}>
                    <img src="https://www.findcoder.io/explore/startup-209.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Explore