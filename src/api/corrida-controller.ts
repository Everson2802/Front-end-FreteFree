import {url} from "./config"

interface IUser {
    datapedido: number
    distanciafinal: string
    distanciainicial: string
    enderecodestino: string
    enderecoorigem: string
    formaPagamento: string []
    horapedido: number
    id: string
    lgdestino: string 
    lgorigem: string
    ltdestino: string 
    ltorigem: string 
    valorinicial: number
  }

export function cadastrarCorrida (user:IUser) {
    
    const {datapedido, distanciafinal, distanciainicial, enderecodestino, enderecoorigem, formaPagamento, horapedido,
    id, lgdestino, lgorigem, ltdestino, ltorigem, valorinicial} = user
    
    const body = JSON.stringify({datapedido, distanciafinal, distanciainicial, enderecodestino, enderecoorigem, formaPagamento, horapedido,
        id, lgdestino, lgorigem, ltdestino, ltorigem, valorinicial})

    fetch (url + "/Inicial/Corrida/{id}/Ride",{
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
  
  export function procurarCorrida (user:IUser) {
  
    const {id} = user
             
    fetch (url + "/free/Inicial/Corrida/Ride/",{
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
        }
       
      },).then (response => {
          console.log(response)
      })
   
    } 

    interface IUser {

        distancia: number 
        
    }
    
    export function calcularCorrida (user:IUser) {
        
        const {distancia} = user
        
        const body = JSON.stringify({distancia})
    
        fetch (url + "/free/Inicial/Corrida/RideCost",{
            method: 'POST',
            headers: {
              "Content-Type": 'application/json',
            },
            body, 
          },).then (response => {
              console.log(response)
          })
       
    
    }