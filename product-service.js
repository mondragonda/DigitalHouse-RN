const getProductsMovements = async() => {
    const response = await fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
    return response.json();
}

export { getProductsMovements }