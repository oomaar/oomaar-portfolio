import styled from "styled-components";

export const ProjectsContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 1024px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 1rem;
  color: #fff;
`;

export const CarouselContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CarouselSlide = styled.li`
  position: absolute;
  inset: 1rem;
  opacity: 0;
  transition: opacity 200ms ease-in;
  transition-delay: 200ms;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &.active {
    opacity: 1;
    z-index: 50;
    transition-delay: 0ms;
  }
`;

export const SlideTextContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SlideLinksContainer = styled.div`
  display: flex;
  gap: 0 1rem;
`;

export const SlideImage = styled.div`
  width: 500px;

  img {
    border-radius: 1rem;
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }
`;

export const SlideTitle = styled.h3``;

export const SlideText = styled.p``;

export const SlideLink = styled.a`
  font-size: ${({ theme }) => theme.typo.menuLinkFont};
  background-color: ${({ theme }) => theme.lightColors.primaryColor};
  width: 200px;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 0.4rem;
  color: #fff;
  transition: all 0.5s ease-in;
  border: 1px solid transparent;

  :hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

export const SlideIcon = styled.div`
  width: 40px;
  cursor: pointer;
`;

export const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 100;
`;

export const Arrow = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 0.5rem;
  border-radius: 0.25rem;

  :hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
  }

  :focus {
    outline: 1px solid #000;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: -10%;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;

  span {
    display: inline-block;
    cursor: pointer;
    height: 0.8rem;
    width: 0.8rem;
    margin: 0 5px;
    background-color: #808080;
    border-radius: 50%;
    transition: all 0.5s ease;

    &.active-dot {
      background-color: ${({ theme }) => theme.lightColors.primaryColor};

      &:hover {
        background-color: #f00;
      }
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;
