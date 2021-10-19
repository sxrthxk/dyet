import { rtdb, auth } from "lib/config/firebaseConfig";
import { ref, set, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useState } from "react";

interface waterTrackerObject {
  [date: string]: number;
}

const getWaterIntake = async(date: string) => {
  const uid = auth.currentUser?.uid;
  var intake = 0  ;
  await get(child(ref(rtdb), `users/${uid}/${date}`)).then((snapshot) => {
    if (snapshot.exists()) {
      intake =  snapshot.val().intake;
    } 
  });
  return intake;
};
const setWaterIntake = async (intake: number) => {
  const uid = auth.currentUser?.uid;
  const date = new Date().toDateString();

  await set(ref(rtdb, `users/${uid}/${date}`), {
    intake: intake,
  });
};

export { getWaterIntake, setWaterIntake };
