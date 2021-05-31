// Crie um objeto que receba ao menos três propriedades sobre você.

// Adicione uma nova propriedade sem alterar seu objeto inicial.

// Remova uma propriedade desse objeto.

//Mostre no console todas as propriedades desse objeto.

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.



let sobre = {
   nome: "João",
   idade: 21,
   time: "Flamengo",
}
sobre.cidade = "Niterói"
delete sobre.idade

console.log(sobre)





let cadastro = [ 
    {
      nome: "João",
      idade: 21,
      telefone: "21 999999999",
      amigos: ["João","Artur","Pedro","Cesar","Tati"]

    },
    {
       nome: "Artur",
       idade: 21,
       telefone: "21 988888888",
       amigos: ["João","Artur","Pedro","Cesar","Tati"]

    },
    {
       nome: "Pedro",
       idade: 21,
       telefone: "21 977777777",
       amigos: ["João","Artur","Pedro","Cesar","Tati"]
    },
    {
        nome: "Cesar",
        idade: 21,
        telefone: "21 966666666",
        amigos: ["João","Artur","Pedro","Cesar","Tati"]
 
     },
     {
        nome: "julio",
        idade: 21,
        telefone: "21 955555555",
        amigos: ["João","Artur","Pedro","Cesar","Tati"]
        
     },
    ]
   
    
    console.log(cadastro[0].amigos[1])
    console.log(cadastro[3].amigos[2])
    console.log(cadastro[1].amigos[3])
    console.log(cadastro[2].amigos[0])
    console.log(cadastro[2].amigos[4])
   
