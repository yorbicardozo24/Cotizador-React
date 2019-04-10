import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (datos) =>{
    // console.log(datos);
    const {marca, year, plan} = datos;

    let resultado = 2000;

    const diferencia = obtenerDiferenciaAnio(year);

    resultado -= ((diferencia * 3) * resultado) / 100;
    
    resultado = calcularMarca(marca) * resultado;

    let incrementoPlan = obtenerPlan(plan);

    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    const datosAuto = {
      marca,
      plan,
      year
    }

    this.setState({
      resultado,
      datos: datosAuto
    })

  }
  render() {
    return (
      <div className="contenedor">
          <Header 
            titulo = "Cotizador de seguro de auto"
          />
          <div className="contenedor-formulario">
            <Formulario 
              cotizarSeguro={this.cotizarSeguro}
            />
            <Resumen 
              resultado={this.state.resultado}
              datos={this.state.datos}
            />
          </div>
      </div>
    );
  }
}

export default App;
