import type { NextPage } from "next";
import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import styled from "styled-components";
import { useRouter } from "next/router";

const Sispeuc = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 36px;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 107px;
`;
const SispeucWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 0px 0px;
`;
const Rectangle = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
`;
const RectangleWrapper = styled.div`
  width: 929px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 19.5px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const SvgIcon = styled.img`
  height: 30.2px;
  width: 30.2px;
  position: relative;
  object-fit: contain;
`;
const Background = styled.div`
  height: 8px;
  width: 8px;
  position: absolute;
  margin: 0 !important;
  top: -4px;
  right: 3.1px;
  border-radius: 4px;
  background-color: #ff5630;
  z-index: 1;
`;
const Container2 = styled.div`
  width: 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
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
  padding: 4.9px 4px;
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
const Container3 = styled.div`
  border-radius: 17px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 3px;
  z-index: 1;
`;
const Container4 = styled.div`
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
const Button1 = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Container5 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;
const Header1 = styled.header`
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
const FichaDaPropriedade = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 36px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: 19px;
    line-height: 29px;
  }
`;
const Heading = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
`;
const PainelDeListagem = styled.div`
  position: relative;
  line-height: 22px;
`;
const Link1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0.4px;
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 77px;
`;
const Background1 = styled.div`
  height: 4px;
  width: 4px;
  position: relative;
  border-radius: 2px;
  background-color: #919eab;
`;
const Item1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Item2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 78px;
  color: #919eab;
`;
const Item3 = styled.div`
  height: 4px;
  width: 4px;
`;
const Container6 = styled.div`
  height: 22.4px;
  width: 0px;
