import gambar2 from "../assets/file_00000000c1c082119ae7746a4f9e0629_waifu2x_photo_noise2_scale.webp";


type CardProfileProps = {
    img?: string,
    title: string,
    desc: string
}

const CardProfile = (props: CardProfileProps) => {
    const {img = gambar2, title, desc} = props

  return (
    <div className="flex flex-col gap-5 p-3 bg-red-600 rounded-2xl">
      <div className="w-full h-64 overflow-hidden rounded-r-xl  ">
        <img src={img} alt="minju" className="w-full h-full object-cover" />
      </div>
      <div className="text-white flex flex-col gap-2">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CardProfile;
