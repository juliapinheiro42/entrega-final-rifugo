import React from 'react'
import { LogoTipo } from './styles'
import logotipo from '../../../../assets/refugio.png'

const sizes = {
  small:28,
  large:64,
  extraLarge:120,
  big:160,
}

export const Logotipo = ({size}) => {
  return <LogoTipo source={logotipo} size={sizes[size || 'large']} ml={-30} mb={20}/>
}
