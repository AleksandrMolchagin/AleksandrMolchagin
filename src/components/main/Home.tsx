import './Home.css'


export function Home(): JSX.Element{
    return (
        <div className="">
            <div className="Home-TopContainer">
                <div className="Home-TopContainer-Left">
                <svg className='IamACircle'></svg>
                <svg className='IamACircleButBlue'></svg>
                    <img src="./Aleksandr.jpg"/>
                </div>
                <div className="Home-TopContainer-Right">
                    <h1 className='WhiteCoverContainer'>Aleksandr Molchagin</h1>
                    <p className='WhiteCoverContainer'>
                        I am a software developer with a passion for learning and creating.
                    </p>
                </div>
            </div>
        </div>
    );
}