// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Slider() {
    const images = ["https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Promo_2x_2502_ETOM.jpg","https://ii2.pepperfry.com/media/wysiwyg/banners/WEB_HB1_2x_2102.jpg","https://ii3.pepperfry.com/media/wysiwyg/banners/WEB_HB2_2x_2102.jpg","https://ii1.pepperfry.com/media/wysiwyg/banners/WEB_HB3_2x_2102.jpg"]
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            images.map((el,id)=><SwiperSlide key={id}>
                <img src={el} alt="Slider pics" />
            </SwiperSlide>)
        }
      </Swiper>
    </>
  );
}