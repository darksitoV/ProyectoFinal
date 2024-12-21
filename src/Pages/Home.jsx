import React from 'react';
import LaylaCardsito from '../componentes/CardLayla/LaylaCard';
import { Seccion } from '../componentes/Seccion/Seccion';
import miImagen from './img4.jpg'

export default function Home(){
  return (
    <div>
      <h2>Layla Wiki</h2>
      <LaylaCardsito/>
      <Seccion
        titulo="Layla God"
        descripcion="Laila leyendo libro y.y 
        orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus elementum lorem vitae hendrerit. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum
         primis in faucibus. Donec semper, nisi vel feugiat feugiat, tellus ligula dictum urna, non vestibulum tellus purus nec eros. Mauris auctor dictum
          ligula. Nunc dictum"
        imagenUrl={miImagen}
      />
    </div>
  );
};