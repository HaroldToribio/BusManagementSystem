import React, { createContext, useEffect, useState } from 'react';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      buses: 'Buses',
      routes: 'Routes',
      schedules: 'Schedules',
      reservations: 'Reservations',
      brand: 'Bus Management',
      backToHome: 'Back to Home',
      themeToggle: 'Toggle dark mode',
      languageLabel: 'Language',
      english: 'English',
      spanish: 'Español'
    },
    landing: {
      title: 'Bus Management System',
      subtitle: 'Efficient and Reliable Bus Transportation Solutions',
      aboutTitle: 'About Our System',
      aboutText: 'Our comprehensive Bus Management System provides all the tools you need to efficiently manage bus transportation operations. From fleet management to passenger reservations, our platform ensures smooth operations and convenient booking experiences.',
      featuresTitle: 'System Features',
      footer: '© 2024 Bus Management System. All rights reserved.',
      featureDetailsLabel: 'How it works:',
      featureActionAdd: 'Add new entries',
      featureActionManage: 'View and manage existing records',
      featureActionEdit: 'Edit and update information',
      features: [
        {
          icon: 'bus',
          title: 'Bus Management',
          description: 'Manage your entire bus fleet with comprehensive details including capacity, status, and maintenance records.',
          details: 'Add new buses with specifications, update existing bus information, track maintenance schedules, and monitor bus availability for efficient fleet management.',
          path: '/buses',
          linkText: 'Manage Buses',
          color: '#667eea'
        },
        {
          icon: 'route',
          title: 'Route Management',
          description: 'Create and manage bus routes with detailed information about origins, destinations, and route characteristics.',
          details: 'Define new routes with distance, duration, and key stops. Update route information, manage route availability, and track route performance metrics.',
          path: '/routes',
          linkText: 'Manage Routes',
          color: '#764ba2'
        },
        {
          icon: 'schedule',
          title: 'Schedule Management',
          description: 'Plan and organize bus schedules with precise timing and route assignments for optimal service coverage.',
          details: 'Create schedules by assigning buses to routes with specific departure and arrival times. Manage recurring schedules, handle schedule conflicts, and update timing as needed.',
          path: '/schedules',
          linkText: 'Manage Schedules',
          color: '#f093fb'
        },
        {
          icon: 'reservation',
          title: 'Reservation System',
          description: 'Handle passenger reservations with real-time availability checking and comprehensive booking management.',
          details: 'Process new reservations with passenger details and seat selection. View all bookings, update reservation status, and manage cancellations efficiently.',
          path: '/reservations',
          linkText: 'View Reservations',
          color: '#4facfe'
        }
      ]
    },
    pages: {
      busesTitle: 'Bus Management',
      reservationsTitle: 'Reservations Management',
      schedulesTitle: 'Schedule & Route Management',
      routesTitle: 'Route Management'
    },
    busForm: {
      title: 'Add New Bus',
      busNumber: 'Bus Number',
      model: 'Model',
      capacity: 'Capacity',
      year: 'Year',
      status: 'Status',
      placeholderBusNumber: 'Enter bus number',
      placeholderModel: 'Enter model',
      placeholderCapacity: 'Enter capacity',
      placeholderYear: 'Enter year',
      placeholderStatus: 'Enter status',
      button: 'Add Bus',
      addedSuccess: 'Bus added successfully',
      addError: 'Error adding bus',
      updatedSuccess: 'Bus updated successfully',
      updateError: 'Error updating bus'
    },
    routeForm: {
      title: 'Add New Route',
      origin: 'Origin',
      destination: 'Destination',
      placeholderOrigin: 'Enter origin city',
      placeholderDestination: 'Enter destination city',
      button: 'Add Route',
      addedSuccess: 'Route added successfully',
      addError: 'Error adding route',
      updatedSuccess: 'Route updated successfully',
      updateError: 'Error updating route'
    },
    scheduleForm: {
      title: 'Add Schedule',
      departureTime: 'Departure Time',
      arrivalTime: 'Arrival Time',
      route: 'Route',
      selectRoute: 'Select Route',
      placeholderDeparture: 'Enter departure time',
      placeholderArrival: 'Enter arrival time',
      button: 'Add Schedule',
      addedSuccess: 'Schedule added successfully',
      addError: 'Error adding schedule',
      fetchRoutesError: 'Unable to load routes, please try again later.'
    },
    reservationForm: {
      title: 'Add Reservation',
      passengerName: 'Passenger Name',
      schedule: 'Schedule',
      selectSchedule: 'Select a schedule',
      placeholderPassenger: 'Enter passenger name',
      buttonAdd: 'Add Reservation',
      editTitle: 'Edit Reservation',
      buttonUpdate: 'Update Reservation',
      cancel: 'Cancel',
      table: {
        passenger: 'Passenger',
        schedule: 'Schedule',
        route: 'Route',
        actions: 'Actions'
      },
      edit: 'Edit',
      delete: 'Delete',
      fillFields: 'Please complete all fields.',
      addedSuccess: 'Reservation created successfully',
      addError: 'Error creating reservation',
      updatedSuccess: 'Reservation updated successfully',
      updateError: 'Error updating reservation',
      deleteConfirmation: 'Are you sure you want to delete this reservation?',
      yes: 'Yes',
      no: 'No'
    },
    busList: {
      title: 'Bus List',
      editTitle: 'Edit Bus',
      update: 'Update',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      deleteConfirmation: 'Are you sure you want to delete this bus?',
      deleteError: 'Could not delete the bus.',
      updatedSuccess: 'Bus updated successfully',
      updateError: 'Error updating bus',
      table: {
        id: 'ID',
        number: 'Number',
        model: 'Model',
        capacity: 'Capacity',
        year: 'Year',
        status: 'Status',
        actions: 'Actions'
      }
    },
    routesList: {
      title: 'Routes List',
      editTitle: 'Edit Route',
      origin: 'Origin',
      destination: 'Destination',
      update: 'Update',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      deleteConfirmation: 'Are you sure you want to delete this route?',
      deleteError: 'Error deleting route.',
      updatedSuccess: 'Route updated successfully',
      updateError: 'Error updating route',
      table: {
        id: 'ID',
        origin: 'Origin',
        destination: 'Destination',
        actions: 'Actions'
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      buses: 'Autobuses',
      routes: 'Rutas',
      schedules: 'Horarios',
      reservations: 'Reservas',
      brand: 'Gestión de Autobuses',
      backToHome: 'Volver al Inicio',
      themeToggle: 'Cambiar modo oscuro',
      languageLabel: 'Idioma',
      english: 'English',
      spanish: 'Español'
    },
    landing: {
      title: 'Sistema de Gestión de Autobuses',
      subtitle: 'Soluciones Eficientes y Confiables de Transporte en Autobús',
      aboutTitle: 'Sobre Nuestro Sistema',
      aboutText: 'Nuestro Sistema de Gestión de Autobuses ofrece todas las herramientas necesarias para administrar operaciones de transporte de manera eficiente. Desde la gestión de flotas hasta las reservas de pasajeros, nuestra plataforma garantiza operaciones fluidas y experiencias de reserva cómodas.',
      featuresTitle: 'Características del Sistema',
      footer: '© 2024 Sistema de Gestión de Autobuses. Todos los derechos reservados.',
      featureDetailsLabel: 'Cómo funciona:',
      featureActionAdd: 'Agregar nuevas entradas',
      featureActionManage: 'Ver y gestionar registros existentes',
      featureActionEdit: 'Editar y actualizar información',
      features: [
        {
          icon: 'bus',
          title: 'Gestión de Autobuses',
          description: 'Gestiona toda tu flota de autobuses con detalles completos como capacidad, estado y mantenimiento.',
          details: 'Agrega nuevos autobuses con especificaciones, actualiza información existente, sigue los horarios de mantenimiento y monitorea la disponibilidad.',
          path: '/buses',
          linkText: 'Gestionar Autobuses',
          color: '#667eea'
        },
        {
          icon: 'route',
          title: 'Gestión de Rutas',
          description: 'Crea y gestiona rutas de autobuses con información detallada sobre origen, destino y características de la ruta.',
          details: 'Define nuevas rutas con distancia, duración y paradas clave. Actualiza información, administra disponibilidad y controla el desempeño.',
          path: '/routes',
          linkText: 'Gestionar Rutas',
          color: '#764ba2'
        },
        {
          icon: 'schedule',
          title: 'Gestión de Horarios',
          description: 'Planifica y organiza horarios de autobuses con tiempos precisos y asignaciones de rutas para una cobertura óptima.',
          details: 'Crea horarios asignando autobuses a rutas con horas de salida y llegada. Gestiona horarios recurrentes, conflictos y actualizaciones.',
          path: '/schedules',
          linkText: 'Gestionar Horarios',
          color: '#f093fb'
        },
        {
          icon: 'reservation',
          title: 'Sistema de Reservas',
          description: 'Gestiona reservas de pasajeros con comprobación de disponibilidad en tiempo real y administración completa de reservas.',
          details: 'Procesa nuevas reservas con datos de pasajeros y selección de asiento. Ve todas las reservas, actualiza estados y maneja cancelaciones.',
          path: '/reservations',
          linkText: 'Ver Reservas',
          color: '#4facfe'
        }
      ]
    },
    pages: {
      busesTitle: 'Gestión de Autobuses',
      reservationsTitle: 'Gestión de Reservas',
      schedulesTitle: 'Gestión de Horarios y Rutas',
      routesTitle: 'Gestión de Rutas'
    },
    busForm: {
      title: 'Agregar Nuevo Autobús',
      busNumber: 'Número de Autobús',
      model: 'Modelo',
      capacity: 'Capacidad',
      year: 'Año',
      status: 'Estado',
      placeholderBusNumber: 'Ingrese número de autobús',
      placeholderModel: 'Ingrese modelo',
      placeholderCapacity: 'Ingrese capacidad',
      placeholderYear: 'Ingrese año',
      placeholderStatus: 'Ingrese estado',
      button: 'Agregar Autobús',
      addedSuccess: 'Autobús agregado correctamente',
      addError: 'Error al agregar autobús',
      updatedSuccess: 'Autobús actualizado correctamente',
      updateError: 'Error al actualizar autobús'
    },
    routeForm: {
      title: 'Agregar Nueva Ruta',
      origin: 'Origen',
      destination: 'Destino',
      placeholderOrigin: 'Ingrese ciudad de origen',
      placeholderDestination: 'Ingrese ciudad de destino',
      button: 'Agregar Ruta',
      addedSuccess: 'Ruta agregada correctamente',
      addError: 'Error al agregar ruta',
      updatedSuccess: 'Ruta actualizada correctamente',
      updateError: 'Error al actualizar ruta'
    },
    scheduleForm: {
      title: 'Agregar Horario',
      departureTime: 'Hora de Salida',
      arrivalTime: 'Hora de Llegada',
      route: 'Ruta',
      selectRoute: 'Seleccionar Ruta',
      placeholderDeparture: 'Ingrese hora de salida',
      placeholderArrival: 'Ingrese hora de llegada',
      button: 'Agregar Horario',
      addedSuccess: 'Horario agregado correctamente',
      addError: 'Error al agregar horario',
      fetchRoutesError: 'No se pudieron cargar las rutas, inténtalo de nuevo más tarde.'
    },
    reservationForm: {
      title: 'Agregar Reserva',
      passengerName: 'Nombre del Pasajero',
      schedule: 'Horario',
      selectSchedule: 'Selecciona un horario',
      placeholderPassenger: 'Ingrese nombre del pasajero',
      buttonAdd: 'Agregar Reserva',
      editTitle: 'Editar Reserva',
      buttonUpdate: 'Actualizar Reserva',
      cancel: 'Cancelar',
      table: {
        passenger: 'Pasajero',
        schedule: 'Horario',
        route: 'Ruta',
        actions: 'Acciones'
      },
      edit: 'Editar',
      delete: 'Eliminar',
      fillFields: 'Por favor, complete todos los campos.',
      addedSuccess: 'Reserva creada correctamente',
      addError: 'Error al crear la reserva',
      updatedSuccess: 'Reserva actualizada correctamente',
      updateError: 'Error al actualizar la reserva',
      deleteConfirmation: '¿Estás seguro de eliminar esta reserva?',
      yes: 'Sí',
      no: 'No'
    },
    busList: {
      title: 'Lista de Autobuses',
      editTitle: 'Editar Autobús',
      update: 'Actualizar',
      cancel: 'Cancelar',
      edit: 'Editar',
      delete: 'Eliminar',
      deleteConfirmation: '¿Estás seguro de eliminar este autobús?',
      deleteError: 'No se pudo eliminar el autobús.',
      updatedSuccess: 'Autobús actualizado correctamente',
      updateError: 'Error al actualizar autobús',
      table: {
        id: 'ID',
        number: 'Número',
        model: 'Modelo',
        capacity: 'Capacidad',
        year: 'Año',
        status: 'Estado',
        actions: 'Acciones'
      }
    },
    routesList: {
      title: 'Lista de Rutas',
      editTitle: 'Editar Ruta',
      origin: 'Origen',
      destination: 'Destino',
      update: 'Actualizar',
      cancel: 'Cancelar',
      edit: 'Editar',
      delete: 'Eliminar',
      deleteConfirmation: '¿Estás seguro de eliminar esta ruta?',
      deleteError: 'Error al eliminar la ruta.',
      updatedSuccess: 'Ruta actualizada correctamente',
      updateError: 'Error al actualizar ruta',
      table: {
        id: 'ID',
        origin: 'Origen',
        destination: 'Destino',
        actions: 'Acciones'
      }
    }
  }
};

export const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'es') {
      setLanguage('es');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
