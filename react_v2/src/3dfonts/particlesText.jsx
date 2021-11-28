import { FliesText } from "react-text-fun"

export const ParticlesText = ({text}) => {
    return (
        <>
            <FliesText
               cellRadius={1.1  }
               text="coming soon."
               fontSize={60}
               cellWidth={0.02}
               speed={2.5}
               dodge={true}
               dodgeY={0.05}
               dodgeSpread={0.08}
               fill="white"
            >
            </FliesText>
            
        </>
    )
}