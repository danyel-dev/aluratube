import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorModeProvider";


export default function Video() {
    const contexto = React.useContext(ColorModeContext)

    return (
        <div>
            Vídeo
            { contexto.mode }
            <button onClick={ () => contexto.toggleMode() }>Mudar cor</button>
        </div>
    );
}
