### API de Dados Ambientais'

Uma API RESTful que fornece dados sobre questões ambientais como desmatamento, qualidade do ar e pegada de carbono, estruturada seguindo o padrão MVC (Model-View-Controller).

## 📋 Sumário

- [Problema Abordado](#problema-abordado)
- [Solução Proposta](#solução-proposta)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Endpoints da API](#endpoints-da-api)
- [Padrão MVC](#padrão-mvc)
- [Exemplos de Uso](#exemplos-de-uso)
- [Contribuição](#contribuição)
- [Licença](#licença)


## 🌍 Problema Abordado

O projeto aborda a falta de acesso fácil a dados ambientais para desenvolvedores que desejam criar aplicações focadas em conscientização ambiental. Muitas vezes, esses dados estão dispersos em diferentes fontes ou em formatos difíceis de utilizar, o que dificulta o desenvolvimento de soluções tecnológicas para problemas ambientais.

## 💡 Solução Proposta

Uma API que centraliza e padroniza dados ambientais importantes, tornando-os acessíveis para desenvolvedores através de endpoints simples e bem documentados. A API fornece:

- Dados sobre desmatamento na Amazônia
- Índices de qualidade do ar em grandes cidades brasileiras
- Calculadora de pegada de carbono para diferentes atividades


Todos os dados são fornecidos em formato JSON padronizado, facilitando a integração com aplicações front-end.

## 🏗️ Estrutura do Projeto

O projeto segue o padrão de arquitetura MVC (Model-View-Controller), com uma clara separação de responsabilidades:

```plaintext
api-dados-ambientais/
├── server.js                     # Arquivo principal para inicializar o servidor
├── package.json                  # Arquivo de configuração do npm (pacotes, scripts, dependências)
├── logs/                          # Pasta para armazenar logs gerados pela aplicação
├── src/                           # Pasta que contém o código-fonte da API
│   ├── routes/                    # Pasta contendo as rotas da API
│   │   └── index.js               # Arquivo principal de rotas, onde são definidas as rotas da API
│   ├── controllers/               # Pasta contendo os controladores para cada recurso da API
│   │   ├── deforestationController.js  # Controlador para dados de desmatamento
│   │   ├── airQualityController.js    # Controlador para dados de qualidade do ar
│   │   ├── carbonFootprintController.js # Controlador para dados de pegada de carbono
│   │   └── docsController.js        # Controlador para fornecer documentação da API
│   ├── models/                    # Pasta contendo os modelos de dados da API
│   │   ├── deforestationModel.js   # Modelo para dados de desmatamento
│   │   ├── airQualityModel.js     # Modelo para dados de qualidade do ar
│   │   └── carbonFootprintModel.js # Modelo para dados de pegada de carbono
│   ├── views/                     # Pasta contendo as views para formatação das respostas
│   │   ├── deforestationView.js   # View para formatar respostas de desmatamento
│   │   ├── airQualityView.js      # View para formatar respostas de qualidade do ar
│   │   ├── carbonFootprintView.js # View para formatar respostas de pegada de carbono
│   │   ├── docsView.js            # View para formatar a documentação da API
│   │   └── homeView.js            # View para formatar a resposta da página inicial
│   ├── middlewares/               # Pasta contendo middlewares para a API
│   │   └── loggerMiddleware.js    # Middleware para registrar logs das requisições e respostas
│   ├── config/                    # Pasta para configurações da aplicação
│   │   └── config.js              # Arquivo de configurações gerais (como variáveis de ambiente)
│   └── utils/                     # Pasta para utilitários auxiliares
│       └── logger.js              # Utilitário de logger para gerenciamento de logs
└── README.md                      # Arquivo de documentação do projeto
```
### Documentação do Middleware de Logs

Vou adicionar a documentação do middleware de logs ao README existente. Aqui está a seção que você pode adicionar:

## 📊 Sistema de Logs

A API inclui um sistema de logs abrangente que registra informações detalhadas sobre cada requisição e resposta, facilitando o monitoramento, depuração e análise de uso.

### Estrutura do Sistema de Logs

```plaintext
api-dados-ambientais/
├── ...
├── logs/                    # Pasta para armazenar arquivos de log
├── src/
│   ├── ...
│   ├── middlewares/         # Middlewares da aplicação
│   │   └── loggerMiddleware.js  # Middleware de logs
│   ├── ...
│   └── utils/
│       └── logger.js        # Utilitário para gerenciamento de logs
└── ...
```

### Funcionalidades do Sistema de Logs

- **Rastreamento de Requisições**: Cada requisição recebe um ID único para facilitar o rastreamento
- **Métricas de Performance**: Registra o tempo de resposta de cada requisição
- **Logs Detalhados**: Registra método HTTP, URL, IP, User-Agent e outros detalhes
- **Tratamento de Erros**: Captura e registra erros de forma estruturada
- **Formatação Consistente**: Todas as entradas de log seguem um formato padronizado


### Exemplo de Log de Requisição

```plaintext
[INFO] 2023-04-15T14:30:00.000Z: Requisição recebida: GET /api/deforestation {"id":"lq7b2xABC","method":"GET","url":"/api/deforestation","ip":"::1","userAgent":"Mozilla/5.0...","timestamp":"2023-04-15T14:30:00.000Z"}
```

### Exemplo de Log de Resposta

```plaintext
[INFO] 2023-04-15T14:30:00.050Z: Requisição finalizada: GET /api/deforestation - Status: 200 - Tempo: 50ms {"id":"lq7b2xABC","method":"GET","url":"/api/deforestation","statusCode":200,"responseTime":"50ms","timestamp":"2023-04-15T14:30:00.050Z"}
```

### Níveis de Log

O sistema utiliza quatro níveis de log:

1. **INFO**: Informações gerais sobre o funcionamento da aplicação
2. **WARN**: Avisos que não impedem o funcionamento, mas merecem atenção
3. **ERROR**: Erros que afetam o funcionamento normal da aplicação
4. **DEBUG**: Informações detalhadas úteis para depuração (apenas em ambiente de desenvolvimento)


### Armazenamento de Logs

Os logs são exibidos no console e, opcionalmente, podem ser armazenados em arquivos:

- `logs/combined.log`: Contém todos os logs da aplicação
- `logs/error.log`: Contém apenas logs de erro


### Configuração do Sistema de Logs

O sistema de logs pode ser configurado através de variáveis de ambiente:

- `NODE_ENV`: Define o ambiente (development/production)
- `LOG_LEVEL`: Define o nível mínimo de logs (info/warn/error/debug)


### Benefícios do Sistema de Logs

1. **Monitoramento em Tempo Real**: Acompanhe o uso da API em tempo real
2. **Depuração Facilitada**: Identifique problemas rapidamente com logs detalhados
3. **Análise de Uso**: Entenda como a API está sendo utilizada
4. **Segurança**: Detecte padrões suspeitos de acesso
5. **Otimização de Performance**: Identifique endpoints lentos que precisam ser otimizados


### Implementação do Middleware de Logs

Para implementar o middleware de logs, foram criados dois componentes principais:

1. **loggerMiddleware.js**: Intercepta requisições e respostas para registrar logs
2. **logger.js**: Utilitário que fornece métodos para registrar diferentes tipos de logs


O middleware é aplicado globalmente na aplicação, garantindo que todas as requisições sejam registradas.




## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor
- **Express.js**: Framework web para criação de APIs
- **JavaScript**: Linguagem de programação
- **Padrão MVC**: Arquitetura de software que separa a aplicação em três componentes principais
- **Nodemon**: Ferramenta para desenvolvimento que reinicia automaticamente o servidor


## ⚙️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)


### Passos para Instalação

1. Clone o repositório:

```shellscript
git clone https://github.com/seu-usuario/api-dados-ambientais.git
```


2. Entre no diretório do projeto:

```shellscript
cd api-dados-ambientais
```


3. Instale as dependências:

```shellscript
npm install
```


4. Inicie o servidor:

```shellscript
# Para ambiente de produção
npm start

# Para ambiente de desenvolvimento (com auto-reload)
npm run dev
```


5. O servidor estará rodando em `http://localhost:3000`


## 🔌 Endpoints da API

### GET /

Retorna informações básicas sobre a API e lista os endpoints disponíveis.

**Exemplo de Resposta:**

```json
{
  "message": "Bem-vindo à API de Dados Ambientais",
  "endpoints": [
    "/api/deforestation",
    "/api/air-quality",
    "/api/carbon-footprint"
  ],
  "documentation": "/api/docs",
  "timestamp": "2023-04-15T14:30:00Z",
  "status": "success"
}
```

### GET /api/docs

Fornece documentação completa da API em formato JSON.

### GET /api/deforestation

Fornece dados sobre desmatamento na Amazônia.

**Parâmetros:**

- `year` (opcional) - Filtra os dados por ano (ex: 2022)
- `region` (opcional) - Filtra os dados por região (ex: norte, nordeste)


**Exemplo de Resposta:**

```json
{
  "data": [
    {
      "year": 2022,
      "region": "norte",
      "area_km2": 10100,
      "percent_change": 8.5
    }
  ],
  "total_records": 1,
  "source": "INPE - Instituto Nacional de Pesquisas Espaciais",
  "timestamp": "2023-04-15T14:30:00Z",
  "status": "success"
}
```

### GET /api/air-quality

Fornece índices de qualidade do ar em grandes cidades.

**Parâmetros:**

- `city` (opcional) - Filtra os dados por cidade (ex: sao-paulo, rio-de-janeiro)


**Exemplo de Resposta:**

```json
{
  "data": [
    {
      "city": "São Paulo",
      "aqi": 65,
      "category": "Moderado",
      "main_pollutant": "PM2.5",
      "updated_at": "2023-04-15T14:30:00Z"
    }
  ],
  "total_records": 1,
  "source": "Qualidade do Ar Brasil",
  "timestamp": "2023-04-15T14:30:00Z",
  "status": "success"
}
```

### GET /api/carbon-footprint

Calcula a pegada de carbono por atividade.

**Parâmetros:**

- `activity` (obrigatório) - Tipo de atividade (ex: car, flight, electricity)
- `value` (obrigatório) - Valor numérico (ex: 100 para 100km ou 100kWh)


**Exemplo de Resposta:**

```json
{
  "activity": "car",
  "value": 100,
  "unit": "km",
  "carbon_kg": 22.5,
  "equivalent_trees": 1.2,
  "tips": [
    "Considere usar transporte público para reduzir sua pegada de carbono",
    "Carros elétricos emitem significativamente menos CO2"
  ],
  "timestamp": "2023-04-15T14:30:00Z",
  "status": "success"
}







```

## 🏛️ Padrão MVC

Este projeto segue o padrão de arquitetura MVC (Model-View-Controller):

- **Model**: Responsável pelo acesso e manipulação dos dados. Os modelos contêm a lógica de negócio relacionada aos dados.

- Exemplo: `deforestationModel.js` gerencia os dados de desmatamento.



- **View**: Responsável pela formatação dos dados antes de enviá-los ao cliente. Em uma API RESTful, as views formatam as respostas JSON.

- Exemplo: `deforestationView.js` formata os dados de desmatamento para a resposta da API.



- **Controller**: Responsável por processar as requisições, interagir com os modelos e usar as views para formatar as respostas.

- Exemplo: `deforestationController.js` processa as requisições relacionadas a dados de desmatamento.





### Benefícios do MVC neste Projeto

1. **Separação de Responsabilidades**: Cada componente tem uma função específica.
2. **Manutenibilidade**: Facilita a manutenção e evolução do código.
3. **Testabilidade**: Facilita a criação de testes unitários.
4. **Escalabilidade**: Facilita a adição de novos recursos.


## 📝 Exemplos de Uso

### Obter Dados de Desmatamento para a Região Norte em 2022

```shellscript
curl http://localhost:3000/api/deforestation?year=2022&region=norte
```

### Obter Dados de Qualidade do Ar para São Paulo

```shellscript
curl http://localhost:3000/api/air-quality?city=sao-paulo
```

### Calcular a Pegada de Carbono de uma Viagem de Carro de 100km

```shellscript
curl http://localhost:3000/api/carbon-footprint?activity=car&value=100
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request


## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido como parte do projeto de API utilitária com foco em questões sociais e ambientais.