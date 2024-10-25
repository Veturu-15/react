import React from 'react';
import { Laptop as LaptopData } from '../Data/Laptop';

function LaptopList() {
    return (
        <div className='mobile'>
            {LaptopData.map((item) => (
                <div>
                    <p>ID: {item.id}</p> 
                    <img src={item.Image} alt='' />
                    <h2>Brand: {item.Brand}</h2>
                    <p>ModelName:{item.ModelName}</p>
                    <p>ScreenSize:{item.ScreenSize}</p>
                    <p>ColourSilver:{item.ColourSilver}</p>
                    <p>HardDiskSize:{item.HardDiskSize}</p>
                    <p>CPUModel:{item.CPUModel}</p>
                    <p>RAMMemoryInstalledSize:{item.RAMMemoryInstalledSize}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default LaptopList;
