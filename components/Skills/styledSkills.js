import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  gap: 1.5rem 2rem;
  justify-content: center;
`;

export const SkillsContent = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 1.5rem;
  border-radius: 1.25rem;
  box-shadow: ${({ theme }) => theme.colors.containerShadow};
`;

export const SkillsTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.normalFont};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.colors.firstColor};
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;
`;

export const SkillsGroup = styled.div`
  display: grid;
  align-content: flex-start;
  row-gap: 1rem;

  &.backData {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
`;

export const SkillsData = styled.div`
  display: flex;
  column-gap: 0.5rem;

  i {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.firstColor};
    margin-top: 1rem;
  }
`;

export const SkillsName = styled.h3`
  font-size: ${({ theme }) => theme.colors.normalFont};
  font-weight: ${({ theme }) => theme.font.fontMedium};
  line-height: 18px;
`;

export const SkillsLevel = styled.span`
  font-size: ${({ theme }) => theme.font.tinyFont};
`;
