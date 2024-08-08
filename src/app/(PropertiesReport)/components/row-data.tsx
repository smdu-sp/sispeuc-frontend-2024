import type { NextPage } from "next";
import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styled from "styled-components";

export type RowDataType = {
  className?: string;
};

const OutrasInformaes = styled.b`
  position: relative;
  line-height: 22px;
`;
const BorderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 12px;
`;
const DataDaProspeco = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 22px;
`;
const Container = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Datepicker1 = styled(DatePicker)``;
const Container1 = styled.div`
  align-self: stretch;
  height: 22px;
`;
const Container2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  min-width: 175px;
  max-width: 179px;
`;
const Container3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #919eab;
`;
const EstruturaoMetropolitana = styled.div`
  align-self: stretch;
  height: 44px;
  position: relative;
  letter-spacing: -0.02px;
  line-height: 22px;
  display: flex;
  align-items: center;
`;
const Container4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  min-width: 175px;
  max-width: 179px;
  z-index: 1;
`;
const InfoDetails = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;
const Horizontalborder = styled.div`
  align-self: stretch;
  border-bottom: 2px solid #f4f6f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 12px 12px 9px;
`;
const Background = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Container5 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Container6 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
`;
const Background1 = styled.div`
  align-self: stretch;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const RowDataRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  font-size: 14px;
  color: #1c252e;
  font-family: "Public Sans";
`;

const RowData: NextPage<RowDataType> = ({ className = "" }) => {
  const [containerDateTimePickerValue, setContainerDateTimePickerValue] =
    useState(new Date("2024-12-04"));
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <RowDataRoot className={className}>
        <Background1>
          <Container6>
            <Container5>
              <Background>
                <Horizontalborder>
                  <BorderTitle>
                    <OutrasInformaes>Outras informações</OutrasInformaes>
                  </BorderTitle>
                  <InfoDetails>
                    <Container2>
                      <Container>
                        <DataDaProspeco>Data da prospecção</DataDaProspeco>
                      </Container>
                      <Container1>
                        <Datepicker1
                          value={containerDateTimePickerValue}
                          onChange={(newValue: any) => {
                            setContainerDateTimePickerValue(newValue);
                          }}
                          sx={{
                            fieldset: {
                              borderColor: "transparent",
                              borderTopWidth: 1,
                              borderRightWidth: 1,
                              borderBottomWidth: 1,
                              borderLeftWidth: 1,
                            },
                            "&:hover": {
                              fieldset: { borderColor: "transparent" },
                              ".MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                              },
                            },
                            "& input::placeholder": {
                              textColor: "#919eab",
                              fontSize: 14,
                            },
                            input: {
                              color: "#919eab",
                              fontSize: 14,
                              textAlign: "left",
                              fontWeight: "400",
                            },
                            "& .MuiInputBase-root": {
                              height: 22,
                              gap: "8px",
                              flexDirection: { flexDirection: "row" },
                            },
                          }}
                          slotProps={{
                            textField: {
                              size: "medium",
                              fullWidth: true,
                              required: false,
                              autoFocus: false,
                              error: false,
                            },
                            openPickerIcon: {
                              component: () => <></>,
                            },
                          }}
                        />
                      </Container1>
                    </Container2>
                    <Container2>
                      <Container>
                        <DataDaProspeco>Origem</DataDaProspeco>
                      </Container>
                      <Container3>
                        <DataDaProspeco>SF 2014</DataDaProspeco>
                      </Container3>
                    </Container2>
                    <Container4>
                      <Container>
                        <DataDaProspeco>Macroárea</DataDaProspeco>
                      </Container>
                      <Container3>
                        <EstruturaoMetropolitana>
                          Estruturação Metropolitana
                        </EstruturaoMetropolitana>
                      </Container3>
                    </Container4>
                    <Container2>
                      <Container>
                        <DataDaProspeco>Zona</DataDaProspeco>
                      </Container>
                      <Container3>
                        <DataDaProspeco>ZEIS-1</DataDaProspeco>
                      </Container3>
                    </Container2>
                    <Container2>
                      <Container>
                        <DataDaProspeco>Área do terreno</DataDaProspeco>
                      </Container>
                      <Container3>
                        <DataDaProspeco>2000m2</DataDaProspeco>
                      </Container3>
                    </Container2>
                    <Container4>
                      <Container>
                        <DataDaProspeco>Matricula</DataDaProspeco>
                      </Container>
                      <Container3>
                        <DataDaProspeco>3901882190-9</DataDaProspeco>
                      </Container3>
                    </Container4>
                  </InfoDetails>
                </Horizontalborder>
              </Background>
            </Container5>
          </Container6>
        </Background1>
      </RowDataRoot>
    </LocalizationProvider>
  );
};

export default RowData;
