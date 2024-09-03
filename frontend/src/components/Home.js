import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [showMore, setShowMore] = useState(false);

  const toggleSeeMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (showMore) {
      document.getElementById('additionalContent').scrollIntoView({ behavior: 'smooth' });
    }
  }, [showMore]);

  return (
    <div>
      <section className="home" id="home">
        {!showMore && (
          <div className="content" data-aos="fade-down">
            <h3 style={{color: "white"}}>Your dream wedding <br /> as simple as pie</h3>
            <a href="#" className="btn" onClick={toggleSeeMore}>
              {showMore ? 'Show less info' : 'Show more info'}
            </a>
          </div>
        )}
          {showMore && (
      <div id="additionalContent" className="content" data-aos="fade-up">
        <h2 style={{color: "white"}}>Your Dream Wedding Brought to Life with Love and Joy</h2>
        <h3 style={{color: "white"}}>Discover the Magic of Destiny</h3>
        <p style={{color: "white"}}>
          Welcome to Destiny, where dreams meet reality, and your perfect wedding day comes to life. Our passionate team is dedicated to creating magical moments that will be etched in your memory forever. We understand that your wedding day is a celebration of love, and we are here to ensure it reflects your unique story.
        </p>
        <h3 style={{color: "white"}}>Our Commitment to You</h3>
        <p style={{color: "white"}}>
          Immerse yourself in the enchanting journey of planning your dream wedding with Destiny. From the first consultation to the final dance, we are committed to making every step memorable and stress-free. Let us be a part of your extraordinary journey towards a lifetime of happiness.
        </p >
        <h3 style={{color: "white"}}>Services Tailored to You</h3>
        <p style={{color: "white"}}>
          Our team of experienced professionals brings a wealth of creativity, expertise, and attention to detail to make your wedding truly special. Whether it's a grand celebration or an intimate affair, Destiny is here to turn your vision into a breathtaking reality. Explore our services and let the magic of Destiny unfold on your wedding day.
        </p>
        <h3 style={{color: "white"}}>Embrace the Magic of Love</h3>
        <p style={{color: "white"}}>
          We believe in the power of love, and your wedding day is a celebration of that love. Let Destiny be your trusted partner, guiding you through the entire process, ensuring that every detail is as unique and beautiful as your love story. Your dream wedding awaits, and we are here to make it a reality.
        </p>
        <a href="#" className="btn" onClick={toggleSeeMore}>
          Show less info
        </a>
      </div>
)}


      </section>
    </div>
  );
}

export default Home;
