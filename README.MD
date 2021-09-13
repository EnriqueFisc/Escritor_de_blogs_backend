# API REST PARA LA APP ESCRITOR DE BLOGS

CRUD para la app Escritor de blogs el cual tambien recibe imagenes
img path ( Se requiere crear ): public/uploads/img

- Creado con NodeJS.
- Base de datos tipo relacional creada con mysql.
- JWT para el manejo de sesiones de usuarios.
- Multer para la subida de imagenes.

Instalacion de paquetes con npm en consola:
```
    npm install
```

## Endpoints para el manejo de post de usuarios:

### api/post:

- Post (Crear un nuevo post)
Recibe como parametros el titulo del documento, su descripcion y la imagen de portada (Opcional) (Por el momento solo se admite una imagen por post).
- Get (Obtener los post de usuario)
No recibe ningun parametro, obtiene el uid del token y con el busca los post existentes.
- Put (Actualizar post)
Recibe como parametro el id del post que se desea actualizar además del los campos ya mencionados previamente para la edición.
- Delete (Eliminar post)
Recibe como parametro el id del post que se desea eliminar.

