import './Contact.css';
import SocialMediaButtons  from './Socials';

export function Contact(): JSX.Element {
    return (
        <div className="Contact">
            <div className='Contact-SocialsContainer'>
                <SocialMediaButtons/>
            </div>
        </div>
    );
}