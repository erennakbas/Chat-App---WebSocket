import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser,setRoom } from "../features/roomSlice";
import styles from "../styles/RoomForm.module.css";
import { selectSocket } from "../features/socketSlice";

const RoomForm = () => {
  const dispatch = useDispatch();
  const socket = useSelector(selectSocket);
  const [roomInput, setRoomInput] = useState("");
  const [userInput, setUserInput] = useState("");
  const joinRoom = () => {
    dispatch(setRoom(roomInput));
    dispatch(setUser(userInput));
    socket.emit("join_room", { room: roomInput });
  };
  return (
    <div className={styles.container}>
      <label htmlFor="roomNumber" className={styles.label}>
        Room
      </label>
      <input
        type="text"
        id="roomNumber"
        className={styles.input}
        onChange={(e) => setRoomInput(e.target.value)}
        placeholder="Room Number"
      ></input>
      <label htmlFor="userName" className={styles.label}>
        Name
      </label>
      <input
        type="text"
        id="userName"
        className={styles.input}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Specify your name"
      ></input>
      <button className={styles.button} onClick={joinRoom}>
        Join Room
      </button>
    </div>
  );
};

export default RoomForm;