`;
const Item4 = styled.div`
  width: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const NavOrderedList = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 408px 0px 0px;
  gap: 0px 16px;
  font-size: 14px;
  @media screen and (max-width: 1050px) {
    padding-right: 204px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
const Container7 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 16px;
  max-width: 100%;
`;
const ContainerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 564px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const LtimaAlterao = styled.p`
  margin: 0;
`;
const BrunaDomecini = styled.b``;
const LtimaAlteraoBrunaContainer = styled.div`
  position: relative;
  line-height: 24px;
`;
const Link2 = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 12px 6px 8px;
  box-sizing: border-box;
  min-width: 64px;
`;
const Button2 = styled(Button)`
  height: 48px;
  flex: 1;
  min-width: 64px;
`;
const Container8 = styled.div`
  width: 321px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  max-width: 100%;
  font-size: 14px;
  color: #919eab;
`;
const Container9 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 100%;
`;
const Margin1 = styled.section`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: 24px;
  color: #1c252e;
  font-family: "Public Sans";
`;
const IconssolidicRadioOff = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const StarIcon = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
const StartIcon = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  display: none;
  z-index: 2;
`;
const Label = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 111px;
`;
const EndIcon = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  display: none;
  z-index: 0;
`;
const Tab = styled.div`
  border-bottom: 2px solid #1c252e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 13px 0px 10px;
  gap: 8px;
  cursor: pointer;
`;
const Label1 = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 50px;
`;
const Tab1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 13px 0px;
  gap: 8px;
`;
const Tabs = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`;
const Container10 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Margin2 = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 20px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Menuitem1 = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  height: 34px;
  font-family: Inter;
  font-size: 14px;
  color: #1c252e;
  cursor: pointer;
`;
const MenuItems = styled.div`
  width: 228px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 0px;
  box-sizing: border-box;
  gap: 10px;
`;
const ProspecoDados = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 28px;
  font-weight: 600;
`;
const Container11 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const InformaesDaOrigem = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 22px;
`;
const Container12 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  color: #637381;
`;
const Container13 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  min-width: 419px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const ImgIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  object-fit: contain;
`;
const Container14 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 24px 24px 0px;
  box-sizing: border-box;
  max-width: 100%;
  row-gap: 20px;
`;
const Separator = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-bottom: 1px solid rgba(145, 158, 171, 0.2);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
`;
const Protocolo = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 22px;
  font-weight: 600;
`;
const IcReplaceIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const StartAdornment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const StartAdornment1 = styled.div`
  height: 40px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 4px;
  box-sizing: border-box;
  z-index: 0;
`;
const Value = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-family: Inter;
  font-size: 14px;
  background-color: transparent;
  align-self: stretch;
  height: 22px;
  position: relative;
  line-height: 22px;
  color: #919eab;
  text-align: left;
  display: flex;
  align-items: center;
  min-width: 175px;
  padding: 0;
`;
const EndAdornment = styled.div`
  height: 40px;
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 19.5px);
  right: 0px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 4px;
  box-sizing: border-box;
  z-index: 2;
`;
const Warp1 = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #f9fafb;
  border: 1px solid rgba(145, 158, 171, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 14px 17px 14px 13px;
  position: relative;
`;
const DetailFields = styled.div`
  width: 324px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  max-width: 100%;
`;
const Value1 = styled.input`
  width: 292px;
  border: none;
  outline: none;
  font-family: Inter;
  font-size: 14px;
  background-color: transparent;
  height: 22px;
  position: relative;
  line-height: 22px;
  color: #919eab;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 0;
`;
const Warp2 = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #f9fafb;
  border: 1px solid rgba(145, 158, 171, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 14px 18px 14px 14px;
  position: relative;
`;
const DetailFields1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  min-width: 631px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const Value2 = styled.input`
  width: 364px;
  border: none;
  outline: none;
  font-family: Inter;
  font-size: 14px;
  background-color: transparent;
  height: 22px;
  position: relative;
  line-height: 22px;
  color: #919eab;
  text-align: left;
  display: flex;
  align-items: center;
  max-width: 100%;
  padding: 0;
`;
const EndAdornment1 = styled.div`
  height: 40px;
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 20px);
  right: 0px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 4px;
  box-sizing: border-box;
  z-index: 2;
`;
const Warp3 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 8px;
  border: 1px solid rgba(145, 158, 171, 0.2);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15.5px 18px 15.5px 14px;
  position: relative;
  gap: 10px;
  max-width: 100%;
`;
const Textarea = styled.div`
  align-self: stretch;
  height: 98px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const DetailFields2 = styled.div`
  width: 664px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  max-width: 100%;
`;
const Container15 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px 12px;
  min-height: 441px;
  max-width: 100%;
`;
const Container16 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 24px 24px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: 14px;
`;
const Backgroundshadow1 = styled.div`
  align-self: stretch;
  box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.2),
    0px 12px 24px -4px rgba(145, 158, 171, 0.12);
  border-radius: 16px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  max-width: 100%;
`;
const Textfield1 = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  height: 53px;
  font-family: Inter;
  font-size: 14px;
  color: #919eab;
`;
const EditadoPorUltimo = styled.span``;
const EditadoPorUltimoContainer = styled.div`
  align-self: stretch;
  position: relative;
`;
const AddressInputs = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
  font-size: 12px;
  color: #919eab;
`;
const Heading1 = styled.div`
  width: 664px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Container17 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 311px;
  max-width: 100%;
`;
const ImgIcon1 = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
`;
const Margin3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 8px 0px 0px;
`;
const AdicionarCampos = styled.b`
  position: relative;
  font-size: 14px;
  line-height: 24px;
  display: inline-block;
  font-family: "Public Sans";
  color: #fff;
  white-space: pre-wrap;
  text-align: left;
  min-width: 125px;
`;
const Link3 = styled.button`
  cursor: pointer;
  border: none;
  padding: 4px 12px 6px 8px;
  background-color: #1c252e;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
`;
const Container18 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 631px;
  max-width: 100%;
  color: #637381;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    min-width: 100%;
  }
`;
const Value3 = styled.div`
  width: 292px;
  position: relative;
  line-height: 22px;
  display: flex;
  align-items: center;
`;
const Warp4 = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #f9fafb;
  border: 1px solid rgba(145, 158, 171, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 14px 20px 14px 14px;
  position: relative;
`;
const Stack = styled.div`
  width: 664px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  color: #919eab;
`;
const Container19 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 24px 24px;
  box-sizing: border-box;
  gap: 12px;
  min-height: 717px;
  max-width: 100%;
  font-size: 14px;
`;
const Container20 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 419px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const Warp5 = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #f9fafb;
  border: 1px solid #f4f6f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 14px 17px 14px 13px;
  position: relative;
`;
const IconContainer = styled.div`
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
const Label2 = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 25px;
`;
const Label3 = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 27px;
`;
const Fieldset = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 526px 0px 0px;
  gap: 0px 14px;
  @media screen and (max-width: 750px) {
    padding-right: 263px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
const CancelfilledIcon = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  border-radius: 100px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Chip = styled.div`
  position: relative;
  letter-spacing: 0.16px;
  line-height: 18px;
  display: inline-block;
  min-width: 46px;
`;
const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 6px;
`;
const SearchfilledIcon = styled.img`
  height: 13px;
  width: 12px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const MinWidth = styled.div`
  height: 18px;
  width: 18px;
  position: relative;
  transform: rotate(-90deg);
  display: none;
  z-index: 1;
`;
const MinWidth1 = styled.div`
  height: 8px;
  width: 8px;
  position: relative;
  border-radius: 100px;
`;
const Badge = styled.div`
  position: absolute;
  top: calc(50% - 4px);
  left: calc(50% - 4px);
  border-radius: 100px;
  background-color: #2e7d32;
  width: 8px;
  height: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Border = styled.div`
  height: 12px;
  width: 12px;
  position: absolute;
  margin: 0 !important;
  right: -6px;
  bottom: -6px;
  border-radius: 100px;
  background-color: #fff;
  display: none;
  z-index: 2;
`;
const Ver = styled.div`
  position: relative;
  letter-spacing: 0.16px;
  line-height: 18px;
  display: inline-block;
  min-width: 16px;
`;
const Avatar = styled.div`
  border-radius: 100px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  position: relative;
  font-size: 10px;
  color: #fff;
`;
const Chip1 = styled.div`
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 3px 4px;
  box-sizing: border-box;
  min-height: 24px;
  max-height: 24px;
`;
const ProcessoChip = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 402px 0px 0px;
  gap: 10px;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    padding-right: 201px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
const Textfield2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  color: #919eab;
  font-family: Inter;
`;
const Stack1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto;
`;
const Container21 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px 12px;
  min-height: 516px;
  max-width: 100%;
`;
const Container22 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 302px;
  max-width: 100%;
`;
const AdicionarMatricula = styled.b`
  position: relative;
  line-height: 24px;
`;
const Link4 = styled.div`
  border-radius: 8px;
  background-color: #1c252e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 12px 6px;
  box-sizing: border-box;
  min-width: 64px;
  white-space: nowrap;
  font-size: 14px;
  color: #fff;
  font-family: "Public Sans";
`;
const Container23 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 24px 24px 0px;
  box-sizing: border-box;
  gap: 12px;
  max-width: 100%;
  font-size: 18px;
`;
const Stack2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  flex-shrink: 0;
`;
const Svg = styled.input`
  margin: 0;
  height: 20px;
  width: 20px;
  position: relative;
`;
const Container24 = styled.div`
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
const Cell2 = styled.div`
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2px 0px 2px 8px;
`;
const Nome = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  min-width: 39px;
`;
const Cell3 = styled.div`
  width: 133.7px;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 8px 16px;
  box-sizing: border-box;
`;
const Rg = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  min-width: 20px;
`;
const Cell4 = styled.div`
  width: 120px;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 8px 16px;
  box-sizing: border-box;
`;
const Cpf = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 600;
  display: inline-block;
  min-width: 28px;
`;
const Cell5 = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 40px;
  flex: 1;
  font-family: "Public Sans";
  font-weight: 600;
  font-size: 14px;
  color: #637381;
  min-width: 139px;
`;
const HeaderRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  font-size: 14px;
  color: #637381;
  font-family: "Public Sans";
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5.5px 0px 5.5px 8px;
`;
const Container25 = styled.div`
  width: 133.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 12.5px 20px 12.5px 15px;
  box-sizing: border-box;
  font-size: 14px;
  color: #1c252e;
`;
const ParecerHeading = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 12px;
  font-weight: 500;
`;
const ParecerStack = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 17.5px 16px;
  box-sizing: border-box;
`;
const ObservacoesAdornment = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 11.5px 16px;
  box-sizing: border-box;
  min-width: 139px;
`;
const Label4 = styled.div`
  align-self: stretch;
  border-bottom: 1px dashed rgba(145, 158, 171, 0.2);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
`;
const Label5 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
`;
const Fieldset1 = styled.div`
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid rgba(145, 158, 171, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  color: #919eab;
`;
const Container26 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;
const MatriculaValue = styled.div`
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid #d1d2d4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 14px 15px;
  gap: 12px;
`;
const Container27 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 24px 24px;
`;
const Backgroundshadow2 = styled.div`
  align-self: stretch;
  box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.2),
    0px 12px 24px -4px rgba(145, 158, 171, 0.12);
  border-radius: 16px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  max-width: 100%;
  font-size: 14px;
