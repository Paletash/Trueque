# Círculo Cero 2GM1 — Documentación técnica

## Estructura general del proyecto

```
circulo-cero/
├── index.html   → Estructura y vistas de la interfaz
├── styles.css   → Estilos, variables y diseño responsivo
└── app.js       → Lógica, datos, Supabase y generación de PDFs
```

---

## `index.html` — Estructura de vistas

El archivo HTML no tiene lógica propia. Está dividido en **5 vistas** independientes que se muestran u ocultan con la clase `.on`. Solo una vista es visible a la vez.

### Vista pública (`#v-public`)
Página de inicio visible para cualquier persona sin necesidad de login.
- **Encabezado verde** con nombre del proyecto y botón "Ver mis puntos"
- **`#pub-total-pts`** / **`#pub-moves`** / **`#pub-products`** — contadores en tiempo real del grupo
- **`#pub-podium`** — tres tarjetas del top 3 (plata / oro / bronce)
- **`#tablon-filters`** — chips de filtro para el tablón (Todos, Cat. A/B/C, tipos)
- **`#pub-tablon`** — grid de artículos aprobados disponibles para trueque
- **`#pub-teams`** — tarjetas de los 9 equipos con su progreso

### Vista de login (`#v-login`)
Pantalla de autenticación con dos caminos:
- **`#card-stu`** — acceso de alumno (pide boleta)
- **`#card-adm`** — acceso de administrador (pide correo + contraseña)
- **`#login-pass-wrap`** — campo de contraseña, solo visible cuando se elige administrador
- **`#login-err`** — mensaje de error en rojo bajo el formulario

### Vista de alumno (`#v-stu`)
Accesible tras ingresar boleta válida. Contiene 7 sub-páginas:

| ID | Pestaña | Qué muestra |
|----|---------|-------------|
| `#stu-mis` | Mis puntos | Puntos totales, gráfica semanal, historial de movimientos |
| `#stu-articulos` | Mis artículos | Formulario para subir artículos + lista de envíos previos |
| `#stu-tablon` | Tablón | Grid de artículos aprobados del grupo con filtros |
| `#stu-logros` | Logros | Lista de 10 logros con estado bloqueado/obtenido |
| `#stu-equipo` | Equipo | Resumen del equipo y tabla de integrantes |
| `#stu-ranking` | Ranking | Ranking completo del grupo (50 personas) |
| `#stu-opciones` | Opciones | Solo visible en móvil — PDF y cerrar sesión |

#### Formulario de artículo (`#stu-articulos`)
- **`#art-title`** — nombre del artículo
- **`#art-type`** — tipo (Ropa, Libros, Joyería, Electrónicos, etc.)
- **`#art-gb-A/B/C`** — botones de categoría (A=3pts, B=2pts, C=1pt)
- **`#art-desc`** — descripción y estado de conservación
- **`#art-photos`** — input file para seleccionar hasta 2 fotos (comprimidas automáticamente)
- **`#art-previews`** — miniaturas de las fotos seleccionadas
- **`#upload-progress`** — barra de progreso durante la subida
- **`#art-submit-btn`** — botón de envío (se desactiva durante la subida)

### Vista de administrador (`#v-adm`)
Accesible tras autenticación de administrador. Contiene 9 sub-páginas:

| ID | Pestaña | Qué hace |
|----|---------|----------|
| `#adm-dash` | Resumen | Métricas, gráfica semanal, top 5, últimos movimientos |
| `#adm-upload` | Subir art. | Permite al admin subir artículos a nombre de un alumno (Registro Histórico) |
| `#adm-catalogo` | Catálogo | Revisión de artículos: Pendientes / Aprobados / Rechazados |
| `#adm-reg` | Registrar | Formulario para sumar o restar puntos manualmente |
| `#adm-rank` | Ranking | Ranking con búsqueda y filtro por equipo |
| `#adm-equipos` | Equipos | Tarjetas detalladas de cada equipo con sus integrantes |
| `#adm-hist` | Historial | Todos los movimientos, filtrables por alumno/signo/grado |
| `#adm-alerts` | Alertas | Alumnos en negativo y alumnos sin ningún registro |
| `#adm-pdfs` | PDF / Salir | Solo en móvil — botones de reportes y cerrar sesión |

