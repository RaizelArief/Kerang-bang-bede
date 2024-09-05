import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section footer__info">
                    <h1>Lapak Kerang Bang Bede</h1>
                    <p>Jl. Kemiri 8 Rt.02/04 Nomer 06 Kelurahan Pondok Cabe Udik, Kecamatan Pamulang, Kota Tangsel, Provinsi Banten</p>
                    <div className="footer__icons">
                        <a href="https://wa.me/6289a661600044" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt="WhatsApp" />
                        </a>
                    </div>
                </div>

                <div className="footer__section footer__contact">
                    <h1>Kontak Saya</h1>
                    <p> Whatsapp : +6289661600044</p>
                </div>

                <div className="footer__section footer__contact">
                    <h1>Buka Jam :</h1>
                    <p>Senin-Kamis : 09.00 - 20.00</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
