import CardProfile from "./components/CardProfile";
import gambar from "./assets/e7e096b4-8dff-4faf-a838-aee93b58b1aa.webp";
import Counter from "./components/Counter";

type DataTypes = {
  img?: string;
  title: string;
  desc: string;
};

const App = () => {
  const data: DataTypes[] = [
    {
      title: "ini minju",
      desc: "ini desc saya",
    },
    {
      img: gambar,
      title: "ini hyewon",
      desc: "ini desc saya",
    },
    {
      img: gambar,
      title: "ini apa ya",
      desc: "ini desc saya",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-2 m-2.5">
        {data.map((value) => (
          <CardProfile img={value.img} title={value.title} desc={value.desc} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <div className="flex">
        <Counter />
      </div>
    </>
  );
};

export default App;
