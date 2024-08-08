import styled from "styled-components";
import { FormControl, InputLabel, Select, MenuItem, TextField, FormHelperText } from "@mui/material";

const FilterContainerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  min-width: 383px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;

const Label = styled(InputLabel)``;

const SelectOption = styled(MenuItem)``;

const Dropdown = styled(Select)``;

const HelperText = styled(FormHelperText)``;

const FormContainer = styled(FormControl)`
  height: 56px;
  width: 299px;
  font-family: "Public Sans";
  font-size: 14px;
  color: #000;
`;

const SearchField = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 54.6px;
  flex: 1;
  font-family: "Public Sans";
  font-size: 15px;
  color: #919eab;
  min-width: 300px;
  max-width: 100%;
`;

const FlexContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  max-width: 100%;
`;

const OptionsWrapper = styled.div`
  width: 1108px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 8px 20px;
  box-sizing: border-box;
  max-width: 100%;
`;

const FilterSection = () => (
  <OptionsWrapper>
    <FlexContainer>
      <FormContainer
        variant="standard"
        sx={{
          borderColor: "#919eab",
          borderStyle: "SOLID",
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "8px",
          width: "27.380952380952383%",
          height: "56px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "56px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "56px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "56px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "56px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 14,
            fontWeight: "Regular",
            fontFamily: "Public Sans",
            textAlign: "left",
            p: "0 !important",
            marginLeft: "14px",
          },
        }}
      >
        <Label color="primary" />
        <Dropdown
          color="primary"
          disableUnderline
          displayEmpty
          IconComponent={() => (
            <img
              width="18px"
              height="18px"
              src="/svg-4.svg"
              style={{ marginRight: "10px" }}
            />
          )}
        >
          <SelectOption>SQLD</SelectOption>
        </Dropdown>
        <HelperText />
      </FormContainer>
      <SearchField
        placeholder="Pesquise por SQLD"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <img width="20px" height="20px" src="/img-4.svg" />
          ),
        }}
        sx={{
          "& fieldset": { borderColor: "rgba(145, 158, 171, 0.2)" },
          "& .MuiInputBase-root": {
            height: "54.6px",
            borderRadius: "8px",
            fontSize: "15px",
          },
          "& .MuiInputBase-input": {
            paddingLeft: "8px",
            color: "#919eab",
          },
        }}
      />
    </FlexContainer>
  </OptionsWrapper>
);

export default FilterSection;
