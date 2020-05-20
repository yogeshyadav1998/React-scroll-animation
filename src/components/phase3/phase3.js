import React, { Component } from 'react';
import {Row,Col, Icon} from 'antd';
import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from 'react-alice-carousel';

import './phase3.css';

class phase3 extends Component{
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          items: [
            {
                name: 0,
                src: "https://images.pexels.com/photos/1106452/pexels-photo-1106452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name: 1,
                src: "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name: 2,
                src: "https://images.pexels.com/photos/573294/pexels-photo-573294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name: 3,
                src: "https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name: 4,
                src: "https://images.pexels.com/photos/18495/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name: 5,
                src: "https://images.pexels.com/photos/575402/pexels-photo-575402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
          ],
          texts: [
            {
              text1:"“You don't get nauseous when you take them.”",
              text2:"Brittany Harrer"
            },
            {
              text1:"“There's only what you need, and nothing beyond that.”",
              text2:"Rebecca Harris"
            },
            {
              text1:"“When I found Ritual vitamins, everything was in one place.”",
              text2:"Lindsay Scola"
            },
            {
              text1:"“The different sources are all vegan.”",
              text2:"Caroline Cameron"
            },
            {
              text1:"“The thing I love most about Ritual is just how transparent they are.”",
              text2:"Lori Coyle"
            }
          ]
        };
      }

  
      onSlideChanged = (e) => this.setState({ currentIndex: e.item });
  
      slideNext = () => {
          this.setState({ currentIndex:  this.state.currentIndex - 1});
          console.log(this.state.currentIndex)
        }
  
      slidePrev = () => this.setState({ currentIndex: this.state.currentIndex + 1 });
  
  
      renderGallery() {
        const { currentIndex, items } = this.state;

        const responsive = {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1024: {
              items: 3
            }
          };
  
        return (<AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          startIndex={currentIndex}
          fadeOutAnimation={false}
          responsive={responsive}
          onSlideChanged={this.onSlideChanged}
        >
          { items.map((item, i) => <div key={i} className={ this.state.currentIndex == item.name ? "galleryimagelarge" : "galleryimage"}><img style={{height:"100%", width:"100%"}} src={item.src}/></div>) }
        </AliceCarousel>);
      }
  
      renderGallery1(){
          const {currentIndex, texts } = this.state;

          return(
                <AliceCarousel
                        autoPlay={false}
                        fadeOutAnimation={false}
                        items={1}
                        slideToIndex={currentIndex}
                        buttonsDisabled={true}
                        dotsDisabled={true}
                        onSlideChanged={this.onSlideChanged}
                        >
                          { texts.map((text, i) => <div key={i}  className="galleryimage1"><p className="heading33">{text.text1}</p>
                        <p className="heading34">{text.text2}</p></div>) }
        </AliceCarousel>);
      }
  
    render(){
        let i = this.state.currentIndex;

        return(
            <div className="phase3">
                <Row>
                    <Col md={10} offset={7}>
                    <div className="text31">
                        <p className="heading31">Skeptics Speak</p>
                        <p className="heading32">With millions of bottles delivered, discover what Ritual users have to say.</p>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={4}>
                    <div className="text32">
                        {this.renderGallery1()} 
                    </div>
                    </Col>
                    <Col md={14}>
                    <div className="gallery3">
                    { this.renderGallery() }
                    <button className="nextslide button3" onClick={() => this.slidePrev()}><Icon type="arrow-right" /></button>
                    <button className="prevslide button3" onClick={() => this.slideNext()}><Icon type="arrow-left" /></button>
                    </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default phase3;