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

const workoutTrackerCRUD = {
  getWorkout: async(date: string) => {
    const uid = auth.currentUser?.uid;
    var didWorkout = null;
    await get(child(ref(rtdb), `users/${uid}/${date}`)).then((snapshot) => {
      if (snapshot.exists()) {
        didWorkout = snapshot.val().workoutDone;
      } 
    });
    return didWorkout
  },
  setWorkout: async(didWorkout: boolean) => {
    const uid = auth.currentUser?.uid;
    const date = new Date().toDateString();
    if(didWorkout) {
      await update(ref(rtdb, `users/${uid}/${date}`), {
        workoutDone: didWorkout
      })
    } else {
      await update(ref(rtdb, `users/${uid}/${date}`), {
        workoutDone: null
      })
    }
  }
}

export { workoutTrackerCRUD }