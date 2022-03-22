import styled from 'styled-components/native'
import { LinearGradient } from "expo-linear-gradient";


export const SobreContainer = styled.View `
    display:flex;
    flex-direction:column;
    width: 100%;
    height: ${({theme}) => theme.metrics.px(180)}px;
`;


export const Gradient = styled(LinearGradient) `
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 100%;
    padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
    padding-top: ${({theme}) => theme.metrics.px(56)}px;
`;

export const LogoContainer = styled.View `
    align-items: center;
    justify-content: center;

`;

export const TextContainer = styled.View `
    align-items: center;
    background-color: rgb(255,255,255);
    height: 50%;
    margin-top: 20px;
    marginBottom:10px;
    borderWidth:4px;
`;