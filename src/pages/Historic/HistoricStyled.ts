import styled from 'styled-components';
import Calendar from 'react-calendar';

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
    grid-template-columns: 1fr 1fr;
  }
`;

export const HistoricWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 100vh;

  flex-direction: column;
  padding: 24px 24px;
  gap: 16px;
  @media (min-width: 576px) {
    align-items: center;
    justify-content: center;
    max-width: 400px;
  }
`;

export const CalendarBox = styled(Calendar)`
  width: auto;
`;

export const RequestsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 16px;
  overflow-y: scroll;
`;

export const CardHistoricData = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${(props) => (!props.$isEmergency ? props.theme.palette.colors.secondary : props.theme.palette.colors.emergency)};
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
  position: relative;
  @media (max-width: 1199px) {
    display: none;
  }
`;

export const ImageAside = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: inherit;
`;
