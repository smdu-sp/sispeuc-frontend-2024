import type { NextPage } from "next";
import styled from "styled-components";

export type HeaderType = {
  className?: string;
};

const Sispeuc = styled.a`
  margin-left: -2px;
  text-decoration: none;
  position: relative;
  line-height: 36px;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 107px;
  flex-shrink: 0;
  white-space: nowrap;
`;
const LinkLogoSvg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 0px;
`;
const Rectangle = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
`;
const HeaderSpacing = styled.div`
  width: 848px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 19.5px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const UserSettingsMask = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Background = styled.div`
  height: 8px;
  width: 8px;
  position: absolute;
  margin: 0 !important;
  top: -4px;
  right: 2px;
  border-radius: 4px;
  background-color: #ff5630;
  z-index: 1;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  position: relative;
`;
const ButtonSettings = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
`;
const MaskGroupIcon = styled.img`
  height: 125.75%;
  width: 125.75%;
  position: absolute;
  margin: 0 !important;
  top: -13%;
  right: -13%;
  bottom: -12.75%;
  left: -12.75%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
`;
const Avatar25webpIcon = styled.img`
  height: 34px;
  width: 34px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  max-width: 34px;
`;
const Container1 = styled.div`
  border-radius: 17px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 3px;
  z-index: 1;
`;
const Container2 = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  position: relative;
`;
const Button = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Container3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;
const Container4 = styled.div`
  margin: 0 !important;
  position: absolute;
  bottom: -26px;
  left: -1140.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 16px;
  gap: 40px;
`;
const Nome = styled.a`
  text-decoration: none;
  position: relative;
  font-size: 12px;
  letter-spacing: -0.02em;
  line-height: 22px;
  font-family: Lato;
  color: #545f71;
  display: inline-block;
  min-width: 31px;
  white-space: nowrap;
  z-index: 1;
`;
const ContainerParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 10px;
`;
const Departamento = styled.a`
  text-decoration: none;
  width: 96px;
  position: relative;
  font-size: 8px;
  letter-spacing: -0.02em;
  line-height: 19px;
  font-family: Lato;
  color: #9ba5b7;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
  margin-left: -29.7px;
`;
const Container5 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px 58px;
  box-sizing: border-box;
  max-width: 100%;
`;
const HeaderRoot = styled.header`
  align-self: stretch;
  background-color: #fff;
  border: 1px solid rgba(145, 158, 171, 0.2);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: left;
  font-size: 24px;
  color: #1c252e;
  font-family: "Public Sans";
`;

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <HeaderRoot className={className}>
      <Container5>
        <ContainerInner>
          <ContainerParent>
            <Container4>
              <LinkLogoSvg>
                <Sispeuc>SISPEUC</Sispeuc>
              </LinkLogoSvg>
              <HeaderSpacing>
                <Rectangle />
              </HeaderSpacing>
              <Container3>
                <ButtonSettings>
                  <Container>
                    <UserSettingsMask loading="lazy" alt="" src="/frame.svg" />
                    <Background />
                  </Container>
                </ButtonSettings>
                <Button>
                  <Container2>
                    <MaskGroupIcon alt="" src="/mask-group@2x.png" />
                    <Container1>
                      <Avatar25webpIcon
                        loading="lazy"
                        alt=""
                        src="/avatar25webp@2x.png"
                      />
                    </Container1>
                  </Container2>
                </Button>
              </Container3>
            </Container4>
            <Nome>Nome</Nome>
          </ContainerParent>
        </ContainerInner>
        <Departamento>Departamento</Departamento>
      </Container5>
    </HeaderRoot>
  );
};

export default Header;
