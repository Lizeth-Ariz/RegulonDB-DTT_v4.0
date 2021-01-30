---
draw_sitecss: [ruta del archivo .css]
title: Manual de Mantenimiento DNAFeaturesGL_v0.0.3
---



# Introducción

En este documento se describe el estado actual de la librería DNAFeaturesGL. El objetivo es mostrar y describir la estructura interna de cada una de las funciones que la conforman. Adicionalmente deberán detallarse aquellos sistemas o entidades externas con las que el sistema tiene comunicación así como el uso de librerías adicionales a las desarrolladas.

# Estructura interna del sistema

Libreria publicada actualmente en NPM: https://www.npmjs.com/package/dnafeaturesgl

| **Función**                   | Función para importación | **Descripción**                                    |
| ----------------------------- | :----------------------- | -------------------------------------------------- |
| Draw_Dna                      | draw_dna                 | Función de dibujado para DNA                       |
| Draw_Gene                     | draw_gene                | Función de dibujado para Gene                      |
| Draw_Operon                   | draw_operon              | Función de dibujado para Operon                    |
| Draw_ppGpp                    | draw_ppGpp               | Función de dibujado para ppGpp                     |
| Draw_Promoter                 | draw_promoter            | Función de dibujado para Promoter                  |
| Draw_Terminator               | draw_terminator          | Función de dibujado para Terminator                |
| Draw_Tf_binding_sites         | draw_site                | Función de dibujado para Tf Binding Sites          |
| Draw_Riboswitch               | draw_riboswitch          | Función de dibujado para Riboswitch                |
| Draw_Rna                      | draw_rna                 | Función de dibujado para RNA                       |
| Draw_TransnationalAttenuator  | draw_transnationalA      | Función de dibujado para TransnationalAttenuator   |
| DrawTranscriptionalAttenuator | draw_transcriptionalA    | Función de dibujado para TranscriptionalAttenuator |

![OrganizacionDeCarpetas](images\OrganizacionDeCarpetas.PNG)

Figura 1. Organización de la carpeta del sistema

![AgrupaciónFunciones](images\AgrupaciónFunciones.PNG)

Figura 2. Agrupación de funciones en DNAFeaturesGL

# Complementos y compatibilidad con otros sistemas

DNAFeaturesGL_v0.0.3 se utiliza mendiante funciones de la siguiente manera:

```
import  draw_gene,draw_dna  from  'dnafeaturesgl' ;
```

- **svgdotjs/svg.js** es una librería para manipular y animar SVG. Se utiliza para la creación de los elementos genéticos, por lo tanto es una librería de gran importancia para DNAFeaturesGL.


# Restricciones de funcionamiento

Actualmente no contiene restricciones, unicamente requiere de un navegador web e internet, manejando JavaScript.

# Sugerencias de mejora

[Instrucciones necesarias para la modificación, adaptación o mejora del sistema.]

- Implementación funcional de `draw_label` para la adaptación de texto (nombre) dentro de los elementos genéticos.
- 

# Definiciones, acrónimos y abreviaturas

SVG: del inlglés Scalable Vector Graphics

# Ayuda y soporte

Si se tiene algún problema o sugerencia de cualquier índole relacionado con lo descrito en este manual, podrá enviarse un correo electrónico a: [regusoft@ccg.unam.mx](mailto:regusoft@ccg.unam.mx)

Los documentos mencionados como referencia en este manual, podrán ser solicitados a través a la dirección anteriormente señalada.

# Referencias

__Documentos__
Reporte Residencia Profesional_V1.0: DRAWINGTRACESTOOL V4.0 BASADO EN COMPONENTES CON REACT.

__Páginas Web__  
Título de la página Web:  SVG.js
Web link: https://svgjs.com/docs/3.0/

<!---
HISTORIAL DE REVISIONES

**Fecha:** [dd/mm/aaaa]
**Versión:** [#.#]
**Descripción:** [Indicar los cambios que se realizaron en el documento]
**Realizado por: ** [Nombre de la persona que realice los cambios]
**Estado:**[Revisión <Trabajado,  Verificado>, Estable **<**Vo.Bo, Validado>]
[Repetir esta sección por cada versión que se realice en el documento]
-->



