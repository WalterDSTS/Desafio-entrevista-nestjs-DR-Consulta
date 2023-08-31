<p align="center">
  <a href="https://www.abcdacomunicacao.com.br/wp-content/uploads/drconsulta_logo-baixa-1-1024x242.png" target="blank"><img src="https://www.abcdacomunicacao.com.br/wp-content/uploads/drconsulta_logo-baixa-1-1024x242.png" width="200" alt="Nest Logo" /></a>
</p>

# ✅ API desafio Dr. Consulta

Esta API tem o intuito de gerenciar um estacionamento, registrando o momento de entrada e saída dos veículos no estabelecimento. Este desafio me foi proposto pela equipe técnica do Dr. Consulta, onde minhas habilidades com programação back-end serão avaliadas.

## ⚙️ Tecnologias
- [NestJS](https://docs.nestjs.com/): O projeto foi criado utilizando NestJS, um framework de alta produtividade e escalabilidade que fornece uma CLI própria. Nos bastidores, o Nest faz uso de estruturas robustas de servidor HTTP como o Express (o padrão) e, opcionalmente, pode ser configurado para usar o Fastify também!.
O Nest fornece um nível de abstração acima dessas estruturas comuns do Node.js (Express/Fastify), mas também expõe suas APIs diretamente ao desenvolvedor. Isso dá aos desenvolvedores a liberdade de usar uma infinidade de módulos de terceiros disponíveis para a plataforma subjacente.

- [TypeORM](https://typeorm.io/): TypeORM é um ORM que pode ser executado em muitas plataformas, podendo ser usado com TypeScript ou JavaScript. Seu objetivo é sempre oferecer suporte aos recursos JavaScript mais recentes e fornecer recursos adicionais que ajudem você a desenvolver qualquer tipo de aplicativo que use bancos de dados - desde pequenos aplicativos com algumas tabelas até aplicativos corporativos de grande escala com vários bancos de dados.

- [MySQL](https://www.mysql.com/): O MySQL é um sistema gerenciador de banco de dados relacional de código aberto usado na maioria das aplicações gratuitas para gerir suas bases de dados. O MySQL utiliza a linguagem SQL (Structure Query Language – Linguagem de Consulta Estruturada), que é a linguagem mais popular para inserir, acessar e gerenciar o conteúdo armazenado num banco de dados.

- [Swagger](https://swagger.io/): Uma aplicação open source que auxilia desenvolvedores nos processos de definir, criar, documentar e consumir APIs REST.  Em suma, o Swagger visa padronizar este tipo de integração, descrevendo os recursos que uma API deve possuir, como endpoints, dados recebidos, dados retornados, códigos HTTP e métodos de autenticação, entre outros. Ele simplifica o processo de escrever APIs, especificando os padrões e fornecendo as ferramentas necessárias para escrever APIs seguras, com alto desempenho e escaláveis.

##  🛠️ Instalando o Projeto
### 💻 Programas necessários
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en)
- [Docker](https://www.docker.com/)

### ⌨️ Instalando as dependências
Execute o seguinte comando no terminal (certifique-se de estar no folder do projeto). Este comando irá instalar todas as dependências que o projeto necessita para funcionar:

```bash
$ yarn install
```

## ⌨️ Rodando o projeto
Comando que roda a aplicação e fornece o acesso as EndPoints (normalmente, a URL utilizada pelo NestJS é a http://localhost:3000):
```bash
# development
$ yarn start
```
Comando que roda a aplicação e observa por quaisquer alterações feitas no projeto, reiniciando o mesmo para que as alterações fiquem disponíveis;
```bash
# watch mode
$ yarn start:dev
```

Comando que roda a aplicação com base nos arquivos ja compilados:
```bash
# production mode
$ yarn start:prod
```

## 📖 Documentação técnica
Para visualizar a documentação técnica do projeto, basta rodar o mesmo com algum dos comandos citados acima e acessar a URL http://localhost:3000/api

## ⌨️ Comandos TypeORM
Gera as migrations de forma automática, com base em todas as alterações feitas nas entidades que ainda não foram implementadas no banco de dados:
```bash
$ yarn migration:generate ./path_to_migrations_folder
```

Gera uma migration em branco, dando a liberdade de escreve-las:
```bash
$ yarn migration:create ./path_to_migrations_folder
```
Roda todas as migrations criadas (apenas se não tiverem sido executadas anteriomente):
```bash
$ yarn migration:run
```

Reverte as alterações de uma migration:
```bash
$ yarn migration:revert ./path_of_migration_to_revert
```
---
