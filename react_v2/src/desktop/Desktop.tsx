import './Desktop.css'
import Moment from 'react-moment';
import { Button, Radio } from 'antd';

export function Desktop(): JSX.Element{

    const dateToFormat = '1976-04-19T12:59';

    return(
        <div className="Desktop-container">
            <div className="Header-container">
                <Button type="primary" className="Header-button">
                    Menu
                </Button>    
                <div className="Header-timer">
                    <Moment interval={1000} format="dd MM/d h:mm:ss"/>
                </div>
            </div>
            <div className="Applications-container">

            </div>
            <div className="Dock-container">

            </div>
        </div>
    )
}