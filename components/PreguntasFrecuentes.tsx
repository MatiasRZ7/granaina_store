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
  <span className="text-body-bold mr-1">Preguntas frecuentes</span> de
  Excursiones en Riviera Maya Tour
</h1>
      <div className="flex items-center justify-center pl-10">
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
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
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
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Visado para viajar como turista a México con pasaporte español: ¿Es
                  obligatorio?
                </AccordionTrigger>
                <AccordionContent>
                  Según la información disponible en el Ministerio de Asuntos
                  Exteriores y la Embajada de México en España, para viajar a
                  México desde territorio español solamente es obligatorio tener
                  el pasaporte español en vigor. Por lo que, se puede viajar a
                  México con residencia española sin problema.
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
