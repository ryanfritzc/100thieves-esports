"use client";
import Image from "../public/homepage/100Thieves-CodRoster.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./CssModules-Css/home.css"

export default function Home() {
  return (
      <Swiper
        pagination={true}
        modules={[Pagination]}
        >
        <SwiperSlide>
          <img src="/homepage/100Thieves-CodRoster.png" alt="LA Thieves" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/homepage/100Thieves-lolRoster.png" alt="LA Thieves" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/homepage/100Thieves-valRoster.webp" alt="LA Thieves" />
        </SwiperSlide>
      </Swiper>
  );
}
