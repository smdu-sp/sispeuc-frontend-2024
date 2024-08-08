import styled from "styled-components";
import { TextField } from "@mui/material";
import Row from "../row";
import RowData from "../row-data";

const Checkbox = styled.input`
  margin: 0;
  height: 20px;
  width: 20px;
  position: relative;
`;

const SmallButton = styled.div`
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

const DataCell = styled.div`
  background-color: #f4f6f8;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10.6px 4px 11px 8px;
`;

const IdLabel = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  font-family: "Public Sans";
  color: #637381;
  text-align: left;
  display: inline-block;
  min-width: 15px;
`;

const SmallCell = styled.div`
  width: 80px;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  box-sizing: border-box;
`;

const AddressField = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 56.8px;
  width: 270.7px;
  font-family: "Public Sans";
  font-weight: 600;
  font-size: 14px;
  color: #637381;
`;

const SQLDLabel = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  font-family: "Public Sans";
  color: #637381;
  text-align: left;
  display: inline-block;
  min-width: 39px;
`;

const MediumCell = styled.div`
  width: 177.5px;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px 16px 16.8px;
  box-sizing: border-box;
`;

const ProcessNumberLabel = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  font-family: "Public Sans";
  color: #637381;
  text-align: left;
`;

const LargeCell = styled.div`
  flex: 1;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px 15px 16.8px;
  box-sizing: border-box;
  min-width: 136px;
  white-space: nowrap;
`;

const StatusField = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 56.8px;
  width: 151px;
  font-family: "Public Sans";
  font-weight: 600;
  font-size: 14px;
  color: #637381;
`;

const ActionsLabel = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  font-family: "Public Sans";
  color: #637381;
  text-align: left;
  display: inline-block;
  min-width: 41px;
`;

const ActionsCell = styled.div`
  width: 155px;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16.4px 16px 17.2px;
  box-sizing: border-box;
`;

const TableHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  row-gap: 20px;
`;

const TableBody = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0.8px;
  box-sizing: border-box;
  max-width: 100%;
`;

const ReportedLabel = styled.b`
  position: relative;
  font-size: 12px;
  display: inline-block;
  font-family: "Public Sans";
  color: #545f71;
  text-align: left;
  min-width: 68px;
`;

const ReportedOverlay = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 85.6px;
  right: 196px;
  border-radius: 6px;
  background-color: #d1d2d4;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.8px 6px 5.6px;
  box-sizing: border-box;
  min-width: 24px;
  z-index: 1;
`;

const ReportedOverlayBottom = styled.div`
  margin: 0 !important;
  position: absolute;
  right: 207px;
  bottom: 105.6px;
  border-radius: 6px;
  background-color: #d1d2d4;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.8px 6px 5.6px;
  box-sizing: border-box;
  min-width: 24px;
  z-index: 1;
`;

const InProgressLabel = styled.b`
  position: relative;
  font-size: 12px;
  display: inline-block;
  font-family: "Public Sans";
  color: #fed304;
  text-align: left;
  min-width: 108px;
`;

const InProgressOverlay = styled.div`
  margin: 0 !important;
  position: absolute;
  right: 168px;
  bottom: 28px;
  border-radius: 6px;
  background-color: #fef9cc;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.8px 5px 5.6px;
  box-sizing: border-box;
  min-width: 24px;
  white-space: nowrap;
  z-index: 1;
`;

const ScrollableContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  min-width: 800px;
  max-width: 100%;
`;

const ContentContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 1.2px;
  box-sizing: border-box;
  min-height: 444px;
  max-width: 100%;
`;

const PropertyTable = () => (
  <ContentContainer>
    <ScrollableContent>
      <TableHeader>
        <DataCell>
          <SmallButton>
            <Checkbox type="checkbox" />
          </SmallButton>
        </DataCell>
        <SmallCell>
          <IdLabel>ID</IdLabel>
        </SmallCell>
        <AddressField
          placeholder="Endereço"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "56.8px",
              backgroundColor: "#f4f6f8",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#637381" },
            width: "270.7px",
          }}
        />
        <MediumCell>
          <SQLDLabel>SQLD</SQLDLabel>
        </MediumCell>
        <LargeCell>
          <ProcessNumberLabel>Número do processo</ProcessNumberLabel>
        </LargeCell>
        <StatusField
          placeholder="Status"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "56.8px",
              backgroundColor: "#f4f6f8",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#637381" },
            width: "151px",
          }}
        />
        <ActionsCell>
          <ActionsLabel>Ações</ActionsLabel>
        </ActionsCell>
      </TableHeader>
      <TableBody>
        <Row />
        <RowData />
        <Row />
        <Row />
      </TableBody>
      <ReportedOverlay>
        <ReportedLabel>Denunciado</ReportedLabel>
      </ReportedOverlay>
      <ReportedOverlayBottom>
        <ReportedLabel>Denunciado</ReportedLabel>
      </ReportedOverlayBottom>
      <InProgressOverlay>
        <InProgressLabel>Em preenchimento</InProgressLabel>
      </InProgressOverlay>
    </ScrollableContent>
  </ContentContainer>
);

export default PropertyTable;
