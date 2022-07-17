import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
apiKey: "AIzaSyB8YLPbjtI9KqNo2SuDBx7ZwcooGPxpecs",
  authDomain: "hygieiaapp-1b9c3.firebaseapp.com",
  databaseURL: "https://hygieiaapp-1b9c3-default-rtdb.firebaseio.com",
  projectId: "hygieiaapp-1b9c3",
  storageBucket: "hygieiaapp-1b9c3.appspot.com",
  messagingSenderId: "346488034897",
  appId: "1:346488034897:web:0a62f9cd73d1040f8dca70"
};

const app=getApps.length>0? getApp:initializeApp(firebaseConfig);
const firestore=getFirestore(app)
const storage=getStorage(app)

export{app,firestore,storage};
