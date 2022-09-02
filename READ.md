# Primer dia con Git/Github

Comando para configurar el usuario y el correo

Lista de comando de git

* Para poder ver la version de Git

```bash
git --version
```

* Para configurar el correo
```bash
git config --globlal user.email "email"
```

```js
console.log("adas")
```
* Para poder configurar el username
```bash
git config --global user.name "username"
```

* Sirve para poder empezar a usar el control de version(git) en nuestra carpeta

*  Esto solo se una vez por carpeta

```bash
git init
```

* Para el estado de nuestros cambios
```bash
git status
```

* Agrega los archivos a la memoria de la PC
```bash
git add .
```

* Crea el registro de los cambios realizados
```bash
git commit -m "Mensaje del primer commit"
```
* Comando para poder ver historial de commit

[ ] Git log retorna un `id` con este id vamos a poder el detalle de los cambios que se hicieron en ese commit
```bash
git log
```

* Para poder ver el detalle de commit usamos
```bash
git show id-de-commit
```

