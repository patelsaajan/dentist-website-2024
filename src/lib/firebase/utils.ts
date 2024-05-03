import { ref as storageRef, uploadBytes } from "firebase/storage";
// @ts-ignore
import { v4 as uuid } from "uuid";
import { storage, db } from "./config";
import { doc, setDoc } from "firebase/firestore";

export async function fileStorage(
  file: File,
  folder: string,
  subfolder?: string
) {
  const address = file.name + "_" + uuid();

  const _ref = storageRef(
    storage,
    `${folder}/${subfolder ? `${subfolder}/` : ""}${address}`
  );
  return uploadBytes(_ref, file).then(() => address);
}

export function createCaseStudy(slug: string, data: ICaseStudyForm) {
  const ref = doc(db, "case-studies", slug);
  const payload = { ...data, created: Date.now() };

  return setDoc(ref, payload, { merge: true });
}
