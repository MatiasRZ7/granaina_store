"use client"
import React from "react";
import { Calendar } from "@/components/ui/calendar";

const Calendario = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      {date && <p className="underline justify-center items-center flex">Fecha seleccionada: {date.toLocaleDateString()}</p>}
    </div>
  );
};

export default Calendario;
