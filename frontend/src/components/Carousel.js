import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-927022.jpg&fm=jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Upgrade for a better You </h3>
          <p>Upgrade yourself by learning courses of your intrest</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1647907/pexels-photo-1647907.jpeg?cs=srgb&dl=pexels-elevate-digital-1647907.jpg&fm=jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Have Your Dream Job!!</h3>
          <p>Apply for various jobs through a single platform</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?cs=srgb&dl=pexels-fauxels-3184465.jpg&fm=jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Never be in doubt</h3>
          <p>
            Have a query, post here to get for solution
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;