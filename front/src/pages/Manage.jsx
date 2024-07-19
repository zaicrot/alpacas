import React from 'react';

const Manage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Administrar Alpacas</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Lista de Alpacas</h2>
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Edad</th>
              <th className="py-2 px-4">Genero</th>
              <th className="py-2 px-4">Estado</th>
              <th className="py-2 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí deberías mapear tus datos de alpacas */}
            <tr>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">3 años</td>
              <td className="py-2 px-4">Macho</td>
              <td className="py-2 px-4">Vendido</td>
              <td className="py-2 px-4">
                <button className="bg-blue-500 text-white py-1 px-2 rounded">Editar</button>
                <button className="bg-red-500 text-white py-1 px-2 rounded ml-2">Eliminar</button>
              </td>
            </tr>
            {/* Fin del mapeo */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Manage;
