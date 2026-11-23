---
slug: bancolombia-bienestar-financiero
locale: es
title: "Bienestar financiero en Mi Bancolombia: más claridad sobre el dinero disponible"
shortTitle: Bienestar Financiero
summary: Caso de estudio de una prueba de UI sobre la sección Día a Día de Mi Bancolombia, enfocado en transparencia de saldos, movimientos y débitos automáticos.
role: Product Designer (investigación, UX y UI)
duration: "3 días"
status: published
featured: true
cover: images/bancolombia/cuenta.png
tags: [Fintech, UX/UI, Research, Banca]
tools: ["AI reaserch, Notebooklm, Figma, Claude"]
previousSlug: kreditime
order: 4
---

## Contexto

Este caso nació de una prueba de diseño de interfaz sobre la sección *Día a Día* de la app Mi Bancolombia. El brief entregaba el objetivo de investigación y una lista de pain points y necesidades, pero faltaba contexto que no se podía suponer. Por eso hice investigación adicional antes de diseñar.

Es un ejercicio conceptual: no tiene relación oficial con el banco ni se implementó en producción.

## Rol

Hice todo el proceso de forma individual: investigación, síntesis, definición de oportunidades, flujos, pantallas de alta fidelidad y un prototipo navegable.

## Reto

Las personas usuarias necesitan confiar en lo que ven en su cuenta. Los pain points apuntaban a una pérdida de control sobre el dinero y no a un problema visual puntual.

## Investigación

Usé una IA para recolectar y clasificar grandes volúmenes de comentarios en plataformas de reseñas y redes sociales. Un trabajo así habría tomado varios días con métodos tradicionales. Después recluté personas con cuenta Bancolombia para profundizar en las razones detrás de esos hallazgos y entrevisté a tres. Con esa información armé un mapa de empatía.

Esta muestra es pequeña. Con más tiempo y recursos entrevistaría a más perfiles que representen las user personas del banco, hasta llegar a saturación temática.

### Pain points encontrados

- Saldos que quedan durante horas con débitos sin completarse.
- Débitos automáticos sin alerta ni movimiento que indique la transacción.
- Cobros silenciosos de costos tributarios que no se pueden atribuir a una transacción.
- Bloqueos preventivos sin salida, o que obligan a flujos manuales presenciales, aun con dinero disponible.

### Mapa de empatía

- **Piensa y siente:** ansiedad e incertidumbre cuando una transferencia no aparece o el saldo se ve en cero; pérdida de control al ver que se toma dinero de sus Bolsillos sin alerta clara; confusión porque el orden de las horas no coincide con el de las operaciones.
- **Ve:** movimientos del mismo día listados en desorden, uso excesivo de rojo y verde, etiquetas técnicas que no indican el nombre real del comercio, mensajes de «sistema no disponible» y extractos consolidados solo cada tres meses.
- **Dice y hace:** refresca el historial una y otra vez, descarga comprobantes uno por uno, lleva cuentas paralelas en Excel o notas y revisa a mano la exención del 4x1000.
- **Oye:** historias virales sobre dinero «en el limbo» y consejos de amigos y asesores, como no dejar ahorros importantes en los Bolsillos o tener un plan B en otro banco.

Entre las frases de las entrevistas: «No me gusta que me controlen mi plata» y «No me interesa pasar mucho tiempo en el app».

### User personas

Los comentarios permitieron identificar dos perfiles:

- **Perfil A (finanzas personales / asalariado):** quiere entender en qué se le va el sueldo, evitar débitos sorpresa desde sus Bolsillos y controlar gastos fijos o topes.
- **Perfil B (emprendedor / pequeño comercio):** usa el historial de Día a Día como herramienta operativa para verificar si un cliente ya pagó y en qué orden entraron las transferencias.

Por tiempo, intervine solo el Perfil A.

## Definición del problema

> Un usuario de Mi Bancolombia que gestiona su dinero diario desde *Día a Día* necesita una vista única y automática que le muestre cuánto dinero tiene realmente disponible, descontando compromisos próximos y Bolsillos, y que le anticipe momentos críticos de liquidez sin exigirle registro manual, porque hoy la información fragmentada, las etiquetas técnicas y el temor a enfrentar sus gastos le generan estrés, abandono del seguimiento y riesgo de atrasarse en sus obligaciones.

### Preguntas «¿Cómo podríamos?»

**Eje 1: claridad, unificación y baja fricción cognitiva**

1. Centralizar en una sola vista automática los movimientos, fechas de corte y cuotas, traduciendo códigos técnicos a lenguaje corriente y orden cronológico habitual.
2. Presentar el resumen de gastos e ingresos de forma empática, progresiva y accionable para reducir la ansiedad financiera.

**Eje 2: liquidez real frente a dinero comprometido**

3. Diferenciar desde el primer vistazo el saldo contable del dinero realmente disponible hoy, descontando lo reservado en Bolsillos y las obligaciones próximas.
4. Ayudar a quien tiene ingresos irregulares a visualizar entradas y pagos fijos sin llevar cuentas paralelas.

**Eje 3: anticipación, priorización y alertas proactivas**

