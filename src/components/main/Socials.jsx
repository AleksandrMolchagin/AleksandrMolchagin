import SocialMediaButtons from 'react-social-media-buttons';

export default function Socials() {
    return (
        <SocialMediaButtons
            links={["https://github.com/AleksandrMolchagin", "https://www.linkedin.com/in/amolchagin/"]}
            className="social-mendia-buttons"
            buttonStyle={{margin: '0px 10px', backgroundColor: '#ffffff', borderRadius: '50%', border: '2px solid #000000'}}
            iconStyle={{color: '#000000'}}
            openNewTab={true}
        />
    )
}
        