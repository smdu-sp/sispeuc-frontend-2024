// src/components/Checkbox.tsx
import styled from "styled-components";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const CheckboxContainer = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
`;

const StyledCheckbox = styled.input`
  margin: 0;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => (
  <CheckboxContainer>
    <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
  </CheckboxContainer>
);

// src/components/LinkButton.tsx
import styled from "styled-components";

interface LinkButtonProps {
  label: string;
  onClick: () => void;
}

const ButtonContainer = styled.button`
  cursor: pointer;
  border: none;
  padding: 6px 12px;
  background-color: #1c252e;
  border-radius: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  &:hover {
    background-color: #4f5961;
  }
`;

export const LinkButton: React.FC<LinkButtonProps> = ({ label, onClick }) => (
  <ButtonContainer onClick={onClick}>
    {label}
  </ButtonContainer>
);

// src/components/Row.tsx
import { Checkbox } from './Checkbox';
import { LinkButton } from './LinkButton';
import styled from "styled-components";

const RowRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

const DataContainer = styled.div`
  padding: 16px;
  border-bottom: 0.8px dashed rgba(145, 158, 171, 0.2);
`;

export const Row: React.FC = () => (
  <RowRoot>
    <Checkbox checked={false} onChange={() => {}} />
    <DataContainer>#6010 - Av. Angélica, 2330 - Higienópolis</DataContainer>
    <LinkButton label="Ver Ficha" onClick={() => {}} />
  </RowRoot>
);

