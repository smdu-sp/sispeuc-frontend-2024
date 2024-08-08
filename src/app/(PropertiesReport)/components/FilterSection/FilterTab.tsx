import styled from "styled-components";

const Tab = styled.button`
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    background-color: #f4f6f8;
  }
`;

export const FilterTab: React.FC<{ label: string, count: number }> = ({ label, count }) => (
  <Tab>{label} ({count})</Tab>
);