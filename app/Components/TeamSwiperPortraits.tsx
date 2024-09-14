interface TeamSwiperProps {
  image: string;
  name: string;
}

const TeamSwiperPortraits: React.FC<TeamSwiperProps> = ({image, name})=> {
  return (
      <div className="flex flex-col items-center w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.5rem)]">
        <img src={image} className="max-w-[150px] max-h-[125px] md:max-w-[600px] md:max-h-[305px]"/>
        <h2>{name}</h2>
      </div>
  );
}
export default TeamSwiperPortraits;