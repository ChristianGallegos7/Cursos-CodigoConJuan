import OrderSidebar from "@/components/order/OrderSidebar";
import OrderTotal from "@/components/order/OrderTotal";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
      <>
        <div className="md:flex">
            <OrderSidebar/>
            <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                {children}
            </main>

            <OrderTotal/>
        </div>
      </>
    );
  }
  