import styled from 'styled-components/native'

export const CardContainer = styled.TouchableOpacity`
    width: ${({theme}) => theme.metrics.px(88)}px;
    height: ${({theme}) => theme.metrics.px(124)}px;
    border-radius: ${({theme}) => theme.metrics.px(8)}px;
    margin-right:${({theme}) => theme.metrics.px(12)}px;
    overflow:hidden;
    margin-top:${({theme}) => theme.metrics.px(10)}px;
    margin-bottom:${({theme}) => theme.metrics.px(10)}px;
`

export const CardImage = styled.ImageBackground`
    width: 100% ;
    height: 100% ;
`;