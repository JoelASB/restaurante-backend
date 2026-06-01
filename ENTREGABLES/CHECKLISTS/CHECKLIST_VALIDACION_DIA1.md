# Checklist de Validación (Módulo Platos)

Este checklist verifica que la IA (Cursor) haya generado correctamente el código según las instrucciones del Bloque B.

- [x] **V1:** Entidad: exactamente `id`, `nombre`, `precio`, `disponible`, `createdAt`, `updatedAt`
- [x] **V2:** No hay campos inventados por la IA
- [x] **V3:** DTOs con validaciones reales (`@IsString`, `@IsNumber`, etc.)
- [x] **V4:** 5 endpoints: `POST`, `GET all`, `GET :id`, `PATCH :id`, `DELETE :id`
- [x] **V5:** Módulo registrado en `AppModule`
- [x] **V6:** No se modificaron archivos que no pedimos
- [x] **V7:** No hay llaves secretas ni URLs hardcodeadas


