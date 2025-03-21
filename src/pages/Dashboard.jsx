import React from 'react';
import Card from '../components/Card';
import Table from '../components/Table';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import '../Proyecto.css'; // Importa tus estilos CSS

function Dashboard() {
  // Datos estáticos para los proyectos (reemplaza esto con tus datos reales)
  const proyectos = [
    { nombre: 'Proyecto 1', fechaInicio: '2024-01-01', fechaLimite: '2024-03-01', importancia: 'Alta' },
    { nombre: 'Proyecto 2', fechaInicio: '2024-02-15', fechaLimite: '2024-04-15', importancia: 'Media' },
    { nombre: 'Proyecto 3', fechaInicio: '2024-03-01', fechaLimite: '2024-05-01', importancia: 'Baja' },
  ];

  // Estadísticas estáticas (reemplaza esto con tus datos reales)
  const totalProyectos = proyectos.length;
  const totalTareasPendientes = 5; // Reemplaza con el valor real
  const tareasProximas = 2; // Reemplaza con el valor real

  return (
    <div className="min-h-full">
      <Navbar />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <section id="dashboard" className="content-section">
            <div className="summary">
              <Card title="Proyectos Activos" value={`${totalProyectos} proyectos en curso`} />
              <Card title="Tareas Pendientes" value={`${totalTareasPendientes} tareas sin completar`} />
              <Card title="Próximas Fechas Límite" value={`${tareasProximas} tareas con fechas próximas`} />
            </div>
          </section>

          <section id="proyectos" className="content-section">
            <h2>Lista de Proyectos</h2>
            <Table proyectos={proyectos} />
            <Button onClick={() => window.location.href = 'proyectoss.html'}>Agregar Proyecto</Button>
          </section>
        </div>
      </main>

      <footer>
        <p>©PLANIFY - 2024 (EEMSJ)</p>
      </footer>
    </div>
  );
}

export default Dashboard;