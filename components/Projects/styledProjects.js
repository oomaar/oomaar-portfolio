import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
`;

export const CarouselContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CarouselSlide = styled.li`
  position: absolute;
  inset: 0;
  opacity: 0;

  &.active {
    opacity: 1;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
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
