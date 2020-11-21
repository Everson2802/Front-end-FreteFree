import {url} from "./config"

interface IUser {
    
        codcv: string
        formapagamento: string
        id: string
        nomenocartao: string
        numerocartao: string,
        validade: string
      }

export function cadastrarPagamentos (user:IUser) {
    
    const {codcv, formapagamento, id, nomenocartao, numerocartao, validade} = user
    
    const body = JSON.stringify({codcv, formapagamento, id, nomenocartao, numerocartao, validade})

    fetch (url + "/Inicial/Billing/{id}",{
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
  
  export function listarPagamentos (user:IUser) {
  
    const {id} = user
             
    fetch (url + "/Inicial/Billing/{id}",{
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
        }
       
      },).then (response => {
          console.log(response)
      })
   
    } 

    
interface IUser {

    ativo: true
    id: string

  }
  
  export function atualizaPagamento (user:IUser) {
  
    const {ativo, id} = user
             
    fetch (url + "/Inicial/Billing/{id}",{
        method: 'PUT',
        headers: {
          "Content-Type": 'application/json',
        }
       
      },).then (response => {
          console.log(response)
      })
   
    } 

    interface IUser {

        ativo: true
        id: string
    
      }
      
      export function apagarPagamentos (user:IUser) {
      
        const {ativo, id} = user
                 
        fetch (url + "/Inicial/Billing/{id}",{
            method: 'DELETE',
            headers: {
              "Content-Type": 'application/json',
            }
           
          },).then (response => {
              console.log(response)
          })
       
        } 


 