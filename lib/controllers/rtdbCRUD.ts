import { rtdb, auth } from "lib/config/firebaseConfig";
import { ref, set, get, child, update } from "firebase/database";


const waterIntakeCRUD = {

  getWaterIntake: async(date: string) => {
    const uid = auth.currentUser?.uid;
    var intake = 0  ;
    await get(child(ref(rtdb), `users/${uid}/${date}`)).then((snapshot) => {
      if (snapshot.exists()) {
        intake =  snapshot.val().intake;
      } 
    });
    return intake;
  },
  setWaterIntake: async (intake: number) => {
    const uid = auth.currentUser?.uid;
    const date = new Date().toDateString();
  
    await update(ref(rtdb, `users/${uid}/${date}`), {
      intake: intake,
    });
  }
}

export { waterIntakeCRUD };

const sleepTrackerCRUD = {
  getSleep: async(date: string) => {
    const uid = auth.currentUser?.uid;
    var expectedSleep = -1;
    await get(child(ref(rtdb), `users/${uid}/${date}`)).then((snapshot) => {
      if (snapshot.exists()) {
        expectedSleep =  snapshot.val().expectedSleep;
      } 
    });
    return expectedSleep;
  },
  setSleep: async(sleep: number) => {
    const uid = auth.currentUser?.uid;
    const date = new Date().toDateString();

    await update(ref(rtdb, `users/${uid}/${date}`), {
      expectedSleep: sleep
    })
  }
}

export { sleepTrackerCRUD }