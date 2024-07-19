import React from 'react'
import imagen from '../assets/huacaya.jpg'
import imagenPortada from '../assets/portada.jpg'
const Main = () => {
    return (
        <main>
            {/* Hero Section */}
            <section
                className="hero bg-cover bg-center h-screen text-white"
                style={{
                    backgroundImage:
                        `url(${imagenPortada})`
                }}
            >
                <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        Bienvenidos a Nuestra Tienda
                    </h1>
                    <p className="text-2xl mb-8">
                        Encuentra lo mejor en productos únicos
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Comprar Ahora
                    </button>
                </div>
            </section>

            {/* Destacado Section */}
            <section className="featured py-16 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        Productos Destacados
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Example Product Card */}
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src={imagen}
                                alt="Product"
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">
                                Producto 1
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Descripción breve del producto.
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Ver Producto
                            </button>
                        </div>
                        {/* Repite las tarjetas de productos según sea necesario */}
                    </div>
                </div>
            </section>

            {/* Other Sections */}
            <section className="other-sections py-16">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        Otras Secciones
                    </h2>
                    <p className="text-center text-gray-700 mb-8">
                        Más contenido sobre lo que ofrecemos.
                    </p>
                    {/* Agrega más contenido aquí según sea necesario */}
                </div>
            </section>
        </main>
    )
}

export default Main
