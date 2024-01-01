import "@/styles/PageHeader.css"
import { TypeAnimation } from "react-type-animation";

const PageHeader = ({ title, subtitle }) => {
    const string = subtitle.toString();

    return (
        <div className="container">
            <h1 crossOrigin="anonymous" className="title">{title}</h1>
        </div>
    )
}

export default PageHeader;