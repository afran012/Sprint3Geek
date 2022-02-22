import { Carousel } from "react-bootstrap"
import { useState } from "react";



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carrousel-container" activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/doueu7nt1/image/upload/v1645503202/Peliculas/matrix-4-1200x480_uhmqo9.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/doueu7nt1/image/upload/v1645503332/Peliculas/Sin-City-Una-dama-por-la-que-matar_ystxz6.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/doueu7nt1/image/upload/v1645503415/Peliculas/gdg-1200x480_i8yyoh.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/doueu7nt1/image/upload/v1645503474/Peliculas/brave-una-de-las-peliculas-sobre-la-igualdad-de-genero_ucx2lp.jpg"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/doueu7nt1/image/upload/v1645503506/Peliculas/rampage_review.0_xmgo5q.jpg"
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}
export { ControlledCarousel }