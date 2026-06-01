# Code Review — Día 2: Módulo Mesas
## Lo que la IA hizo BIEN
✅ Módulo bien separado y bien nombrado.
✅ Entity: ID, número (unique), capacidad, estado, timestamps → exacto al prompt.
✅ DTOs con validaciones reales (`@IsNumber`, `@IsEnum`, `@Min`)
✅ Controlador con los 5 endpoints pedidos
✅ Servicio con método extra `cambiarEstado`
## Lo que la IA hizo MAL
✅ No hubo errores críticos, solo pequeñas oportunidades de mejora.

## Lo que la IA INVENTÓ (no pedimos)
✅ Creó un Enum `EstadoMesa` en un archivo separado (`estado-mesa.enum.ts`)
✅ Incluyó validaciones de capacidad mínima (ej. 1) en el DTO
## Predicción vs Realidad
✅ Predicción: "creo que va a crear un archivo separado para el enum" → Realidad: Sí, lo hizo.

## Comparación: Platos (Día 1) vs Mesas (Día 2)
¿La revisión cambió la calidad del resultado? ¿Encontraron algo en Mesas que probablemente también está mal en Platos?
✅ La calidad mejoró notablemente
✅ Módulo mucho más limpio
