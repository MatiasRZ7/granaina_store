"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export const LanguageContext = createContext({
  language: "es", // Valor predeterminado
  toggleLanguage: () => {}, // Función para alternar el idioma
});

export const useLanguage = () => useContext(LanguageContext);
interface LanguageProviderProps {
  children: ReactNode;
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Inicializa el estado del idioma sin acceder a localStorage directamente
  const [language, setLanguage] = useState<"es" | "en">("es");

  // Función para cambiar el idioma y guardar la selección en localStorage
  const toggleLanguage = () => {
    setLanguage((currentLanguage) => {
      const newLanguage = currentLanguage === "es" ? "en" : "es";
      // Asegura que localStorage solo se acceda en el cliente
      if (typeof window !== "undefined") {
        localStorage.setItem("language", newLanguage);
      }
      return newLanguage;
    });
  };

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang === "es" || lang === "en") {
      setLanguage(lang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
