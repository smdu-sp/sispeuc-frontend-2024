import styled from "styled-components";

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #919eab;
`;

const Value = styled.div`
  font-size: 16px;
  color: #1c252e;
`;

interface DetailFieldProps {
  label: string;
  value: string;
}

export const DetailField: React.FC<DetailFieldProps> = ({ label, value }) => (
  <FieldContainer>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </FieldContainer>
);