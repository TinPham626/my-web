import Frame from "../components/Frame"
import buildday from "../images/image.jpg"
import banner from "../images/image-cyberlions-banner.jpg"

export default function Home() {
    return (
        <>
            <div className="main">
                <img src={banner}></img>
            </div>
            <div className="home-sections">
                <Frame
                    image={buildday} 
                    alt="build day" 
                    header="We're a High School Robotics Team Based In Westminster CA" 
                    text="Founded in 2020, Team 8521 is a robotics team aiming to provide our community with hands-on opportunities and mentorships. We want to empower our community and give them the chance to show their leader and innovator ability."
                />
                <Frame
                    image={buildday} 
                    alt="build day" 
                    header="We're a High School Robotics Team Based In Westminster CA" 
                    text="Founded in 2020, Team 8521 is a robotics team aiming to provide our community with hands-on opportunities and mentorships. We want to empower our community and give them the chance to show their leader and innovator ability."
                />
            </div>
        </>
    )
}