"use client";
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/lib/languageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Definir las traducciones
const faqTranslations: {
  [key: string]: {
    title: string;
    questions: { question: string; answer: any }[];
  };
} = {
  es: {
    title: "Preguntas frecuentes de Excursiones en",
    questions: [
      {
        question:
          "¿Con cuánta antelación debo reservar la excursión por Riviera Maya?",
        answer: `Te recomendamos hacer la reserva de tus excursiones a la
                  Riviera Maya lo antes posible, para no quedarte sin plazas.
                  Aunque si te gustan los viajes de última hora, necesitarás una
                  antelación mínima de 48 horas para apuntarte a nuestras
                  excursiones.`,
      },
      {
        question:
          "¿Es recomendable usar protector solar biodegradable en México?",
        answer: `Si, en algunos espacios son muy estrictos. Además, México está
                  empapado de reservas naturales donde está prohibido echarse
                  cualquier producto. Como por ejemplo en Isla Contoy o en nado
                  con el tiburón ballena. Recomendamos que os echéis los
                  productos antes de que os recojan y en los lugares donde está
                  permitido.`,
      },
      {
        question: "El seguro de viaje: ¿Será necesario contratarlo?",
        answer: `El seguro de viaje no es obligatorio para visitar México desde EE. UU., pero es muy recomendable.`,
      },
      {
        question: "¿Se puede conducir en México con una licencia de conducir de Estados Unidos?",
        answer: `Sí, puedes conducir en México para visitas de corto plazo con una licencia de conducir estadounidense válida.`,
      },
      {
        question:
          "¿Es obligatorio tener un vuelo de salida de México antes de entrar?",
        answer: `Si bien no siempre es obligatorio, contar con un vuelo de salida o un comprobante de viaje posterior puede ayudar a garantizar un ingreso sin problemas a México y, a menudo, las aerolíneas lo exigen. Es una buena práctica tener estos trámites en regla para evitar complicaciones durante el viaje.`,
      },
      {
        question:
          "¿Qué requisitos debo cumplir para viajar a la Riviera Maya desde EEUU?",
        answer: `Pasaporte vigente, Forma Migratoria Múltiple (FMM), Declaración de Aduanas, boleto de avión de regreso a EUA y reservación del hotel o lugar donde se hospedará durante los días que permanezca en México.`,
      },
      {
        question:
          "¿Se requiere visa para viajar como turista a México con un pasaporte de Estados Unidos?",
        answer: `No, los ciudadanos estadounidenses que viajen a México con fines turísticos para estancias de hasta 180 días no necesitan visa. Sin embargo, deberán completar una Forma Migratoria Múltiple (FMM), también conocida como tarjeta de turista, que es obligatoria para todos los turistas.`,
      },
      {
        question: "¿Qué vacunas se necesitan para viajar a México?",
        answer: `Actualmente no existen vacunas necesarias ni obligatorias para viajar a México, por lo que las pautas de vacunación ya no son obligatorias para viajar a México desde Estados Unidos. Sin embargo, es recomendable estar protegido contra enfermedades como la hepatitis A y B, así como el tifus.`,
      },
      {
        question: "¿Cuánto tiempo se puede estar como turista en México?",
        answer: `El periodo permitido para permanecer como turista en México varía según la nacionalidad del visitante. En el caso de los ciudadanos estadounidenses que deseen disfrutar de la paradisíaca Riviera Maya, la estancia máxima permitida es de 180 días.`,
      },
      {
        question:
          "¿Dónde puedo obtener información actualizada sobre los requisitos para viajar a México desde EUA?",
          answer: (
            <>
              Para obtener la información más actualizada sobre los requisitos para viajar a México desde EE. UU., puede visitar el sitio web de la {" "}
              <a
                className="bg-blue-200 rounded"
                href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Mexico.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oficina de Asuntos Consulares del Departamento de Estado de EE. UU.
              </a>
              .
            </>
          ),
      },
    ],
  },
  en: {
    title: "Frequently Asked Questions about Excursions in",
    questions: [
      {
        question: "How far in advance should I book the Riviera Maya tour?",
        answer: `We recommend you book your excursions to the Riviera Maya as soon as possible, 
          so as not to run out of places. 
          Although if you like last minute trips, you will need a minimum notice of 48 hours to sign up for our excursions.`,
      },
      {
        question: "Is it advisable to use biodegradable sunscreen in Mexico?",
        answer: `Yes, in some spaces they are very strict. Furthermore, Mexico is
                    soaked in nature reserves where lying down is prohibited
                    any product. For example, on Isla Contoy or swimming.
                    with the whale shark. We recommend that you take the
                    products before they pick you up and in the places where it is
                    permitted.`,
      },
      {
        question: "Is travel insurance necessary?",
        answer:
          "Travel insurance is not mandatory for visiting Mexico from the USA, but it is highly recommended. ",
      },
      {
        question: "Can you drive in Mexico with a USA driver's license?",
        answer:
          "Yes, you can drive in Mexico for short-term visits with a valid USA driver's license",
      },
      {
        question:
          "Is it mandatory to have a departure flight from Mexico before entering?",
        answer:
          "While not always mandatory, having a departure flight or proof of onward travel can help ensure a smooth entry into Mexico and is often required by airlines. It is a good practice to have these arrangements in place to avoid any complications during your travel.",
      },
      {
        question:
          "What requirements must I meet to travel to the Riviera Maya from the USA?",
        answer:
          "Valid passport, Multiple Immigration Form (FMM), Customs Declaration, and return flight ticket to the USA and reservation of the hotel or place where you will stay during the days you remain in Mexico.",
      },
      {
        question:
          "Is a visa required to travel as a tourist to Mexico with a USA passport?",
        answer:
          "No, a visa is not required for US citizens traveling to Mexico for tourism purposes for stays of up to 180 days. However, you will need to complete a Forma Migratoria Múltiple (FMM), also known as a tourist card, which is required for all tourists.",
      },
      {
        question: "What vaccines are needed to travel to Mexico?",
        answer:
          "Currently, there are no necessary or obligatory vaccines to travel to Mexico. Thus, vaccination guidelines are no longer requirements for traveling to Mexico from the USA. However, it is advisable to be protected against diseases such as Hepatitis A and B, as well as typhus.",
      },
      {
        question: "How long can you stay as a tourist in Mexico?",
        answer:
          "The allowed period to stay as a tourist in Mexico varies according to the visitor's nationality. In the case of US citizens wishing to enjoy the paradisiacal Riviera Maya, the maximum permitted stay is 180 days.",
      },
      {
        question:
          "Where can I get updated information about the requirements for traveling to Mexico from the USA?",
        answer: (
          <>
            For the most up-to-date information about the requirements for
            traveling to Mexico from the USA, you can visit the{" "}
            <a
              className="bg-blue-200 rounded"
              href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Mexico.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Department of State - Bureau of Consular Affairs website
            </a>
            .
          </>
        ),
      },
    ],
  },
};

const PreguntasFrecuentes = () => {
  const { language: contextLanguage } = useContext(LanguageContext);
  const [language, setLanguage] = useState("es"); // Default to 'es'

  useEffect(() => {
    setLanguage(contextLanguage);
  }, [contextLanguage]);

  const translations = faqTranslations[language] || faqTranslations.es; // Fallback to 'es' if language not found

  return (
    <>
      <h1 className="flex flex-wrap items-center justify-center text-center">
        {translations.title}&nbsp;
        <span className="text-body-bold"> Riviera Maya Tour</span>
      </h1>
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {translations.questions
              .slice(0, Math.ceil(translations.questions.length / 2))
              .map((item, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
          </div>
          <div>
            {translations.questions
              .slice(Math.ceil(translations.questions.length / 2))
              .map((item, index) => (
                <Accordion
                  key={index + Math.ceil(translations.questions.length / 2)}
                  type="single"
                  collapsible
                >
                  <AccordionItem
                    value={`item-${
                      index + Math.ceil(translations.questions.length / 2)
                    }`}
                  >
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreguntasFrecuentes;
