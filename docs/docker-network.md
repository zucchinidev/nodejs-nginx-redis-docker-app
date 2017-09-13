# Docker Network

## Creación de red

* Utilizar el comenando

```
docker network create
```

* Hay dos tipos de redes que pueden crearse
    * Bridge (opción por defecto)
    * Overlay

* Una red bridge es igual a la red docker0 ( la red utilizada por defecto por docker)
* Una red overlay permite desplegar contenedores en diferentes host físicos y que los mismos se comuniquen de manera directa.
* Los contenedores se pueden conectar a más de una red mediante el comando
```
docker network connect
```

