import data from './data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <a href="/">Bobby Da' Baker</a>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        {/* <Route path="/product.:slug" element={<ProductScreen />} /> */}
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
