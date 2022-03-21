import React from 'react'
import {
  HeaderContainer,
  HeaderImageBackground,
  HeaderGradient,
} from './styles'
import { colors } from '../../../styles/colors'


export const Header = () => {
  return (
    <HeaderContainer>
      
      <HeaderImageBackground
        source={{
          uri: 'https://media.istockphoto.com/photos/refugees-welcome-banner-hanging-on-madrids-town-hall-building-picture-id866182814?s=612x612',
        }}
      >

      </HeaderImageBackground>
      <HeaderGradient colors={[colors.orange, colors.black]}>
        
      </HeaderGradient>
    </HeaderContainer>
  )
}
