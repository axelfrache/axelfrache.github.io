import React from 'react';

const FullWidthBanner = ({ text }) => {
    return (
        <div style={{
            width: '100%',
            backgroundColor: '#5E6378',
            color: 'white',
            textAlign: 'justify',
            padding: '50px 40px',
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '2.5',
            boxSizing: 'border-box',
        }}>
            <p style={{margin: 0, fontFamily: 'RobotoMono'}}>{text}</p> {}
        </div>
    );
};

export default FullWidthBanner;