5. Transformar el historial en una línea de tiempo hacia adelante que alerte sobre baches de liquidez y débitos automáticos antes de que ocurran.
6. Guiar al usuario cuando su liquidez proyectada no alcanza, para decidir qué obligación priorizar y qué gasto aplazar sin generar intereses ni mora.

### Priorización

Prioricé según cómo cada pregunta afecta un pain point y según el esfuerzo tecnológico frente a la ganancia de confianza:

- **P1:** preguntas 1, 3 (impacto alto) y 5 (medio). La falta de transparencia deja la información abierta a interpretación y quita sensación de control.
- **P2:** pregunta 2. Con datos ordenados y confiables, el siguiente paso es que la persona quiera entrar a la sección sin ansiedad.
- **P3:** preguntas 4 y 6. Dependen de configuración del usuario y de predecir su comportamiento financiero, así que no tienen un impacto accionable inmediato.

## Proceso y solución

Para resolver la sensación de información duplicada («¿por qué hay tantas secciones con lo mismo?»), la navegación parte de un único punto de verdad en **Cuenta de Ahorros**, donde se separa el saldo realmente disponible del dinero retenido o comprometido. Desde ahí, el flujo se divide en tres vistas con propósitos distintos:

- **Mis movimientos:** consulta cronológica con lenguaje humano y hora exacta en el detalle.
- **Histórico e informes:** categorías con paleta neutra, sin el abuso del rojo, y descarga de informes por rango de fechas.
- **Mis bolsillos:** trazabilidad de afectaciones y débitos automáticos bajo el principio de *reconocimiento antes que recuerdo*.

![Mapa de flujos que intervienen los pain points identificados en Mi Bancolombia](/images/bancolombia/flujos-pain-points.png)

### Cuenta

Mostrar de forma clara y anticipada las transacciones pendientes, reflejadas directamente en los saldos, ayuda a entender el flujo de caja y el dinero realmente disponible. Reduce las experiencias negativas asociadas a cobros que se perciben como inesperados u ocultos.

![Pantalla de Cuenta de Ahorros con el saldo disponible separado del dinero comprometido](/images/bancolombia/cuenta.png)

### Mis movimientos

Los clientes deben poder consultar en un solo lugar toda la información de su cuenta, sin recorrer secciones con datos duplicados. Las transacciones se ordenan según su fecha de creación o solicitud y no según el momento en que el banco las procesa, porque este último criterio altera el orden cronológico y confunde sobre el manejo real del dinero.

### Histórico

Depender solo del banco para obtener un extracto consolidado genera incertidumbre. Por eso propuse **informes personalizados** por periodo. Llamarlos «informes» y no «extractos» evita confusiones sobre su carácter oficial y da acceso oportuno a la información.

### Mis bolsillos

Los bolsillos deben mostrar todo su historial: fechas de creación, movimientos, débitos y cualquier afectación al dinero ahorrado. La experiencia prioriza el *reconocimiento antes que recuerdo*: información visible y contextual que explique qué pasó con el dinero, cuándo y por qué, sin depender de recordar qué se autorizó.

<p class="flow-cta"><a href="https://prueba-ui-juanlozano-bc.netlify.app/" target="_blank" rel="noopener noreferrer">Ver prototipo <span aria-hidden="true">→</span></a></p>

## Validación

Aún no se han hecho pruebas con personas usuarias. Recomiendo pruebas de usabilidad moderadas, porque permiten evaluar si se cumplen los objetivos de cada flujo y también entender percepciones y dificultades. Los objetivos son:

1. **Comprensión de las transacciones:** con un caso hipotético, medir si la persona identifica qué ocurre con sus transacciones, incluidos estados, débitos y afectaciones al saldo disponible.
2. **Accesibilidad de los informes:** validar si, ante un escenario planteado, encuentra de forma intuitiva y autónoma cómo generar un informe de movimientos de un periodo.
3. **Control sobre los débitos automáticos:** evaluar si entiende cómo se hacen los débitos, incluidos los de bolsillos, y si puede decidir de forma informada si autorizarlos.

## La IA en este proceso

La IA aceleró la recolección y clasificación de pain points, tanto los del brief como otros hallazgos adicionales. En el prototipado, también aceleró la construcción de propuestas y permitió validaciones conceptuales tempranas con usuarios proxy, que aportaron mejoras sobre todo en los copys y textos de interfaz. Esas validaciones no reemplazan las pruebas con usuarios reales.


## Aprendizajes

Las aplicaciones bancarias suelen contar con toda la información que el usuario necesita; sin embargo, presentan dificultades a la hora de organizarla y mostrarla de manera efectiva.

Este ejercicio permitió conceptualizar una solución que aprovecha, en gran medida, los insumos y capacidades que el banco ya tiene disponibles. Uno de los principales hallazgos es que las personas no necesariamente buscan secciones especializadas donde explorar un universo completo de sus finanzas, sino respuestas rápidas y concretas que les ayuden a tomar decisiones en su día a día.

Por eso, la información debe estar disponible de manera inmediata, ser fácil de interpretar y no dejar espacio a suposiciones. Cuando el usuario debe interpretar, deducir o completar la información por su cuenta, aumenta la incertidumbre y esto puede traducirse en una percepción negativa de la experiencia.

## Nota

Es un ejercicio de diseño. La propiedad de la marca y del producto pertenece a sus titulares.
