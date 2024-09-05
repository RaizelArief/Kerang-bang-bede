import React from 'react';
import Const from '../Component/Navbar/Cons';
import NavigationBar from '../Component/Navbar/NavigationBar';
import Footer from '../Component/Footer/Footer';
import HargaMenu from '../Component/Isi/Harga';
import Pengertian from '../Component/Navbar/Pengertian';
const Home = () => {
    return (
        <>
        <div>
            <div className="Navbar">
                <NavigationBar/>
                <Const/>
                <Pengertian/>
            </div>
           <br />
           <br />
           <br />
           <br />
           <br /><br />
           <br />
           <div className="Harga">
            <HargaMenu/>
           </div>
           <br />
           <br />
           <br />
           <br />
           <br />
            <di className="Footer" id="Footer">
                <Footer/>
            </di>
            
        </div>
        </>
    );
}

export default Home;
