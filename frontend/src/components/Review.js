import React, { useEffect } from "react";
import "./Review.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import reviewImage1 from "../assets/images/pic-1.png";
import reviewImage2 from "../assets/images/pic-2.png";
import reviewImage3 from "../assets/images/pic-3.png";
import reviewImage4 from "../assets/images/pic-4.png";
import reviewImage5 from "../assets/images/pic-5.jpg";

function Review() {
  useEffect(() => {
    const swiper = new Swiper(".review-slider", {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <div>
      <section className="review" id="review">
        <h1 className="heading">Client's review</h1>

        <div className="swiper review-slider" data-aos="zoom-in">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <img src={reviewImage1} alt="" />
              <h3>temp</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur sunt eligendi est, dicta maiores amet nihil perferendis,
                incidunt maxime aspernatur exercitationem laboriosam odio dolores
                magnam ratione atque, quasi odit. Hic!
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="swiper-slide slide">
              <img src={reviewImage2} alt="" />
              <h3>jkjd</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur sunt eligendi est, dicta maiores amet nihil perferendis,
                incidunt maxime aspernatur exercitationem laboriosam odio dolores
                magnam ratione atque, quasi odit. Hic!
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="swiper-slide slide">
              <img src={reviewImage3} alt="" />
              <h3>der</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur sunt eligendi est, dicta maiores amet nihil perferendis,
                incidunt maxime aspernatur exercitationem laboriosam odio dolores
                magnam ratione atque, quasi odit. Hic!
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="swiper-slide slide">
              <img src={reviewImage4} alt="" />
              <h3>abc</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur sunt eligendi est, dicta maiores amet nihil perferendis,
                incidunt maxime aspernatur exercitationem laboriosam odio dolores
                magnam ratione atque, quasi odit. Hic!
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="swiper-slide slide">
              <img src={reviewImage5} alt="" />
              <h3>xyz</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur sunt eligendi est, dicta maiores amet nihil perferendis,
                incidunt maxime aspernatur exercitationem laboriosam odio dolores
                magnam ratione atque, quasi odit. Hic!
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>
    </div>
  );
}

export default Review;
