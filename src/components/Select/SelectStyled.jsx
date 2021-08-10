import styled from "styled-components";

export const customStyles = {
  option: () => ({
    color: `${(props) => props.theme.palette.colors.text}
    `,
    maxWidth: "300px",
    padding: "10px",
  }),
  menu: () => ({
    backgroundColor: "#F9F7FB",
    width: "100%",
    zIndex: "10",
    borderColor: "#47454f",
    borderStyle: "solid",
    borderRadius: "2px",
    borderWidth: "1px",
  }),
  control: (provider) => ({
    ...provider,
    backgroundColor: "#F9F7FB",
    borderColor: "#47454f",
    width: "100%",
    height: "45px",
    margin: "0",
    boxShadow: "0 0 0 0",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
};

export const IconSelect = styled.img``;


export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 19px;

  color: #0c011b;
`;

export const SelectWrapper = styled.div`
  height: 100;
  width: 100%;
  margin-bottom: 8px;
`;
