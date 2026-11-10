type ProfileCardTypes ={
  name: string,
  year: number,
  job: string
}

const ProfileCard = (props:ProfileCardTypes) => {
  return (
    <div  style={{
        display: "grid",
        gap: "3px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "5px"

    }}>
      <p>name: {props.name}</p>
      <p>year: {props.year}</p>

      {
         
      }
      <p>job: {props.job}</p>
    </div>
  );
};

export default ProfileCard;
