import React from 'react';

function Table({ proyectos }) {
  return (
    <table id="proyectos-lista">
      <thead>
        <tr>
          <th>Nombre del Proyecto</th>
          <th>Fecha de Inicio</th>
          <th>Fecha de Vencimiento</th>
          <th>Importancia</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {proyectos.map((proyecto, index) => (
          <tr key={index}>
            <td>{proyecto.nombre || 'Nombre no definido'}</td>
            <td>{proyecto.fechaInicio || 'Fecha no definida'}</td>
            <td>{proyecto.fechaLimite || 'Fecha no definida'}</td>
            <td>{proyecto.importancia || 'Importancia no definida'}</td>
            <td>
              <span>Ver</span> {/* Placeholder para la acción "Ver" */}
              <span>Editar</span> {/* Placeholder para la acción "Editar" */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;