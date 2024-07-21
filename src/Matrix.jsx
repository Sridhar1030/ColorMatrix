import React, { useState } from 'react';

const Matrix = () => {
    const [matrix, setMatrix] = useState(Array(9).fill(''));
    const [clicks, setClicks] = useState([]);

    const handleClick = (index) => {
        console.log(`Box ${index} clicked.`);

        const newMatrix = [...matrix];

        if (index === 8 && matrix[index] !== 'orange') {
            console.log(`Last box clicked. Changing previous boxes to orange.`);

            clicks.forEach((clickIndex, idx) => {
                setTimeout(() => {
                    console.log(`Changing box ${clickIndex} to orange.`);
                    newMatrix[clickIndex] = 'orange';
                    setMatrix([...newMatrix]);
                }, idx * 500); 
            });
        } else if (matrix[index] === 'orange') {
            console.log(`Box ${index} is orange. Reverting to green.`);

            newMatrix[index] = 'green';
            setMatrix(newMatrix);
        } else if (matrix[index] === 'green' || matrix[index] === '') {
            console.log(`Box ${index} is green or empty. Changing to green.`);

            newMatrix[index] = 'green';
            setMatrix(newMatrix);

            if (index !== 8) {
                console.log(`Recording click on box ${index}.`);
                setClicks([...clicks, index]);
            }
        }
    };


    return (
        <div className="grid grid-cols-3 gap-2 p-4">
            {matrix.map((color, index) => (
                <div
                    key={index}
                    className={`w-24 h-24 ${color === 'green' ? 'bg-green-500' : color === 'orange' ? 'bg-orange-500' : 'bg-gray-300'}`}
                    onClick={() => handleClick(index)}
                />
            ))}
            <div className="mt-4">
                <strong>Clicked Boxes:</strong> {clicks.join(', ')}
            </div>
        </div>
    );
};

export default Matrix;
