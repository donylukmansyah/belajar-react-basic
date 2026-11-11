import ProfileCard from "./components/ProfileCard";

type Teacher = {
  name: string;
  job: string;
  year: number;
};

const teachers: Teacher[] = [
  {
    name: "minju",
    job: "programmer",
    year: 2000,
  },
  {
    name: "hyewon",
    job: "actress",
    year: 2004,
  },
  {
    name: "yuri",
    job: "artist",
    year: 1999,
  },
];
console.log(teachers[0]);

const App = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        {[
          <ProfileCard
            job="software engineer"
            name="Minguri baechu"
            year={2000}
          />,
          <ProfileCard
            job="software engineer"
            name="Minguri baechu"
            year={2000}
          />,
        ]}

        {teachers.map((teacher, index) => {
          return (
            <ProfileCard
              key={index}
              name={teacher.name}
              job={teacher.job}
              year={teacher.year}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
