import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

let progressInterval = null;

const Intro = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        progressInterval = setInterval(() => {
            setProgress(prev => prev + 1);
        }, 100);
        return () => clearInterval(progressInterval); // Clean up interval on unmount
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            navigate('/halaman');
            clearInterval(progressInterval);
        }
    }, [progress, navigate]);

    return (
        <div className="Intro">
            <div className="m-5">
                <h5 className="mb-3 font-serif font-bold text-orange-500">Kerang Indian</h5>
                <div className="progress w-50" style={{ height: 30 }}>
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ width: `${progress}%` }}
                    >
                        {progress}%
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;























































// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// let progressInterval = null;
// const Intro = () => {
//     const navigate = useNavigate()
//     const [progress, setProgress] = useState(0);
//     useEffect(() => {
//         progressInterval = setInterval(() => {
//             setProgress(prev => prev + 1);
//         }, 100);
//     }, []);

//     useEffect(() => {
//         if (progress >= 100) {
//             navigate('/halaman')
//             clearInterval(progressInterval);
//         }
//     }, [progress]);

//     return (
//         <>
//             <div className="Intro">

//                 <div className="m-5">
//                     <h5 className="mb-3">React Js Progress Bar</h5>
//                     <div className="progress w-50" style={{ height: 30 }}>
//                         <div className="progress-bar progress-bar-striped- progress-bar-animated" role="progressbar" style={{ width: '${progress}%' }}>{progress}%</div>
//                     </div>
//                 </div>
//             </div>

//         </>)
// }
// export default Intro;
























// return (
//     <>
{/* <div className="intro flex items-center justify-center min-h-screen">
                <div className="introButton ml-4 text-start">
                    <button onClick={() => navigate('/halaman')} className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg
//                     bg-red-600 shadow-emerald-500/15 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500
//                     transition-colors duration-300 ease-in-out
//                     sm:bg-red-600 sm:hover:bg-red-700
//                     lg:bg-blue-700 lg:hover:bg-blue-800">Pencet untuk ke halaman selanjutnya</button>
                </div>
            </div> */}
{/* </> */ }
//     )

// }

// export default Intro;

















// const [progress, setProgress] = useState(0);

// useEffect(() => {
//     progressInterval = setInterval(() => {
//         setProgress(prev => prev + 1);
//     }, 100);
// }, []);

// useEffect(() => {
//     if (progress >= 100) {
//         clearInterval(progressInterval);
//     }
// }, [progress]);
//   const Progress = 60;
//   return <ProgressBar Progress={'${progress}'} label={`${progress}%`} />;
// }

// export default Intro;


// let progressInterval = null;
// const [progress, setProgress] = useState(0);

// useEffect(() => {
//     progressInterval = setInterval(() => {
//         setProgress(prev => prev + 1);
//     }, 100);
// }, []);

// useEffect(() => {
//     if (progress >= 100) {
//         clearInterval(progressInterval);
//     }
// }, [progress]);