`;
const Container28 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  min-width: 337px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const StreetView = styled.b`
  position: relative;
  line-height: 24px;
  display: inline-block;
  min-width: 79px;
`;
const Link5 = styled.div`
  border-radius: 8px;
  background-color: #1c252e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 11px 6px;
  box-sizing: border-box;
  min-width: 64px;
  white-space: nowrap;
  font-size: 14px;
  color: #fff;
  font-family: "Public Sans";
`;
const Container29 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 24px 24px 0px;
  box-sizing: border-box;
  gap: 12px;
  max-width: 100%;
`;
const SvgIcon1 = styled.img`
  width: 200px;
  height: 150px;
  position: relative;
`;
const ArrasteOuSelecione = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 600;
`;
const Container30 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 20px;
`;
const Procurar = styled.div`
  position: relative;
  text-decoration: underline;
  line-height: 22px;
  display: inline-block;
  min-width: 57px;
`;
const Container31 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  color: #00a76f;
`;
const Container32 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 36px 0px 0px;
  gap: 3.5px;
  font-size: 14px;
  color: #637381;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const Container33 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.5px;
  z-index: 1;
`;
const Container34 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;
  @media screen and (max-width: 750px) {
    padding-left: 25px;
    padding-right: 25px;
    box-sizing: border-box;
  }
`;
const Overlayborder = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(145, 158, 171, 0.08);
  border: 1px dashed rgba(145, 158, 171, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 39px 40px;
  text-align: center;
  font-size: 18px;
`;
const Container35 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;
const Inputlabel1 = styled(InputLabel)``;
const Selecione = styled(MenuItem)``;
const Select1 = styled(Select)``;
const Formhelpertext1 = styled(FormHelperText)``;
const Warp6 = styled(FormControl)`
  align-self: stretch;
  height: 53px;
  font-family: Inter;
  font-size: 14px;
  color: #919eab;
`;
const Heading6Group = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  max-width: 100%;
`;
const Container36 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  max-width: 100%;
`;
const Container37 = styled.div`
  width: 712px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  max-width: 720px;
  @media screen and (max-width: 750px) {
    gap: 20px;
    max-width: 100%;
  }
`;
const Container38 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 0px 64px;
  box-sizing: border-box;
  gap: 16px;
  max-width: 1200px;
  @media screen and (max-width: 1200px) {
    padding-top: 20px;
    padding-bottom: 27px;
    box-sizing: border-box;
    max-width: 100%;
  }
  @media screen and (max-width: 1050px) {
    padding-bottom: 20px;
    box-sizing: border-box;
  }
