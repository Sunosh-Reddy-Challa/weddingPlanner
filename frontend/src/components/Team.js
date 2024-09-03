import "./Team.css";
import reviewImage1 from "../assets/images/pic-1.png";
import reviewImage2 from "../assets/images/pic-2.png";
import reviewImage3 from "../assets/images/pic-3.png";
import reviewImage4 from "../assets/images/pic-4.png";
import reviewImage5 from "../assets/images/pic-5.jpg";

function Team(){
    return (
        <div>
            <section className="team" id="team">

<h1 className="heading">our team</h1>

<div className="box-container" data-aos="fade-up">
      <div className="box">
      <img src={reviewImage1} alt=""/>
      <h3>Venkata Phaneendra</h3>
      <p>wedding planner</p>
      <div className="share">
         <a href="#" className="fab fa-facebook-f"></a>
         <a href="#" className="fab fa-twitter"></a>
         <a href="#" className="fab fa-linkedin"></a>
         <a href="#" className="fab fa-instagram"></a>
      </div>
   </div>

   <div className="box">
      <img src={reviewImage2} alt=""/>
      <h3>Hruthik</h3>
      <p>wedding planner</p>
      <div className="share">
         <a href="#" className="fab fa-facebook-f"></a>
         <a href="#" className="fab fa-twitter"></a>
         <a href="#" className="fab fa-linkedin"></a>
         <a href="#" className="fab fa-instagram"></a>
      </div>
   </div>

   <div className="box">
      <img src={reviewImage3} alt=""/>
      <h3>Sunosh Reddy</h3>
      <p>wedding planner</p>
      <div className="share">
         <a href="#" className="fab fa-facebook-f"></a>
         <a href="#" className="fab fa-twitter"></a>
         <a href="#" className="fab fa-linkedin"></a>
         <a href="#" className="fab fa-instagram"></a>
      </div>
   </div>

   <div className="box">
      <img src={reviewImage4} alt=""/>
      <h3>Monaalika</h3>
      <p>wedding planner</p>
      <div className="share">
         <a href="#" className="fab fa-facebook-f"></a>
         <a href="#" className="fab fa-twitter"></a>
         <a href="#" className="fab fa-linkedin"></a>
         <a href="#" className="fab fa-instagram"></a>
      </div>
   </div>

<div className="box">
      <img src={reviewImage5} alt=""/>
      <h3>Vishwa</h3>
      <p>wedding planner</p>
      <div className="share">
         <a href="#" className="fab fa-facebook-f"></a>
         <a href="#" className="fab fa-twitter"></a>
         <a href="#" className="fab fa-linkedin"></a>
         <a href="#" className="fab fa-instagram"></a>
      </div>
   </div>

</div>

</section>

        </div>
    );
}

export default Team;