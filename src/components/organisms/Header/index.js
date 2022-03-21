import React from 'react'
import {
  HeaderContainer,
  HeaderImageBackground,
  HeaderGradient,
} from './styles'
import { colors } from '../../../styles/colors'
import LogoHeader from '../../../../assets/LogoHeader.png'

export const Header = () => {
  return (
    <HeaderContainer>
      
      <HeaderImageBackground
        source={LogoHeader}
      >

      </HeaderImageBackground>
      <HeaderGradient colors={[colors.orange, colors.black]}>
        
      </HeaderGradient>
    </HeaderContainer>
  )
}