`;
const ContainerContainer = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: 18px;
  color: #1c252e;
  font-family: Inter;
`;
const Body1 = styled.main`
  height: 4109.9px;
  flex: 1;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 3835.5px;
  box-sizing: border-box;
  min-height: 900px;
  max-width: 100%;
  text-align: left;
  font-size: 14px;
  color: #1c252e;
  font-family: Inter;
  @media screen and (max-width: 1200px) {
    padding-bottom: 1053px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1050px) {
    height: auto;
    padding-bottom: 684px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 445px;
    box-sizing: border-box;
  }
`;
const FichaDePropriedadeRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 86.1px;
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
`;

const FichaDePropriedade: NextPage = () => {
  const router = useRouter();

  const onTabContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMenuItemClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='container1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMenuItemClick1 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='backgroundShadowContainer2']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMenuItemClick2 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='backgroundShadowContainer1']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMenuItemClick3 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='backgroundShadowContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMenuItemClick4 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <FichaDePropriedadeRoot>
      <Body1>
        <Header1>
          <SispeucWrapper>
            <Sispeuc>SISPEUC</Sispeuc>
          </SispeucWrapper>
          <RectangleWrapper>
            <Rectangle />
          </RectangleWrapper>
          <Container5>
            <ButtonSettings>
              <Container2>
                <SvgIcon loading="lazy" alt="" src="/svg@2x.png" />
                <Background />
              </Container2>
            </ButtonSettings>
            <Button1>
              <Container4>
                <MaskGroupIcon alt="" src="/mask-group@2x.png" />
                <Container3>
                  <Avatar25webpIcon
                    loading="lazy"
                    alt=""
                    src="/avatar25webp@2x.png"
                  />
                </Container3>
              </Container4>
            </Button1>
          </Container5>
        </Header1>
        <Margin1>
          <Container9>
            <ContainerWrapper>
              <Container7>
                <Heading>
                  <FichaDaPropriedade>
                    Ficha da propriedade #ID1234
                  </FichaDaPropriedade>
                </Heading>
                <NavOrderedList>
                  <Item>
                    <Link1>
                      <PainelDeListagem>
                        Painel de listagem de imóveis
                      </PainelDeListagem>
                    </Link1>
                  </Item>
                  <Item1>
                    <Background1 />
                  </Item1>
                  <Item2>
                    <Link1>
                      <PainelDeListagem>
                        Ficha da propriedade #ID1234
                      </PainelDeListagem>
                    </Link1>
                  </Item2>
                  <Item3 />
                  <Item4>
                    <Container6 />
                  </Item4>
                </NavOrderedList>
              </Container7>
            </ContainerWrapper>
            <Container8>
              <Link2>
                <LtimaAlteraoBrunaContainer>
                  <LtimaAlterao>Última alteração:</LtimaAlterao>
                  <LtimaAlterao>
                    <BrunaDomecini>Bruna Domecini</BrunaDomecini>
                  </LtimaAlterao>
                </LtimaAlteraoBrunaContainer>
              </Link2>
              <Button2
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "15",
                  background: "#1c252e",
                  borderRadius: "8px",
                  "&:hover": { background: "#1c252e" },
                  height: 48,
                }}
              >
                Salvar informações
              </Button2>
            </Container8>
          </Container9>
        </Margin1>
        <Margin2>
          <Container10>
            <Tabs>
              <Tab onClick={onTabContainerClick}>
                <StartIcon>
                  <StarIcon>
                    <IconssolidicRadioOff
                      alt=""
                      src="/iconssolidicradiooff.svg"
                    />
                  </StarIcon>
                </StartIcon>
                <Label>Dados do imóvel</Label>
                <EndIcon>
                  <StarIcon>
                    <IconssolidicRadioOff
                      alt=""
                      src="/iconssolidicradiooff-1.svg"
                    />
                  </StarIcon>
                </EndIcon>
              </Tab>
              <Tab1>
                <StartIcon>
                  <StarIcon>
                    <IconssolidicRadioOff
                      alt=""
                      src="/iconssolidicradiooff-2.svg"
                    />
                  </StarIcon>
                </StartIcon>
                <Label1>Vistoria</Label1>
                <EndIcon>
                  <StarIcon>
                    <IconssolidicRadioOff
                      alt=""
                      src="/iconssolidicradiooff-3.svg"
                    />
                  </StarIcon>
                </EndIcon>
              </Tab1>
            </Tabs>
          </Container10>
        </Margin2>
        <ContainerContainer>
          <Container38>
            <MenuItems>
              <Menuitem1
                placeholder="Prospecção"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "34px",
                    backgroundColor: "rgba(145, 158, 171, 0.16)",
                    borderRadius: "6px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#1c252e" },
                }}
                onClick={onMenuItemClick}
              />
              <Menuitem1
                placeholder="Dados do imóvel"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "34px",
                    borderRadius: "6px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#1c252e" },
                }}
                onClick={onMenuItemClick1}
              />
              <Menuitem1
                placeholder="Dados Processo"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "34px",
                    borderRadius: "6px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#1c252e" },
                }}
                onClick={onMenuItemClick2}
              />
              <Menuitem1
                placeholder="Matriculas"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "34px",
                    borderRadius: "6px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#1c252e" },
                }}
                onClick={onMenuItemClick3}
              />
              <Menuitem1
                placeholder="Inspeção Virtual"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "34px",
                    borderRadius: "6px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#1c252e" },
                }}
                onClick={onMenuItemClick4}
              />
            </MenuItems>
            <Container37>
              <Backgroundshadow1>
                <Container14 data-scroll-to="container1">
                  <Container13>
                    <Container11>
                      <ProspecoDados>
                        Prospecção - Dados da denúncia
                      </ProspecoDados>
                    </Container11>
                    <Container12>
                      <InformaesDaOrigem>
                        Informações da origem da denúncia da propriedade
                      </InformaesDaOrigem>
                    </Container12>
                  </Container13>
                  <ImgIcon loading="lazy" alt="" src="/img.svg" />
                </Container14>
                <Separator />
                <Container16>
                  <Container15>
                    <DetailFields>
                      <Container11>
                        <Protocolo>Protocolo</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp1>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value placeholder="Digite aqui" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-1.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp1>
                      </Container11>
                    </DetailFields>
                    <DetailFields>
                      <Container11>
                        <Protocolo>Data da denúncia</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp1>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-2.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value placeholder="dd/mm/aaaa" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-3.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp1>
                      </Container11>
                    </DetailFields>
                    <DetailFields>
                      <Container11>
                        <Protocolo>Período inutilizado</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp1>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-4.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value placeholder="Mais de 1 ano" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-5.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp1>
                      </Container11>
                    </DetailFields>
                    <DetailFields>
                      <Container11>
                        <Protocolo>Origem da denúncia</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp1>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-6.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value placeholder="Mapa Colaborativo" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-7.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp1>
                      </Container11>
                    </DetailFields>
                    <DetailFields1>
                      <Container11>
                        <Protocolo>Estado do imóvel</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp2>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-8.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value1 placeholder="Não edificado" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-9.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp2>
                      </Container11>
                    </DetailFields1>
                    <DetailFields2>
                      <Container11>
                        <Protocolo>Descrição</Protocolo>
                      </Container11>
                      <Textarea>
                        <Warp3>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-10.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value2
                            placeholder="Impressões descritas sobre a denúncia da propriedade"
                            type="text"
                          />
                          <EndAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-11.svg" />
                            </StartAdornment>
                          </EndAdornment1>
                        </Warp3>
                      </Textarea>
                    </DetailFields2>
                  </Container15>
                </Container16>
              </Backgroundshadow1>
              <Backgroundshadow1 data-scroll-to="backgroundShadowContainer2">
                <Container14>
                  <Container13>
                    <Container11>
                      <ProspecoDados>Dados do imóvel</ProspecoDados>
                    </Container11>
                    <Container12>
                      <InformaesDaOrigem>
                        Aqui você encontra todas as informações e dados sobre o
                        imóvel
                      </InformaesDaOrigem>
                    </Container12>
                  </Container13>
                  <ImgIcon alt="" src="/img-1.svg" />
                </Container14>
                <Separator />
                <Container19>
                  <DetailFields>
                    <Container11>
                      <Protocolo>Logradouro</Protocolo>
                    </Container11>
                    <AddressInputs>
                      <Textfield1
                        placeholder="Digite aqui"
                        variant="outlined"
                        sx={{
                          "& fieldset": {
                            borderColor: "rgba(145, 158, 171, 0.2)",
                          },
                          "& .MuiInputBase-root": {
                            height: "53px",
                            backgroundColor: "#f9fafb",
                            borderRadius: "8px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#919eab" },
                        }}
                      />
                      <Container11>
                        <EditadoPorUltimoContainer>
                          <EditadoPorUltimo>{`Editado por ultimo: `}</EditadoPorUltimo>
                          <BrunaDomecini>John</BrunaDomecini>
                        </EditadoPorUltimoContainer>
                      </Container11>
                    </AddressInputs>
                  </DetailFields>
                  <DetailFields>
                    <Container11>
                      <Protocolo>Número</Protocolo>
                    </Container11>
                    <AddressInputs>
                      <Textfield1
                        placeholder="Digite aqui"
                        variant="outlined"
                        sx={{
                          "& fieldset": {
                            borderColor: "rgba(145, 158, 171, 0.2)",
                          },
                          "& .MuiInputBase-root": {
                            height: "53px",
                            backgroundColor: "#f9fafb",
                            borderRadius: "8px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#919eab" },
                        }}
                      />
                      <Container11>
                        <EditadoPorUltimoContainer>
                          <EditadoPorUltimo>{`Editado por ultimo: `}</EditadoPorUltimo>
                          <BrunaDomecini>Jane</BrunaDomecini>
                        </EditadoPorUltimoContainer>
                      </Container11>
                    </AddressInputs>
                  </DetailFields>
                  <DetailFields>
                    <Container11>
                      <Protocolo>Complemento</Protocolo>
                    </Container11>
                    <Container11>
                      <Warp1>
                        <StartAdornment1>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-16.svg" />
                          </StartAdornment>
                        </StartAdornment1>
                        <Value placeholder="Digite aqui" type="text" />
                        <EndAdornment>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-17.svg" />
                          </StartAdornment>
                        </EndAdornment>
                      </Warp1>
                    </Container11>
                  </DetailFields>
                  <DetailFields>
                    <Container11>
                      <Protocolo>CEP</Protocolo>
                    </Container11>
                    <Container11>
                      <Warp1>
                        <StartAdornment1>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-18.svg" />
                          </StartAdornment>
                        </StartAdornment1>
                        <Value placeholder="Digite aqui" type="text" />
                        <EndAdornment>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-19.svg" />
                          </StartAdornment>
                        </EndAdornment>
                      </Warp1>
                    </Container11>
                  </DetailFields>
                  <DetailFields>
                    <Container11>
                      <Protocolo>Referência</Protocolo>
                    </Container11>
                    <Container11>
                      <Warp1>
                        <StartAdornment1>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-20.svg" />
                          </StartAdornment>
                        </StartAdornment1>
                        <Value placeholder="Digite aqui" type="text" />
                        <EndAdornment>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-21.svg" />
                          </StartAdornment>
                        </EndAdornment>
                      </Warp1>
                    </Container11>
                  </DetailFields>
                  <DetailFields>
                    <Container11>
                      <Protocolo>Subprefeitura</Protocolo>
                    </Container11>
                    <Container11>
                      <Warp1>
                        <StartAdornment1>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-22.svg" />
                          </StartAdornment>
                        </StartAdornment1>
                        <Value placeholder="Digite aqui" type="text" />
                        <EndAdornment>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-23.svg" />
                          </StartAdornment>
                        </EndAdornment>
                      </Warp1>
                    </Container11>
                  </DetailFields>
                  <DetailFields>
                    <Container11>
                      <Protocolo>Macroarea</Protocolo>
                    </Container11>
                    <Container11>
                      <Warp1>
                        <StartAdornment1>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-24.svg" />
                          </StartAdornment>
                        </StartAdornment1>
                        <Value placeholder="Digite aqui" type="text" />
                        <EndAdornment>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-25.svg" />
                          </StartAdornment>
                        </EndAdornment>
                      </Warp1>
                    </Container11>
                  </DetailFields>
                  <DetailFields>
                    <Container11>
                      <Protocolo>Zona</Protocolo>
                    </Container11>
                    <Container11>
                      <Warp1>
                        <StartAdornment1>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-26.svg" />
                          </StartAdornment>
                        </StartAdornment1>
                        <Value placeholder="Digite aqui" type="text" />
                        <EndAdornment>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-27.svg" />
                          </StartAdornment>
                        </EndAdornment>
                      </Warp1>
                    </Container11>
                  </DetailFields>
                  <DetailFields>
                    <Container11>
                      <Protocolo>Área construída</Protocolo>
                    </Container11>
                    <Container11>
                      <Warp1>
                        <StartAdornment1>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-28.svg" />
                          </StartAdornment>
                        </StartAdornment1>
                        <Value placeholder="Digite aqui" type="text" />
                        <EndAdornment>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-29.svg" />
                          </StartAdornment>
                        </EndAdornment>
                      </Warp1>
                    </Container11>
                  </DetailFields>
                  <DetailFields>
                    <Container11>
                      <Protocolo>Area do lote total</Protocolo>
                    </Container11>
                    <Container11>
                      <Warp1>
                        <StartAdornment1>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-30.svg" />
                          </StartAdornment>
                        </StartAdornment1>
                        <Value placeholder="Digite aqui" type="text" />
                        <EndAdornment>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-31.svg" />
                          </StartAdornment>
                        </EndAdornment>
                      </Warp1>
                    </Container11>
                  </DetailFields>
                  <Heading1>
                    <Protocolo>Adicionar mais informações</Protocolo>
                  </Heading1>
                  <Container18>
                    <Container17>
                      <Container11>
                        <InformaesDaOrigem>
                          <LtimaAlterao>
                            Não encontrou um campo que precisa?
                          </LtimaAlterao>
                          <LtimaAlterao>
                            Adicione os campos opcionais.
                          </LtimaAlterao>
                        </InformaesDaOrigem>
                      </Container11>
                    </Container17>
                    <Link3>
                      <Margin3>
                        <ImgIcon1 alt="" src="/img-2.svg" />
                      </Margin3>
                      <AdicionarCampos>Adicionar campos</AdicionarCampos>
                    </Link3>
                  </Container18>
                  <Heading1>
                    <Protocolo>Coeficiente de aproveitamento</Protocolo>
                  </Heading1>
                  <Stack>
                    <Container11>
                      <Warp4>
                        <StartAdornment1>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-32.svg" />
                          </StartAdornment>
                        </StartAdornment1>
                        <Value3>Digite aqui</Value3>
                        <EndAdornment>
                          <StartAdornment>
                            <IcReplaceIcon alt="" src="/icreplace-33.svg" />
                          </StartAdornment>
                        </EndAdornment>
                      </Warp4>
                    </Container11>
                  </Stack>
                </Container19>
              </Backgroundshadow1>
              <Backgroundshadow1 data-scroll-to="backgroundShadowContainer1">
                <Container14>
                  <Container20>
                    <Container11>
                      <ProspecoDados>Dados Processo</ProspecoDados>
                    </Container11>
                  </Container20>
                  <ImgIcon alt="" src="/img-3.svg" />
                </Container14>
                <Separator />
                <Container16>
                  <Container21>
                    <DetailFields>
                      <Container11>
                        <Protocolo>Número do processo</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp5>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-34.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value placeholder="0128010928" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-35.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp5>
                      </Container11>
                    </DetailFields>
                    <DetailFields>
                      <Container11>
                        <Protocolo>Autuação SEI</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp1>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-36.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value placeholder="Digite aqui" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-37.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp1>
                      </Container11>
                    </DetailFields>
                    <DetailFields>
                      <Container11>
                        <Protocolo>Data autuação</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp1>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-38.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value placeholder="dd/mm/aaaa" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-39.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp1>
                      </Container11>
                    </DetailFields>
                    <DetailFields>
                      <Container11>
                        <Protocolo>Status</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp1>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-40.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value placeholder="Ativo" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-41.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp1>
                      </Container11>
                    </DetailFields>
                    <DetailFields2>
                      <Container11>
                        <Protocolo>Imóvel Contiuidade</Protocolo>
                      </Container11>
                      <Fieldset>
                        <StartAdornment>
                          <IconContainer>
                            <StartAdornment>
                              <IconssolidicRadioOff
                                alt=""
                                src="/iconssolidicradiooff-14.svg"
                              />
                            </StartAdornment>
                          </IconContainer>
                          <Label2>Sim</Label2>
                        </StartAdornment>
                        <StartAdornment>
                          <IconContainer>
                            <StartAdornment>
                              <IconssolidicRadioOff
                                alt=""
                                src="/iconssolidicradiooff-15.svg"
                              />
                            </StartAdornment>
                          </IconContainer>
                          <Label3>Não</Label3>
                        </StartAdornment>
                      </Fieldset>
                    </DetailFields2>
                    <DetailFields>
                      <Container11>
                        <Protocolo>Criado em</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp1>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-42.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value placeholder="dd/mm/aaaa" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-43.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp1>
                      </Container11>
                    </DetailFields>
                    <DetailFields>
                      <Container11>
                        <Protocolo>Atualizado em</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp1>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-44.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value placeholder="dd/mm/aaaa" type="text" />
                          <EndAdornment>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-45.svg" />
                            </StartAdornment>
                          </EndAdornment>
                        </Warp1>
                      </Container11>
                    </DetailFields>
                    <DetailFields2>
                      <Container11>
                        <Protocolo>Processos relacionados</Protocolo>
                      </Container11>
                      <Stack1>
                        <ProcessoChip>
                          <Chip1>
                            <CancelfilledIcon
                              loading="lazy"
                              alt=""
                              src="/cancelfilled.svg"
                            />
                            <Typography>
                              <Chip>#12000</Chip>
                            </Typography>
                            <Avatar>
                              <Item1>
                                <SearchfilledIcon
                                  loading="lazy"
                                  alt=""
                                  src="/searchfilled.svg"
                                />
                              </Item1>
                              <MinWidth />
                              <Border>
                                <Badge>
                                  <MinWidth1 />
                                </Badge>
                              </Border>
                              <Ver>Ver</Ver>
                            </Avatar>
                          </Chip1>
                          <Chip1>
                            <CancelfilledIcon
                              alt=""
                              src="/cancelfilled-1.svg"
                            />
                            <Typography>
                              <Chip>#12000</Chip>
                            </Typography>
                            <Avatar>
                              <Item1>
                                <SearchfilledIcon
                                  alt=""
                                  src="/searchfilled-1.svg"
                                />
                              </Item1>
                              <MinWidth />
                              <Border>
                                <Badge>
                                  <MinWidth1 />
                                </Badge>
                              </Border>
                              <Ver>Ver</Ver>
                            </Avatar>
                          </Chip1>
                        </ProcessoChip>
                        <Textfield2>
                          <Warp4>
                            <StartAdornment1>
                              <StartAdornment>
                                <IcReplaceIcon alt="" src="/icreplace-46.svg" />
                              </StartAdornment>
                            </StartAdornment1>
                            <Value3>Relacione um processo aqui</Value3>
                            <EndAdornment>
                              <StartAdornment>
                                <IcReplaceIcon alt="" src="/icreplace-47.svg" />
                              </StartAdornment>
                            </EndAdornment>
                          </Warp4>
                        </Textfield2>
                      </Stack1>
                    </DetailFields2>
                  </Container21>
                </Container16>
              </Backgroundshadow1>
              <Backgroundshadow2 data-scroll-to="backgroundShadowContainer">
                <Container23>
                  <Container22>
                    <Container11>
                      <ProspecoDados>Matriculas</ProspecoDados>
                    </Container11>
                  </Container22>
                  <Link4>
                    <AdicionarMatricula>Adicionar matricula</AdicionarMatricula>
                  </Link4>
                  <ImgIcon alt="" src="/img-4.svg" />
                </Container23>
                <Separator />
                <Container27>
                  <MatriculaValue>
                    <Stack2>
                      <Container11>
                        <Protocolo>Número da Matricula</Protocolo>
                      </Container11>
                      <Textfield1
                        placeholder="66465454646"
                        variant="outlined"
                        sx={{
                          "& fieldset": {
                            borderColor: "rgba(145, 158, 171, 0.2)",
                          },
                          "& .MuiInputBase-root": {
                            height: "53px",
                            backgroundColor: "#f9fafb",
                            borderRadius: "8px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#919eab" },
                        }}
                      />
                    </Stack2>
                    <Container26>
                      <Container11>
                        <Protocolo>{`Proprietários `}</Protocolo>
                      </Container11>
                      <Fieldset1>
                        <HeaderRow>
                          <Cell2>
                            <Container24>
                              <Svg type="checkbox" />
                            </Container24>
                          </Cell2>
                          <Cell3>
                            <StartAdornment>
                              <Nome>Nome</Nome>
                            </StartAdornment>
                          </Cell3>
                          <Cell4>
                            <StartAdornment>
                              <Rg>RG</Rg>
                            </StartAdornment>
                          </Cell4>
                          <Cell4>
                            <StartAdornment>
                              <Cpf>CPF</Cpf>
                            </StartAdornment>
                          </Cell4>
                          <Cell5
                            placeholder="Endereço"
                            variant="outlined"
                            sx={{
                              "& fieldset": { border: "none" },
                              "& .MuiInputBase-root": {
                                height: "40px",
                                backgroundColor: "#f4f6f8",
                                borderRadius: "0px 0px 0px 0px",
                                fontSize: "14px",
                              },
                              "& .MuiInputBase-input": { color: "#637381" },
                            }}
                          />
                        </HeaderRow>
                        <Label4>
                          <Data>
                            <Container24>
                              <Svg type="checkbox" />
                            </Container24>
                          </Data>
                          <Container25>
                            <Label1>Marcos</Label1>
                          </Container25>
                          <ParecerStack>
                            <ParecerHeading>0000000-0</ParecerHeading>
                          </ParecerStack>
                          <ParecerStack>
                            <ParecerHeading>0000000-0</ParecerHeading>
                          </ParecerStack>
                          <ObservacoesAdornment>
                            <ParecerHeading>
                              Rua das Flores, 1000 - apto 90 - Vila Mariana -
                              0423993
                            </ParecerHeading>
                          </ObservacoesAdornment>
                        </Label4>
                        <Label5>
                          <Data>
                            <Container24>
                              <Svg type="checkbox" />
                            </Container24>
                          </Data>
                          <Container25>
                            <Label1>Marcos</Label1>
                          </Container25>
                          <ParecerStack>
                            <ParecerHeading>0000000-0</ParecerHeading>
                          </ParecerStack>
                          <ParecerStack>
                            <ParecerHeading>0000000-0</ParecerHeading>
                          </ParecerStack>
                          <ObservacoesAdornment>
                            <ParecerHeading>
                              Rua das Flores, 1000 - apto 90 - Vila Mariana -
                              0423993
                            </ParecerHeading>
                          </ObservacoesAdornment>
                        </Label5>
                      </Fieldset1>
                    </Container26>
                  </MatriculaValue>
                </Container27>
                <Container27>
                  <MatriculaValue>
                    <Stack2>
                      <Container11>
                        <Protocolo>Número da Matricula</Protocolo>
                      </Container11>
                      <Textfield1
                        placeholder="66465454646"
                        variant="outlined"
                        sx={{
                          "& fieldset": {
                            borderColor: "rgba(145, 158, 171, 0.2)",
                          },
                          "& .MuiInputBase-root": {
                            height: "53px",
                            backgroundColor: "#f9fafb",
                            borderRadius: "8px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#919eab" },
                        }}
                      />
                    </Stack2>
                    <Container26>
                      <Container11>
                        <Protocolo>{`Proprietários `}</Protocolo>
                      </Container11>
                      <Fieldset1>
                        <HeaderRow>
                          <Cell2>
                            <Container24>
                              <Svg type="checkbox" />
                            </Container24>
                          </Cell2>
                          <Cell3>
                            <StartAdornment>
                              <Nome>Nome</Nome>
                            </StartAdornment>
                          </Cell3>
                          <Cell4>
                            <StartAdornment>
                              <Rg>RG</Rg>
                            </StartAdornment>
                          </Cell4>
                          <Cell4>
                            <StartAdornment>
                              <Cpf>CPF</Cpf>
                            </StartAdornment>
                          </Cell4>
                          <Cell5
                            placeholder="Endereço"
                            variant="outlined"
                            sx={{
                              "& fieldset": { border: "none" },
                              "& .MuiInputBase-root": {
                                height: "40px",
                                backgroundColor: "#f4f6f8",
                                borderRadius: "0px 0px 0px 0px",
                                fontSize: "14px",
                              },
                              "& .MuiInputBase-input": { color: "#637381" },
                            }}
                          />
                        </HeaderRow>
                        <Label4>
                          <Data>
                            <Container24>
                              <Svg type="checkbox" />
                            </Container24>
                          </Data>
                          <Container25>
                            <Label1>Marcos</Label1>
                          </Container25>
                          <ParecerStack>
                            <ParecerHeading>0000000-0</ParecerHeading>
                          </ParecerStack>
                          <ParecerStack>
                            <ParecerHeading>0000000-0</ParecerHeading>
                          </ParecerStack>
                          <ObservacoesAdornment>
                            <ParecerHeading>
                              Rua das Flores, 1000 - apto 90 - Vila Mariana -
                              0423993
                            </ParecerHeading>
                          </ObservacoesAdornment>
                        </Label4>
                        <Label5>
                          <Data>
                            <Container24>
                              <Svg type="checkbox" />
                            </Container24>
                          </Data>
                          <Container25>
                            <Label1>Marcos</Label1>
                          </Container25>
                          <ParecerStack>
                            <ParecerHeading>0000000-0</ParecerHeading>
                          </ParecerStack>
                          <ParecerStack>
                            <ParecerHeading>0000000-0</ParecerHeading>
                          </ParecerStack>
                          <ObservacoesAdornment>
                            <ParecerHeading>
                              Rua das Flores, 1000 - apto 90 - Vila Mariana -
                              0423993
                            </ParecerHeading>
                          </ObservacoesAdornment>
                        </Label5>
                      </Fieldset1>
                    </Container26>
                  </MatriculaValue>
                </Container27>
              </Backgroundshadow2>
              <Backgroundshadow1>
                <Container29 data-scroll-to="container">
                  <Container28>
                    <Container11>
                      <ProspecoDados>Inspeção Virtual</ProspecoDados>
                    </Container11>
                    <Container12>
                      <InformaesDaOrigem>
                        *Complete os dados de endereço para habilitar o Street
                        View.
                      </InformaesDaOrigem>
                    </Container12>
                  </Container28>
                  <Link5>
                    <StreetView>Street View</StreetView>
                  </Link5>
                  <ImgIcon alt="" src="/img-5.svg" />
                </Container29>
                <Separator />
                <Container16>
                  <Container36>
                    <Container35>
                      <Container11>
                        <Protocolo>Fotos do local</Protocolo>
                      </Container11>
                      <Overlayborder>
                        <Container34>
                          <SvgIcon1 alt="" src="/svg-7.svg" />
                          <Container33>
                            <Container30>
                              <ArrasteOuSelecione>
                                Arraste ou selecione o arquivo
                              </ArrasteOuSelecione>
                            </Container30>
                            <Container32>
                              <PainelDeListagem>
                                Solte os arquivos aqui ou clique para
                              </PainelDeListagem>
                              <Container31>
                                <Procurar>procurar</Procurar>
                              </Container31>
                              <PainelDeListagem>
                                em seu computador.
                              </PainelDeListagem>
                            </Container32>
                          </Container33>
                        </Container34>
                      </Overlayborder>
                    </Container35>
                    <Container35>
                      <Container11>
                        <Protocolo>Parecer</Protocolo>
                      </Container11>
                      <Container11>
                        <Warp6
                          variant="standard"
                          sx={{
                            borderColor: "#919eab",
                            borderStyle: "SOLID",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            backgroundColor: "#f9fafb",
                            borderRadius: "8px",
                            width: "100%",
                            height: "53px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "53px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "53px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "53px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "53px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              color: "#919eab",
                              fontSize: 14,
                              fontWeight: "Regular",
                              fontFamily: "Inter",
                              textAlign: "left",
                              p: "0 !important",
                              marginLeft: "14px",
                            },
                          }}
                        >
                          <Inputlabel1 color="secondary" />
                          <Select1
                            color="secondary"
                            disableUnderline
                            displayEmpty
                            IconComponent={() => (
                              <img
                                width="24px"
                                height="24px"
                                src="/icreplace-53.svg"
                                style={{ marginRight: "4px" }}
                              />
                            )}
                          >
                            <Selecione>Selecione</Selecione>
                          </Select1>
                          <Formhelpertext1 />
                        </Warp6>
                      </Container11>
                    </Container35>
                    <Heading6Group>
                      <Container11>
                        <Protocolo>Observações</Protocolo>
                      </Container11>
                      <Textarea>
                        <Warp3>
                          <StartAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-54.svg" />
                            </StartAdornment>
                          </StartAdornment1>
                          <Value2
                            placeholder="Impressões descritas sobre a denúncia da propriedade"
                            type="text"
                          />
                          <EndAdornment1>
                            <StartAdornment>
                              <IcReplaceIcon alt="" src="/icreplace-55.svg" />
                            </StartAdornment>
                          </EndAdornment1>
                        </Warp3>
                      </Textarea>
                    </Heading6Group>
                  </Container36>
                </Container16>
              </Backgroundshadow1>
            </Container37>
          </Container38>
        </ContainerContainer>
      </Body1>
    </FichaDePropriedadeRoot>
  );
};

export default FichaDePropriedade;