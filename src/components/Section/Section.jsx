import "./Section.css";
import Button from "../Button/Button";

export default function Section ({ id, bgClass }) {
  return (
    <section id={id} className="section">
      <div className={`section-hero ${bgClass}`}></div>

      <div className="section-body">
        <div className="buttons">
          {id === "autos" && (
            <>
              <Button href="/docs/coberturas.pdf" download>COBERTURAS</Button>
              <Button href="/docs/flotas.pdf" download>FLOTAS</Button>
              <Button href="/docs/pautas-suscripcion.pdf" download>PAUTAS DE SUSCRIPCIÓN</Button>
              <Button href="/docs/productos-moto.pdf" download>PRODUCTOS MOTO</Button>
              <Button href="/docs/productos.pdf" download>PRODUCTOS</Button>
            </>
          )}
          {id === "diversos" && (
            <>
              <Button href="/docs/seguro-caucion.pdf" download>SEGURO DE CAUCIÓN</Button>
              <Button href="/docs/integral-comercio.pdf" download>INTEGRAL DE COMERCIO</Button>
              <Button href="/docs/activa-hogar.pdf" download>ACTIVA HOGAR</Button>
              <Button href="/docs/combinado-familiar-basico.pdf" download>COMBINADO FAMILIAR BÁSICO</Button>
              <Button href="/docs/combinado-familiar-coberturas.pdf" download>COMBINADO FAMILIAR COBERTURAS</Button>
              <Button href="/docs/suscripcion-polizas-hogar.pdf" download>SUSCRIPCIÓN PÓLIZAS HOGAR</Button>
            </>
          )}
          {id === "vida" && (
            <>
              <Button href="/docs/ap.pdf" download>AP</Button>
              <Button href="/docs/contrato-trabajo.pdf" download>CONTRATO DE TRABAJO</Button>
              <Button href="/docs/convenio-mercantil.pdf" download>CONVENIO MERCANTIL</Button>
              <Button href="/docs/empleados-rurales.pdf" download>EMPLEADOS RURALES</Button>
              <Button href="/docs/vida-colectivo.pdf" download>VIDA COLECTIVO OBLIGATORIO</Button>
              <Button href="/docs/salud.pdf" download badge="¡NUEVO!">SALUD</Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}