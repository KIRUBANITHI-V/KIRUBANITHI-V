import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Pagetwo() {
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.post("http://localhost:3040/Pageone").then((res) => {
        console.log(res);
        if (res.data.Status === "inserted") {
          alert("Response are inserted");
        } else {
          alert("Response are not inserted");
        }
      });
    };

    return (
        <Carousel slide={false}>
          <Carousel.Item>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}
export default Pagetwo