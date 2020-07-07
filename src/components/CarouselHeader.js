import React, { Component } from "react"

export default class CarouselHeader extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 img-fluid"
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First</h5>
                <p>...</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid"
                src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Second image"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second</h5>
                <p>...</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid"
                src="https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
                alt="Third image"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third</h5>
                <p>...</p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    )
  }
}
