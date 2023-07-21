import { EachProject } from './ProjectInfo.style'
import styllar from '../../assets/styllar-moveis.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useEffect, useState } from 'react'

export function AllProjects() {
  const [slidesPerView, setSlidesPerView] = useState(1)
  const [spaceBetween, setSpaceBetween] = useState(10)

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth < 400) {
        setSlidesPerView(1)
      } else if (window.innerWidth >= 400 && window.innerWidth <= 450) {
        setSlidesPerView(1.1)
        setSpaceBetween(1)
      } else if (window.innerWidth > 450 && window.innerWidth <= 500) {
        setSlidesPerView(1.3)
      } else if (window.innerWidth > 500 && window.innerWidth <= 600) {
        setSlidesPerView(1.4)
      } else if (window.innerWidth > 600 && window.innerWidth <= 700) {
        setSlidesPerView(1.6)
      } else if (window.innerWidth > 700 && window.innerWidth <= 800) {
        setSlidesPerView(1.8)
      } else if (window.innerWidth > 800 && window.innerWidth <= 900) {
        setSlidesPerView(2)
      } else if (window.innerWidth > 900 && window.innerWidth <= 1024) {
        setSlidesPerView(2.2)
      } else {
        setSlidesPerView(3)
      }
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView}>
      <SwiperSlide>
        <EachProject>
          <h3>Styllar Móveis 1</h3>
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
          <h3>Styllar Móveis 2</h3>
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
          <h3>Styllar Móveis 3</h3>
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
          <h3>Styllar Móveis 4</h3>
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
          <h3>Styllar Móveis 5</h3>
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
