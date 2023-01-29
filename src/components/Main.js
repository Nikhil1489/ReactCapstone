import greekSaladImage from "../assets/greek_salad.jpg";
import lemonDessert from "../assets/lemon_dessert.jpg";
import bruchetta from "../assets/bruchetta.svg";

export const Main = () => {
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
                            <li>
                                <div className="specialsImage"><img src={greekSaladImage} alt="" /></div>
                                <div className="specialsContent">
                                    <div className="specialsHeading">
                                        <h3>Greek salad</h3>
                                        <span className="price">$12.99</span>
                                    </div>
                                    <p>The famous greek salad of cripsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemarry croutons.</p>
                                    <button>Order a delivery</button>
                                </div>
                            </li>
                            <li>
                                <div className="specialsImage"><img src={bruchetta} alt="" /></div>
                                <div className="specialsContent">
                                    <div className="specialsHeading">
                                        <h3>Bruchetta $12.99</h3>
                                        <span className="price">$5.89</span>
                                    </div>
                                    <p>The famous greek salad of cripsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemarry croutons.</p>
                                    <button>Order a delivery</button>
                                </div>
                            </li>
                            <li>
                                <div className="specialsImage"><img src={lemonDessert} alt="" /></div>
                                <div className="specialsContent">
                                    <div className="specialsHeading">
                                        <h3>Lemon Dessert $12.99</h3>
                                        <span className="price">$5.00</span>
                                    </div>
                                    <p>The famous greek salad of cripsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemarry croutons.</p>
                                    <button>Order a delivery</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;
