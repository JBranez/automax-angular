
CREATE DATABASE IF NOT EXISTS automax;
USE automax;

DROP TABLE IF EXISTS vehiculo_promocion;
DROP TABLE IF EXISTS vehiculo_caracteristica;
DROP TABLE IF EXISTS resena;
DROP TABLE IF EXISTS solicitud_contacto;
DROP TABLE IF EXISTS promocion;
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS caracteristica;
DROP TABLE IF EXISTS vehiculo;
DROP TABLE IF EXISTS categoria;
DROP TABLE IF EXISTS marca;

CREATE TABLE marca (
  id_marca INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(80) NOT NULL UNIQUE
);

CREATE TABLE categoria (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL UNIQUE,
  descripcion VARCHAR(180) NULL
);

CREATE TABLE vehiculo (
  id_vehiculo INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  modelo VARCHAR(80) NOT NULL,
  anio SMALLINT NOT NULL,
  precio DECIMAL(12,2) NOT NULL,
  imagen VARCHAR(500) NOT NULL,
  descripcion VARCHAR(300) NULL,
  disponible BOOLEAN NOT NULL DEFAULT TRUE,
  id_marca INT NOT NULL,
  id_categoria INT NOT NULL,
  CONSTRAINT fk_vehiculo_marca FOREIGN KEY (id_marca) REFERENCES marca(id_marca),
  CONSTRAINT fk_vehiculo_categoria FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria),
  CONSTRAINT chk_vehiculo_anio CHECK (anio BETWEEN 1980 AND 2100),
  CONSTRAINT chk_vehiculo_precio CHECK (precio >= 0)
);

CREATE TABLE caracteristica (
  id_caracteristica INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE vehiculo_caracteristica (
  id_vehiculo INT NOT NULL,
  id_caracteristica INT NOT NULL,
  valor VARCHAR(120) NOT NULL,
  PRIMARY KEY (id_vehiculo, id_caracteristica),
  CONSTRAINT fk_vc_vehiculo FOREIGN KEY (id_vehiculo) REFERENCES vehiculo(id_vehiculo),
  CONSTRAINT fk_vc_caracteristica FOREIGN KEY (id_caracteristica) REFERENCES caracteristica(id_caracteristica)
);

CREATE TABLE cliente (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(80) NOT NULL,
  apellidos VARCHAR(80) NULL,
  email VARCHAR(140) NOT NULL UNIQUE,
  telefono VARCHAR(30) NULL
);

CREATE TABLE resena (
  id_resena INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente INT NOT NULL,
  id_vehiculo INT NULL,
  calificacion TINYINT NOT NULL,
  comentario VARCHAR(500) NOT NULL,
  fecha DATE NOT NULL,
  CONSTRAINT fk_resena_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
  CONSTRAINT fk_resena_vehiculo FOREIGN KEY (id_vehiculo) REFERENCES vehiculo(id_vehiculo),
  CONSTRAINT chk_resena_calificacion CHECK (calificacion BETWEEN 1 AND 5)
);

CREATE TABLE promocion (
  id_promocion INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(140) NOT NULL,
  descripcion VARCHAR(400) NOT NULL,
  descuento_porcentaje DECIMAL(5,2) NULL,
  beneficio VARCHAR(180) NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  CONSTRAINT chk_promocion_descuento CHECK (descuento_porcentaje IS NULL OR (descuento_porcentaje >= 0 AND descuento_porcentaje <= 100)),
  CONSTRAINT chk_promocion_fechas CHECK (fecha_fin >= fecha_inicio)
);

CREATE TABLE vehiculo_promocion (
  id_vehiculo INT NOT NULL,
  id_promocion INT NOT NULL,
  PRIMARY KEY (id_vehiculo, id_promocion),
  CONSTRAINT fk_vp_vehiculo FOREIGN KEY (id_vehiculo) REFERENCES vehiculo(id_vehiculo),
  CONSTRAINT fk_vp_promocion FOREIGN KEY (id_promocion) REFERENCES promocion(id_promocion)
);

CREATE TABLE solicitud_contacto (
  id_solicitud INT AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(120) NOT NULL,
  email VARCHAR(140) NOT NULL,
  telefono VARCHAR(30) NULL,
  vehiculo_interes VARCHAR(120) NULL,
  mensaje VARCHAR(800) NOT NULL,
  fecha_hora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO marca (nombre) VALUES
('Toyota'), ('Mazda'), ('Ford'), ('Hyundai'), ('Jeep'), ('Chevrolet');

INSERT INTO categoria (nombre, descripcion) VALUES
('Sedán', 'Vehículos orientados a uso urbano y familiar.'),
('SUV', 'Vehículos con mayor altura y versatilidad.'),
('Camioneta', 'Vehículos para carga, trabajo y aventura.'),
('Deportivo', 'Vehículos enfocados en desempeño y conducción.');

INSERT INTO caracteristica (nombre) VALUES
('Motor'), ('Transmisión'), ('Seguridad'), ('Conectividad'), ('Tracción'),
('Asientos'), ('Asistencia de conducción'), ('Frenos');


