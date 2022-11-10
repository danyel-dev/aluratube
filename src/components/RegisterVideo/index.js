import { useState } from "react";
import { StyledRegisterVideo } from "./styles";


function useForm(props) {
    const [values, setValues] = useState(props.initialValues)
    
    return {
        values, 
        setValues,
        handleChangeForm: (e) => {
            const value = e.target.value
            const name = e.target.name

            setValues({
                ...values,
                [name]: value
            })
        },
        clearForm() {
            setValues({})
        }
    };
}


export default function RegisterVideo() {
    const [formVisible, setFormVisible] = useState(true)

    const formCadastro = useForm({
        initialValues: {titulo: "", url: ""}
    })

    return (
        <StyledRegisterVideo>
            <button type="button" className="add-video" onClick={() => setFormVisible(true)}>
                +
            </button>

            {formVisible? (
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setFormVisible(false)
                    formCadastro.clearForm()
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisible(false)}>
                            X
                        </button>

                        <input placeholder="Título do Vídeo" name="titulo" value={formCadastro.values.titulo} onChange={formCadastro.handleChangeForm} />
                        <input placeholder="URL" name="url" value={formCadastro.values.url} onChange={formCadastro.handleChangeForm} />
               
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            ): false}
        </StyledRegisterVideo>
    );
}
