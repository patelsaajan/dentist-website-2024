import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "lib/firebase/config";
import { ICaseStudyForm } from "types/caseStudiesForm";

export function getCaseStudies(setState: (state: any[]) => void) {
  const ref = collection(db, "case-studies");
  const q = query(ref); // listens on document modifications
  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs
      .filter((doc) => doc.id !== "tags")
      .map((doc) => ({ id: doc.id, ...doc.data() } as ICaseStudyForm))
      .sort((a, b) => (b.created ?? 0) - (a.created ?? 0));

    setState(data);
  });
}
