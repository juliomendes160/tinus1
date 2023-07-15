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

## Crie um repositório
Execute os seguintes comandos na pasta local para enviar para o github `git init` e `git remote add origin https://github.com/juliomendes160/tinus1.git` 

## Permissões de fluxo de trabalho
Para que os arquivos de produção sejam gerados adicione o script do fluxo de trabalho e der as permissões necessárias.

# Google Cloud

## Criar máquina virtual
Adicione o seguinte script na criação da máquina virtual 
`#!/bin/bash` 
`sudo apt-get update` 
`sudo apt-get install apache2 -y` 
`sudo chown -R www-data:www-data /var/www/html`
`sudo /usr/sbin/usermod -aG www-data juliomendes160` 
`sudo chmod g+w /var/www/html` 
`sudo chmod g+s /var/www/html`

## Gerar chaves ssh
Execute `mkdir -p ../key` e `ssh-keygen -t rsa -b 4096 -f ../key/ssh -C juliomendes160` para criar a pasta e as chaves de acesso remoto, adicione a chave ssh.

## Enviar os arquivos locais
Execute o comando `scp -r -i ../key/ssh ../docs juliomendes160@34.151.198.88:/var/www/html` para enviar os arquivos locais para o servidor, caso queira apenas sincronizar `rsync -r -i ../key/ssh ../docs juliomendes160@34.151.198.88:/var/www/html`

## Conexão remota
Para fazer a conexão remota execute o comando, lembre-se de pegar o IP externo correto `ssh-keygen -R 34.151.198.88` e `ssh -i ../key/ssh juliomendes160@34.151.198.88`.

## Configurar pasta do servidor
Execute o seguinte comando para alterar a pasta do servidor `sudo vi /etc/apache2/sites-available/000-default.conf` atualize o sevirdor  `sudo service apache2 restart`.
