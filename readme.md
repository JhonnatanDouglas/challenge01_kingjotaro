## Code Challenge: Categorização - Solução Completa

### Descrição

#### Este repositório contém a solução para o desafio de categorização de produtos de supermercado. O objetivo foi criar um algoritmo inteligente capaz de identificar e agrupar produtos semelhantes, mesmo com pequenas variações nos seus nomes ou descrições. A solução foi desenvolvida utilizando `Node.js`.

#### Como o código Funciona?

- `Passo 1`: **Função de Normalização do Título**

  - O algoritmo começa com a normalização dos títulos dos produtos. Essa etapa transforma os títulos para minúsculas e organiza as palavras em ordem alfabética, para garantir que variações na ordem das palavras ou diferenças de capitalização não impactem a categorização.

- `Passo 2`: **Função de Identificação de Categorias**

  - A função findCategory compara o título normalizado de um produto com os títulos normalizados já categorizados. Caso o produto pertença a uma categoria existente, ele será adicionado à categoria correspondente.

- `Passo 3`: **Função de Classificação de Produtos**
  - Os produtos são analisados e classificados em categorias. A função productClassifier percorre a lista de produtos e agrupa aqueles que pertencem à mesma categoria, considerando as variações de título.

## Como executar:

`Requisitos`: Node.js

### Instruções:

1. Clone o repositório para sua máquina local:

```
git clone <link-do-repositório>
```

2. Acesse a pasta do projeto:

```
cd <nome-do-repositório>
```

3. Descomente o `console.log(result);` na linha 52 no arquivo `classifiedProduct.js`.

4. Execute o script para classificar os produtos:

```
node classifiedProduct.js
```

5. **O resultado será impresso no terminal, contendo as categorias e seus respectivos produtos**.

#

### Readme Original do Desafio...

## Code Challenge: Categorização

### Contexto

Você está desenvolvendo um sistema para um comparador de preços que precisa identificar quando diferentes supermercados vendem o mesmo produto, mesmo quando os nomes têm pequenas variações.

### Objetivo

Desenvolver um algoritmo inteligente que categorize produtos de supermercado.

1. **Produtos equivalentes de diferentes supermercados, mesmo com variações na descrição**

   - Exemplo: "Arroz Branco Tio João 5kg" e "Arroz Tio João Branco 5kg" são o mesmo produto.

2. **Produtos similares mas distintos**

   - Exemplo: "Arroz Branco Tio João 5kg" e "Arroz Integral Tio João 5kg" são produtos diferentes.

3. **Produtos com tamanhos/quantidades diferentes**
   - Exemplo: "Leite Integral Italac 1L" e "Leite Integral Italac 2L" devem ser categorizados separadamente.

## Requisitos Técnicos

### Obrigatórios:

- NodeJS

- Implementar uma função que leia o json data01 e retorne um json com os dados categorizados e contados.
- A função deve ser capaz de identificar produtos equivalentes mesmo com:
  - Ordem das palavras trocadas.
  - Pequenas variações de descrição.
  - Diferenças de capitalização.
- A função deve separar produtos com:

  - Tipos diferentes (integral vs. desnatado).
  - Marcas diferentes (Italac vs. Piracanjuba).
  - Tamanhos/quantidades diferentes (1L vs. 2L).

- O resultado deve incluir:
  - Nome da categoria.
  - Contagem de produtos.
  - Lista de produtos na categoria.

## Exemplo

### Entrada

