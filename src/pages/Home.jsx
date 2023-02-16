import React from "react";
import { signIn } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { ImgUpload } from "../components/ImgUpload";
function Home() {
    // const [user, loading, error] = useAuthState(auth, options);
    return (
        <>
            <button
                className="p-2 m-3 ml-auto border-slate-300
     rounded-sm bg-gray-200 shadow-md hover:bg-slate-100 flex"
                onClick={signIn}
            >
                <img
                    className="flex-auto h-auto w-6 mx-1"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
                />
                <span className="text-base font-sans font-medium mx-1 text-gray-400">
                    Sign in with Google
                </span>
            </button>
            <div>
                <ImgUpload />
            </div>
            {/* <p>{user}</p> */}
            <h3 className="text-white">{localStorage.getItem("name")}</h3>
            <h3 className="text-white">{localStorage.getItem("email")}</h3>
            <img
                className="w-14"
                referrerPolicy="no-referrer"
                src={localStorage.getItem("profilePic")}
            />
        </>
    );
}

export default Home;
