import "./Service.css"
import serviceImage1 from "../assets/images/service1.jpg";
import serviceImage2 from "../assets/images/service2.jpg";
import serviceImage3 from "../assets/images/service3.jpg";
import serviceImage4 from "../assets/images/service4.jpg";
import serviceImage5 from "../assets/images/service5.jpg";
import serviceImage6 from "../assets/images/service6.jpg";
import serviceImage7 from "../assets/images/service7.jpg";
import serviceImage8 from "../assets/images/service8.jpg";


function Service(){
    return (
        <div>
            <section class="services" id="services">

<h1 class="heading">Wedding Services</h1>

<div class="box-container">

    <div class="box" data-aos="zoom-in" data-aos-delay="150">
      <img src={serviceImage1} alt=""/>
      <h3>full video and camera service</h3>
      <p> we understand the significance of every moment on your special day. Our dedicated team of skilled photographers is committed to capturing the essence and beauty of your wedding day, providing you with timeless memories that will last a lifetime.</p>
    </div>

   <div class="box" data-aos="zoom-in" data-aos-delay="300">
      <img src={serviceImage2} alt=""/>
      <h3>Unlimited communication</h3>
      <p>We are constantly in touch: by email / Skype calls; a dedicated Whatsapp line for urgent matters is also at your disposal, from contract signing till the wedding day.</p>
   </div>

   <div class="box" data-aos="zoom-in" data-aos-delay="450">
      <img src={serviceImage3} alt=""/>
      <h3>Budget Management</h3>
      <p>You will have a detailed cost breakdown for all wedding items to help you easily control areas of spending.</p>
   </div>

   <div class="box" data-aos="zoom-in" data-aos-delay="600">
      <img src={serviceImage4} alt=""/>
      <h3>Schedule Arrangement</h3>
      <p>Yes, there is a place for surprises on the wedding day, but only if it was thoroughly planned in the first place. We create a detailed timeline of the wedding day, both for the vendor team and the bridal party, to make sure that everyone knows what’s about to happen, and what is their role in it.</p>
    </div>

   <div class="box" data-aos="zoom-in" data-aos-delay="150">
      <img src={serviceImage5} alt=""/>
      <h3>Guests’ Accommodation And Activity Coordination</h3>
      <p>We understand that as bride and groom you already have your hands full with things to go over, that is why we are happy to help to accommodate your guests on pre- or post-wedding days. We have a lot of activities to suggest from yacht trips to cooking classes so that everyone can find something of interest to them.</p>
   </div>

   <div class="box" data-aos="zoom-in" data-aos-delay="300">
      <img src={serviceImage6} alt=""/>
      <h3>Pre-wedding Ceremony Rehearsal And Final Run-Through</h3>
      <p>LWe arrange a compulsory meeting the day before the wedding with the wedding couple and bridal party, discussing the sequence of the day, giving special attention to the ceremony rehearsal: after all, we’ve all gathered here to watch the bride coming down the aisle, haven’t we?</p>
   </div>

   <div class="box" data-aos="zoom-in" data-aos-delay="450">
      <img src={serviceImage7} alt=""/>
      <h3>Full Detail-Oriented Wedding Design</h3>
      <p>Elaborating a concept is only the beginning of numerous design tasks we have: we meticulously work on the smallest details, making sure that it all work towards the same goal: making your dream wedding come to life.</p>
   </div>

   <div class="box" data-aos="zoom-in" data-aos-delay="600">
      <img src={serviceImage8} alt=""/>
      <h3>finding the right place for you</h3>
      <p>Choosing the ideal venue is a pivotal step in curating the wedding of your dreams. we understand the significance of the perfect setting, and we're here to guide you through the process of finding a venue that resonates with your vision and love story.</p>
   </div>

</div>

</section>
        </div>
    );
}

export default Service;
