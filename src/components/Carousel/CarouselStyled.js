import Carousel from "react-elastic-carousel";
import styled from "styled-components";

export const ContainerCarousel = styled(Carousel)`
  width: 100%;
  height: ${(props) => props.height || "100%"};

  .rec, .rec:hover, .rec:focus {
    box-shadow:  0 0 0 0;
  }

  .rec-dot {
    background-color: ${(props) => props.theme.palette.colors.dotColor};
    width: 13px;
    height: 13px;
    display: ${(props) => props.display};
  }

  .rec-dot_active {
    background: ${(props) => props.theme.palette.colors.primaryVariant};
    display: ${(props) => props.display};
    width: 13px;
    height: 13px;
  }

  .rec-pagination { 
    display: ${(props) => props.display};
  }

  .rec-slider-container{
    margin: ${(props) => props.margin};
  }
  
`;
