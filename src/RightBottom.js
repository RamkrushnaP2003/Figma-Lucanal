import * as React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import imageone from "./images/image1.avif";
import imagetwo from "./images/image2.avif";
import imagethree from "./images/image3.avif";
import { Link } from 'react-router-dom';

      

export default function RightBottom() {

    return (
        <>
            <div className='containerBottom'>
                <div className="rightBottom">
                    <span className='h-6 w-6 mt-3 absolute '><HelpOutlineIcon/></span>
                    <button className='mt-5 btnGal' variant="contained">Gallary</button>
                    <div className='flex justify-between'>
                    <Link to="/add"><button className='btnAdd'><AddIcon className='icon' type="file"/>ADD IMAGE</button></Link>
                        <button className='arrow left'><ArrowBackIcon /></button>
                        <button className='arrow right'><ArrowForwardIcon /></button>
                    </div>
                </div>
                <div className='mb-6 flex justify-between' id='imageSection'>
                    <img src={imageone} alt="Uploaded" className='h-40 w-40 object-cover rounded-2xl shadow-lg' />
                    <img src={imagetwo} alt="Uploaded" className='h-40 w-40 object-cover rounded-2xl shadow-lg' />
                    <img src={imagethree} alt="Uploaded" className='h-40 w-40 object-cover rounded-2xl shadow-lg' />
                </div>
            </div>
        </>
    )
}