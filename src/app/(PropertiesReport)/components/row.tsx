import type { NextPage } from "next";
import styled from "styled-components";

export type RowType = {
  className?: string;
};

const Svg = styled.input`
  margin: 0;
  height: 20px;
  width: 20px;
  position: relative;
`;
const Container = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
`;
const Data = styled.div`
  border-bottom: 0.8px dashed rgba(145, 158, 171, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 21.4px 4px 20px 8px;
`;
const LinkAddress = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 40px;
`;
const Link = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Data1 = styled.div`
  border-bottom: 1px dashed rgba(145, 158, 171, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 28.4px 24px 27px 16px;
`;
const Div = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 22px;
`;
const Container1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Container2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 2.8px;
`;
const Container3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Data2 = styled.div`
  width: 271.3px;
  border-bottom: 0.8px dashed rgba(145, 158, 171, 0.2);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px 16px 15px;
`;
const Container4 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Data3 = styled.div`
  width: 177.5px;
  border-bottom: 0.8px dashed rgba(145, 158, 171, 0.2);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 28.4px 16px 27px;
`;
const Div1 = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 57px;
`;
const Data4 = styled.div`
  flex: 1;
  border-bottom: 0.8px dashed rgba(145, 158, 171, 0.2);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 28.4px 20px 27px 16px;
  min-width: 154px;
`;
const Data5 = styled.div`
  height: 79px;
  width: 151px;
  border-bottom: 0.8px dashed rgba(145, 158, 171, 0.2);
  box-sizing: border-box;
`;
const VerFicha = styled.b`
  position: relative;
  font-size: 14px;
  line-height: 24px;
  display: inline-block;
  font-family: "Public Sans";
  color: #fff;
  text-align: left;
  min-width: 63px;
`;
const Link1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 6px 12px;
  background-color: #1c252e;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  white-space: nowrap;
  &:hover {
    background-color: #4f5961;
  }
`;
const ImgIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
`;
const Button = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
`;
const Data6 = styled.div`
  border-bottom: 0.8px dashed rgba(145, 158, 171, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 21.4px 16px 20px;
`;
const RowRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  text-align: left;
  font-size: 14px;
  color: #1c252e;
  font-family: "Public Sans";
`;

const Row: NextPage<RowType> = ({ className = "" }) => {
  return (
    <RowRoot className={className}>
      <Data>
        <Container>
          <Svg type="checkbox" />
        </Container>
      </Data>
      <Data1>
        <Link>
          <LinkAddress>#6010</LinkAddress>
        </Link>
      </Data1>
      <Data2>
        <Container3>
          <Container2>
            <Container1>
              <Div>
                Av. Angélica, 2330 - Higienópolis, São Paulo - SP, 01228-200
              </Div>
            </Container1>
          </Container2>
        </Container3>
      </Data2>
      <Data3>
        <Container4>
          <Container1>
            <Div>12345-678</Div>
          </Container1>
        </Container4>
      </Data3>
      <Data4>
        <Div1>#208120</Div1>
      </Data4>
      <Data5 />
      <Data6>
        <Link1>
          <VerFicha>Ver Ficha</VerFicha>
        </Link1>
        <Button>
          <ImgIcon loading="lazy" alt="" src="/img-5.svg" />
        </Button>
      </Data6>
    </RowRoot>
  );
};

export default Row;
