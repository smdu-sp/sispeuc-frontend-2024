import styled from "styled-components";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

const RowsPerPageLabel = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 22px;
  font-family: "Public Sans";
  color: #1c252e;
  text-align: right;
  display: inline-block;
  min-width: 119px;
`;

const PaginationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 14px 0px;
  box-sizing: border-box;
  min-width: 77px;
`;

const PaginationControl = styled(FormControl)`
  align-self: stretch;
  height: 31.4px;
  font-family: "Public Sans";
  font-size: 15px;
  color: #1c252e;
  width: auto;
`;

const PageLabel = styled.div`
  width: 88px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 32px 0px 8px;
  box-sizing: border-box;
`;

const PageRange = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 22px;
  font-family: "Public Sans";
  color: #1c252e;
  text-align: left;
  display: inline-block;
  min-width: 63px;
`;

const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 14px 0px;
`;

const PageIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;

const PaginationButton = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-sizing: border-box;
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const PaginationSpacer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 8px 0px 20px;
`;

const FooterControls = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 7px 1px 7px 752px;
  box-sizing: border-box;
  min-height: 52px;
  row-gap: 20px;
  @media screen and (max-width: 1200px) {
    padding-left: 376px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-left: 188px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: 20px;
    box-sizing: border-box;
  }
`;

const Pagination = () => (
  <FooterControls>
    <PaginationContainer>
      <RowsPerPageLabel>Linhas por página:</RowsPerPageLabel>
    </PaginationContainer>
    <PageLabel>
      <PaginationControl
        variant="standard"
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "48px",
          height: "31.4px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "31.4px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "31.4px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "31.4px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "31.4px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            fontFamily: "Public Sans",
            textAlign: "left",
            p: "0 !important",
            marginLeft: "8px",
          },
        }}
      >
        <InputLabel color="primary" />
        <Select
          color="primary"
          disableUnderline
          displayEmpty
          IconComponent={() => (
            <img
              width="16px"
              height="16px"
              src="/svg-10.svg"
              style={{ marginRight: "4px" }}
            />
          )}
        >
          <MenuItem>5</MenuItem>
        </Select>
        <FormHelperText />
      </PaginationControl>
    </PageLabel>
    <Spacer>
      <PageRange>1–5 de 20</PageRange>
    </Spacer>
    <PaginationSpacer>
      <PaginationWrapper>
        <PaginationButton>
          <PageIcon loading="lazy" alt="" src="/svg-11.svg" />
        </PaginationButton>
        <PaginationButton>
          <PageIcon loading="lazy" alt="" src="/svg-12.svg" />
        </PaginationButton>
      </PaginationWrapper>
    </PaginationSpacer>
  </FooterControls>
);

export default Pagination;
