import './KeyData.css';
import red from '../assets/red.png';
import blue from '../assets/blue.png';
import yellow from '../assets/yellow.png';
import pink from '../assets/pink.png';
import { KeyData as KeyDataType } from '../types/apiTypes';


interface KeyDataProps {
    data: KeyDataType;
}

const KeyData = ({ data }: KeyDataProps) => {
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
            {data ? (
                <div>
                    {renderData(red, data.calorieCount, 'Calories')}
                    {renderData(blue, data.proteinCount, 'Protéines')}
                    {renderData(yellow, data.carbohydrateCount, 'Glucides')}
                    {renderData(pink, data.lipidCount, 'Lipides')}
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};

export default KeyData;
