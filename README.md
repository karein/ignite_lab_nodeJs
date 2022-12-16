# Aplicação
  Enviar notificações push

  **Infra**  
  - camada externa da aplicação: conexão com o banco e outras apis, rotas. Tudo que dá acesso ao mundo exterior
# Stack


# Anotações
  - **Strangler pattern:** se mantêm a aplicação antiga rodando, como por exemplo um monolito e , aos pouco vai-se retirando/desacoplando funcionalidades em serviços menores, nesse caso para transformar em microserviços.

  - **Nest** é baseado em typescript

  - **Decorator**: acoplar um funcioanmento dentro de uma outra variavel/função; usado com @, ex: @<*decorator*>

  - *SOLID*::**inversão de dependencia**: ao invez do controller buscar a dependencia/função em outro arquivo, ele recebe a funcionalidade como um paramentro quando é instanciado, geralmente atravez do constructor.

  - **Injeção de dependencia**: forma automatizar a inserção dessas dependencias no momento que as classes forem instanciadas. usado no module

  ## Prisma
  npm i prisma -D => CLI prisma
  npm i @prisma/client => client usado para se conectar ao banco
  npx prisma migrate dev => criar a tabela; cria uma nova migration
  npx prisma studio => interfacec para visualisar o banco


  No prisma se define uma primary key adicionando um @id  

  @@index => indice. Referência para uma informação que está em outro serviço. Como se fosse uma chave estrnageira. 

  migration => é um tipo de controle de versão
  ## Microserviço
  Um banco de dados para cada aplicação.
  cada banco salva somente as informações nessesárias para o serviço em questão.

  ## Mappers
  desaclopa código para ser reaproveitado, e esão associados com cada camada

  ## factory pattern
   função que retorna um objeto.  
   usada para abstrair criação de objetos que são repetidos

   ## Kafka
  ### Producers
  Envia a mensagem 
  ### Cosumers
  Recebe a mensagem.  
  Cada consumers buscam as novas mensagens.  
  ### Topics
  funciona como um banco de dados.  
  Cada topico é uam "tabela"

