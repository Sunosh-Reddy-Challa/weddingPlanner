import React, { useState } from 'react';
import './Plan.css';
import goa from '../assets/images/goa.jpg';
import bankok from '../assets/images/bankok.jpg';
import maldives from '../assets/images/maldives.jpg';
import hawaii from '../assets/images/hawaii.jpg';
import Costa_Rica from '../assets/images/Costa_Rica.jpg';
import Shimla_and_Manali from '../assets/images/Shimla_and_Manali.jpg';
import Andaman_and_Nicobar_Islands from '../assets/images/Andaman_and_Nicobar_Islands.jpg';
import Santorini from '../assets/images/Santorini.jpg';



function Plan() {
  const [showMore, setShowMore] = useState(false);

  const toggleSeeMore = () => {
    setShowMore(!showMore);
    // Scroll to the content when "See more" is clicked
    if (!showMore) {
      document.getElementById('additionalContent').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section className="plan" id="plan">
        <h1  className="heading">
          <span data-aos="fade-up">GOA</span>
        </h1>

        <div className="goa row" data-aos="fade-up">
          <div className="image" data-aos="fade-up" >
            <img src={goa} alt="" />
          </div>
          <div className={`content ${showMore ? 'show' : ''}`}>
            <p>
              <h3>
                Goa, with its golden beaches and vibrant culture, is a lively and exciting destination for weddings. The blend of Indian and Portuguese influences creates a unique ambiance.
              </h3>
            </p>
            <p>
              <h3>
               Beachside ceremonies and lively beach parties contribute to the region's bohemian charm. Goa is perfect for couples who want a blend of tradition, tropical vibes, and a lively celebration.
              </h3>
            </p>
          </div>
        </div>
      </section>

      <section className="plan" id="plan">
        <h1 className="heading">
          <span data-aos="fade-up">BANKOK</span>
        </h1>

        <div className="bankok row" data-aos="fade-up">
          <div className="image" data-aos="fade-up">
            <img src={bankok} alt="" />
          </div>
          <div className={`content ${showMore ? 'show' : ''}`}>
            <p>
              <h3>
                Bangkok offers a variety of venues, from luxurious hotels with stunning skyline views to traditional Thai settings. Rooftop venues overlooking the cityscape or ceremonies along the Chao Phraya River can provide a picturesque setting for a memorable wedding.
              </h3>
            </p>
            <p>
              <h3>
                Bangkok's renowned street food and diverse culinary scene can be a treat for wedding guests. From authentic Thai dishes to international cuisine, couples can curate a menu that caters to various tastes, offering a gastronomic journey for attendees.
              </h3>
            </p>
          </div>
        </div>

      </section>

       <section className="plan" id="plan">
        <h1 className="heading">
          <span data-aos="fade-up">MALDIVES</span>
        </h1>

        <div className="bankok row" data-aos="fade-up">
          <div className="image" data-aos="fade-up">
            <img src={maldives} alt="" />
          </div>
          <div className={`content ${showMore ? 'show' : ''}`}>
            <p>
              <h3>
                 The Maldives is a vision of luxury and tranquility, making it an idyllic choice for a romantic destination wedding. The overwater bungalows, clear turquoise waters, and coral reefs create a surreal atmosphere.
              </h3>
            </p>
            <p>
              <h3>
                 Couples can exchange vows surrounded by the gentle lapping of the Indian Ocean. With its intimate and exclusive feel, the Maldives offers an unparalleled sense of seclusion and opulence.
              </h3>
            </p>
          </div>
        </div>

      </section>

       <section className="plan" id="plan">
        <h1 className="heading">
          <span data-aos="fade-up"> HAWAII</span>
        </h1>

        <div className="bankok row" data-aos="fade-up">
          <div className="image" data-aos="fade-up">
            <img src={ hawaii} alt="" />
          </div>
          <div className={`content ${showMore ? 'show' : ''}`}>
            <p>
              <h3 >
                 Hawaii, with its diverse landscapes and warm hospitality, offers a tropical paradise for couples seeking a unique destination wedding. The combination of volcanic landscapes, lush greenery, and pristine beaches provides a stunning backdrop for ceremonies.
              </h3>
            </p>
            <p>
              <h3>
                Traditional Hawaiian ceremonies add cultural richness to the experience. Hawaii is a captivating choice for couples wanting a blend of natural beauty and Pacific island charm.
              </h3>
            </p>
          </div>
        </div>

      </section>

      <section className="plan" id="plan">
        <h1 className="heading">
          <span data-aos="fade-up"> Costa Rica</span>
        </h1>

        <div className="bankok row" data-aos="fade-up">
          <div className="image" data-aos="fade-up">
            <img src={ Costa_Rica} alt="" />
          </div>
          <div className={`content ${showMore ? 'show' : ''}`}>
            <p>
              <h3>
                 Costa Rica is a gem for nature lovers seeking an eco-friendly wedding destination. The rich biodiversity, rainforests, and diverse landscapes provide a backdrop of unparalleled beauty. Costa Rican weddings are infused with a connection to nature
              </h3>
            </p>
            <p>
              <h3>
                making it an ideal choice for couples who appreciate sustainability and a touch of adventure. The "Pura Vida" spirit adds a joyful and laid-back atmosphere to celebrations.
              </h3>
            </p>
          </div>
        </div>

      </section>

      <section className="plan" id="plan">
        <h1 className="heading">
          <span data-aos="fade-up"> Shimla and Manali</span>
        </h1>

        <div className="bankok row" data-aos="fade-up">
          <div className="image" data-aos="fade-up">
            <img src={ Shimla_and_Manali} alt="" />
          </div>
          <div className={`content ${showMore ? 'show' : ''}`}>
            <p>
              <h3>
                Shimla and Manali offer a fairytale-like setting with snow-capped mountains and serene landscapes. The picturesque surroundings provide a cozy and intimate atmosphere for winter weddings.
              </h3>
            </p>
            <p>
              <h3>
                The charm of these hill stations lies in their simplicity and natural beauty, making them ideal for couples seeking a tranquil and magical celebration amidst nature's wonders.
              </h3>
            </p>
          </div>
        </div>

      </section>

      <section className="plan" id="plan">
        <h1 className="heading">
          <span data-aos="fade-up"> Andaman and Nicobar Islands</span>
        </h1>

        <div className="bankok row" data-aos="fade-up">
          <div className="image" data-aos="fade-up">
            <img src={ Andaman_and_Nicobar_Islands} alt="" />
          </div>
          <div className={`content ${showMore ? 'show' : ''}`}>
            <p>
              <h3>
                The Andaman and Nicobar Islands are a hidden gem with their pristine beaches and crystal-clear waters. The tranquility of these islands, combined with their natural beauty, creates an intimate and romantic setting for weddings
              </h3>
            </p>
            <p>
              <h3>
                Beachfront ceremonies and the opportunity for underwater adventures make the Andamans a captivating choice for couples seeking a tropical paradise.
              </h3>
            </p>
          </div>
        </div>

      </section>

      <section className="plan" id="plan">
        <h1 className="heading">
          <span > Santorini</span>
        </h1>

        <div className="bankok row" data-aos="fade-up">
          <div className="image" data-aos="fade-up">
            <img src={ Santorini} alt="" />
          </div>
          <div className={`content ${showMore ? 'show' : ''}`}>
            <p>
              <h3>
                Santorini is a dreamy destination that effortlessly combines romance with breathtaking beauty. The iconic white architecture against the backdrop of the Aegean Sea creates a mesmerizing setting for couples.
              </h3>
            </p>
            <p>
              <h3>
                The sunsets are legendary, adding a touch of magic to any ceremony. With a perfect blend of elegance and simplicity, Santorini provides an enchanting canvas for unforgettable weddings.
              </h3>
            </p>
          </div>
        </div>

      </section>


    </div>
  );
}

export default Plan;
