import './App.scss';
import {Routes, Route} from "react-router";
import Home from "./components/Home/home";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Category from "./pages/Category/category";
import Info from "./pages/Info/info";
import Payment from "./pages/Payment/payment";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={Home}/>
                <Route path={'/category'} element={Category}/>
                <Route path={'/info'} element={Info}/>
                <Route path={'/payment'} element={Payment}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
