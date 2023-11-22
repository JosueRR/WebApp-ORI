SHOW COLUMNS FROM activo;

CREATE TABLE Tipo (
    IDTipo INT AUTO_INCREMENT PRIMARY KEY,
    Descripcion VARCHAR(255) NOT NULL
);

-- Crear la tabla Responsable
CREATE TABLE Responsable (
    IDResponsable INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL
);

-- Crear la tabla Activo
CREATE TABLE Activo (
    IDActivo INT AUTO_INCREMENT PRIMARY KEY,
    IDTipo INT,
    IDResponsable INT,
    ActivoFijo TINYINT(1) NOT NULL,
    Placa INT NOT NULL,
    Descripcion VARCHAR(255) NOT NULL,
    FechaAdquisicion DATE,
    Proveedor VARCHAR(255),
    Estado VARCHAR(50),
    Observaciones TEXT,
    FOREIGN KEY (IDTipo) REFERENCES Tipo(IDTipo),
    FOREIGN KEY (IDResponsable) REFERENCES Responsable(IDResponsable)
);

-- Crear la tabla Bitacora
CREATE TABLE Bitacora (
    IDEvento INT AUTO_INCREMENT PRIMARY KEY,
    IDActivo INT,
    Usuario VARCHAR(50) NOT NULL,
    FechaAccion DATETIME,
    EstadoPropuesto VARCHAR(50),
    FOREIGN KEY (IDActivo) REFERENCES Activo(IDActivo)
);