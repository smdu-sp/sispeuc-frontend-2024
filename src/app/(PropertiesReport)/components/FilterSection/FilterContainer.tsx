import { FilterTab } from './FilterTab';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

export const FilterContainer: React.FC = () => (
  <Container>
    <FilterTab label="Todos" count={130} />
    <FilterTab label="Prospectados" count={105} />
    <FilterTab label="Em preenchimento" count={10} />
    <FilterTab label="Despachados" count={15} />
  </Container>
);