### Modal de artículo (`#art-modal`)
Overlay que se muestra al tocar una tarjeta en el tablón del alumno.
- **`.modal-photos`** — carrusel de fotos con scroll horizontal y snap
- **`.modal-info`** — título, etiquetas de categoría/tipo, descripción y datos del dueño
- **`.modal-close`** — botón × para cerrar
- Clic en el fondo oscuro también lo cierra

---

## `styles.css` — Sistema de diseño

### Variables (`--tokens`)
Todas las propiedades visuales están en variables CSS en `:root` para facilitar cambios globales.

```css
/* Colores principales */
--bg, --surface     → fondos (beige claro / blanco cremoso)
--border            → color de bordes
--text, --muted, --hint → niveles de opacidad del texto

/* Semánticos */
--green / --green-l / --green-d   → positivo, éxito, aprobado
--red   / --red-l   / --red-d     → negativo, error, rechazado
--amber / --amber-l               → advertencia, pendiente
--blue  / --blue-l                → información, categoría B
--purple / --purple-l             → acento decorativo

/* Layout */
--r   → radio de bordes estándar (10px)
--rl  → radio de bordes grande para cards (16px)
--shadow → sombra sutil para cards
```

### Modo oscuro (`[data-theme="dark"]`)
Redefine todas las variables del `:root` para invertir los colores. Se activa añadiendo `data-theme="dark"` al `<html>`. La preferencia se guarda en `localStorage`.

### Clases de componentes

#### Layout
| Clase | Uso |
|-------|-----|
| `.view` | Contenedor de vista principal, `display:none` por defecto |
| `.view.on` | Vista activa, `display:flex` |
| `.page` | Sub-página dentro de una vista, `display:none` por defecto |
| `.page.on` | Sub-página activa, `display:block` |
| `.m-nav` | Barra de navegación horizontal para móvil (oculta en desktop) |
| `aside` | Sidebar de navegación (oculto en móvil) |
| `main` | Área de contenido principal |

#### Cards y contenedores
| Clase | Uso |
|-------|-----|
| `.card` | Tarjeta blanca con borde y sombra sutil |
| `.card-title` | Etiqueta pequeña en mayúsculas para titular secciones |
| `.mc` | Métrica card — número grande con etiqueta pequeña arriba |
| `.metrics` | Grid de 4 columnas para las métricas del admin |

#### Listas y filas
| Clase | Uso |
|-------|-----|
| `.row-item` | Fila con separador, usada en rankings e historial |
| `.rank-n` | Número de posición alineado a la derecha |
| `.avatar` | Círculo con iniciales del alumno |
| `.av-pos / .av-neg / .av-zero / .av-me` | Variantes de color del avatar |
| `.name-col` | Columna de nombre con texto truncado si es largo |
| `.bar-wrap / .bar-bg / .bar-fill` | Barra de progreso horizontal en rankings |

#### Pills y estados
| Clase | Uso |
|-------|-----|
| `.pill` | Etiqueta redondeada pequeña para puntos o estado |
| `.p-pos` | Verde — puntos positivos |
| `.p-neg` | Rojo — puntos negativos |
| `.p-zero` | Gris — sin puntos |
| `.p-me` | Verde sólido — resalta la fila del alumno actual |
| `.status-pending` | Amarillo — artículo en revisión |
| `.status-approved` | Verde — artículo aprobado |
| `.status-rejected` | Rojo — artículo rechazado |

#### Formularios
| Clase | Uso |
|-------|-----|
| `.fg` | Grid de formulario con gap entre campos |
| `.fg.two` | Versión de dos columnas (una en móvil) |
| `.gb` | Botón de grado (A / B / C/ S) |
| `.gb.A / .B / .C/ .S` | Estado seleccionado de cada grado |
| `.sb` | Botón de signo (+ suma / − resta) |
| `.sb.plus / .minus` | Estado seleccionado de cada signo |
| `.submit-btn` | Botón de envío verde de ancho completo |
| `.toast.ok / .err` | Notificación temporal verde o roja |

