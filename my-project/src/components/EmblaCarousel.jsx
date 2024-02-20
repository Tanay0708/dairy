import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    DotButton,
    PrevButton,
    NextButton
  } from './EmblaCarouselArrowsDotsButtons'
import {bucket, dairy01, dairy02, dairy03, jar1ltr } from '../assets/images'
import '../index.css';
import { d1, d2, d3, d4 } from '../assets/new';





export function EmblaCarousel(props) {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])
  
    const scrollPrev = useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi]
    )
    const scrollNext = useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi]
    )
    const scrollTo = useCallback(
      (index) => emblaApi && emblaApi.scrollTo(index),
      [emblaApi]
    )
  
    const onInit = useCallback((emblaApi) => {
      setScrollSnaps(emblaApi.scrollSnapList())
    }, [])
  
    const onSelect = useCallback((emblaApi) => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])
    const slides = [d1,d2,d3,d4]
  
    useEffect(() => {
      if (!emblaApi) return
  
      onInit(emblaApi)
      onSelect(emblaApi)
      emblaApi.on('reInit', onInit)
      emblaApi.on('reInit', onSelect)
      emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])
  
    return (
      <>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((el,index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <span>{index + 1}</span>
                  </div>
                  <img
                    className="embla__slide__img aspect-3/1 max-lg:aspect-auto max-lg:h-[100%]" 
                    src={el}
                    alt="Your alt text"
                  />
                </div>
              ))}
            </div>
          </div>
  
          <div className="embla__buttons">
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
          </div>
        </div>
  
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => scrollTo(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </>
    )
}
