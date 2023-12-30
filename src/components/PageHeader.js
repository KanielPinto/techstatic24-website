import "@/styles/PageHeader.css"
import { TypeAnimation } from "react-type-animation";

const PageHeader = ({ title, subtitle }) => {
    const string = subtitle.toString();

    return (
        <div className="container">
            <h1 crossOrigin="anonymous" className="title">{title}</h1>

            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Check IT OUTT!!!",
                    1000,

                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
                className="subtitle"
            />



        </div>
    )
}

export default PageHeader;