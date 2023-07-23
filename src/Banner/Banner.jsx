import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Banner = () => {
    return (
        <Carousel>
                <div className="h-[400px]">
                    <img  src="https://i.ibb.co/qdChHCR/Front-View-of-ACC.jpg" />
                    <p className="legend"><span className="text-success text-2xl">Adamjee cantonment public school</span></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/DwY5Vpk/BAF-Shaheen-College-Dhaka-Entrance-Gate.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">Exploring Vocals music</span></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/bBtz1bQ/navy.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">EveryOne can play the guiter just 4 month</span></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/SXrhk0m/bcpsc.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">How folk music vary country to country</span></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/qdChHCR/Front-View-of-ACC.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">When you play never mind who listen to you</span></p>
                </div>
                <div>
                    <img src="https://i.ibb.co/ZBZBx6h/city.jpg" />
                    <p className="legend"><span className="text-amber-200 text-3xl">Music is for life</span></p>
                </div>
            </Carousel>
    );
};

export default Banner;