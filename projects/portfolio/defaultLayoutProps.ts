import { Dispatch, SetStateAction } from 'react';
import { LayoutProps } from '../component-library/stories/Layout/Layout';
const docRef = doc(firestore, 'likes', `${process.env.NEXT_PUBLIC_FIREBASE_LIKE_DOC_ID}`);
import { firestore } from '../helpers/useFirebase';
import { doc, getDoc, setDoc } from '@firebase/firestore';
import { HeaderProps } from '../component-library/stories/widgets/Header/Header';

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
  headerProps: {
    title: 'JR Dev',
    description: "Jason Reid's Development Portfolio",
    headerTitle: "Jason Reid's Dev Portfolio",
    menuLinks: [
      {
        name: '',
        nameOverrideNav: 'Home',
        link: '/',
      },
      {
        name: 'Employment',
        link: '/employment',
      },
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
    ],
    setLikesDBValue: setLikesDBValue,
    getLikesDBValue: getLikesDBValue,
  } as HeaderProps,
  loading: false,
} as LayoutProps;
