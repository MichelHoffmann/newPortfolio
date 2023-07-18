import { EachProject } from './ProjectInfo.style'
import styllar from '../../assets/styllar-moveis.png'
import { Swiper, SwiperSlide } from 'swiper/react'

import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect, useState } from 'react'

register()

export function AllProjects() {
  const [slidesPerView, setSlidesPerView] = useState(1.1)
  const [spaceBetween, setSpaceBetween] = useState(5)

  useEffect(() => {
    function handleResize() {
      // if (window.innerWidth < 720) {
      // } else {
      //   setSlidesPerView(2)
      // }

      if (window.innerWidth < 390) {
        setSlidesPerView(1.2)
        setSpaceBetween(40)
      }
      if (window.innerWidth > 390 && window.innerWidth <= 430) {
        setSlidesPerView(1.3)
        setSpaceBetween(60)
      }
      if (window.innerWidth > 430 && window.innerWidth <= 500) {
        setSlidesPerView(1.4)
        setSpaceBetween(50)
      }
      if (window.innerWidth > 500 && window.innerWidth <= 600) {
        setSlidesPerView(1.6)
        setSpaceBetween(40)
      }
      if (window.innerWidth > 600 && window.innerWidth <= 720) {
        setSlidesPerView(1.9)
        setSpaceBetween(25)
      }
      if (window.innerWidth > 720 && window.innerWidth <= 880) {
        setSlidesPerView(2.3)
        setSpaceBetween(15)
      }
      if (window.innerWidth > 880 && window.innerWidth <= 1000) {
        setSlidesPerView(2.5)
        setSpaceBetween(10)
      }
      if (window.innerWidth > 1000 && window.innerWidth <= 1300) {
        setSlidesPerView(3)
        setSpaceBetween(10)
      }
      if (window.innerWidth > 1300) {
        setSlidesPerView(3.4)
        setSpaceBetween(10)
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView}>
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
