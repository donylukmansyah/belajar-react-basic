const ProfileCard = () => {
  const name = "dony lukmansyah"
  const year = 2004
  const job = "web developer"


  return (
    <div  style={{
        display: "grid",
        gap: "3px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "5px"

    }}>
      <p>name: {name}</p>
      <p>year: {year}</p>
      <p>job: {job}</p>
    </div>
  );
};

export default ProfileCard;
