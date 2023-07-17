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
  const [slidesPerView, setSlidesPerView] = useState(1.2)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidesPerView(1.2)
      } else {
        setSlidesPerView(2)
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Swiper spaceBetween={15} slidesPerView={slidesPerView}>
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
