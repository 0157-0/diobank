Projeto desenvolvido com os fundamentos de Typescript

Este projeto faz parte do módulo básico 🌱 do curso "Formação FullStack Typescript" oferecido pela plataforma Digital Innovation One - DIO. Nesta etapa inicial desenvolvemos o escopo básico de um Banco Digital, o dioBank. Nessa fase, as suas funções fundamentais, como sacar, depositar e validações foram desenvolvidas explorando conceitos como programação orientada a objetos, herança e polimorfismo.


Currículo do curso
Fundamentos do Typescript;
Introdução ao React com Typescript;
Conceitos avançados de React com Typescript;
Introdução ao Node.js com Typescript;
Conceitos avançados de Node.js com Typescript;

Stack
 Typescript



Como rodar o projeto ⚙️ 🧪

Clone o repositório;

Instalar node.js >= 16.15.1 LTS

Instalar globalmente o Typescript >= 4.7.1  npm i -g typescript

inicializar node npm init --y

4.1. Instalar dependências de desenvolvimento:  npm i -D typescript  npm i -D ts-node-dev

inicializar o typescript:  npx tsc --init

adicionar ao arquivo package.json , objeto scripts :  "dev": "ts-node-dev app.ts"

Executar app  npm run dev




Desafios desta etapa 🎯

 Implementar os métodos (deposit) e saque (withdraw) na classe DioAccount;

Os valores dos saldos devem ser alterados de acordo com o valor informado para depósito;
Apenas contas com o status true e saldo (balance) maior ou igual que o valor solicitado podem fazer saques;

 Implementar o método de empréstimo (getLoan) na classe CompanyAccount;

Os valores do saldo devem ser acrescidos de acordo com o valor informado para empréstimo;
Apenas contas com status true podem fazer empréstimo;

 Criar um novo tipo de conta a partir da DioAccount;

Esta conta não deve receber novos atributos;
A conta deverá ter um método de depósito que acresce 10 a mais ao valor informado para depósito. Ex.: um depósito de R$ 100,00 será de R$ 110,00 no final

 Todos os atributos de qualquer conta devem ser privados;

 OS atributos name e accountNumber não podem ser alterados internamente ou externamente;

 Criar instâncias para cada um dos tipos de conta no app.ts e executar os métodos possíveis;
