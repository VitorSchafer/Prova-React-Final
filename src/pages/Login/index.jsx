import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'

function Login() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [nascimento, setNascimento] = useState("");

    const handleChangeNome = (e) => {
        setNome(e.target.value);
        console.log(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleChangeTelefone = (e) => {
        setTelefone(e.target.value);
        console.log(e.target.value);
    }

    const handleChangeNascimento = (e) => {
        setNascimento(e.target.value);
        console.log(e.target.value);
    }

    function handleSubmit() {
        const cadastro = {
            nome: nome,
            email: email,
            telefone: telefone,
            nascimento: nascimento,
        }
        if (handleSubmit === 13){
            console.log(cadastro)
        } 
        
        
        
    }

    return (
        
        <div>
            
            <Header/>

            <form onSubmit={handleSubmit}>

            <div className="nome">
            <label>
                <br/><br/><br/>Nome:
                <input onChange={handleChangeNome} type="text" value={nome} />
            </label>
            <label>
                Email:
                <input onChange={handleChangeEmail} type="text" value={email} />
            </label>
            <label>
                Telefone:
                <input onChange={handleChangeTelefone} type="text" value={telefone} />
            </label>
            <label>
                Data de Nascimento:
                <input onChange={handleChangeNascimento} type="text" value={nascimento} />
            </label>
            <input type="submit" value="Enviar" />
            </div>

            </form>
       
            <Footer />

        </div>

    )
}
export default Login;