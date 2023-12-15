import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  where,
  or,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU6KzEuR-ovxJ-CeANTTUp262I3voQCos",
  authDomain: "twelve-madison-park.firebaseapp.com",
  projectId: "twelve-madison-park",
  storageBucket: "twelve-madison-park.appspot.com",
  messagingSenderId: "834691021331",
  appId: "1:834691021331:web:c7f38aabb675e943d1dde6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUser(email, phone) {
  const waitlistQuery = query(
    collection(db, "waitlist"),
    or(where("email", "==", email), where("phone", "==", phone))
  );

  const waitlistSnapshot = await getDocs(waitlistQuery);

  return !waitlistSnapshot.empty;
}

export async function addUser(data) {
  const userExists = await getUser(data.email, data.phone);

  if (userExists) {
    return false;
  }

  const docRef = await addDoc(collection(db, "waitlist"), data);
  return docRef.id;
}
