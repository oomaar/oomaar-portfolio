import styled from "styled-components";

export const QualificationContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const QualificationNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  .active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.firstColor};
  }
`;

export const QualificationCardsContainer = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem 0;
`;

export const QualificationCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.containerColor};
`;

export const QualificationTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.h3FontSize};
  margin-bottom: 2.5rem;
`;

export const QualificationSubTitle = styled.span`
  color: ${({ theme }) => theme.colors.firstColor};
  font-size: ${({ theme }) => theme.font.smallFont};
`;

export const QualificationDate = styled.span`
  margin-top: 1rem;

  strong {
    font-size: ${({ theme }) => theme.font.smallerFont};
  }
`;
