import { useState, useSyncExternalStore } from 'react'
import './App.css';

function App() {
  const [users, setUsers] = useState([
    {
      email: "teste@gmail.com",
      senha: "12345"
    },
    {
      email: "joaog.tostes@gmail.com",
      senha: "444555"
    }
  ])

  const Form = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");  
  
    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
      console.log("PEGUEI EMAIL")
    }
  
    const handleChangeSenha = (e) => {
      setSenha(e.target.value);
      console.log("PEGUEI SENHA")
    }
    
  const Validar = () => {
    users.map((user) => {
      if(email === user.email && senha === user.senha) {
        alert("LOGADO COM SUCESSO")
      } else {
      }
      setEmail("");
      setSenha("");
    })

    
  }

  const SolicitarSenha = (e) => {
    e.preventDefault()
    return alert("VOCE ESQUECEU A SENHA")
  }

    return (
        <div>
          <form>
            <h2 className='inputVal'>Email</h2>
            <input className="inputQ" value={email} type="email" placeholder="Escreva aqui..." required onChange={handleChangeEmail}></input>
            <h2 className='inputVal'>Senha</h2>
            <input className="inputQ" value={senha} type="password" placeholder="Escreva aqui..." reqired onChange={handleChangeSenha}></input>
            <div className="buttons">
                <button className="entrar" type="submit" onClick={Validar}>Entrar</button>
                <button className="esqueci" onClick={SolicitarSenha}>Esqueci a Senha</button>
            </div>
            <div className='cadastroContainer'>
              <p>Não tem uma conta? <a>Cadastre-se.</a></p>
            </div>
          </form>

        </div>
    )
  }


  return (
    <div className="App">
      <h1>Login</h1>
      <Form />
    </div>
  );
}

export default App;