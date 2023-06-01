'use client'

// DEPENDENCY
import styled from 'styled-components'
import Image from 'next/image'

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
`

export const CategoryContainer = styled.section`
  display: grid;
  gap: 0.5rem;
`

export const Slide = styled.article`
  & > *:is(:not(:first-child)) {
    padding-block-start: 0.25rem;
  }
`

export const ImageStyled = styled(Image)`
  object-fit: cover;
`
