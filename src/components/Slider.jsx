import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

const Slider = () => {
  const row = ['Join The Waitlist', 'Join The Waitlist', 'Join The Waitlist', 'Join The Waitlist', 'Join The Waitlist', 'Join The Waitlist'];
 
  return (
    <Fragment>
        <div className="slider-imgs font-poppins">
          <Marquee>
            <MarqueeGroup>
              {row.map((el, index) => (
                <ImageGroup key={index} className="mr-4 pr-3">
                  <StyledText $outlined={index % 2 !== 0}>{el}</StyledText>
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <span className="space"></span>
            <MarqueeGroup>
              {row.map((el, index) => (
                <ImageGroup key={index} className="mr-4 pr-3">
                  <StyledText $outlined={index % 2 !== 0}>{el}</StyledText>
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
        </div>
    </Fragment>
  );
};

const StyledText = styled.p`
  color: white;
  font-weight: bold;
  ${props => props.$outlined && `
    -webkit-text-stroke: 1px white;
    color: transparent;
  `}
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 0%,
    hsl(0 0% 0% / 1) 100%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeGroup = styled.div`
  flex-shrink: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 300vh;
  animation: ${scrollX} 20s linear infinite;
  margin-left: 2px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 5px;
    margin-left: 5px;
    animation: ${scrollX} 20s linear infinite;
  }
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(1rem, 1rem + 30vmin, 5rem) / 14);
  border-radius: 10px;
  cursor: pointer;
  font-size: 22px;
  @media screen and (max-width: 768px) {
    padding: calc(clamp(2rem, 15rem + 15vmin, 3rem) / 12);
    font-size: 12px;
  }
`;

export default Slider;