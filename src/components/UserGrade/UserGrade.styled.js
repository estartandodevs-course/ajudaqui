import styled from "styled-components";

export const StarIcon = styled.img`
 width: ${(props) => (props.width ? props.width : "28.6px")};
 height:${(props) => (props.height ? props.height : "25px")};
 margin-left: 4px;
 `;

export const ContainerStar = styled.div`
 display: flex;
 justify-content: center;
 height: 25px;
 margin-left: 6px;
 margin-top: 5px;
 `;

