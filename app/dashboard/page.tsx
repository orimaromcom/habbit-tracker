import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Habit from "../ui/dashboard/habit/habit";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/transactions/transactions";
import Rujum from "../ui/dashboard/rujumDial/rujum";

async function getHabits() {
  const res = await fetch(`${process.env.BASE_URL}/api/getHabits`);
  if (!res.ok) {
    console.log(res);
  }
  return await res.json();
}

const Dashboard = async () => {
  const habits: {
    habit_id: number;
    habit_name: string;
    user_id: number;
    goal_per_day: number;
  }[] = await getHabits();

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>

      <div className={styles.cards}>
          {habits.map((habit) => (
        <Habit habit={habit} key={habit.habit_id} />
          ))}
        </div>
        {/* <Transactions />

          <Chart />*/}
          <Rujum/>
      </div>
      {/* <div className={styles.side}>
        <Rightbar />
      </div> */}
    </div>
  );
};

export default Dashboard;
