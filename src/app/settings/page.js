
export default function Settings(){
    return(
        <div className="bg-white min-h-screen flex">
            <div>
                <p className="bg-white text-black my-8 mx-4">Account Settings</p>
            <div className="flex">
                <p className="text-black mx-4">Dark Mode</p>
                <input type="checkbox"></input>
            </div>
                <p className="text-black my-8 mx-4">Notifications</p>
                <p className="text-black my-8 mx-4">Privacy</p>
                <p className="text-black my-8 mx-4">Accessibility</p>
                <p className="text-black my-8 mx-4">Language</p>
                <p className="text-black my-8 mx-4">Help</p>
                <p className="text-black my-8 mx-4 text-blue-400">Terms & Services</p>
                <p className="text-black my-8 mx-4 text-blue-400">Add Account</p>
                <button type="button" className="mx-4 text-red-500 text-lg border border-black rounded-full">Log out</button>
            </div>
        </div>
    );
}