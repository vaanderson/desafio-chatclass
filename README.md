Para instalar o Aplicativo React, siga estas etapas:

1: Acesso o site da HG Brasil e gere uma chave gratuita.
```
[HG Brasil](https://console.hgbrasil.com/)
```

2: Clone o repositório:
```
HTTPS: https://github.com/vaanderson/desafio-chatclass.git
SSH: git@github.com:vaanderson/desafio-chatclass.git
```
3: Instale as dependências do projeto:
```
cd desafio-chatclass
yarn install
	@@ -37,15 +32,6 @@ ou usando npm:
npm install
```


4: Insira a chave que você gerou no incio no arquivo .env na raiz do projeto

```
REACT_APP_API_KEY = 'SUA CHAVE AQUI'
```



## ☕            Rodando o projeto

Para executar o projeto use o comando:
	@@ -54,17 +40,7 @@ Para executar o projeto use o comando:
yarn start ou npm start
```


  ## ❌ Caso haja restrições de CORS no Localhost:
  A API da HG Brasil possui algumas restrições de CORS, caso tenha problemas de visualização de dados na API em homologação use a extensão abaixo para contornar o erro:

  ```
  [Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)
  
  ```

  Adendo que, isso é um erro com os headers da API vindas do back-end.



  ## 🤝 Tecnologias utilizadas:
