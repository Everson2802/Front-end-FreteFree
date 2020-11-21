import {url} from "./config"

interface IUser {
  celular: string
  cnh: string
  documento: string
  email: string
  nome: string
  password: string
  role: string []
  sobrenome: string
}

export function cadastroDeUsuario (user:IUser) {
    
    const {celular, cnh, documento, email, nome, password, role, sobrenome} = user
    
    const body = JSON.stringify({celular, cnh, documento, email, nome, password, role, sobrenome})

    fetch (url + "/free/Inicial/Auth/Signup",{
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body, 
      },).then (response => {
          console.log(response)
      })
   

}

interface IUser {
  password: string
  username: string 

 }

export function autenticaUsuarios (user:IUser) {
  
  const {password, username} = user
  
  const body = JSON.stringify({password, username})

  fetch (url + "/free/Inicial/Auth/Signin",{
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body, 
    },).then (response => {
        console.log(response)
    })
 
  } 

  interface IUser {
    codigo: string
    email: string 
  
   }
  
  export function validar (user:IUser) {
    
    const {codigo, email} = user
    
    const body = JSON.stringify({codigo, email})
  
    fetch (url + "/free/Inicial/Auth/Validar",{
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body, 
      },).then (response => {
          console.log(response)
      })
   
    } 

    interface IUser {
      id: string
    }
    
    export function excluirUmUsuario (user:IUser) {
    
      const {id} = user
               
      fetch (url + "/free/Inicial/Auth/signup/nvalidar/",{
          method: 'GET',
          headers: {
            "Content-Type": 'application/json',
          }
         
        },).then (response => {
            console.log(response)
        })
     
      } 
