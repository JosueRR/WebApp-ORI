-- Inserting data into Tipo
INSERT INTO Tipo (Descripcion) VALUES ('Tipo1');
INSERT INTO Tipo (Descripcion) VALUES ('Tipo2');

-- Inserting data into Responsable
INSERT INTO Responsable (Nombre) VALUES ('Responsable1');
INSERT INTO Responsable (Nombre) VALUES ('Responsable2');

-- Inserting data into Activo
INSERT INTO Activo (IDTipo, IDResponsable, ActivoFijo, Placa, Descripcion, FechaAdquisicion, Proveedor, Estado, Observaciones) VALUES (1, 1, 1, 1234, 'Activo1', '2023-11-22', 'Proveedor1', 'Bueno', 'Observacion1');
INSERT INTO Activo (IDTipo, IDResponsable, ActivoFijo, Placa, Descripcion, FechaAdquisicion, Proveedor, Estado, Observaciones) VALUES (2, 2, 0, 5678, 'Activo2', '2023-11-22', 'Proveedor2', 'Malo', 'Observacion2');

-- Inserting data into Bitacora
INSERT INTO Bitacora (IDActivo, Usuario, FechaAccion, EstadoPropuesto) VALUES (1, 'Usuario1', '2023-11-22 01:38:50', 'Propuesto1');
INSERT INTO Bitacora (IDActivo, Usuario, FechaAccion, EstadoPropuesto) VALUES (2, 'Usuario2', '2023-11-22 01:38:50', 'Propuesto2');
