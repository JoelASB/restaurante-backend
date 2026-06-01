# Checklist de Validación (Módulo Mesas)

Este checklist verifica que la IA haya generado correctamente el código según las instrucciones para el módulo de mesas.

- [X] **R1:** ¿La entidad tiene EXACTAMENTE los campos pedidos?
- [X] **R2:** ¿El enum de estados existe? ¿Tiene los 3 valores: disponible, ocupada, reservada?
- [X] **R3:** ¿El campo 'numero' tiene restricción de unicidad (`@Column({ unique: true })`)?
- [X] **R4:** ¿El servicio tiene el método `cambiarEstado` además del CRUD?
- [X] **R5:** ¿El controlador expone `PATCH /mesas/:id/estado`?
- [X] **R6:** ¿Los DTOs validan que 'estado' solo acepte los valores del enum?
- [X] **R7:** ¿La IA modificó archivos que NO le pedimos? ¿Cuáles?
- [X] **R8:** ¿Hay algo en el código que ninguno de los dos entiende?
