import React from 'react';
import './Seccion.css';

export function Seccion({ titulo, descripcion, imagenUrl }) {
    return (
        <div className="seccion">
            <div className="text-container">
                <h2 className="seccion-titulo">{titulo}</h2>
                <p className="seccion-descripcion">{descripcion}</p>
            </div>
            <div className="image-container">
                <img src={imagenUrl} alt={titulo} className="seccion-imagen" />
            </div>
        </div>
    );
}
