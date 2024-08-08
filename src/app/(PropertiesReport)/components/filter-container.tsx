import type { NextPage } from "next";
import styled from "styled-components";

export type FilterContainerType = {
  className?: string;
};

const Todos = styled.div`
  position: relative;
  line-height: 22px;
  font-weight: 600;
  display: inline-block;
  min-width: 39px;
`;
const Divider = styled.b`
  position: relative;
  display: inline-block;
  min-width: 21px;
`;
const Background = styled.div`
  border-radius: 6px;
  background-color: #1c252e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4.6px 6px 5.4px;
  box-sizing: border-box;
  min-width: 24px;
`;
const Margin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 8px;
  box-sizing: border-box;
  min-width: 32px;
  font-size: 12px;
  color: #fff;
`;
const Tab = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  box-sizing: border-box;
  min-width: 48px;
  max-width: 360px;
  min-height: 48px;
  color: #1c252e;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const Prospectados = styled.div`
  position: relative;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
  min-width: 90px;
`;
const Overlay = styled.div`
  border-radius: 6px;
  background-color: rgba(145, 158, 171, 0.16);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4.6px 8px 5.4px;
  box-sizing: border-box;
  min-width: 24px;
`;
const Margin1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 8px;
  box-sizing: border-box;
  min-width: 32px;
  font-size: 12px;
`;
const Tab1 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  box-sizing: border-box;
  min-width: 48px;
  max-width: 360px;
  min-height: 48px;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const EmPreenchimento = styled.div`
  position: relative;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
  min-width: 123px;
`;
const B = styled.b`
  position: relative;
  display: inline-block;
  min-width: 13px;
`;
const Despachados = styled.div`
  flex: 1;
  position: relative;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
  min-width: 89px;
`;
const B1 = styled.b`
  position: relative;
  display: inline-block;
  min-width: 14px;
`;
const Tab2 = styled.div`
  width: 127.4px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  box-sizing: border-box;
  min-width: 48px;
  max-width: 360px;
  min-height: 48px;
`;
const Tablist = styled.div`
  position: absolute;
  top: 0px;
  left: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 456px 0px 0px;
  gap: 40px;
`;
const HorizontalDivider = styled.div`
  position: absolute;
  top: 45.6px;
  left: 20px;
  background-color: #1c252e;
  width: 75px;
  height: 2px;
  z-index: 1;
`;
const Overlayshadow = styled.div`
  height: 48px;
  flex: 1;
  position: relative;
  box-shadow: 0px -2px 0px rgba(145, 158, 171, 0.08) inset;
  background-color: rgba(255, 255, 255, 0);
  overflow: hidden;
  min-height: 48px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    height: auto;
    min-height: 48;
  }
`;
const FilterContainerRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 20px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: 14px;
  color: #637381;
  font-family: "Public Sans";
`;

const FilterContainer: NextPage<FilterContainerType> = ({ className = "" }) => {
  return (
    <FilterContainerRoot className={className}>
      <Overlayshadow>
        <Tablist>
          <Tab>
            <Todos>Todos</Todos>
            <Margin>
              <Background>
                <Divider>130</Divider>
              </Background>
            </Margin>
          </Tab>
          <Tab1>
            <Prospectados>Prospectados</Prospectados>
            <Margin1>
              <Overlay>
                <Divider>105</Divider>
              </Overlay>
            </Margin1>
          </Tab1>
          <Tab1>
            <EmPreenchimento>Em preenchimento</EmPreenchimento>
            <Margin1>
              <Overlay>
                <B>10</B>
              </Overlay>
            </Margin1>
          </Tab1>
          <Tab2>
            <Despachados>Despachados</Despachados>
            <Margin1>
              <Overlay>
                <B1>15</B1>
              </Overlay>
            </Margin1>
          </Tab2>
        </Tablist>
        <HorizontalDivider />
      </Overlayshadow>
    </FilterContainerRoot>
  );
};

export default FilterContainer;
