import './Home.css'


export function Home(): JSX.Element{
    return (
        <div className="Home">
            <div className="Home-TopContainer">
                <div className="Home-TopContainer-Left">
                    <div className='saturateOnHover Home-TopContainer-LeftImage'></div>
                    <svg className='IamACircle'viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="var(--red)" d="M46.1,-79.4C59.6,-72,70.3,-59.4,76.9,-45.3C83.4,-31.2,85.8,-15.6,83.6,-1.3C81.5,13.1,74.8,26.2,67.2,38.6C59.7,51,51.4,62.8,40,70.4C28.7,77.9,14.3,81.3,-0.2,81.7C-14.8,82,-29.5,79.4,-41.5,72.2C-53.5,65,-62.8,53.3,-69.1,40.5C-75.4,27.8,-78.7,13.9,-78.1,0.3C-77.5,-13.2,-73.1,-26.4,-66,-37.8C-59,-49.3,-49.3,-58.9,-37.8,-67.5C-26.4,-76,-13.2,-83.5,1.6,-86.2C16.3,-88.9,32.6,-86.8,46.1,-79.4Z" transform="translate(100 100)" />
                    </svg>
                    <svg className='IamACircleButBlue' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="var(--blue)" d="M46.9,-73.4C59.5,-64.9,67.6,-49.7,75.4,-34C83.1,-18.3,90.6,-2.1,90.1,14.1C89.6,30.3,81,46.6,68.6,57.6C56.2,68.6,39.9,74.5,23.9,77.3C7.9,80.2,-7.8,80,-21.8,75.4C-35.7,70.7,-48,61.5,-57.5,50.1C-67,38.7,-73.7,25.1,-77.7,10C-81.7,-5.1,-83,-21.8,-77.3,-35.7C-71.6,-49.6,-58.8,-60.6,-44.8,-68.4C-30.7,-76.2,-15.3,-80.8,0.9,-82.2C17.2,-83.6,34.3,-81.8,46.9,-73.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="Home-TopContainer-Right">             
                    <h1 className='WhiteCoverContainer CenterText BigZindex'>Aleksandr Molchagin</h1>
                    {/* <p className='WhiteCoverContainer'>
                        I am a software developer with a passion for learning and creating.
                    </p> */}
                </div>
            </div>
        </div>
    );
}