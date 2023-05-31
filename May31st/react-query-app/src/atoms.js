import { atom } from "recoil";

// This file contains all the data to be shared in our Recoil scope.  
// On line 7 we specify a unique key for our atom name.  
// On line 8 we give our atom a default value.
export const userNameAtom = atom ({
    key: 'atomUserName',
    default: '',
})