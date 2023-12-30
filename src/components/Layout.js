import Background from "./Background";
import Navbar from "./Navbar";
import "@/app/globals.css"

export default function Layout({ children }) {

    return (
        <>
            <div>
                <Navbar></Navbar>
                    {children}


                <Background></Background>
            </div>

        </>
    )
}