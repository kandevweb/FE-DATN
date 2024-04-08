/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { IonIcon } from '@ionic/react'
import VerticalVideoCard from './VerticalVideoCard'

const array = [1, 2, 3, 4, 5, 6, 7, 8]

const SwiperVideoCard = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const handleSlideChange = (swiper: any) => {
    console.log(swiper)
    setActiveSlide(swiper.activeIndex)
  }
  console.log(array.length)
  console.log('activeSlide', activeSlide)
  return (
    <div className='group relative' tabIndex={-1} uk-slider='finite:true'>
      <div className='uk-slider-container pb-1'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button'
          }}
          onSlideChange={handleSlideChange}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {array.map((item) => {
            return (
              <SwiperSlide key={item}>
                <VerticalVideoCard />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      {/* slide nav icons */}
      <div
        className={
          'nav-prev custom-prev-button !right-0 !top-20 z-10 hidden  cursor-pointer items-center justify-center text-cyan-400  group-hover:flex'
        }
      >
        <IonIcon name='chevron-back' className='text-2xl' />
      </div>
      <div
        className={
          'nav-next custom-next-button !top-20 z-10 hidden cursor-pointer items-center justify-center text-cyan-400 group-hover:flex'
        }
      >
        <IonIcon name='chevron-forward' className='text-2xl' />
      </div>
    </div>
  )
}

export default SwiperVideoCard
