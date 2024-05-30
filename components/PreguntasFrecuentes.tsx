import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PreguntasFrecuentes = () => {
  return (
    <>
      <h1 className="flex flex-wrap items-center justify-center text-center">
        <span className="text-body-bold mr-1 underline">
          Preguntas frecuentes
        </span>{" "}
        de Excursiones en Riviera Maya Tour
      </h1>
      <div className="flex items-center justify-center pl-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Con cuánta antelación debo reservar la excursión por Riviera
                  Maya?
                </AccordionTrigger>
                <AccordionContent>
                  Te recomendamos hacer la reserva de tus excursiones a la
                  Riviera Maya lo antes posible, para no quedarte sin plazas.
                  Aunque si te gustan los viajes de última hora, necesitarás una
                  antelación mínima de 48 horas para apuntarte a nuestras
                  excursiones.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  ¿Es recomendable usar protector solar y antimosquitos
                  biodegradable en México?
                </AccordionTrigger>
                <AccordionContent>
                  Si, en algunos espacios son muy estrictos. Además, México está
                  empapado de reservas naturales donde está prohibido echarse
                  cualquier producto. Como por ejemplo en Isla Contoy o en nado
                  con el tiburón ballena. Recomendamos que os echéis los
                  productos antes de que os recojan y en los lugares donde está
                  permitido.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  El seguro de viaje: ¿Será necesario contratarlo?
                </AccordionTrigger>
                <AccordionContent>
                  No existe ninguna obligatoriedad por parte de ninguna
                  autoridad española o mexicana de contratar un seguro de viaje,
                  ni es uno de los requisitos para viajar a México desde España.
                  Sin embargo, es altamente recomendable contratarlo para
                  curarte en salud y disfrutar de tu estancia en la Riviera
                  Maya.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  ¿Se puede conducir en México con carnet español?
                </AccordionTrigger>
                <AccordionContent>
                  Para conducir un coche por las carreteras de México, y en
                  concreto por la Riviera Maya, te sirve el carnet de conducir
                  español. El permiso de circulación de España te habilita a
                  conducir vehículos por el territorio del estado de Quintana
                  Roo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  ¿Es obligatorio tener un vuelo de salida de México antes de
                  entrar?
                </AccordionTrigger>
                <AccordionContent>
                  Uno de los documentos que te solicitan en el control de
                  pasaportes a la entrada de México es el billete de avión de
                  vuelta a España, así como la reserva del hotel o datos de
                  contacto de aquellos que te van a acoger durante tu estancia,
                  para garantizar que se trata de un viaje turístico y que
                  permanecerás menos de 180 días en el país.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  ¿Qué requisitos debo cumplir para viajar a la Riviera Maya
                  desde España?
                </AccordionTrigger>
                <AccordionContent>
                  Pasaporte en vigor, Forma Migratoria Múltiple (FMM),
                  Declaración de aduanas y Billete de avión de vuelta a España y
                  reserva del hotel o lugar en el que te vas a hospedar durante
                  los días que permanezcas en México
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Visado para viajar como turista a México con pasaporte
                  español: ¿Es obligatorio?
                </AccordionTrigger>
                <AccordionContent>
                  Según la información disponible en el Ministerio de Asuntos
                  Exteriores y la Embajada de México en España, para viajar a
                  México desde territorio español solamente es obligatorio tener
                  el pasaporte español en vigor. Por lo que, se puede viajar a
                  México con residencia española sin problema.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  ¿Qué vacunas se necesitan para viajar a México?
                </AccordionTrigger>
                <AccordionContent>
                  Actualmente no existe ninguna vacuna necesaria u obligatoria
                  para viajar a México. Así, las pautas de vacunación ya no son
                  requisitos para viajar a México desde España. No obstante, es
                  recomendable estar protegido ante enfermedades como la
                  Hepatitis de tipo A y B, así como del tifus.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>
                  ¿Cuánto tiempo se puede estar como turista en México?
                </AccordionTrigger>
                <AccordionContent>
                  El período permitido para permanecer como{" "}
                  <span className="underline">turista</span> en México varía
                  según la nacionalidad del visitante. En el caso de ciudadanos
                  españoles que deseen disfrutar de la paradisíaca Riviera Maya,
                  la estancia máxima permitida es de 180 días.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10 ">
                <AccordionTrigger>
                  ¿Dónde puedo obtener información actualizada sobre los
                  requisitos para viajar a México desde España?
                </AccordionTrigger>
                <AccordionContent>
                  Puedes consultar el sitio web oficial de la{" "}
                  <a
                    href="https://embamex.sre.gob.mx/espana/index.php/inicio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Embajada de México en España
                  </a>{" "}
                  y las actualizaciones de los organismos españoles como es el
                  <a
                    href="https://www.exteriores.gob.es/es/Paginas/index.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Ministerio de Asuntos Exteriores.
                  </a>{" "}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreguntasFrecuentes;
