# Tinus1
Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 16.1.1.

## Servidor de desenvolvimento
Execute `ng serve` para iniciar um servidor de desenvolvimento. Acesse `http://localhost:4200/` no seu navegador. A aplicação será recarregada automaticamente se você fizer qualquer alteração nos arquivos de origem.

## Scaffold de código
Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Execute `ng build` para construir o projeto. Os artefatos de build serão armazenados no diretório `docs/`.

## Executando testes unitários
Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Executando testes end-to-end
Execute `ng e2e` para executar os testes end-to-end usando uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implementa as capacidades de teste end-to-end.

## Ajuda adicional
Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página [Angular CLI Overview and Command Reference](https://angular.io/cli).

# Github

## Iniciar repositório
```
git init 

git remote add origin https://github.com/juliomendes160/tinus1.git
```

## Tokens de acesso pessoal (clássico)
[Gerar novo token](https://github.com/settings/tokens)

## Segredos e variáveis ​​de ações
[Novo segredo de repositório](https://github.com/juliomendes160/tinus1/settings/secrets/actions)

## Fluxo de trabalho
```
name: Build and Deploy to gh-pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Set Up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 16

      - name: Install Angular CLI
        run: npm install -g @angular/cli

      - name: Install Dependencies
        run: npm install

      - name: Build Production Files
        run: ng build

      - name: Configure Git
        run: |
          git config --global user.email "juliomendes160@hotmail.com"
          git config --global user.name "Julio Mendes"

      - name: Deploy to Main Branch
        run: |
          git checkout main
          git add --force docs/
          git commit --allow-empty -m "Deploy to main branch"
          git push origin main
      
      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.tinus1 }}
          publish_dir: docs
          publish_branch: gh-pages
```

# CSS

## Reset
`npm install reset-css`
[reset](https://meyerweb.com/eric/tools/css/reset/)
**Path:** node_modules/reset-css/reset.css

## Nomalize
`npm install normalize.css`
[Normalize](https://necolas.github.io/normalize.css/)
**Path:** node_modules/normalize.css/normalize.css

## Bootstrap
`npm install bootstrap`
[Boostrap](https://getbootstrap.com/)
**Path:** node_modules/bootstrap/dist/css/bootstrap.min.css

## Uicons
`npm i @flaticon/flaticon-uicons`
[Uicons](https://www.flaticon.com/uicons/get-started)
**Path:** node_modules/@flaticon/flaticon-uicons/css/all/all.css

# Google Cloud

## Criar VM
```
    #!/bin/bash
    sudo apt-get update 
    sudo apt-get install apache2 -y 
    sudo chown -R www-data:www-data /var/www/html
    sudo /usr/sbin/usermod -aG www-data juliomendes160 
    sudo chmod g+w /var/www/html
    sudo chmod g+s /var/www/html
```

## Gerar chaves ssh
`mkdir -p ../key` 

`ssh-keygen -t rsa -b 4096 -f ../key/ssh -C juliomendes160`

## Enviar arquivos
`scp -r -i ../key/ssh ../docs juliomendes160@35.198.46.4:/var/www/html` 

`rsync -r -i ../key/ssh ../docs juliomendes160@34.151.198.88:/var/www/html`

## Conexão remota
`ssh-keygen -R 35.198.46.4` 

`ssh -i ../key/ssh juliomendes160@35.198.46.4`.

## Configurar servidor
`sudo vi /etc/apache2/sites-available/000-default.conf`

<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/docs

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <Directory /var/www/html/docs>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        RewriteEngine On
        RewriteBase /docs/
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>

`sudo service apache2 restart`
