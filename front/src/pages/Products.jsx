import React from 'react'

const alpacas = [
    {
        id: 1,
        edad: 25,
        img_url: 'https://via.placeholder.com/300',
        sexo: 'M'
    },
    {
        id: 2,
        edad: 30,
        img_url: 'https://via.placeholder.com/300',
        sexo: 'F'
    },
    {
        id: 3,
        edad: 35,
        img_url: 'https://via.placeholder.com/300',
        sexo: 'M'
    },
    {
        id: 4,
        edad: 40,
        img_url: 'https://via.placeholder.com/300',
        sexo: 'F'
    },
    {
        id: 5,
        edad: 45,
        img_url: 'https://via.placeholder.com/300',
        sexo: 'M'
    },
    {
        id: 6,
        edad: 50,
        img_url: 'https://via.placeholder.com/300',
        sexo: 'F'
    }
]

const AlpacaCard = ({ alpaca }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
                src={alpaca.img_url}
                alt={`Alpaca ${alpaca.id}`}
                className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Alpaca {alpaca.id}</h3>
            <p className="text-gray-700 mb-1">Edad: {alpaca.edad}</p>
            <p className="text-gray-700 mb-4">Sexo: {alpaca.sexo}</p>
        </div>
    )
}

const Products = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">
                    Nuestras Alpacas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {alpacas.map((alpaca) => (
                        <AlpacaCard key={alpaca.id} alpaca={alpaca} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