#### Tablón y catálogo
| Clase | Uso |
|-------|-----|
| `.tablon-grid` | Grid responsivo de tarjetas de artículos |
| `.tablon-card` | Tarjeta de artículo con imagen cuadrada arriba |
| `.tablon-img` | Imagen cuadrada con `object-fit:cover` |
| `.tablon-img-placeholder` | Emoji del tipo cuando no hay foto |
| `.tablon-filters` | Fila de chips de filtro |
| `.filter-chip` | Chip individual de filtro |
| `.filter-chip.active` | Chip seleccionado (fondo verde) |
| `.product-card` | Tarjeta de artículo en la vista del admin |
| `.btn-approve / .btn-reject` | Botones de acción en curaduría |
| `.review-tabs / .review-tab` | Tabs Pendientes / Aprobados / Rechazados |

#### Subida de fotos
| Clase | Uso |
|-------|-----|
| `.photo-upload-area` | Zona de toque con borde punteado para seleccionar fotos |
| `.photo-previews` | Fila de miniaturas de fotos seleccionadas |
| `.photo-preview-wrap` | Contenedor relativo para miniatura + botón eliminar |
| `.photo-preview-remove` | Botón × rojo para quitar una foto |
| `.upload-progress / .upload-progress-bar` | Barra de progreso de subida a Storage |

#### Modal
| Clase | Uso |
|-------|-----|
| `.modal-overlay` | Fondo oscuro semitransparente, posición fija |
| `.modal-content` | Tarjeta blanca centrada, scroll interno vertical |
| `.modal-close` | Botón × en esquina superior derecha |
| `.modal-photos` | Carrusel horizontal de fotos con scroll-snap |
| `.modal-info` | Área de texto con título, tags, descripción y dueño |
| `.modal-title` | Título del artículo en DM Serif Display |
| `.modal-tags` | Fila de etiquetas de categoría y tipo |
| `.modal-desc` | Descripción del artículo con mayor interlineado |
| `.modal-owner` | Tarjeta del dueño con avatar e información |

#### Logros
| Clase | Uso |
|-------|-----|
| `.achievement-card` | Fila con ícono, nombre, descripción y estado |
| `.ach-locked` | Aplica opacidad y escala de grises al logro bloqueado |
| `.medals-strip` | Fila centrada de emojis de medallas bajo los puntos |

---

## `app.js` — Lógica de la aplicación

### Configuración y datos

#### `supabaseUrl` y `supabaseKey`
Credenciales para conectar con el proyecto de Supabase. Inicializan el cliente `supaClient`.

#### `ROSTER`
Objeto con 50 entradas. Cada clave es el número de boleta del alumno y el valor es un array `[nombre, equipo]`. Es la fuente única de verdad para saber quién puede iniciar sesión y a qué equipo pertenece.

#### `TEAM_TOPICS`
Mapea cada equipo (`Eq.1`…`Eq.9`) a su tema de sustentabilidad. Usado en textos descriptivos a lo largo de la app.

#### `TYPE_ICONS`
Mapea tipos de artículo a su emoji representativo. Usado cuando no hay foto disponible.

#### `ACHIEVEMENTS`
Array de 10 objetos de logros. Cada uno tiene `id`, `icon`, `name`, `desc` y una función `check(pts, moves, grades, products)` que recibe el estado actual del alumno y devuelve `true` si el logro está desbloqueado.

