import Background from "./Background";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "@/app/globals.css"

export default function Layout({ children }) {

    return (
        <>
            <div className="the-container">
                <Navbar></Navbar>
                {children}


                <Background></Background>
            </div>

        </>
    )
}