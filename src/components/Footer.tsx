import React from 'react';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
    return (
        <footer className={`app-footer ${className}`}>
            <p className="footer-text">
                made with <span className="footer-heart">💚</span> by mrcampaigner
            </p>
        </footer>
    );
};

export default Footer;