#### Variables de estado globales
```js
supaClient               → instancia principal de conexión con Supabase
history                  → array de todos los movimientos del grupo
points                   → objeto { nombre: puntosTotales }
allProducts              → array de todos los artículos (todos los estados)
currentBoleta            → boleta del alumno activo en sesión
currentPath              → 'stu' o 'adm' — ruta de login actual
selGradeVal              → grado seleccionado en el form de registro (A/B/C)
selSignVal               → signo seleccionado ('+' o '-')
artCatVal                → categoría seleccionada en form de artículo
selectedPhotoFiles       → array de File para las fotos a subir
reviewTabState           → tab activa en curaduría ('pending'/'approved'/'rejected')
tablonFilterState        → filtro activo en el tablón público
stuTablonFilterState     → filtro activo en el tablón del alumno
chartWeekly              → instancia de Chart.js del admin (para destruirla antes de recrear)
chartStuWeekly           → instancia de Chart.js del alumno
```

---

### Supabase

#### `initSupabase()`
Conecta a la base de datos y actualiza el indicador visual de conexión informando "Conectado".

#### `setDbStatus(estado, label)`
Actualiza el punto de colores y el texto del indicador "Conectado" en la esquina superior.

#### `subscribeToData(callback)`
Abre una suscripción en canales Socket (Realtime) sobre la tabla `movements` ordenada por timestamp descendente. Cada vez que hay un cambio, actualiza `history`, recalcula `points` y ejecuta el callback. Cancela la suscripción anterior si existía.

#### `subscribeToProducts(callback)`
Igual que `subscribeToData` pero para la tabla `products`. Mantiene `allProducts` sincronizado en tiempo real.

#### `recalc()`
Recorre `history` y suma o resta cada `delta` al objeto `points` de cada alumno. Se llama cada vez que llega un cambio de Supabase.

---

### Imágenes y subida

#### `compressImage(file, maxWidth=900)`
Recibe un `File` de imagen. Dibuja la imagen en un `<canvas>` reducida a un máximo de 900px de ancho manteniendo proporción. Devuelve un nuevo `File` WEBP comprimido al 82% de calidad. Evita subir fotos de varios MB.

#### `previewPhotos(input)`
Lee los archivos seleccionados (máximo 4), los almacena en `selectedPhotoFiles` y muestra miniaturas con un botón × para eliminar cada una.

#### `removePhoto(idx)`
Elimina la foto en el índice dado de `selectedPhotoFiles` y vuelve a renderizar las miniaturas.

---

### Artículos (alumno)

#### `selectArtCat(categoria)`
Guarda la categoría elegida en `artCatVal` y actualiza visualmente los botones A/B/C del formulario.

#### `showArtToast(mensaje, ok)`
Muestra una notificación temporal verde (ok) o roja (error) dentro del formulario de artículos. Se oculta sola a los 3 segundos.

#### `submitArticulo()`
Valida el formulario completo. Si todo está correcto:
1. Deshabilita el botón y muestra la barra de progreso
2. Comprime y sube cada foto a Supabase Storage (bucket `products`) en `{boleta}/{timestamp}_{i}.webp`
3. Inserta un registro en PostgreSQL en la tabla `products`.
   - **Nota:** Si es un **Alumno**, entra con estado `pending`. Si es un **Administrador** (`#adm-upload`), el artículo se aprueba automáticamente (`status: 'approved'`), se le asignan los puntos correspondientes y se marca como "Registro histórico" (sin sumar puntos al saldo del alumno).
4. Limpia el formulario y muestra éxito

#### `renderStuArticulos(ownerName)`
Renderiza la lista de artículos enviados por el alumno activo. Muestra foto, nombre, tipo, categoría, fecha, estado (pendiente/aprobado/rechazado) y el comentario del admin si existe.

---

### Catálogo (admin)

#### `switchReviewTab(tab, el)`
Cambia entre las tres pestañas de curaduría y actualiza el estado `reviewTabState`.

#### `renderCatalogo()`
Filtra `allProducts` por el `reviewTabState` actual y renderiza las tarjetas. Actualiza los badges de notificación en el nav con la cantidad de artículos pendientes. Para artículos **pendientes** muestra el select de categoría y los botones de aprobar/rechazar; para **aprobados** muestra los puntos asignados; para **rechazados** muestra el motivo.

#### `showRejectForm(id)` / `hideRejectForm(id)`
Muestra u oculta el campo de texto para ingresar el motivo del rechazo.

