import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCol = collection(db, `users/${userId}/items`);
  const snapshot = await getDocs(itemsCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addItem(userId, item) {
  const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
  return docRef.id;
}