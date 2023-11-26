--SHOW COLUMNS FROM activo;
-- Create the Tipo table
CREATE TABLE IF NOT EXISTS Tipo (
    IDTipo INT AUTO_INCREMENT PRIMARY KEY,
    Descripcion VARCHAR(255) NOT NULL
);

-- Create the Responsable table
CREATE TABLE IF NOT EXISTS Responsable (
    IDResponsable INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL
);

-- Create the Proveedor table
CREATE TABLE IF NOT EXISTS Proveedor (
    IDProveedor INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL
);

-- Create the Activo table, referencing Tipo, Responsable, and Proveedor
CREATE TABLE IF NOT EXISTS Activo (
    IDActivo INT AUTO_INCREMENT PRIMARY KEY,
    IDTipo INT,
    IDResponsable INT,
    ActivoFijo TINYINT(1) NOT NULL,
    Placa INT NOT NULL,
    Descripcion VARCHAR(255) NOT NULL,
    FechaAdquisicion DATE,
    IDProveedor INT,
    Estado VARCHAR(50),
    Observaciones TEXT,
    FOREIGN KEY (IDTipo) REFERENCES Tipo(IDTipo),
    FOREIGN KEY (IDResponsable) REFERENCES Responsable(IDResponsable),
    FOREIGN KEY (IDProveedor) REFERENCES Proveedor(IDProveedor)
);

-- Create the Bitacora table, referencing Activo
CREATE TABLE IF NOT EXISTS Bitacora (
    IDEvento INT AUTO_INCREMENT PRIMARY KEY,
    IDActivo INT,
    Usuario VARCHAR(50) NOT NULL,
    FechaAccion DATETIME,
    EstadoPropuesto VARCHAR(50),
    FOREIGN KEY (IDActivo) REFERENCES Activo(IDActivo)
);