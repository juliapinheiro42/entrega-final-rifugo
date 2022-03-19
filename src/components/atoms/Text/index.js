import React from "react";
import { Texto } from "./styles";

export const CustomText = ({children,...props}) => {
    return(
        <Texto {...props} mt={10}>
            {children}
        </Texto>
    );
}
