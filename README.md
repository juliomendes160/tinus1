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


# CSS

## Reset
`npm install reset-css`
[reset](https://meyerweb.com/eric/tools/css/reset/)

## Nomalize
`npm install normailze.css`
[Normalize](https://necolas.github.io/normalize.css/)

## Uicons
`npm i @flaticon/flaticon-uicons`
[Uicons](https://www.flaticon.com/uicons/get-started)

## Bootstrap
`npm install bootstrap`
[Boostrap](https://getbootstrap.com/)

# Github

## Sicronizar repositório

`git init` 

`git remote add origin https://github.com/juliomendes160/tinus1.git` 

## Permissões de fluxo de trabalho
Para que os arquivos de produção sejam gerados adicione o script do fluxo de trabalho e der as permissões necessárias.

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
