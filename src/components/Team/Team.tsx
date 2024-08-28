import { useEffect } from "react";
import styles from "./styles.module.css";
import TeamMember from "../TeamMember/TeamMember";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { getTeam } from "../../Redux/slices/sliceTeam";
import { ReqeustStatus } from "../../types";
import abstract from "../../assets/img/Team.svg";

export interface ITeamMember {
  id: number;
  name: string;
  role: string;
  imgUrl: string;
}

const Team = () => {
  const dispatch = useDispatch<AppDispatch>();

  const team = useSelector((state: RootState) => state.team.data);
  const status = useSelector((state: RootState) => state.team.status);
  const error = useSelector((state: RootState) => state.team.error);

  useEffect(() => {
    dispatch(getTeam());
  }, []);

  return (
    <section
      className={`violet_section section ${styles.section_team}`}
      id="team"
    >
      <div className="container">
        <h2 className="title title__white">Команда</h2>
        <div className={styles.team}>
          {status === ReqeustStatus.LOADING && <p>Загружаем данные...</p>}
          {status === ReqeustStatus.ERROR && <p>{error}</p>}
          {status === ReqeustStatus.SUCCESS &&
            team.map((member) => (
              <TeamMember
                key={member.id}
                id={member.id}
                name={member.name}
                role={member.role}
                imgUrl={member.imgUrl}
              />
            ))}
          {/* {team.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              imgUrl={member.imgUrl}
            />
          ))} */}
        </div>
      </div>
      <img className={styles.abstract} src={abstract} alt="abstract" />
    </section>
  );
};

export default Team;
