import './Portfolio.css';
import styled from '@emotion/styled';
import Card from './Card';
import { motion } from 'framer-motion';
import data from '../../content/projects.json'
import { title } from 'process';

const SIZE = 40;

const DotGrid = styled.div`
  position: absolute;
  width: 100%;
  height: 200%;
  background-size: ${SIZE}px ${SIZE}px;
  background-image: radial-gradient(
    circle at 1px 1px,
    white 2px,
    transparent 0
  );
  background-position: center;
  transform: translateZ(-500px);
`;


const Container = styled.div`
  position: relative;
  width: 1100px;
  padding-top: 12px;
  padding-bottom: 12px;
  height: 100vh;
  overflow: hidden;
  margin-inline: auto;
`;
//...


const RotationWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;

// ...



export function Portfolio(): JSX.Element {
    return (
        <div className="Portfolio">
            <h1>
                Portfolio
            </h1>
            <Container>
                <DotGrid />
                <div className='CardContainer'>
                  {data.projects.map((project: any) => (
                      <Card img={project.img} img_hover={project.img_hover} title={project.title} link = {project.link} year={project.year} />
                  ))}
                </div>
            </Container>
        </div>
    );
}