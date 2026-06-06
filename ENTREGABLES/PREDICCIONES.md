## PREDICCIÓN 3
Escribir ANTES de ver el resultado:
Pedidos necesita relaciones con Platos y Mesas. ¿La IA usará @ManyToOne para Mesa y @ManyToMany para Platos? ¿O inventará otra estructura? ¿Modificará las entidades de Platos y Mesas para agregar el lado inverso de la relación?

**Joel:** La IA usara @ManyToOne para Mesa y @ManyToMany para Platos y no modificara las entidades de Platos y Mesas para agregar el lado inverso de la relación.

**Paolo:** Por como mandamos el prompt gracias al doc, usara @ManyToOne para mesas y @ManyToMany para los platos, es lo esperado 

## PREDICCIÓN 4
Escribir ANTES de ver el resultado:
La IA necesita crear una tabla intermedia para ManyToMany (pedido_platos). ¿La creará automáticamente con @JoinTable o intentará crear una entidad separada? ¿Modificará plato.entity.ts para agregar el @ManyToMany inverso?

**Joel:** La IA creara una tabla intermedia con @JoinTable y no modificara el archivo plato.entity.ts.

**Paolo:** Si, gracias al documento y las indicaciones del prompt la ia creara la tabla intermadia con @JoinTable y no modificara el archivo plato 