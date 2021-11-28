import './Desktop.css'
import Moment from 'react-moment';
import { Button, Radio } from 'antd';
import { Canvas } from '@react-three/fiber'
import { ParticlesText } from '../3dfonts/particlesText.jsx'
import SocialMediaButtons from 'react-social-media-buttons';

export const Desktop = () => {

    const dateToFormat = '1976-04-19T12:59';

    return(
        // <div className="Desktop-container">
        //     <div className="Header-container">
        //         <Button type="primary" className="Header-button">
        //             Menu
        //         </Button>    
        //         <div className="Header-timer">
        //             <Moment interval={1000} format="dd MM/d h:mm:ss"/>
        //         </div>
        //     </div>
        //     <div className="Applications-container">
              
        //     </div>
        //     <div className="Dock-container">

        //     </div>
        // </div>
        // <Canvas>
        //  <directionalLight intensity={0.5}/>
        // </Canvas>
        <div className="WelcomeText">
            <div className="WelcomeText-particles-container">
                <ParticlesText text={undefined}/>
            </div>
            <div className="WelcomeText-socialmedia">
            <SocialMediaButtons
                links={["https://github.com/AleksandrMolchagin", "https://www.linkedin.com/in/amolchagin/"]}
                className="social-mendia-buttons"
                buttonStyle={{margin: '0px 10px', backgroundColor: '#ffffff', borderRadius: '50%', border: '2px solid #000000'}}
                iconStyle={{color: '#000000'}}
                openNewTab={true}
            />
            </div>
        </div>
    )
}