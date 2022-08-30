
import RoomForm from "../components/RoomForm";
import styles from "../styles/index.module.css";
import {useSelector} from "react-redux";
import { selectRoom } from "../features/roomSlice";
import ChatRoom from "../components/ChatRoom";

export default function Index() {
  const room = useSelector(selectRoom);
  return (
    <div className={styles.main}>
      <main className={styles.container}>
        {!room ? (
          <RoomForm/>
        ) : <ChatRoom/>}
      </main>
    </div>
  );
}
