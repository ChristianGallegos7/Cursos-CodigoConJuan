import { useMemo, useState } from "react";

export const BudgetForm = () => {
  const [budget, setBudget] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
    
  };

  //Esta funcion revisa cada que cambia el valor del presupuesto
  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0
  },[budget])

  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-center text-blue-600 text-4xl font-bold"
        >
          Definir Presupuesto
        </label>

        <input
          id="budget"
          type="number"
          placeholder="Define tu presupuesto"
          className="p-2 border-2 border-gray-300 rounded-lg bg-white"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      {/* Este input con la etiqueta disabled cambiara dependiendo del presupesto, si no hay un presupuesto se desactiva el boton */}
      <input
        type="submit"
        value="Definir presupuesto"
        className="bg-blue-600 hover:bg-blue-700 text-white text-center
            w-full py-3 rounded-md uppercase font-bold cursor-pointer disabled:opacity-40"
            disabled={isValid}
        />
        
    </form>
  );
};
