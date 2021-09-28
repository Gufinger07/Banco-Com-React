import React from 'react';
import alimentacao from "../assets/images/alimentacao.svg"
import outros from "../assets/images/outros.svg"
import saude from "../assets/images/saude.svg"
import transporte from "../assets/images/transporte.svg"
import utilidades from "../assets/images/utilidades.svg"
import {IconeTema} from "../Components/ui"


export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
        Utilidades: <IconeTema src={utilidades} alt="utilidades" />,
        Saude: <IconeTema src={saude} alt="saude" />,
        Transporte: <IconeTema src={transporte} alt="transporte" />,
        Default: <IconeTema src={outros} alt="Outros" />
        
    };

    return Images[type] || Images.Default
}