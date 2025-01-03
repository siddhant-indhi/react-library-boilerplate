import React, { useEffect } from 'react';

export const Button = ({ label }) => {


        useEffect(() => {
                console.log('useEffect');
        }, []);

        return (
                <>
                        <button>{label}</button>
                </>
        )
};
