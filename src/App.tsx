import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats/Stats";
import Welcome from "./components/Welcome";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxRQ7WP5hO_1hGGgUaGDrZ4S1QJLGWizk",
  authDomain: "daily-tasks-2fb89.firebaseapp.com",
  projectId: "daily-tasks-2fb89",
  storageBucket: "daily-tasks-2fb89.appspot.com",
  messagingSenderId: "626218917952",
  appId: "1:626218917952:web:72eb136517963f43f13fa5"
};

function App() {
  initializeApp(firebaseConfig);
  return (
    <div className="h-screen sm:bg-gray-50 sm:pt-10">
      <div className="max-w-sm mx-auto p-10 bg-white  sm:h-[calc(100vh-100px)] sm:rounded-3xl flex flex-col gap-y-7">
        <Header />

        <Welcome />
        <Stats />

        <div>
          <button className="bg-black text-white w-full font-poppins py-5 rounded-full">New task</button>
        </div>
      </div>
    </div>
  );
}

export default App;
