import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from '@supabase/supabase-js'

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


const PROJECT_URL = 'https://vrpugbfyyevfhxzgpsgs.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycHVnYmZ5eWV2Zmh4emdwc2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzgzMTEsImV4cCI6MTk4Mzc1NDMxMX0.Y0bg9j9_9euYxitixcYuzpw4EmRNjW7sjGFUbj83Ksk'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)


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

                    supabase.from("video").insert({
                        title: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumb: 'https://img.youtube.com/vi/QsqatJxAUtk/hqdefault.jpg',
                        playlist: 'Jogos',
                    }).then(response => {
                        console.log(response)
                    }).catch(err => console.log(err))

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
