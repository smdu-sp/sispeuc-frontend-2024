import type { NextPage } from "next";
import styled from "styled-components";

export type BackgroundShadowType = {
  className?: string;
};

const ImgIcon = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  margin: 0 !important;
  top: 12px;
  left: 12px;
`;
const SvgIcon = styled.img`
  width: 56px;
  height: 56px;
  position: relative;
  transform: rotate(90deg);
`;
const Progressbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(-90deg);
  opacity: 0.48;
  z-index: 1;
`;
const ProgressbarSvg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: 0px;
  object-fit: contain;
  z-index: 2;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Total = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  min-width: 38px;
`;
const Heading = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px 0px 0px;
`;
const Imveis = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 76px;
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  color: #919eab;
`;
const Container2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;
const Container3 = styled.div`
  flex: 0.6408;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 63px;
  box-sizing: border-box;
  gap: 20px;
  min-width: 200px;
  max-width: 279px;
  @media screen and (max-width: 450px) {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    flex: 1;
  }
`;
const ApartmentfilledIcon = styled.img`
  height: 35px;
  width: 35px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Icon1 = styled.div`
  position: absolute;
  top: 10.5px;
  left: 10.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SvgIcon1 = styled.img`
  width: 56px;
  height: 56px;
  position: relative;
  transform: rotate(90deg);
  flex-shrink: 0;
`;
const ProgressbarSvg1 = styled.img`
  width: 56px;
  height: 56px;
  position: relative;
  object-fit: contain;
  transform: rotate(90deg);
  flex-shrink: 0;
  z-index: 2;
`;
const Progressbar1 = styled.div`
  position: absolute;
  top: calc(50% + 28px);
  left: calc(50% - 28px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  opacity: 0.48;
  width: 100%;
  z-index: 1;
`;
const Container4 = styled.div`
  height: 56px;
  width: 56px;
  position: relative;
`;
const Prospectados = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  min-width: 104px;
`;
const ImveisDenunciados = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 22px;
  color: #919eab;
`;
const PropertyLabel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;
const PropertyInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3px 0px 0px;
`;
const Container5 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px;
  box-sizing: border-box;
  gap: 20px;
  min-width: 200px;
  max-width: 279px;
`;
const EmPreenchimento = styled.div`
  width: 142px;
  position: relative;
  line-height: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
const Imveis1 = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 67px;
`;
const Container6 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  color: #919eab;
`;
const Container7 = styled.div`
  flex: 0.9081;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 31px;
  box-sizing: border-box;
  gap: 20px;
  min-width: 200px;
  max-width: 279px;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const Despachados = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  min-width: 102px;
`;
const Heading1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Container8 = styled.div`
  flex: 0.741;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 51px;
  box-sizing: border-box;
  gap: 20px;
  min-width: 200px;
  max-width: 279px;
  @media screen and (max-width: 450px) {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    flex: 1;
  }
`;
const Container9 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 26px 0px;
  box-sizing: border-box;
  gap: 0.8px;
  min-height: 108px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;
const BackgroundshadowRoot = styled.div`
  align-self: stretch;
  box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.2),
    0px 12px 24px -4px rgba(145, 158, 171, 0.12);
  border-radius: 16px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  font-size: 16px;
  color: #1c252e;
  font-family: "Public Sans";
`;

const BackgroundShadow: NextPage<BackgroundShadowType> = ({
  className = "",
}) => {
  return (
    <BackgroundshadowRoot className={className}>
      <Container9>
        <Container3>
          <Container>
            <ImgIcon loading="lazy" alt="" src="/img-1.svg" />
            <Progressbar>
              <SvgIcon alt="" src="/svg.svg" />
            </Progressbar>
            <ProgressbarSvg alt="" src="/progressbar--svg.svg" />
          </Container>
          <Container2>
            <Heading>
              <Total>Total</Total>
            </Heading>
            <Container1>
              <Imveis>130 imóveis</Imveis>
            </Container1>
          </Container2>
        </Container3>
        <Container5>
          <Container4>
            <Icon1>
              <ApartmentfilledIcon
                loading="lazy"
                alt=""
                src="/apartmentfilled.svg"
              />
            </Icon1>
            <Progressbar1>
              <SvgIcon1 alt="" src="/svg-1.svg" />
              <ProgressbarSvg1 alt="" src="/progressbar--svg-1.svg" />
            </Progressbar1>
          </Container4>
          <PropertyInfo>
            <PropertyLabel>
              <Prospectados>Prospectados</Prospectados>
              <ImveisDenunciados>105 imóveis denunciados</ImveisDenunciados>
            </PropertyLabel>
          </PropertyInfo>
        </Container5>
        <Container7>
          <Container>
            <ImgIcon loading="lazy" alt="" src="/img-11.svg" />
            <Progressbar>
              <SvgIcon alt="" src="/svg-2.svg" />
            </Progressbar>
            <ProgressbarSvg alt="" src="/progressbar--svg-1.svg" />
          </Container>
          <Container2>
            <Heading>
              <EmPreenchimento>Em preenchimento</EmPreenchimento>
            </Heading>
            <Container6>
              <Imveis1>10 imóveis</Imveis1>
            </Container6>
          </Container2>
        </Container7>
        <Container8>
          <Container>
            <ImgIcon loading="lazy" alt="" src="/img-12.svg" />
            <Progressbar>
              <SvgIcon alt="" src="/svg-3.svg" />
            </Progressbar>
            <ProgressbarSvg alt="" src="/progressbar--svg-1.svg" />
          </Container>
          <Container2>
            <Heading1>
              <Despachados>Despachados</Despachados>
            </Heading1>
            <Container6>
              <Imveis1>15 imóveis</Imveis1>
            </Container6>
          </Container2>
        </Container8>
      </Container9>
    </BackgroundshadowRoot>
  );
};

export default BackgroundShadow;
