let user = []   //Criar variavel para armazenar usuários

function* gerarId(){  //Funçao para gerar id 
  let id = 0
  while(true){
    yield id++
  }
}                            


let criarID = gerarId() //variavel para guardar a função

function addUser(nome, cpf, email){
  let newUser = {
    id:criarID.next().value,
    nome: nome,
    cpf: cpf,
    email: email
  }

  let existeUser = false //uma variavel boolean que vai setar se já existe ou não o user
  for(let buscar of user){
    if(buscar.id == newUser.id || buscar.cpf == newUser.cpf){
      existeUser = true;
      console.log("Usuário já existe");
      break
    }
  }

  if(existeUser == false){
    user.push(newUser)
  }

}


addUser("gabriel Monaco", "42990462856", "gabriel.monaco@tshield.com.br") 
addUser("gabriel Monaco", "123", "gabriel.monaco@tshield.com.br") 


console.log(user)