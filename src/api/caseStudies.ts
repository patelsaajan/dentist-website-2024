import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { deleteObject, getBytes, ref } from "firebase/storage";
import { db, storage } from "lib/firebase/config";
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

export function deleteCaseStudyStorage(fileName: string, folderName: string) {
  const objRef = ref(storage, `caseStudies/${folderName}/${fileName}`);
  return deleteObject(objRef);
}

export function deleteCaseStudyDB(docName: string) {
  const dbRef = doc(db, "case-studies", docName);
  return deleteDoc(dbRef);
}

export const getCardPhotoFile = async (
  slug: string,
  imageId: string
): Promise<File | null> => {
  const photoRef = ref(storage, `caseStudies/${slug}/${imageId}`);
  const fileBytes = await getBytes(photoRef);
  if (!fileBytes) {
    return null;
  } else {
    const cardPhotoFile = new File([fileBytes], imageId);
    return cardPhotoFile;
  }
};

export function updateCaseStudy(slug: string, data: ICaseStudyForm) {
  const ref = doc(db, "case-studies", slug);
  return setDoc(ref, data, { merge: true });
}
