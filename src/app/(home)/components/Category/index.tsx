'use client'

// DEPENDENCY
import { useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'

// STYLE
import { CategoryContainer, ImageStyled, Slide, Title } from './styles'
import 'keen-slider/keen-slider.min.css'

// TYPE
type CategoryProps = {
  title: string
}

// VARIABLE
const sliderOptions = {
  slides: {
    perView: 2.5,
    spacing: 16,
  },
}

export function Category({ title }: CategoryProps) {
  const [sliderRef, internalRef] = useKeenSlider(sliderOptions)

  useEffect(() => {
    internalRef.current?.update({
      ...sliderOptions,
    })
  }, [internalRef])

  return (
    <CategoryContainer>
      <Title>{title}</Title>

      <div ref={sliderRef} className="keen-slider">
        <Slide className="keen-slider__slide">
          <ImageStyled
            src="https://picsum.photos/142"
            alt=""
            width={142}
            height={142}
          />

          <p>Album 1</p>
        </Slide>

        <Slide className="keen-slider__slide">
          <ImageStyled
            src="https://picsum.photos/142"
            alt=""
            width={142}
            height={142}
          />

          <p>Album 2</p>
        </Slide>

        <Slide className="keen-slider__slide">
          <ImageStyled
            src="https://picsum.photos/142"
            alt=""
            width={142}
            height={142}
          />

          <p>Album 3</p>
        </Slide>

        <Slide className="keen-slider__slide">
          <ImageStyled
            src="https://picsum.photos/142"
            alt=""
            width={142}
            height={142}
          />

          <p>Album 4</p>
        </Slide>
      </div>
    </CategoryContainer>
  )
}
