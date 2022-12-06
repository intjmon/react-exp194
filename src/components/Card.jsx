import { EditButton } from "./EditButton";

const style = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#9dbd0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export const Card = () => {
  console.log("Card");
  return (
    <div style={style}>
      <p>이종웅</p>
      <EditButton />
    </div>
  );
};
