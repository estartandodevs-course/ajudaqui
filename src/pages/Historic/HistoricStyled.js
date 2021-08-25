import styled from "styled-components";

export const HistoricPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  @media (min-width: 576px) {
    justify-items: center;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const HistoricWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 24px 24px;
  gap: 16px;
  @media (min-width: 576px) {
    align-items: center;
    justify-content: center;
    max-width: 400px;
  }
`;

export const CardHistoricData = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.palette.colors.secondary};
  cursor: pointer;
  padding: 13px;
  border-radius: 5px;
`;

export const RequestDescription = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, auto);
`;

export const EmptyRequests = styled.div`
`;

export const HistoricAside = styled.aside`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.colors.light.grayish};
  @media (max-width: 1199px) {
    display: none;
  }
`;

export const ImageAside = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;
