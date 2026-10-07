# Corrección del error ERESOLVE

El proyecto original tenía `typescript@5.9.2`, pero Angular 22.2.x requiere TypeScript `>=6.0.0 <6.1.0`. Se fijó `typescript@6.0.3` y `@angular-devkit/build-angular@22.2.0`.

Con una instalación previa en Windows:

```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
npm start
```

No es necesario utilizar `--force` ni `--legacy-peer-deps` para resolver este conflicto.
