interface TeamScheduleProps {
    name: string;
  }
  
  const TeamSchedule: React.FC<TeamScheduleProps> = ({name})=> {
    return (
        <div className="flex m-1 flex-col items-center w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.5rem)]">
          <h2>{name}</h2>
        </div>
    );
  }
  export default TeamSchedule;