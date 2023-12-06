"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./habit.module.css";
import { HabitType } from "../../../lib/data";
import { useState } from "react";

type Props = {
  habit: HabitType;
};

enum BarColor {
  PROGRESS = "#ffff00",
  POSITIVE = "#00ff00",
  NEGATIVE = "#ff0000",
}


function peakColor(percentage: number): string {
  if (percentage <= 33) return BarColor.NEGATIVE;
  if (percentage < 66 && percentage > 33) return BarColor.PROGRESS;
  if (percentage >= 66) return BarColor.POSITIVE;

  return BarColor.NEGATIVE;
}

const Habit = ({ habit }: Props) => {
  const [habitToday, setHabitToday] = useState(0);
  const percentage = ((habitToday / habit.goal_per_day) *100);
  
  let color: string = peakColor(percentage);

  const incrementHabit = (goal: number) => {

    const increment = Math.ceil(goal/10)
    if(habitToday + increment <= goal)
    setHabitToday(habitToday + increment)
  }

  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        {habit.habit_name}
        <div  onClick={() => incrementHabit(habit.goal_per_day)} className={styles.featuredChart}>
          <CircularProgressbar
            value={percentage}
            text={`+`}
            styles={buildStyles({
              pathColor: `${color}`,
            })}
          />
        </div>
        {`${habitToday} / ${habit.goal_per_day}`}
      </div>
    </div>
  );
};

export default Habit;
