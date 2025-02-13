import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import muiLogo from './logos/mui.svg';
import pwaLogo from './logos/pwa.svg';
import reactLogo from './logos/react_ed.svg';
import recoilLogo from './logos/recoil.svg';
import rrLogo from './logos/rr.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';
import { Image } from './styled';

import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User } from "firebase/auth";
import { auth } from '../../firebase'; // Updated path to point to src/firebase.js
import { useEffect, useState } from 'react';



function Welcome() {
  const [user, setUser] = useState<User | null>(null);
  

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in with Google:", result.user);
    } catch (error: any) {
      console.error("Error signing in with Google:", error.code, error.message);
    }
  };

  const isPortrait = useOrientation();

  const width = isPortrait ? '40%' : '30%';
  const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <Meta title="Welcome" />
      <button onClick={signInWithGoogle} style={{ padding: '10px 20px', margin: '20px' }}>
        Sign in with Google
      </button>
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Image alt="react-router" src={rrLogo} />
        <Image alt="vite" src={viteLogo} />
        <Image alt="typescript" src={tsLogo} />
        <Image alt="react" src={reactLogo} sx={{ width, height }} />
        <Image alt="mui" src={muiLogo} />
        <Image alt="recoil" src={recoilLogo} />
        <Image alt="pwa" src={pwaLogo} />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;




// add onAuthStateChanged in the import statement for firebase/auth
// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       console.log("User is signed in:", uid);
//       // Update UI based on user's sign-in status
//     } else {
//       // User is signed out
//       console.log("User is signed out");
//       // Update UI based on user's sign-out status
//     }
//   });
//   // Unsubscribe from listener when component unmounts
//   return unsubscribe;
// }, []);
