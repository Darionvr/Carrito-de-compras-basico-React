import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/Context';
import CartButton from './Button';


const DessertCard = () => {


    const { menu, cart, setCart } = useContext(CartContext)
    const [width, setWidth] = useState(window.innerWidth)


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])


    const getSource = (image) => {
        if (width < 480) {
            return image.mobile;
        } else if (width < 786) {
            return image.tablet;
        } else {
            return image.desktop;
        }
    };


    const totalButton = (dessert) => {
        const newDessert = [...cart];
        const dessertIndex = newDessert.findIndex(item => item.dessert.name === dessert.name);
        
    if (dessertIndex !== -1) {
        return newDessert[dessertIndex].count;
    } else {
        
        return 0
    }}


    const addDessert = (dessert) => {
        const newDessert = [...cart];
        const dessertIndex = newDessert.findIndex(item => item.dessert.name === dessert.name);

        if (dessertIndex === -1) {
            newDessert.push({ dessert, count: 1 });
        } else {
            newDessert[dessertIndex].count += 1;
        }

        setCart(newDessert);
        console.log(cart)
    }

    const removeDessert = (dessert) => {
        const newDessert = [...cart];
        const index = newDessert.findIndex(item => item.dessert.name === dessert.name);
        newDessert[index].count > 1 ? newDessert[index].count -= 1 : newDessert.splice(index, 1)
        setCart(newDessert);
    }

    return (

        <>
            <main>
                {menu.map((dessert, index) =>

                    <div className="card" key={dessert.name}>
                        <img src={getSource(dessert.image)} alt={dessert.name} className={totalButton(dessert) > 0 ? "pictureAdded" : "picture"} />
                        <CartButton
                            total={totalButton(dessert)}
                            aumentar={() => addDessert(dessert)}
                            disminuir={() => removeDessert(dessert)}
                        />
                        <div className="text">
                            <p className="type">{dessert.category}</p>
                            <p className="name">{dessert.name}</p>
                            <p className="price" data-price={dessert.price}>${dessert.price}</p>
                        </div>


                    </div >

                )}
            </main >
        </>
    )
}

export default DessertCard