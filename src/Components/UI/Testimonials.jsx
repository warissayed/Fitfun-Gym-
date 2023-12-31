import "../../Styles/testimonials.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import avator from "../../assets/img/avatar01.png";
import avator1 from "../../assets/img/avatar02.png";
import avator2 from "../../assets/img/gym-02.png";

export default function Testimonials() {
  return (
    <>
      <div
        className="container sliders"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <h2 className="section_title">Testimonials</h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide_item">
              <div className="slider_img-1">
                <img src={avator} alt="" />
              </div>
              <h4>Angela p</h4>
              <p>
                Meet Angela p, our dynamic fitness trainer dedicated to
                sculpting healthier and stronger lives. With a passion for
                transformative workouts and personalized coaching, Jesica
                empowers our gym members to reach their fitness goals with
                enthusiasm and expertise
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_item">
              <div className="slider_img-2">
                <img src={avator1} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                Meet Jesica Fernandes, our dynamic fitness trainer dedicated to
                sculpting healthier and stronger lives. With a passion for
                transformative workouts and personalized coaching, Jesica
                empowers our gym members to reach their fitness goals with
                enthusiasm and expertise
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_item">
              <div className="slider_img-3">
                <img src={avator2} alt="" />
              </div>
              <h4>Lux Ferba</h4>
              <p>
                Meet Lux Ferba, our dynamic fitness trainer dedicated to
                sculpting healthier and stronger lives. With a passion for
                transformative workouts and personalized coaching, Jesica
                empowers our gym members to reach their fitness goals with
                enthusiasm and expertise
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
