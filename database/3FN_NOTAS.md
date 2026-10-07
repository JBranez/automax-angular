# Justificación de 3FN

**1FN:** cada atributo contiene valores atómicos. Las características no se guardan como una lista dentro de `vehiculo`; se separan en `caracteristica` y `vehiculo_caracteristica`.

**2FN:** las tablas con claves compuestas (`vehiculo_caracteristica` y `vehiculo_promocion`) tienen atributos que dependen de la clave completa. `valor` depende de la combinación vehículo-característica.

**3FN:** los atributos no clave dependen de su clave primaria y no de otros atributos no clave. Por ejemplo, el nombre de la marca vive en `marca` y la categoría en `categoria`, en lugar de repetirse en `vehiculo`.

Las relaciones N:M entre vehículos y promociones/características se resuelven mediante tablas intermedias con clave primaria compuesta.
