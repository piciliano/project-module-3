# Documentação

Tecnologias Utilizadas:

1. Node.js
2. MongoDB
3. Express
4. npm
5. Dotenv
6. javaScript
7. TypeScript
8. Multer, dentre outras...

Rotas públicas:

Criar usuário:white_check_mark:<br />
Autenticar:white_check_mark:<br />

Rotas privadas:

Atualizar um usuário:white_check_mark:<br />
Excluir um usuário:white_check_mark:<br />
Criar um paciente atrelado a um usuário:white_check_mark:<br />
Buscar todos os pacientes de um usuário:white_check_mark:<br />
Buscar um paciente pelo identificador(ID):white_check_mark:<br />
Atualizar as informações de um paciente:white_check_mark:<br />
Criar uma timeline atrelado a um paciente:white_check_mark:<br />
Buscar todos as timelines de um paciente:white_check_mark:<br />
Buscar uma timeline pelo identificador(ID):white_check_mark:<br />
Atualizar as informações de uma timeline:white_check_mark:<br />
Criar uma ocorrência atrelada a uma timeline:white_check_mark:<br />
Buscar todos as ocorrências de uma timeline:white_check_mark:<br />
Buscar uma ocorrência pelo identificador(ID):white_check_mark:<br />
Atualizar as informações de uma ocorrência:white_check_mark:<br />
Remover uma ocorrência pelo identificador(ID):white_check_mark:<br />
Remover um paciente pelo identificador(ID):white_check_mark:<br />
Remover uma timeline pelo identificador(ID):white_check_mark:<br />

Funcionalidade deletar em cascata, funcional.

Entidade "Users":

Nome | Tipo |	Obrigatório |	Único |	Descrição
| --- | --- | --- | --- | --- |
name	| String |	Sim	| Não |	Nome  do  usuário
email |	String |	Sim |	Sim |	Endereço de e-mail do  usuário
password |	String |	Sim |	Não |	Senha do usuário (criptografada)
photo |	ObjectId |	Não |	Não |	ID da imagem de perfil
createdAt |	Date |	Default |	Não |	Data da criação do registro
updatedAt |	Date |	Default |	Não |	Data da atualizacão do registro

Entidade "Patient":

Nome |	Tipo |	Obrigatório |	Único |	Descrição
| --- | --- | --- | --- | --- |
user |	ObjectId |	Sim |	Não |	ID do usuário proprietário do registro
timelines |	ObjectId[] |	Sim |	Não |	IDs das timelines do paciente
name |	String |	Sim |	Não |	Nome  do paciente
contact |	String |	Sim |	Não |	Contato do paciente(TelefoneE-mail)
birthdate |	Date |	Sim |	Não |	Data de nascimento do paciente
demands |	String |	Não |	Não |	Demandas do paciente para tratamento
personalAnnotations |	String |	Não |	Não |	Anotações pessoais sobre o paciente
createdAt |	Date |	Default |	Não |	Data da criação do registro
updatedAt |	Date |	Default |	Não |	Data da atualizacão do registro

Entidade "Timeline":

Nome |	Tipo |	Obrigatório |	Único |	Descrição
| --- | --- | --- | --- | --- |
name |	String |	Sim |	Não |	Nome da timeline
occurrences |	ObjectId[] |	Sim |	Não |	IDs das ocorrências da timeline
createdAt |	Date |	Default |	Não |	Data da criação do registro
updatedAt |	Date |	Default |	Não |	Data da atualizacão do registro

Entidade "Occurrence":

Nome |	Tipo |	Obrigatório |	Único |	Descrição
| --- | --- | --- | --- | --- |
name |	String |	Sim |	Não |	Nome da ocorrência
content |	String |	Sim |	Não |	Descricão da ocorrência
kind |	String |	Sim |	Não |	Sessão ou Fato Relevante
files |	ObjectId[] |	Sim |	Não |	IDs dos arquivos
createdAt |	Date |	Default |	Não |	Data da criação do registro
updatedAt |	Date |	Default |	Não |	Data da atualizacão do registro


Para rodar o projeto, basta clonar o repositorio do git, usar o comando npm i, para instalar as dependências essenciais do projeto, conforme expecificado no arquivo package.json, é importante ter o Node.js instalado na máquina.<br />
Será necessário Definir variávies de ambiente, para definir uma variável de ambiente, é necessário criar um arquivo .env um arquivo .env.example pode ser encontrado no diretório principal do projeto com as informações para auxiliar na etapa, sendo elas:<br />

URL: endereço do bando de dados MongoDB<br />
PORT: número da porta em que o servidor express será lançado<br />
SECRE_KEY: chave privativa utilizada com a biblioteca JWT para tokens de autenticação.<br />

em seguida, um npm run dev irá rodar o projeto.<br />



