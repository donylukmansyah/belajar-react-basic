import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </> 
  );
}

export default App;
