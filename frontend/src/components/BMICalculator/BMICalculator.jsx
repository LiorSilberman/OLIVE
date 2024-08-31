import React, { useEffect, useState } from 'react';
import './BMICalculator.css';
import Aos from 'aos';

const BMICalculator = () => {
    useEffect(()=> {
        Aos.init()
    }, [])

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [bmiCategory, setBMICategory] = useState('');

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBMI(bmiValue);
            setBMICategory(getBMICategory(bmiValue));
        }
    };

    const getBMICategory = (bmi) => {
        if (bmi < 18.5) return 'תת-משקל';
        if (bmi >= 18.5 && bmi < 25) return 'משקל-תקין';
        if (bmi >= 25 && bmi < 30) return 'עודף-משקל';
        return 'שמן-מאד';
    };

    return (
        <div className="bmi-calculator" id='BMI' data-aos="fade-up" data-aos-anchor-placement="center-center">
            <div className="bmi-content">
                <h2 className="bmi-title">מחשבון BMI</h2>
                <div className="input-group">
                    <label htmlFor="height">גובה (cm)</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="הכנס את הגובה"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="weight">משקל (kg)</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="הכנס את המשקל"
                    />
                </div>
                <button onClick={calculateBMI} className="calculate-btn">
                    חשב BMI
                </button>
                {bmi && (
                    <div className="result">
                        <p className="bmi-value">BMI: {bmi}</p>
                        <p className={`bmi-category ${bmiCategory.toLowerCase().replace(' ', '-')}`}>
                            סקלה: {bmiCategory}
                        </p>
                    </div>
                )}

            </div>
            <hr />
        </div>

    );
};

export default BMICalculator;