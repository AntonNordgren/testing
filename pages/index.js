import Layout from '../components/Layout'
import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

class HomePage extends React.Component {

  componentDidMount() {
  }

  render() {

    const customJumbotron = {
      "border-radius": "0px"
    }

    const customLeft = {
    }

    const customRight = {
    }

    const customCarousel = {
      "border-radius": "20px"
    }

    const carouselItem = {
      "height": "500px"
    }

    const carouselImg = {
      "width": "100%",
      "height": "100%",
    }

    return (
      <div>
        <Layout>
          <div className="row jumbotron" style={customJumbotron}>
            <div className="col-sm-5" style={customLeft}>

              <div className="card">
                <div className="card-body">
                  <h1 className="display-4">Lorem ipsum</h1>
                  <p className="lead">Lorem ipsum Lorem ipsum Lorem ipsum</p>
                  <hr className="my-4" />
                  <p>Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum</p>
                  <a className="btn btn-primary btn-lg align-center" href="/" role="button">This button doesn't work</a>
                </div>
              </div>

            </div>
            <div className="col-sm-7" style={customRight}>

              <Carousel style={customCarousel} indicators={false} controls={false} interval={1000}>
                <Carousel.Item style={carouselItem}>
                  <img
                    className="d-block v-50"
                    src="https://images.squarespace-cdn.com/content/5c2aec4b1137a6d8849debf1/1589482673361-JFOXBM38XYSJQ9MUBEDW/image-asset.jpeg?format=1000w&content-type=image%2Fjpeg"
                    style={carouselImg}
                  />
                </Carousel.Item  >
                <Carousel.Item style={carouselItem}>
                  <img
                    className="d-block v-50"
                    src="https://cdn.britannica.com/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg"
                    style={carouselImg}
                  />
                </Carousel.Item>
                <Carousel.Item style={carouselItem}>
                  <img
                    className="d-block v-50"
                    src="https://media.4-paws.org/8/e/6/2/8e62da6a9d8c3544e256ba650f90157678157b50/maine-coon-cat-2228866_1920-1920x1329.jpg"
                    style={carouselImg}
                  />
                </Carousel.Item>
              </Carousel>

            </div>
          </div>

        </Layout>
      </div>
    )
  }

}

export default HomePage