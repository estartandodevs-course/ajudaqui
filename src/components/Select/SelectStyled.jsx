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

};
