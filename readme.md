# Node JS learning project

Lorem ipsum.

# Работа с npm
1. Если в проекте нет package.json, то выполнить команду `npm init -y`
2. Чтобы установить сторонние пакеты используется команда `npm install <имя_пакета>`. Существует сокращенная версия команды `npm i <имя_пакета>`. Можно устанавливать несколько пакетов, разделенных пробелами. Если пакет нужен только на этапе разработки то её можно загрузить ка дев зависимость. Команды для этого `npm i -D <имя_пакета>` или `npm i --save-dev <имя_пакета>`.
3. Скачанные пакеты хранятся в папке **node_modules**. Из-за её больших размеров она всегда должна игнорироваться гитом.