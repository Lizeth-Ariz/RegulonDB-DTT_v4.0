---
css: [ruta del archivo .css]
title: Manual de Operación DNAFeaturesGL_v0.0.3
---




# Introducción al sistema

DNAFeaturesGL es una librería gráfica, que genera el dibujado (elementos genéticos) en base a datos biológicos. Pretende facilitar la visualización para los usuarios sobre datos genéticos. Esta librería se crea para dar optimización de dibujado a los elementos que participan en la regulación transcripcional de E. Coli k-12, cada elemento es graficado con una función única, antes de llegar a esta función los parámetros de entrada ya han sido validados y en caso de contener errores, no permite el dibujado. 

# Recomendaciones de Hardware

DNAFeaturesGL es una librería que no requiere un hardware en especial. Únicamente requiere un navegador web e internet.

# Pre-requisitos de Software

Algunos de sus pre-requisitos son: JavaScript y la librería @svgdotjs/svg.js

# Instrucciones de Instalación

La instalación se realiza con el siguiente comando si es de manera local:

```
npm i dnafeaturesgl
```

Si se esta trabajando con alguna herramienta de desarrollo, por ejemplo, CodeSanbox únicamente se busca la librería en la ubicación de dependencias, como se muestra a continuación:

![Dependencias](images\Dependencias.PNG)

Figura 1. Instalar librería dnafeaturesgl


## Instalación
1. Requiere dnafeaturesgl y SVG después de la instalación

   ```
   import  draw_gene,draw_dna  from  'dnafeaturesgl' ;
   import { SVG } from 'svgdotjs/svg.js';
   ```

2. Crear el SVG y enlazar con un elemento del DOM

   ```
   const width = window.innerWidth;
   
   const canva = SVG().addTo("#app").size(width, 500);
   ```

3. Crear el DNA

   ```
   const dna = draw_dna({
     id: "dna Test",
     canva: canva,
     x: 0,
     y: 250,
     leftEndPosition: 0,
     rightEndPosition: 900
   });
   ```

## Atributos para el DNA

- Los atributos al dna son distintos para el resto de los elementos genéticos ya que este es indispensable para el graficado de cualquier otro, si el dna no existe, no puede existir un elemento genético. 
- Los atributos para el dna obligatorios son:  `id`, `canva`, `x` ,`y`, `leftEndPosition` y `rightEndPosition`.

| **id**               | Identificador del elemento.                  |
| -------------------- | -------------------------------------------- |
| **canva**            | Lienzo de dibujado.                          |
| **x**                | Posición x dentro del lienzo.                |
| **y**                | Posición y dentro del lienzo.                |
| **leftEndPosition**  | Intervalo (Posición izquierda).              |
| **rightEndPosition** | Intervalo (Posición derecha).                |
| **labelName**        | Nombre.                                      |
| **opacity**          | Opacidad.                                    |
| **stroke**           | Propiedades de estilo en el trazo.           |
| **font**             | Propiedades en el texto.                     |
| **tooltip**          | Texto que se mostrara en el  globo de ayuda. |

## Atributos para los Elementos Genéticos

- Los atributos para los elementos genéticos obligatorios en su dibujado son:  `id`, `canva`, `dna`, `leftEndPosition` y `rightEndPosition`.

| **id**               | Identificador del elemento.                  |
| -------------------- | -------------------------------------------- |
| **canva**            | Lienzo de dibujado.                          |
| **anchor**           | Ancla para elementos sin posición            |
| **dna**              | Función del DNA.                             |
| **leftEndPosition**  | Intervalo (Posición izquierda).              |
| **rightEndPosition** | Intervalo (Posición derecha).                |
| **separation**       | Separación entre el elemento y el DNA.       |
| **labelName**        | Nombre del elemento.                         |
| **strand**           | Dirección del elemento (forward/reverse).    |
| **color**            | Color.                                       |
| **opacity**          | Opacidad.                                    |
| **stroke**           | Propiedades de estilo en el trazo.           |
| **font**             | Tipo de letra para la  etiqueta.             |
| **tooltip**          | Texto que se mostrara en el  globo de ayuda. |

# Comprobación de la instalación

## Dibujar un elemento

### **draw_gene**

```
draw_gene({
  id: "tra",
  canva: canva,
  dna: dna,
  leftEndPosition: 100,
  rightEndPosition: 800
});
```

### **draw_operon**

```
draw_operon({
    id: "open",
    canva: canva,
    dna: dna,
    leftEndPosition: 120,
    rightEndPosition: 580,
    strand: "reverse",
    color: "#FFA200"
});
```

### Resultado

![EjemploDibujado](\images\EjemploDibujado.PNG)

Figura 2. Resultado de DNA, Gene y Operon. 

# Problemas comunes
- Si `leftEndPosition` es mayor a `rightEndPosition` envía error o no se muestra el dibujado.
- Si no existe `draw_dna` no se dibujan los elementos genéticos.

# Ayuda y soporte
Si el usuario tiene algún comentario, sugerencia o problema de cualquier índole relacionado con este software/aplicación, podrá enviar un correo electrónico a: [regusoft@ccg.unam.mx](mailto:regusoft@ccg.unam.mx)

# Definiciones, acrónimos y abreviaturas
SVG: del inlglés Scalable Vector Graphics

DOM: del inglés Document Object Model

# Referencias bibliográficas
__Documentos__
Reporte Residencia Profesional_V1.0: DRAWINGTRACESTOOL V4.0 BASADO EN COMPONENTES CON REACT.

__Páginas Web__  
Título de la página Web:  SVG.js
Web link: https://svgjs.com/docs/3.0/