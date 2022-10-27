# ReactJS
Es una biblioteca de JavaScript para construir interfaces de usuario

## Reglas
- Todo componente debe ser una funcion.
- Todo componente debe empezar con mayuscula

```js
funcion MyCard(){
    return<div>My Card </div>
}

```

- Todo componente debe retornar un solo elemento padre.

```js
funcion MyCard(){
    return(
        <div>
            <h1>Titulos</h1>
            <p>Parrafo</p>
            <div>
                <p>Parrafo hijo</p>
                <div>
                    <p>Parrafo hijo 2</p>
                </div>
            </div>
        </div>
    );
}

```
-Nota: Dentro de mi compoente puede mas funciones y esas ya no
-Eventos: Los nombre de los eventos en React son camelCase.
    -onclick --> React  onClick
    -onchange --> onChange
    -onsubmit --> onSubmit


```js

function MyCard(){
    function mostrar(){

    }
    return (
        <div>
            <h1>Titulo</h1>
            <button onClick={mostrarMensaje}>Mostrar mensaje</button>
        </div>
    );
}
```
## useState

En react para poder almacenar un valor en un variable
usamos un hook llamando useState
usstate es una funcion de react la cual nos permite poder manejar el estado de una variable

- Como se usa usestate

- *Siempre los import de react van en la primera linea*

```js

import { useState } from "react";

function App(){
    const[nombre, setNombre] = useState("Juan");

    return(
        <div>
            <p>Nombre</p>
            <button onClick>Cambiar nombre</button>
        </div>
    );
}
```


## onChange para Inputs
- en react para poder manejar el valor de un input usamos el vento 

```js
function App() {
    const [nombre, SetNombre] = useState("");

    function handleImputChange(event){
        setInputText()
    }
    return(
        <div>
        <p>Nombre</p>
        </div>
    ) 
}