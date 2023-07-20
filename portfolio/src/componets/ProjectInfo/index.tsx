import { EachProject } from './ProjectInfo.style'
import styllar from '../../assets/styllar-moveis.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export function AllProjects() {
  // function calculateSlidesPerView() {
  //   return 1
  // }
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <EachProject>
          <h3>Styllar Móveis</h3>
          <p>
            Projeto freelancer feito para uma marcenaria com o objetivo de fazer
            com que o cliente tivesse um portifolio online contendo todos os
            seus projetos, facilitando seu trabalho com os seus clientes.
          </p>
          <div className="techs">
            <p>Typescript</p>
            <p>Tailwind</p>
          </div>
          <img src={styllar} alt="" />
        </EachProject>
      </SwiperSlide>
      <SwiperSlide>
        <EachProject>
          <h3>Styllar Móveis</h3>
          <p>
            Projeto freelancer feito para uma marcenaria com o objetivo de fazer
            com que o cliente tivesse um portifolio online contendo todos os
            seus projetos, facilitando seu trabalho com os seus clientes.
          </p>
          <div className="techs">
            <p>Typescript</p>
            <p>Tailwind</p>
          </div>
          <img src={styllar} alt="" />
        </EachProject>
      </SwiperSlide>
      <SwiperSlide>
        <EachProject>
          <h3>Styllar Móveis</h3>
          <p>
            Projeto freelancer feito para uma marcenaria com o objetivo de fazer
            com que o cliente tivesse um portifolio online contendo todos os
            seus projetos, facilitando seu trabalho com os seus clientes.
          </p>
          <div className="techs">
            <p>Typescript</p>
            <p>Tailwind</p>
          </div>
          <img src={styllar} alt="" />
        </EachProject>
      </SwiperSlide>
      <SwiperSlide>
        <EachProject>
          <h3>Styllar Móveis</h3>
          <p>
            Projeto freelancer feito para uma marcenaria com o objetivo de fazer
            com que o cliente tivesse um portifolio online contendo todos os
            seus projetos, facilitando seu trabalho com os seus clientes.
          </p>
          <div className="techs">
            <p>Typescript</p>
            <p>Tailwind</p>
          </div>
          <img src={styllar} alt="" />
        </EachProject>
      </SwiperSlide>
      <SwiperSlide>
        <EachProject>
          <h3>Styllar Móveis</h3>
          <p>
            Projeto freelancer feito para uma marcenaria com o objetivo de fazer
            com que o cliente tivesse um portifolio online contendo todos os
            seus projetos, facilitando seu trabalho com os seus clientes.
          </p>
          <div className="techs">
            <p>Typescript</p>
            <p>Tailwind</p>
          </div>
          <img src={styllar} alt="" />
        </EachProject>
      </SwiperSlide>
    </Swiper>
  )
}