```json
[
  {
    "id": 1,
    "title": "Leite Integral Piracanjuba 1L",
    "supermarket": "Supermercado A"
  },
  {
    "id": 2,
    "title": "Leite Piracanjuba Integral 1L",
    "supermarket": "Supermercado B"
  },
  {
    "id": 3,
    "title": "Leite Integral Italac 1L",
    "supermarket": "Supermercado A"
  },
  {
    "id": 4,
    "title": "Leite Italac Integral 1L",
    "supermarket": "Supermercado C"
  },
  {
    "id": 5,
    "title": "Leite Parmalat Integral 1L",
    "supermarket": "Supermercado D"
  },
  {
    "id": 6,
    "title": "Leite Desnatado Piracanjuba 1L",
    "supermarket": "Supermercado A"
  },
  {
    "id": 7,
    "title": "Piracanjuba Leite Desnatado 1L",
    "supermarket": "Supermercado B"
  },
  {
    "id": 8,
    "title": "Leite Semi-Desnatado Piracanjuba 1L",
    "supermarket": "Supermercado A"
  },
  {
    "id": 9,
    "title": "Leite Piracanjuba Semi Desnatado 1 Litro",
    "supermarket": "Supermercado C"
  },
  {
    "id": 10,
    "title": "Arroz Branco Tio João 5kg",
    "supermarket": "Supermercado A"
  },
  {
    "id": 11,
    "title": "Arroz Tio João Branco 5kg",
    "supermarket": "Supermercado B"
  },
  {
    "id": 12,
    "title": "Arroz Tio João Integral 5kg",
    "supermarket": "Supermercado A"
  },
  {
    "id": 13,
    "title": "Feijão Carioca Camil 1kg",
    "supermarket": "Supermercado A"
  },
  {
    "id": 14,
    "title": "Feijão Camil Tipo Carioca 1kg",
    "supermarket": "Supermercado C"
  },
  {
    "id": 15,
    "title": "Feijao Carioca Camil 1 Quilo",
    "supermarket": "Supermercado D"
  }
]
```

## Saída Esperada

```json
[
  {
    "category": "Leite Integral Piracanjuba 1L",
    "count": 2,
    "products": [
      {
        "title": "Leite Integral Piracanjuba 1L",
        "supermarket": "Supermercado A"
      },
      {
        "title": "Leite Piracanjuba Integral 1L",
        "supermarket": "Supermercado B"
      }
    ]
  },
  {
    "category": "Leite Integral Italac 1L",
    "count": 2,
    "products": [
      {
        "title": "Leite Integral Italac 1L",
        "supermarket": "Supermercado A"
      },
      {
        "title": "Leite Italac Integral 1L",
        "supermarket": "Supermercado C"
      }
    ]
  },
  {
    "category": "Leite Parmalat Integral 1L",
    "count": 1,
    "products": [
      {
        "title": "Leite Parmalat Integral 1L",
        "supermarket": "Supermercado D"
      }
    ]
  },
  {
    "category": "Leite Desnatado Piracanjuba 1L",
    "count": 2,
    "products": [
      {
        "title": "Leite Desnatado Piracanjuba 1L",
        "supermarket": "Supermercado A"
      },
      {
        "title": "Piracanjuba Leite Desnatado 1L",
        "supermarket": "Supermercado B"
      }
    ]
  },
  {
    "category": "Leite Semi-Desnatado Piracanjuba 1L",
    "count": 2,
    "products": [
      {
        "title": "Leite Semi-Desnatado Piracanjuba 1L",
        "supermarket": "Supermercado A"
      },
      {
        "title": "Leite Piracanjuba Semi Desnatado 1 Litro",
        "supermarket": "Supermercado C"
      }
    ]
  },
  {
    "category": "Arroz Branco Tio João 5kg",
    "count": 2,
    "products": [
      {
        "title": "Arroz Branco Tio João 5kg",
        "supermarket": "Supermercado A"
      },
      {
        "title": "Arroz Tio João Branco 5kg",
        "supermarket": "Supermercado B"
      }
    ]
  },
  {
    "category": "Arroz Tio João Integral 5kg",
    "count": 1,
    "products": [
      {
        "title": "Arroz Tio João Integral 5kg",
        "supermarket": "Supermercado A"
      }
    ]
  },
  {
    "category": "Feijão Carioca Camil 1kg",
    "count": 3,
    "products": [
      {
        "title": "Feijão Carioca Camil 1kg",
        "supermarket": "Supermercado A"
      },
      {
        "title": "Feijão Camil Tipo Carioca 1kg",
        "supermarket": "Supermercado C"
      },
      {
        "title": "Feijao Carioca Camil 1 Quilo",
        "supermarket": "Supermercado D"
      }
    ]
  }
]
```

Após conclusão enviar link do seu repo e info para o google [Forms](https://docs.google.com/forms/d/e/1FAIpQLSdm9_Ho3hiSuwBFZpdR-KrP6OKTHa670JGPhAlkM8lum86ZeQ/viewform?usp=dialog)

## Critérios de avaliação:

- Maior pontuação
- Melhor entendimento do código
- Entrega mais rapida
