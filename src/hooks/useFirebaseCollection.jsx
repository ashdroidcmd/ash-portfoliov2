import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

/**
 * Fetches data from a Firestore collection.
 * @param {string} collectionName - The Firestore collection to fetch.
 * @param {function} [sortFn] - Optional sorting function.
 * @returns {[Array, boolean, string]} - [data, loading, error]
 */
const useFirebaseCollection = (collectionName, sortFn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        let docs = querySnapshot.docs.map((doc) => doc.data());

        if (sortFn) {
          docs = docs.sort(sortFn);
        }

        setData(docs);
      } catch (err) {
        console.error(`Error fetching ${collectionName}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, [collectionName, sortFn]);

  return [data, loading, error];
};

export default useFirebaseCollection;
