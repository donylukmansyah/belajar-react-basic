type ProfileCardTypes = {
  name?: string;
  year: number;
  job?: string;
};

const ProfileCard = (props: ProfileCardTypes) => {
  const { name = "anonymous", year, job } = props;
  return (
    <div
      style={{
        display: "grid",
        gap: "3px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "5px",
      }}
    >
      <p>name: {name}</p>
      <p>year: {year}</p>

      {/* if ternary */}
      {props.job ? <p>job: {job}</p> : null}
    </div>
  );
}; 

export default ProfileCard;
