"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./CssModules-Css/home.css";
import TeamSwiperPortraits from "./Components/TeamSwiperPortraits";

export default function Home() {
  return (
    <Swiper pagination={true} modules={[Pagination]}>
      <SwiperSlide className="swiperCod">
        <div className="flex flex-wrap w-[80%]">
          <TeamSwiperPortraits
            image="/homepage/team-portraits/ghosty.png"
            name="GHOSTY"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/joedeceives.png"
            name="JOEDECEIVES"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/laPlaceholder.png"
            name="NASTIE"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/laPlaceholder.png"
            name="KREMP"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperLol">
      <div className="flex flex-wrap ">
          <TeamSwiperPortraits
            image="/homepage/team-portraits/quid.png"
            name="quid"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/river.png"
            name="river"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/sniper.png"
            name="sniper"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/meech.png"
            name="meech"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/eyla.png"
            name="eyla"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/tomo.png"
            name="tomo"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiperVal">
      <div className="flex flex-wrap ">
          <TeamSwiperPortraits
            image="/homepage/team-portraits/asuna.png"
            name="asuna"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/cryo.png"
            name="cryo"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/boostio.png"
            name="boostio"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/bang.png"
            name="bang"
          />
          <TeamSwiperPortraits
            image="/homepage/team-portraits/eeiu.png"
            name="eeiu"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
