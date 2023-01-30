import React from "react";

const Tecnologia = () => {
  return (
    <>
      <div className="flex flex-row bg-black">{/*Div padre */}
        <div className="basis-2/3">
        <div className="flex flex-row  bg-[url('img6.jpg')] bg-no-repeat bg-cover opacity-40">{/*Div 1 */}
          <h2 className=" text-center pt-6">ASEA Cumplimiento</h2>
          <p className="px-6 py-3">
            Los Regulados que realizan actividades de Exploración y Extracción
            de hidrocarburos deben elaborar un Programa de Detección y
            Reparación de Fugas e implementarlo cada tres meses a todos los
            equipos y sus componentes, identificados como fuentes o posibles
            fuentes de emisiones de metano.{" "}
          </p>
          <p className="px-6 py-6">
            El control de emisiones es fundamental para que la industria cumpla
            con los requisitos reglamentarios ambientales. Las instalaciones
            deben comprender las reglamentaciones específicas que se aplican a
            sus operaciones y diseñar de manera proactiva planes de acción que
            incluyan el control del cumplimiento, la auditoría y la aplicación.
          </p>
        </div>
        <div className=" bg-[url('img7.jpg')] bg-no-repeat bg-cover opacity-40">{/*Div 2 */}
          <h2 className="text-center pt-6">
            Programa para la Detección y Reparación de Fugas (Por sus siglas en
            inglés, LDAR Leak Detection and Repair
          </h2>
          <p className="px-6 py-3">
            Es un proceso reconocido internacionalmente enfocado en localizar y
            reparar las fugas mediante el uso de tecnologías.
          </p>
          <p className="px-6 py-3">
            Contamos con técnicos altamente capacitados en tecnología y equipo
            medioambiental para brindar una respuesta inmediata en la detección
            y reparación de equipos y componentes con fugas.
          </p>
          </div>
        </div>
        <div className=" basis-1/3 bg-[url('img3.jpg')] bg-no-repeat bg-cover opacity-40 ">{/*Div 3 */}
          <h2 className="text-center pt-6">Etapas LDAR.</h2>
          <ul className="list-disc list-inside px-6 py-3">
            <li>Planeación y mejora</li>
            <li>Visitas a campo</li>
            <li>Reparación y monitoreo</li>
            <li>Reporteo y análisis de datos.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tecnologia;
