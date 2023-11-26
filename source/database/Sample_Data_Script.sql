-- Inserting data into Tipo
INSERT INTO Tipo (Descripcion) VALUES ('Electronics');
INSERT INTO Tipo (Descripcion) VALUES ('Furniture');
INSERT INTO Tipo (Descripcion) VALUES ('Vehicle');

-- Inserting data into Responsable
INSERT INTO Responsable (Nombre) VALUES ('John Doe');
INSERT INTO Responsable (Nombre) VALUES ('Jane Smith');
INSERT INTO Responsable (Nombre) VALUES ('Chris Johnson');

-- Inserting data into Proveedor
INSERT INTO Proveedor (Nombre, Email) VALUES ('Tech Supplies Co', 'contact@techsuppliesco.com');
INSERT INTO Proveedor (Nombre, Email) VALUES ('Office Comforts', 'info@officecomforts.net');
INSERT INTO Proveedor (Nombre, Email) VALUES ('Vehiculos y Mas', 'ventas@vehiculosymas.mx');

-- Inserting data into Activo
INSERT INTO Activo (IDTipo, IDResponsable, ActivoFijo, Placa, Descripcion, FechaAdquisicion, IDProveedor, Estado, Observaciones) VALUES (1, 1, 1, 123, 'Laptop', '2021-01-01', 1, 'Good', 'No issues');
INSERT INTO Activo (IDTipo, IDResponsable, ActivoFijo, Placa, Descripcion, FechaAdquisicion, IDProveedor, Estado, Observaciones) VALUES (2, 2, 0, 456, 'Desk Chair', '2021-06-15', 2, 'Fair', 'Minor scratches');
INSERT INTO Activo (IDTipo, IDResponsable, ActivoFijo, Placa, Descripcion, FechaAdquisicion, IDProveedor, Estado, Observaciones) VALUES (3, 3, 1, 789, 'Company Car', '2022-03-22', 3, 'Excellent', 'New tires needed');

-- Inserting data into Bitacora
INSERT INTO Bitacora (IDActivo, Usuario, FechaAccion, EstadoPropuesto) VALUES (1, 'johnd', NOW(), 'Operational');
INSERT INTO Bitacora (IDActivo, Usuario, FechaAccion, EstadoPropuesto) VALUES (2, 'janes', NOW(), 'Under maintenance');
INSERT INTO Bitacora (IDActivo, Usuario, FechaAccion, EstadoPropuesto) VALUES (3, 'chrisj', NOW(), 'Operational');
