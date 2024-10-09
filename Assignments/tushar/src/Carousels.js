import Carousel from "react-bootstrap/Carousel";
import image1 from "./images/gls.png";
import image2 from "./images/lambo.jpg";
import image3 from "./images/porsche.png";
function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={image1} alt="Err" style={{ width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="Err" style={{ width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="Err" style={{ width: "100%" }} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
