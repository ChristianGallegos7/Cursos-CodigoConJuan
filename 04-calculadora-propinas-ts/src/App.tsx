import { MenuItemComponent } from "./components/MenuItem";
import { menuItems } from "./data/db";

function App() {
  return (
    <>
      <header className="bg-teal-600 py-5">
        <h1 className="text-center text-4xl text-white font-bold">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid grid-cols-2">
        <div>
          <h2>Menu</h2>
          {
            menuItems.map(item => (
                <MenuItemComponent key={item.id} item={item}/>
            ))
          } 
        </div>
        {/* CONSUMO */}
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;