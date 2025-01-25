import React, { useEffect, useState } from 'react';
import './ColumnImg.css';
import red from '../assets/red.png';
import blue from '../assets/blue.png';
import yellow from '../assets/yellow.png';
import pink from '../assets/pink.png';
import { getUserByUserId } from '../services/api';
import { KeyData } from '../types/apiTypes';

const ColumnImg = () => {
      const [keyData, setKeyData] = useState<KeyData | null>(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getUserByUserId(18);
            if (data && data?.data?.keyData) {
                setKeyData(data?.data?.keyData || null);
            }
            else {
                console.log('prouuuuuuuut')
            }
        }
        fetchData();
    }, []);

    const renderData = (imgSrc: string, value: number, label: string) => (
        <div className="data-item">
            <img src={imgSrc} alt={label} className="data-img" />
            <div>
                <p className="data-value">{value.toLocaleString()} kCal</p>
                <p className="data-label">{label}</p>
            </div>
        </div>
    );

    return (
        <div className="container-column">
            {keyData ? (
                <div>
                    {renderData(red, keyData.calorieCount, 'Calories')}
                    {renderData(blue, keyData.proteinCount, 'Protéines')}
                    {renderData(yellow, keyData.carbohydrateCount, 'Glucides')}
                    {renderData(pink, keyData.lipidCount, 'Lipides')}
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};

export default ColumnImg;