#### `confirmApprove(productId, ownerName, originalCategory)`
Lee la categoría final del `<select>` del admin. Si difiere de la sugerida por el alumno, genera un comentario automático explicando el ajuste. Realiza llamadas asíncronas a Supabase para:
1. Actualizar el producto a `status: 'approved'` con la categoría y puntos finales en la tabla `products`
2. Insertar un movimiento automático en la tabla `movements` (marcado con `auto: true`)

#### `confirmReject(productId)`
Valida que haya un motivo escrito. Actualiza el producto a `status: 'rejected'` con el comentario del admin.

---

### Tablón

#### `filterTablon(val, el)` / `filterStuTablon(val, el)`
Actualiza el estado del filtro activo (público o del alumno respectivamente) y llama al render correspondiente.

#### `renderTablon()`
Filtra `allProducts` por `status === 'approved'` y por el filtro activo. Actualiza el contador `#pub-products`. Renderiza las tarjetas del tablón público con imagen, título, categoría, tipo y dueño.

#### `renderStuTablon()`
Igual que `renderTablon` pero para el tablón dentro de la vista del alumno. Cada tarjeta tiene `onclick="openArtModal(id)"` para abrir el detalle.

---

### Modal de artículo

#### `openArtModal(id)`
Busca el producto en `allProducts` por su id. Construye el HTML del modal con:
- Carrusel de fotos o placeholder con emoji
- Título en tipografía serif
- Pills de categoría y tipo
- Descripción completa
- Tarjeta del dueño con avatar de iniciales

Muestra el modal y bloquea el scroll del body.

#### `closeArtModal(event)`
Si se llamó con evento (clic en el overlay), solo cierra si el clic fue exactamente en el fondo oscuro, no en el contenido interior. Si se llamó sin argumento (botón ×), cierra siempre. Restaura el scroll del body.

---

### Gráficas

#### `getWeeklyData(filterName)`
Agrupa los movimientos de `history` por semana (lunes a domingo). Calcula el total acumulado semana a semana. Si se pasa `filterName`, filtra solo los movimientos de ese alumno. Devuelve `{ labels, data }` para Chart.js.

#### `renderCharts()`
Destruye la instancia anterior si existe y crea una gráfica de línea para el admin con Chart.js. Adapta los colores según el modo claro/oscuro.

#### `renderStuChart(name)`
Igual que `renderCharts` pero filtra los datos del alumno activo.

---

### Login

#### `choosePath(path)`
Configura el formulario de login según si se eligió alumno (`stu`) o admin (`adm`). Para alumno muestra el campo de boleta; para admin muestra correo + contraseña.

#### `backToCards()`
Oculta el formulario y regresa a la selección de tipo de usuario.

#### `doLogin()`
Para alumnos: valida que la boleta exista en `ROSTER` y llama a `enterStudentView`. Para admins: valida el acceso como administrador. Si falla, muestra el error apropiado.

---

### Vistas

#### `enterStudentView()`
Configura el sidebar con el nombre y equipo del alumno. Cambia a la vista `v-stu`. Abre las dos suscripciones en tiempo real (movimientos y productos).

#### `enterAdminView()`
Cambia a la vista `v-adm`. Puebla el selector de alumnos. Inicializa la fecha de hoy. Abre las dos suscripciones en tiempo real.

#### `renderPublic()`
Actualiza todas las secciones de la página pública: contadores, podio, equipos y tablón.

#### `renderAdmAll()`
Llama a todas las funciones de render del admin: dashboard, ranking, historial, alertas, equipos y gráfica.

#### `renderStuAll(name, team)`
Llama a todas las funciones de render del alumno: héroe, historial, logros, equipo, ranking, artículos, tablón y gráfica.

---

### Render de secciones

