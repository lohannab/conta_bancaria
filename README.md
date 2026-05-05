# 🏦 Capítulo 5: Projeto Conta Bancária - O Despertar da POO

"Sistemas robustos não são feitos apenas de lógica, mas de estruturas inteligentes. Este projeto é a materialização dos pilares da Programação Orientada a Objetos."

Este é um projeto integrador desenvolvido durante o bootcamp da **Generation Brasil**. Ele simula o backend de um sistema bancário, onde o foco principal foi a transição da lógica procedural para a **Programação Orientada a Objetos (POO)** utilizando **TypeScript**.

---

## 📖 A HISTÓRIA & GIT FLOW

Diferente dos capítulos anteriores, este projeto foi construído seguindo um fluxo de trabalho profissional. O desenvolvimento foi dividido em **branches**, simulando o dia a dia de uma equipe de software. Cada etapa permitiu focar num pilar diferente da engenharia de software:

* **Branch `01_Menu`:** Estruturação da interface de usuário e lógica de navegação.
* **Branch `02_Classes`:** Implementação da classe base `Conta` (Abstração e Encapsulamento).
* **Branch `03_Herança`:** Especializações para `ContaCorrente` e `ContaPoupanca`.
* **Branch `04_Repository`:** Aplicação do padrão *Repository* para gestão de dados em memória.

---

## 💻 O QUE O SISTEMA FAZ?

O sistema é um CRUD completo para gestão de contas bancárias operado via terminal:
* **Criação de Contas:** Diferenciação entre contas corrente e poupança com atributos específicos.
* **Listagem e Busca:** Localização de contas por número ou visualização de todos os correntistas.
* **Operações Financeiras:** Lógica de Saque, Depósito e Transferência entre contas (com validações de saldo).
* **UX no Terminal:** Interface visualmente organizada com o uso de cores ANSI (`Colors.ts`) para melhor legibilidade.

---

## 🛠️ TOOLSTACK

* **Linguagem:** TypeScript (100% tipado).
* **Paradigma:** Programação Orientada a Objetos (POO).
* **Versionamento:** Git (Branching strategy).
* **Dependências:** `readline-sync` para interação e `tsconfig` configurado para `esnext`.

---

## 🧪 VALIDAÇÃO DO INSTRUTOR

Este repositório é o canal oficial de entrega para validação técnica das competências de POO e organização de código. 

> **Nota:** O código reflete a evolução constante das branches até o `merge` final, demonstrando o domínio do ciclo de vida de desenvolvimento de software.

---
💻 Desenvolvido por **Lohanna B.**
"Tech, design and purposeful solutions"
