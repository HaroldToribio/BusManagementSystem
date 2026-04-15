# 🚌 Bus Management System - Frontend

> **React 19 Single Page Application**
> 
> Interface moderna y responsiva para la gestión de autobuses, rutas, horarios y reservas.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura de Componentes](#estructura-de-componentes)
- [Integración con API](#integración-con-api)

## ✨ Características

### Funcionalidades Principales
- 🚌 **Gestión de Autobuses** - Crear, editar, listar y eliminar autobuses
- 🛣️ **Gestión de Rutas** - Administrar puntos de origen y destino
- 📅 **Gestión de Horarios** - Asignar horarios a rutas y autobuses
- 🎫 **Gestión de Reservas** - Crear y gestionar reservas de pasajeros
- 🔍 **Búsqueda y Filtrado** - Navegar fácilmente por los datos

### Mejoras de UX/UI
- 📢 **Notificaciones Inline** - Feedback personalizado para todas las acciones (éxito, error, información)
- 🌍 **Multiidioma** - Soporte completo para Español e Inglés
- 🌙 **Dark Mode** - Tema oscuro/claro con preferencias persistentes
- ♿ **Accesible** - Navegación intuitiva y componentes accesibles
- 📱 **Responsivo** - Diseño adaptable a todos los tamaños de pantalla

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **React** | 19.1.0 | Framework frontend |
| **React Router** | - | Enrutamiento de páginas |
| **Axios** | 1.10.0 | HTTP client para API calls |
| **React Icons** | 5.6.0 | Librería de iconos |
| **CSS3** | - | Estilos y animaciones |

## 🚀 Instalación

### Requisitos Previos
- **Node.js** v16+ (con npm incluido)
- **Backend API** ejecutándose en `http://localhost:5231`

### Pasos de Instalación

1. Navega a la carpeta del frontend:
   ```bash
   cd BusManagementAPI/frontend/bus-management-frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

4. Abre tu navegador en:
   ```
   http://localhost:3000
   ```

## 📖 Uso

### Scripts Disponibles

```bash
# Inicia el servidor de desarrollo
npm start

# Ejecuta las pruebas unitarias
npm test

# Genera build de producción
npm run build

# Ejecuta linter para verificar código
npm run lint
```

## 🏗️ Estructura de Componentes

```
src/
├── Components/
│   ├── NavBar.jsx              # Barra de navegación principal
│   ├── AddBusForm.jsx          # Formulario para crear autobús
│   ├── AddRouteForm.jsx        # Formulario para crear ruta
│   ├── AddScheduleForm.jsx     # Formulario para crear horario
│   ├── BusList.jsx             # Lista y edición de autobuses
│   ├── RoutesList.jsx          # Lista y edición de rutas
│   ├── EditBusForm.jsx         # Formulario para editar autobús
│   ├── ReservationList.jsx     # Lista y creación de reservas
│   └── FormNotification.jsx    # Componente de notificaciones inline
├── pages/
│   └── LandingPage.jsx         # Página de inicio
├── context/
│   ├── LanguageContext.js      # Controla idioma (EN/ES)
│   └── (otros contextos)
├── services/
│   └── axiosConfig.js          # Configuración de Axios
├── App.js                      # Componente raíz
├── App.css                     # Estilos globales
└── index.js                    # Entry point
```

### Componentes Clave

#### FormNotification.jsx
Componente reutilizable para mostrar notificaciones inline en lugar de alerts:
```jsx
<FormNotification 
  message="Registro creado exitosamente"
  type="success"  // 'success' | 'error' | 'info'
/>
```

**Tipos de Notificación:**
- `success` - Fondo verde, para operaciones completadas
- `error` - Fondo rojo, para errores de validación o servidor
- `info` - Fondo azul, para información general

#### LanguageContext
Maneja el cambio de idioma (English/Español):
```jsx
const { language, setLanguage, t } = useContext(LanguageContext);
<button onClick={() => setLanguage('es')}>Español</button>
```

## 🔌 Integración con API

### Configuración Base
- **URL Base:** `http://localhost:5231/api`
- **Autenticación:** No requerida en desarrollo
- **Headers:** `Content-Type: application/json`

### Endpoints Consumidos
```javascript
// Buses
GET    /api/buses
POST   /api/buses
PUT    /api/buses/{id}
DELETE /api/buses/{id}

// Rutas
GET    /api/routes
POST   /api/routes
PUT    /api/routes/{id}
DELETE /api/routes/{id}

// Horarios
GET    /api/schedules
POST   /api/schedules
PUT    /api/schedules/{id}
DELETE /api/schedules/{id}

// Reservas
GET    /api/reservations
POST   /api/reservations
PUT    /api/reservations/{id}
DELETE /api/reservations/{id}
```

### Ejemplo de Request con Axios
```javascript
import axios from 'axios';

// Crear autobús
axios.post('/api/buses', {
  licensePlate: 'ABC-123',
  capacity: 50,
  brand: 'Mercedes-Benz',
  model: 'O 400 RSD'
})
.then(response => {
  setMessage('Autobús creado exitosamente');
  setMessageType('success');
})
.catch(error => {
  setMessage(error.response?.data?.message || 'Error al crear');
  setMessageType('error');
});
```

## 🌍 Soporte Multiidioma

El sistema soporta inglés y español con switching en tiempo real:

```javascript
const { language, setLanguage, t } = useContext(LanguageContext);

// Uso de traducciones
<h2>{t.busManagement}</h2>  // Se traduce automáticamente
<button onClick={() => setLanguage('en')}>English</button>
```

Las preferencias se guardan en `localStorage` y se cargan al reiniciar.

## 🌙 Dark Mode

Activable desde el navbar, persiste en `localStorage`:

```javascript
// Dark mode está disponible como toggle en la parte superior del navbar
// La preferencia se guarda y se restablece al recargar la página
```

## 📝 Convenciones de Código

### Nombrado de Componentes
- PascalCase para nombres de componentes: `AddBusForm.jsx`
- camelCase para funciones y variables: `fetchBuses()`

### Estructura de Formularios
Todos los formularios siguen el patrón:
1. Estado del formulario (`useState`)
2. Manejador de submit con try-catch
3. Feedback con `FormNotification`
4. Reinicio de formulario tras éxito

### Manejo de Errores
```javascript
try {
  const response = await axios.post(endpoint, data);
  setMessage(t.successMessage);
  setMessageType('success');
} catch (error) {
  setMessage(error.response?.data?.message || t.errorMessage);
  setMessageType('error');
}
```

## 🚧 Desarrollo Futuro

- [ ] Autenticación y autorización
- [ ] Upload de imágenes para autobuses
- [ ] Reporte de estadísticas
- [ ] Exportar datos a PDF/Excel
- [ ] Tests unitarios con Jest
- [ ] Mejoras de performance

## 🐛 Troubleshooting

### "Cannot POST /api/buses"
**Solución:** Verifica que el backend está corriendo en `http://localhost:5231`

### CORS Error
**Solución:** Asegúrate que el backend tiene CORS habilitado para `localhost:3000`

### Formulario no responde
**Solución:** Abre la consola (F12) y revisa los errores de red en la pestaña Network

### Cambio de idioma no persiste
**Solución:** Verifica que localStorage no esté deshabilitado en el navegador

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev)
- [Guía de Axios](https://axios-http.com)
- [React Router Docs](https://reactrouter.com)

## ✒️ Autor
**Harold Toribio** - Desarrollador Full Stack
