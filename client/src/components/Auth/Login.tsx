import "./Auth.scss";
import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../context/userContext";

const Login: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [lastname, setLastName] = useState<string>('')
  const [surname, setSurName] = useState<string>('')
  const store = useContext(Context)
  // console.log(useContext(Context))

  // useEffect(() => {
  //   if(localStorage.getItem('token')) {
  //     store.checkAuth()
  //   }
  // })

  return (
    <div>
      <input 
        type="text"
        onChange={e => setEmail(e.target.value)}
        value={email}
        placeholder="Email" 
      />
      <input 
        type="text"
        onChange={e => setPassword(e.target.value)} 
        value={password}
      />
      <button onClick={() => store.login(email, password)}>login</button>
      <hr />
      <input type="text" onChange={e => setName(e.target.value)}  value={name}/>
      <input type="text" onChange={e => setLastName(e.target.value)}  value={lastname}/>
      <input type="text" onChange={e => setSurName(e.target.value)} value={surname}/>
      <button onClick={() => store.registration(email, password, name, lastname, surname)}>registrarion</button>
    </div>
    

  )
};

export default Login
