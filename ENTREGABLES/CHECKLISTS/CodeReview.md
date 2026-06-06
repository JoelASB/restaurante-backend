# Code Review Checklist

| **#** | Qué revisar | Hallazgo / Observaciones | ✓ |
| :--- | :--- | :--- | :---: |
| **R1** | ¿Pedido tiene `@ManyToOne` a Mesa y `@ManyToMany` a Plato? | | [ ] |
| **R2** | ¿Existe `@JoinTable` en la relación `@ManyToMany`? | | [ ] |
| **R3** | ¿El DTO pide `mesaId` (number) y `platoIds` (number[])? | | [ ] |
| **R4** | ¿El servicio valida que `mesaId` y `platoIds` existen ANTES de crear? | | [ ] |
| **R5** | ¿Errores de IDs inexistentes dan 400 (BadRequest) y NO 500? | | [ ] |
| **R6** | ¿El total se calcula sumando precios de platos? | | [ ] |
| **R7** | ¿`GET /pedidos` retorna pedidos CON mesa y platos cargados (relations)? | | [ ] |
| **R8** | ¿La IA modificó `plato.entity.ts` o `mesa.entity.ts`? ¿Era necesario? | | [ ] |
| **R9** | ¿`PedidosModule` importa `PlatosModule` y `MesasModule`? | | [ ] |
| **R10**| ¿`GET /platos` y `GET /mesas` SIGUEN funcionando? | | [ ] |
