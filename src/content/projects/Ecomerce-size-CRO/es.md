---
slug: Ecomerce-Sizes-CRO
locale: es
title: "E-commerce: tallas y optimización del CRO"
shortTitle: E-commerce
summary: Investigación y mejora de la experiencia del usuario en e-commerce enfocado en la facilidad de elección de tallas para aumentar la tasa de conversión y disminuir los cambios.
role: UX/UI Designer, Product Designer
duration: 3 meses
status: published
featured: true
cover: assets/images/crocs-sizes-cover.png
tags: [Investigación, UI, UX research, CRO]
tools: [Figma, Microsoft Clarity, Google Analytics]
nextSlug: payment-app
order: 3
---

## Contexto

Para este proyecto se solicitó al equipo de UX investigar un bajo desempeño de las ventas en el e-commerce de Crocs ya que la data indicaba que había un cuello de botella en el tráfico total de sesiones y las sesiones de intención de compra con productos agregados al carrito y posterior llegada al checkout.


### Necesidades de los stakeholders

Los stakeholders requerían que se encontraran las fricciones que impedían a los usuarios finalizar la compra y encontrar posibles optimizaciones en la experiencia de compra.

## Investigación

### Entendiendo la data y conductas de usuarios

Para poder entender realmente el problema se necesitaba entender las conductas de los usuarios en el sitio web por lo que se lanzó una investigación en 2 frentes:

1. **Analítica de datos de navegación:** se realizó un análisis cuantitativo de la data del tráfico del último mes en plataformas conectadas al e-commerce como Google Analytics y Microsoft Clarity. 

   * **La barrera del canal digital:** Los usuarios preferían comprar en tienda física debido a que la experiencia de atención, el servicio personalizado y la tangibilidad del producto eran muy superiores a lo que ofrecía el sitio web actual.

2. **La voz del usuario:** Se ideó y ejecutó un plan en donde la data se extrajo mediante una serie de encuestas planeadas para ser insertadas a lo largo del funnel y así poder capturar las frustraciones, pain points y necesidades de los usuarios en cada etapa del proceso de compra.

   * **Frustraciones post compra:** La primera encuesta se activó para evaluar si la memoria pudiera indicar cuál es el momento de mayor fricción que se tuvo durante la experiencia. Encontrando que el cliente encuentra más importante el tema de incentivos (ej. descuentos, productos adicionales o cualquier incentivo que ayude o haga especial para finalizar su compra).
   * **Necesidades en checkout no resueltas:** Los usuarios encontraban confusa la aplicación de descuentos en referencias, por lo que expresaban que los precios cambiaban siendo que los productos que ellos seleccionaban no aplicaban para las promociones que ellos querían.
   * **Fricciones no resueltas en carrito:** Los usuarios que llegan al carrito no encontraban facilidades para finalizar la compra en cuanto a que los métodos de pago, aunque estaban correctos, no daban un factor de beneficio esperado, queriendo que exista algún tipo de descuento presente siempre al momento de su compra. Otros querían una flexibilidad de pagos como mejores ofertas de pagos a cuotas. Y finalmente algunos se sentían inseguros por la falta de información sobre el producto en menor medida.
   * **Dudas en el momento de agregar producto:** La inmensa mayoría encontraba muy confusas las tallas de Crocs por lo que expresaban una gran insatisfacción al momento de escoger qué tallas eran. Aunque la guía de tallas resolviera la duda de medidas, se encontró que el pain point principal era esta sección, por lo que coincidía con la data encontrada durante la exploración del funnel en la etapa cuantitativa.

## Lo que se hizo

### Estructuración y Solución

Teniendo claros los insights de la investigación, se definió la ruta de acción con 2 frentes:

1. **Optimizar el proceso de selección de tallas:**
   - Presentar de manera clara y facilitar la forma en que se muestra la guía de tallas.
   - Facilitar el reconocimiento de las medidas para cada talla reduciendo la posibilidad de error al escoger cada talla.
   - Unificar a un solo tipo de visualización de las tallas evitando la convivencia de varios estándares a solo el estándar EUR.

2. **Facilitar la identificación de la horma del calzado:**
   - Generar un sistema de etiquetas que faciliten la identificación de hormas anchas o delgadas dependiendo del tipo de Crocs, lo que facilita la elección de la talla correcta.
   

### Validación de la propuesta

Las soluciones se validaron primero con pruebas con usuarios proxies que tenían perfiles similares a las personas que respondían las encuestas en el sentido demográfico, para luego, tras mejorar las debilidades de la propuesta, pasar a una prueba en producción para poder hacer seguimiento a los indicadores de devoluciones.

## Resultado

El cambio al sistema de tallas EUR (implementado en febrero) fue un éxito medible en múltiples dimensiones:

1. **Porcentaje de devoluciones por talla:** Las devoluciones por talla bajaron un -11,38% en tasa de devoluciones pasando de un índice de 13,27% (Nov-Ene) → *11,76% en (Feb-Abr)*.
2. **Clics en selector de tallas:** +33% (24.425 → 32.893 clics en el mismo período).
3. **Clics de rabia:** -14% (0,43% → 0,37%) en el mismo período.
4. **Clics fallidos:** -14% (14,71% → 12,71%) en el mismo período. 


## Aprendizajes

El estándar global de tallas que se muestra en otros mercados y funciona debe tropicalizarse a las necesidades del mercado objetivo, ya que variaciones mínimas de tamaño pueden causar una gran diferencia en la percepción del usuario y afectar significativamente la tasa de conversión y devoluciones de producto, afectando el CRO.