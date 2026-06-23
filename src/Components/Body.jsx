import NavBar from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer"

const Body = () =>{

    return (

        <div className="min-h-screen flex flex-col" >
                  <NavBar />
                  <main className="grow"  >
                     <Outlet />
                  </main>
                 
                  <Footer />


        </div>


    )
}

export default Body;