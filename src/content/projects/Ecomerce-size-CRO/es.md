---
slug: Ecomerce-Sizes-CRO
locale: es
title: "E-commerce: tallas y optimización del CRO"
shortTitle: E-commerce
summary: Investigación y mejora de la experiencia del usuario en e-commerce enfocado en la facilidad de elección de tallas para aumentar la tasa de conversión y disminuir los cambios. esta investigación e implementación se hizo en compañia con Andrea Bulla que jugo el rol de UX Designer min senior.
role: UX/UI Designer, Product Designer.
duration: 3 meses
status: published
featured: true
cover: images/crocs-sizes-cover.png
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

   * **La analitica del funnel:** encontramos que habia un funnel altamente abandonado a la altura del carrito ya que habia un abandono de cerca del 93% del funnel.
   ![Embudo de conversión de Crocs](/images/Funnel%20crocs%20col.png)

   * **La analitica inversa:** al mismo tiempo queriamos identificar el paso crucial de donde las personas si llegaban al checkout para encontrar la diferencia en el funnel que abandonaba, por lo que se hizo un analisis de ruta inversa para conocer realmente que tipo de trafico dentro de la pagina si encontraba su producto y convertia. El path muestra que quien llega a la pantalla de pago casi siempre completa la compra, lo que ubica el abandono real en el momento de agregar al carrito en la PDP.

   ![Analisis de ruta inversa](/images/Arbol%20de%20funnel.png)

2. **La voz del usuario:** Se ideó y ejecutó un plan en donde la data se extrajo mediante una serie de encuestas planeadas para ser insertadas a lo largo del funnel y así poder capturar las frustraciones, pain points y necesidades de los usuarios en cada etapa del proceso de compra y adicioalmete se realizo una entrevista con las personas que atienden en servicio al cliente.

   * **Frustraciones post compra:** La primera encuesta se activó para evaluar si la memoria pudiera indicar cuál es el momento de mayor fricción que se tuvo durante la experiencia. Encontrando que el cliente encuentra más importante el tema de incentivos (ej. descuentos, productos adicionales o cualquier incentivo que ayude o haga especial para finalizar su compra).
   * **Necesidades en checkout no resueltas:** Los usuarios encontraban confusa la aplicación de descuentos en referencias, por lo que expresaban que los precios cambiaban siendo que los productos que ellos seleccionaban no aplicaban para las promociones que ellos querían.
   * **Fricciones no resueltas en carrito:** Los usuarios que llegan al carrito no encontraban facilidades para finalizar la compra en cuanto a que los métodos de pago, aunque estaban correctos, no daban un factor de beneficio esperado, queriendo que exista algún tipo de descuento presente siempre al momento de su compra. Otros querían una flexibilidad de pagos como mejores ofertas de pagos a cuotas. Y finalmente algunos se sentían inseguros por la falta de información sobre el producto en menor medida.
   * **Dudas en el momento de agregar producto:** La inmensa mayoría encontraba muy confusas las tallas de Crocs por lo que expresaban una gran insatisfacción al momento de escoger qué tallas eran. Aunque la guía de tallas resolviera la duda de medidas, se encontró que el pain point principal era esta sección, por lo que coincidía con la data encontrada durante la exploración del funnel en la etapa cuantitativa.
   * **Tipologías de antropometría de clientes:** El personal de atención al cliente nos comentaba que regularmente para poder llevar a cabo su labor dentro de los cambios y devoluciones de las crocs tenian que especificar cada orma a cada persona de los diferentes tipos de crocs porque por experiencia de asesorias entendieron que las distintas antropometrias de los clientes no solo bastaba con saber el largo del pie sino tambien el ajuste de este ya que algunos tienen el pie ancho y otros delgado y esto hacia que las tallas no fueran uniformespara el mismo largo del píe.

## Lo que se hizo

### Estructuración y Solución

Teniendo claros los insights de la investigación, se definió la ruta de acción con 2 frentes igualmente:

1. **Optimizar el proceso de selección de tallas:**
   - Presentar de manera clara y facilitar la forma en que se muestra la guía de tallas.
   - Facilitar el reconocimiento de las medidas para cada talla reduciendo la posibilidad de error al escoger cada talla.
   - Unificar a un solo tipo de visualización de las tallas evitando la convivencia de varios estándares a solo el estándar EUR.

2. **Facilitar la identificación de la horma del calzado:**
   - Generar un sistema de etiquetas que faciliten la identificación de hormas anchas o delgadas dependiendo del tipo de Crocs, lo que facilita la elección de la talla correcta.
   

### Validación de la propuesta

Las soluciones se validaron primero con pruebas con usuarios proxies que tenían perfiles similares a las personas que respondían las encuestas en el sentido demográfico, para luego, tras mejorar las debilidades de la propuesta, pasar a una prueba en producción para poder hacer seguimiento a los indicadores de devoluciones.


## Resultado

1. **Optimizar el proceso de selección de tallas:**

El cambio al sistema de tallas EUR (implementado en febrero) fue un éxito medible en múltiples dimensiones:

   * **Porcentaje de devoluciones por talla:** Las devoluciones por talla bajaron un -11,38% en tasa de devoluciones pasando de un índice de 13,27% (Nov-Ene) → *11,76% en (Feb-Abr)*.
   * **Clics en selector de tallas:** +33% (24.425 → 32.893 clics en el mismo período).
   * **Clics de rabia:** -14% (0,43% → 0,37%) en el mismo período.
   * **Clics fallidos:** -14% (14,71% → 12,71%) en el mismo período.

   <video controls playsinline preload="metadata" style="width: 100%; height: auto;">
  <source src="/images/uso%20de%20tallas%20europeas.mp4" type="video/mp4">
  Tu navegador no puede reproducir este video.
</video>

2. **Facilitar la identificación de la horma del calzado:**

Implementamos una funcionalidad que indica el tipo de ajuste recomendado según el modelo de Crocs que se está consultando, para ayudar a elegir la talla adecuada.

**Mockup figma**

![Ajuste de la horma de Crocs](/images/ajuste%20de%20horma%20de%20crocs.png)

**Prototipo**

Interactúa con los selectores de ajuste, talla y color, consulta la guía de tallas y prueba las acciones de compra. Esta demostración no procesa pedidos.

<div style="width: 100%; max-width: 590px; aspect-ratio: 590 / 1224; margin: 1.5rem auto; overflow: hidden; border: 1px solid #d8d3c8; background: #fff;">
  <iframe
    title="Prototipo interactivo de selección de tallas Crocs"
    src="/prototypes/crocs-size-selector.html?lang=es"
    style="width: 100%; height: 100%; border: 0;"
    loading="lazy">
  </iframe>
</div>

Esta sigue en test y se tendran los resultados al finalizar noviembre después de la temporada de descuentos y saber la cantidad de devoluciones por esta razon. (finaliza 30-11-26)

## Aprendizajes

El estándar global de tallas que se muestra en otros mercados y funciona debe tropicalizarse a las necesidades del mercado objetivo, ya que variaciones mínimas de tamaño pueden causar una gran diferencia en la percepción del usuario y afectar significativamente la tasa de conversión y devoluciones de producto, afectando el CRO y en la experiencia general del jorney de usaurio.
