import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header/Header";
import FilterSection from "../components/filter-container";
import PropertyTable from "../components/TableProperties/TableProperties";
import Pagination from "../components/Pagination/Pagination";
import BackgroundShadow from "../components/background-shadow";
import FilterContainer from "../components/filter-container";

const PropertiesListRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
`;

const MainContent = styled.main`
  flex: 1;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 900px;
  max-width: 100%;
`;

const PageContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 40px 154.8px;
  box-sizing: border-box;
  gap: 40px;
  max-width: 1200px;
  @media screen and (max-width: 1200px) {
    padding-top: 26px;
    padding-bottom: 101px;
    box-sizing: border-box;
    max-width: 100%;
  }
  @media screen and (max-width: 750px) {
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 66px;
    box-sizing: border-box;
  }
`;

const ContentSection = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  text-align: left;
  font-size: 24px;
  color: #1c252e;
  font-family: "Public Sans";
`;

const PropertiesListPage: NextPage = () => {
  return (
    <PropertiesListRoot>
      <MainContent>
        <Header />
        <ContentSection>
          <PageContainer>
            <BackgroundShadow />
            <FilterContainer />
            <FilterSection />
            <PropertyTable />
            <Pagination />
          </PageContainer>
        </ContentSection>
      </MainContent>
    </PropertiesListRoot>
  );
};

export default PropertiesListPage;
