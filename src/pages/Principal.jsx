const Principal = () => {
  return (
    <div className="contenido-principal">
      <div className="vista-cajas">
        <div className="cajas">
          <div className="lado-izq">
            <div className="tema-caja">Pedidos ordenados</div>
            <div className="cifra">124</div>
          </div>
          <i className="bx bx-line-chart icono"></i>
        </div>
        <div className="cajas">
          <div className="lado-izq">
            <div className="tema-caja">Total ventas</div>
            <div className="cifra">$5.124.000</div>
          </div>
          <i className="bx bx-dollar icono dos"></i>
        </div>
        <div className="cajas">
          <div className="lado-izq">
            <div className="tema-caja">Ganancias netas</div>
            <div className="cifra">$1.589.000</div>
          </div>
          <i className="bx bx-line-chart icono"></i>
        </div>
        <div className="cajas">
          <div className="lado-izq">
            <div className="tema-caja">Mejor vendedor</div>
            <div className="cifra">JuanD</div>
          </div>
          <i className='bx bx-user-pin icono cuatro'></i>
        </div>
      </div>
    </div>
  );
};

export default Principal;
