//import Explore from "./Components/Explore"
//import Dev from "./Components/Dev"
//import FindCoder from "./Components/FindCoder"
//import Hire from "./Components/Hire"
//import Challenges from "./Components/Challenges"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./CRUD/Home"
import Users from "./CRUD/Users"
import CreateUsers from "./CRUD/CreateUsers"
import EditPage from "./CRUD/EditPage"

const App=()=>{
    return(
        // <div>
        //     <BrowserRouter>
        //     <FindCoder/>
        //     <Routes>
        //         <Route element={<Explore/>} path='/explore'></Route>
        //         <Route element={<Hire/>} path="/hire"></Route>
        //         <Route element={<Dev/>} path="/dev"></Route>
        //         <Route element={<Challenges/>} path="/challenge"></Route>
        //     </Routes>
        //     </BrowserRouter>
        // </div>

        <div>
            <BrowserRouter>
              <Home/>
              <Routes>
                <Route element={<CreateUsers/>} path="/"/>
                <Route element={<Users/>} path="/users"/>
                <Route element={<EditPage/>} path="/edit/:id"/>
              </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App