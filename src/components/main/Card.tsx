import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Card.css'
const Container = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  padding: 1rem 2rem;
  border: 1px solid rgba(200 200 200 / 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #eee;
  text-shadow: 0 1px 0 #999;
`;

const CardWrapper = styled(motion.div)`
  border-radius: 20px;
  backdrop-filter: blur(3px) brightness(120%);
`;

interface CardProps {
  img: string;
  img_hover?: string;
  title: string;
  link: string;
}


function Card(props: CardProps):JSX.Element{

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className='SingleCard'>
          {props.img_hover &&
            <img alt={props.title} className='CardImage CardImageHover' src={props.img_hover}/>
          }
          <img alt={props.title} className='CardImage' src={props.img}/>

      </div>
    </a>
    );
};

export default Card;