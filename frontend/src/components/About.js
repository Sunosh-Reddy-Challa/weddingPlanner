// About.js
import React, { useState, useRef, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './About.css';
import aboutImage from '../assets/images/about.jpg';


function About() {
  const [showMore, setShowMore] = useState(false);
  const additionalContentRef = useRef(null);

  const toggleSeeMore = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    // Scroll to the content when "See more" is clicked
    if (showMore && additionalContentRef.current) {
      scroll.scrollTo(additionalContentRef.current.offsetTop, {
        smooth: true,
      });
    }
  }, [showMore]);

  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        {!showMore && (
          <div className="row">
            <div className="content" data-aos="fade-up" data-aos-delay="100">
              <h3>team of passionate people</h3>
              <p>
                We are more than just wedding enthusiasts – we are a team of dedicated individuals with a shared passion for turning dreams into reality. Our diverse group of professionals brings a unique set of skills and expertise to the table, united by a common goal: making your wedding day an extraordinary experience.
              </p>
              <p>
                We believe that passion is the heartbeat of creativity, and our team beats to the rhythm of creating unforgettable moments. From seasoned event planners to imaginative designers and meticulous coordinators, each member of our team is driven by a deep love for crafting celebrations that tell your unique love story.
              </p>
              <a href="#" className="btn" onClick={toggleSeeMore}>
                {showMore ? 'Read less' : 'Read more'}
              </a>
            </div>
            <div className="image" data-aos="fade-down" data-aos-delay="300">
              <img src={aboutImage} alt="" />
            </div>
          </div>
        )}

       
{showMore && (
  <div>
    <div
      ref={additionalContentRef}
      id="additionalContent"
      className="additional-content"
      data-aos="fade-up"
    >
      <h4>Meet Our Team of Passionate Visionaries</h4>
      <p>
        At Destiny, we are more than just wedding enthusiasts – we are a team of dedicated individuals with a shared passion for turning dreams into reality. Our diverse group of professionals brings a unique set of skills and expertise to the table, united by a common goal: making your wedding day an extraordinary experience.
      </p>

      <h4>Passion is Our Driving Force</h4>
      <p>
        We believe that passion is the heartbeat of creativity, and our team beats to the rhythm of creating unforgettable moments. From seasoned event planners to imaginative designers and meticulous coordinators, each member of our team is driven by a deep love for crafting celebrations that tell your unique love story.
      </p>

      <h4>Why Passion Matters</h4>
      <p>
        Passion is the secret ingredient that transforms the ordinary into the extraordinary. It's the fuel that ignites our creativity, pushing us to think beyond conventions and create weddings that are as unique as the couples we serve. Every detail, every plan, and every moment is infused with our collective passion, ensuring that your special day is nothing short of magical.
      </p>

      <h4>Diversity in Expertise, Unity in Passion</h4>
      <p>
        Our team is a blend of talents, bringing together individuals with diverse backgrounds and experiences. From seasoned veterans in the wedding industry to fresh, creative minds, we thrive on the synergy created by our unique perspectives. This diversity allows us to approach wedding planning with fresh eyes, ensuring that your celebration is contemporary, yet timeless.
      </p>

      {/* <{h4>Get to Know Us</h4>
      <p>
        Click through the profiles below to get to know the individuals who will be working tirelessly behind the scenes to make your wedding day exceptional. Each team member brings their own flavor to the mix, contributing to the vibrant tapestry of skills that define Destiny.
      </p>} */}

{/* {      <div className="team-members">
        <TeamMember name="Phaneendra" />
        <TeamMember name="Vishwa" />
        <TeamMember name="Hruthik" />
        <TeamMember name="Sunosh" />
        <TeamMember name="Monaalika" />
      </div>} */}

      <h4>Your Dream Team Awaits</h4>
      <p>
        We are more than just planners; we are your confidantes, your creative partners, and your biggest cheerleaders. As your dream team, we are committed to making your wedding journey as enjoyable as the day itself. Get ready to meet a group of individuals who are not just passionate about weddings – we are passionate about your love story.
      </p>
    </div>
    <a href="#" className="btn" style={{ display: "block", width: "fit-content", margin: "0 auto" }} onClick={toggleSeeMore}>
      Read less
    </a>
  </div>
)}
      </section>
    </div>
  );
}


export default About;
