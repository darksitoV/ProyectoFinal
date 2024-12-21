import React from 'react';
import { Seccion } from '../componentes/Seccion/Seccion';
import miImagen from './img2.jpg'

export default function About(){
  return (
    <div>
      <Seccion
        titulo="Layla God"
        descripcion="Laila es una joven delgada de piel clara y ojos dorados con pupilas blancas. Tiene el pelo azul oscuro, 
        que se va aclarando en las puntas, y está peinado con coletas que giran en las puntas y orejas puntiagudas. 
        Su rostro está enmarcado por un flequillo que también gira en las puntas 
        y que llega hasta más allá de la barbilla y hasta los hombros. Lleva un tocado dorado que parece una tiara adornada 
        con un adorno de copos de nieve y una capucha puntiaguda de color índigo."
        imagenUrl={miImagen}
      />
    </div>
  );
};