//Importa los componentes de React Router DOM
import {BrowserRouter, Routes,Route} from "react-router-dom";

//Pas2: Importar nuestras vistas
import { HomeView } from "../pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;