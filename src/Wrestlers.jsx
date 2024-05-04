import React from 'react';

function Wrestlers({ data }) {
    return (
        <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">Wrestlers</h2>
            <ul>
                {data.map((wrestler, index) => {
                    <li key={index}>
                        <strong>{wrestler.gimmick}</strong>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Wrestlers