import { Routes, Route } from 'react-router-dom';
import ActorAdd from '../actor/ActorAdd';
import ActorList from '../actor/ActorList';

import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from '../pages/Home';


const ActorApp = () => {
    return (
        <div className="container">
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/actors' element={<ActorList />} />
                    <Route path='/actors/new' element={<ActorAdd />} />
                </Routes>
            <Footer />
        </div>
    );
}

export default ActorApp