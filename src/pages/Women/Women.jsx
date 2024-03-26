import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Women = () => {
    const [index, setIndex] = useState(0);
    const [products, setProducts] = useState([]);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/db.json'); // Assuming db.json is in the public folder
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item>
                    <div className="relative w-full">
                        <img
                            src="https://preview.colorlib.com/theme/product/images/hero_bg_5.jpg.webp"
                            alt="First slide"
                            className="object-cover w-full min-h-[650px] h-[100vh]"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <p className="text-center text-5xl font-semibold text-white">Shop in our Store</p>
                            <button className='my-[30px] text-xs font-semibold  px-8 py-[15px] bg-black text-white'>EXPLORE NOW </button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="relative w-full">
                        <img
                            className="object-cover w-full min-h-[650px] h-[100vh]"
                            src="https://preview.colorlib.com/theme/product/images/hero_bg_6.jpg.webp"
                            alt="Second slide"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <p className="text-center text-5xl font-semibold text-white">Shop in our Store</p>
                            <button className='my-[30px] text-xs font-semibold  px-8 py-[15px] bg-black text-white'>EXPLORE NOW </button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <section className='container mx-auto p-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {products.map(product => (
                        <div key={product.id} className="border border-gray-300 rounded p-4">
                            <div className='overflow-hidden'>
                                <img src={product.image} alt={product.name} className="hover:scale-110 duration-500 w-full h-auto mb-4 object-cover" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-700">${product.price}</p>
                                {product.originalPrice && <p className="text-gray-500 line-through">${product.originalPrice}</p>}
                                {product.badge && <span className="bg-blue-500 text-white px-2 py-1 rounded-md">{product.badge}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Women;
