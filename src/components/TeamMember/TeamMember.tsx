import React from "react";
import styles from "./styles.module.css";
import { ITeamMember } from "../Team/Team";

const TeamMember: React.FC<ITeamMember> = ({ name, role, imgUrl }) => {
  return (
    <div className={styles.team_member}>
      <img src={imgUrl} alt="Команда SneakMax" className={styles.img} />
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
    </div>
  );
};

export default TeamMember;
