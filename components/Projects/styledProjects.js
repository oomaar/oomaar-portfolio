import styled from "styled-components";

export const ProjectsContainer = styled.div``;

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 615px;
  border: 1px solid red;
  display: flex;
`;

export const CarouselSlide = styled.div`
  overflow: hidden;
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in;

  &.active {
    width: 100%;
    opacity: 1;
    visibility: visible;
  }
`;

export const Arrows = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

export const Arrow = styled.div`
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.5s ease-in;
  border: 1px solid transparent;
  border-radius: 0.7rem;
  padding: 1rem;

  :hover {
    color: ${({ theme }) => theme.lightColors.primaryColor};
  }
`;
