import greekSaladImage from "../assets/greek_salad.jpg";
import lemonDessert from "../assets/lemon_dessert.jpg";
import bruchetta from "../assets/bruchetta.svg";

export const Main = () => {


    const specialMenus = [
        {
            image: greekSaladImage,
            title: 'Greek Salad',
            price: '$12.99',
            desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
        },
        {
            image: lemonDessert,
            title: 'Bruchetta',
            price: '$5.99',
            desc: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
        },
        {
            image: bruchetta,
            title: 'Lemon Dessert',
            price: '$5.00',
            desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
        }
    ];

    return (
        <>
            <main>
                <div className="container">
                    <div className="specials">
                        <h2>This Week specials!</h2>
                        <button>Online Menu</button>
                    </div>
                    <div className="specialsList">
                        <ul>
                            {specialMenus.map((specialMenu) => {
                                return (
                                    <li>
                                        <div className="specialsImage"><img src={specialMenu.image} alt="" /></div>
                                        <div className="specialsContent">
                                            <div className="specialsHeading">
                                                <h3>{specialMenu.title}</h3>
                                                <span className="price">{specialMenu.price}</span>
                                            </div>
                                            <p>{specialMenu.desc}</p>
                                            <button>Order a delivery</button>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;
