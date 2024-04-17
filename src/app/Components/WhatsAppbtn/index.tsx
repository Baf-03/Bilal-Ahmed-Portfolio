import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
    const whatsAppHandler = () => {
        window.open('https://wa.link/zlze49', '_blank');
    };

    return (
        <div onClick={whatsAppHandler} className="whatsapp-button">
            <FaWhatsapp />
        </div>
    );
};

export default WhatsAppButton;

