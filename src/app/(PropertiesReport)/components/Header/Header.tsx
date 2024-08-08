import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 36px;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 107px;
`;

const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 0px 0px;
`;

const Divider = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
`;

const RightHeader = styled.div`
  width: 848px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 19.5px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;

const IconImage = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

const Badge = styled.div`
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

const ButtonWrapper = styled.div`
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

const IconContainer = styled.img`
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

const AvatarIcon = styled.img`
  height: 34px;
  width: 34px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  max-width: 34px;
`;

const AvatarContainer = styled.div`
  border-radius: 17px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 3px;
  z-index: 1;
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

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;

const StickyHeader = styled.header`
  align-self: stretch;
  background-color: #fff;
  border: 1px solid rgba(145, 158, 171, 0.2);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 14px 20px;
  gap: 40px;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: left;
  font-size: 24px;
  color: #1c252e;
  font-family: "Public Sans";
  @media screen and (max-width: 750px) {
    gap: 20px;
  }
`;

const Header = () => (
  <StickyHeader>
    <LeftHeader>
      <StyledLink>SISPEUC</StyledLink>
    </LeftHeader>
    <RightHeader>
      <Divider />
    </RightHeader>
    <IconRow>
      <ButtonWrapper>
        <IconImage loading="lazy" alt="" src="/frame.svg" />
        <Badge />
      </ButtonWrapper>
      <Button>
        <ButtonWrapper>
          <IconContainer alt="" src="/mask-group@2x.png" />
          <AvatarContainer>
            <AvatarIcon loading="lazy" alt="" src="/avatar25webp@2x.png" />
          </AvatarContainer>
        </ButtonWrapper>
      </Button>
    </IconRow>
  </StickyHeader>
);

export default Header;
