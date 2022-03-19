import Styled from 'styled-components/native'

export const LogoTipo = Styled.Image`
        height: ${({ size,theme }) => theme.metrics.px(size)}px;
        width: ${({ size,theme }) => theme.metrics.px(size)}px;
`
