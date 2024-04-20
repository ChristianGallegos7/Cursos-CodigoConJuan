export const formatCurrency = (amount: number) => {
    // Formatear el número a una representación de moneda en dólares
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2 // Especifica el número mínimo de dígitos decimales
    });
};
