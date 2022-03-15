import { Dispatch, SetStateAction } from 'react';
import { LayoutProps } from '../component-library/stories/Layout/Layout';
const docRef = doc(firestore, 'likes', `${process.env.NEXT_PUBLIC_FIREBASE_LIKE_DOC_ID}`);
import { firestore } from '../component-library/helpers/useFirebase';
import { doc, getDoc, setDoc } from '@firebase/firestore';

async function getLikesDBValue(setLikesFunction: Dispatch<SetStateAction<number>>): Promise<void> {
  getDoc(docRef).then((result) => {
    if (result.exists()) {
      setLikesFunction(result.data().value);
    }
  });
}

function setLikesDBValue(value: number): void {
  setDoc(docRef, { value: value });
}

export const defaultLayoutProps = {
  title: `JR Dev`,
  headerTitle: `Jason Reid's Dev Portfolio`,
  menuLinks: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
  ],
  setLikesDBValue: setLikesDBValue,
  getLikesDBValue: getLikesDBValue,
  loading: false,
} as LayoutProps;
