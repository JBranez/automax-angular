# AutoMax Angular

Proyecto académico desarrollado con Angular 22, Bootstrap 5 y Signals para la evaluación parcial de Desarrollo de Aplicaciones Web.

## Requisitos usados
- Angular CLI 22.2.0
- Node.js 24.15.0
- npm 11.12.1
- Bootstrap 5.3
- Bootstrap Icons

## Ejecutar

En Angular 22.2.x se requiere TypeScript 6.0.x. El proyecto ya deja fijada la versión compatible `typescript@6.0.3`.

En Windows, si vienes de una instalación anterior con `node_modules` o `package-lock.json`, elimina ambos antes de instalar: ```cmd
rmdir /s /q node_modules
del package-lock.json
```

Luego ejecuta:

```bash
npm install
npm start
```

Abrir `http://localhost:4200/`.

## Estructura

- `src/app/interfaces`: contratos de datos.
- `src/app/services`: lógica de datos y almacenamiento.
- `src/app/components`: piezas visuales independientes.
- `src/app/app.component.*`: composición general.
- `database/automax_3fn.sql`: diseño lógico SQL normalizado hasta 3FN.
- `database/automax_3fn_diagrama.svg`: diagrama lógico.
- `database/automax_3fn_diagrama.dot`: fuente Graphviz del diagrama.

El formulario de contacto usa Signals para campos y mensajes enviados; la información se almacena en `localStorage` para que el usuario pueda ingresarla, conservarla y verla en pantalla sin backend.
