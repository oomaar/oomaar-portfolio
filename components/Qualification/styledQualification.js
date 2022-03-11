import styled from "styled-components";

export const QualificationContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 1rem;
  border-radius: 1rem;
  color: #fff;
  transform: translateY(20%);

  @media screen and (max-width: 568px) {
    transform: translateY(0);
  }
`;

export const QualificationNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 5rem;

  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.typo.smallTitleFont};
    cursor: pointer;
    border-bottom: 5px solid transparent;
    transition: all 0.5s ease-in;

    &.active {
      border-bottom: 5px solid ${({ theme }) => theme.lightColors.primaryColor};
      color: ${({ theme }) => theme.lightColors.primaryColor};
    }

    :hover {
      border-bottom: 5px solid ${({ theme }) => theme.lightColors.primaryColor};
      color: ${({ theme }) => theme.lightColors.primaryColor};
    }
  }
`;

export const QualificationTab = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const QualificationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem 0;
  margin: 0 auto;
  width: 250px;
  height: 150px;
`;

export const QualificationTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lightColors.primaryColor};
  font-size: ${({ theme }) => theme.typo.menuLinkFont};
`;

export const QualificationSubTitle = styled.p`
  margin: 0;
`;

export const QualificationDate = styled.p`
  margin: 0;
`;
