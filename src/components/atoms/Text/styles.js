import Styled from 'styled-components/native';

export const Texto = Styled.Text`
    font-size:${({theme,size}) => theme.metrics.px(size || 20)}px;
    color: ${({theme,colors}) => theme.colors[colors || 'white']};
    font-family:${({theme,fontFamily}) => theme.fonts[fontFamily || 'regular']}
    margin-top:${({theme,mt}) => theme.metrics.px(mt || 0)}px;
    margin-bottom:${({theme,mb}) => theme.metrics.px(mb || 0)}px;
    margin-right:${({theme,mr}) => theme.metrics.px(mr || 0)}px;
    margin-left:${({theme,ml}) => theme.metrics.px(ml || 0)}px;
`;