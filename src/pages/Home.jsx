import Navbar from '../components/Navbar/Navbar';

import '../scss/Home.scss';
import ProductIntroduction from "../components/ProductIntroduction/ProductIntroduction";
import ListOfProducts from "../components/ListOfProducts/ListOfProducts";
import CartModalBox from "../components/CartModalBox/CartModalBox";
import {useHomeState, withHomeProvider} from "../context/HomeContext";


function Home() {
    const { isModalBoxOpened } = useHomeState();

    return (
        <div className="container">
            <Navbar />
            <ProductIntroduction />
            <ListOfProducts />
            { isModalBoxOpened && <CartModalBox />}
            <div className="footer">
                Вовчинець, Івано-Франківська область, Україна, 76491
            </div>
        </div>
    );
}

export default withHomeProvider(Home)
