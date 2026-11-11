import ProfileCard from "./components/ProfileCard";

type UserData = {
  nama?: string
  year: number
  job?: string
}

function App() {

  const data:UserData[] = [
    {
      job: "actress / actor",
      year: 2000
    },
    {
      nama: "minju",
      job: "actress / actor",
      year: 2000
    },
    {
      nama: "minju",
      job: "actress / actor",
      year: 2000
    },
    {
      nama: "minju",
      year: 2000
    },
  ]
  
  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        {
          data.map((value, index) => (
            <ProfileCard key={index} job={value.job} name={value.nama} year={value.year}  />
          ))
        }
      </div> 
    </>
  );
}

export default App;