| Función | Qué renderiza |
|---------|---------------|
| `renderStuHero(name)` | Número grande de puntos, mensaje motivacional y medallas obtenidas |
| `renderStuAchievements(name)` | Lista de 10 logros con estado bloqueado/obtenido |
| `renderStuTeamCard(team)` | Resumen del equipo con puntos totales y barra de progreso |
| `renderStuHist(name)` | Historial de movimientos del alumno |
| `renderStuTeam(team, myName)` | Tabla de integrantes del equipo resaltando al alumno actual |
| `renderStuRanking(myName)` | Ranking completo del grupo resaltando la fila del alumno |
| `renderAdmDash()` | Métricas, top 5 y últimos movimientos del admin |
| `renderAdmTeams()` | Grid de tarjetas detalladas por equipo |
| `renderAdmRank(q, team)` | Ranking filtrable por nombre y equipo |
| `renderAdmHist()` | Historial filtrable por alumno, signo y grado |
| `renderAdmAlerts()` | Alumnos en negativo y alumnos sin registro |

---

### Registro de puntos (admin)

#### `selGrade(g)` / `selSign(s)`
Guardan el grado y signo seleccionados y actualizan visualmente los botones.

#### `doRegister()`
Valida que haya alumno, grado y signo seleccionados. Calcula el delta (`GRADES[grado] * signo`). Guarda el movimiento en Supabase con nombre, grado, signo, delta, fecha, descripción y timestamp.

---

### Helpers

| Función | Qué hace |
|---------|----------|
| `showView(id)` | Oculta todas las `.view` y muestra solo la indicada |
| `logout()` | Cancela suscripciones, limpia estado y regresa al login |
| `initials(nombre)` | Devuelve las dos primeras iniciales del nombre para los avatares |
| `fmtDate(fecha)` | Convierte `YYYY-MM-DD` a `DD/MM/YYYY` para mostrar |
| `pillCls(pts)` | Devuelve la clase CSS correcta según si los puntos son positivos, negativos o cero |
| `avCls(pts)` | Igual que `pillCls` pero para avatares |
| `histItemHtml(mov, showName)` | Genera el HTML de una fila del historial. Si `showName` es true muestra el nombre del alumno (usado en la vista admin) |
| `getAchievements(name)` | Evalúa los 10 logros para un alumno y devuelve el array con `unlocked: true/false` |
| `getMedals(name)` | Devuelve los primeros 3 emojis de logros desbloqueados para mostrar junto al nombre |
| `stuTab(t, el)` / `admTab(t, el)` | Cambia la sub-página activa dentro de la vista del alumno o admin |

---

### Generación de PDFs

Todos los PDFs usan **jsPDF** con el plugin **autoTable**. Cada función sigue el mismo patrón: encabezado verde → contenido → pie de página.

#### `pdfHeader(doc, titulo)`
Dibuja el rectángulo verde en la parte superior, el nombre "Círculo Cero — Grupo 2GM1", el título del reporte y la fecha de generación. Devuelve la coordenada Y desde donde continuar el contenido.

#### `pdfFooter(doc)`
Recorre todas las páginas del documento y añade "Página N de M — Círculo Cero 2GM1" centrado al pie.

| Función PDF | Contenido |
|-------------|-----------|
| `pdfAlumno()` | Constancia individual: datos del alumno, resumen de puntos, artículos aprobados, logros obtenidos, historial completo |
| `pdfRanking()` | Todos los alumnos ordenados por puntos con sus logros y estado |
| `pdfHistorial()` | Todos los movimientos con fecha, alumno, equipo, grado, acción y descripción |
| `pdfEquipos()` | Resumen por equipo + detalle de integrantes de cada uno |
| `pdfAlertas()` | Alumnos con saldo negativo y alumnos sin ningún registro |

---

### Inicialización

Al cargar el archivo se ejecutan estas tres líneas en orden:

```js
initTheme();                              // Aplica el tema guardado en localStorage
initSupabase();                           // Conecta con Supabase
subscribeToProducts(()=>{renderPublic();}); // Carga artículos y muestra la landing
subscribeToData(()=>{renderPublic();});    // Carga movimientos y actualiza la landing
```

La página pública se actualiza cada vez que hay un cambio en cualquiera de las dos tablas de Supabase, sin necesidad de recargar.
