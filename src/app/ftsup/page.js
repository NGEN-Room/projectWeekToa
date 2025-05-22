export default function Ftsup() {
    return(
<div className="min-h-screen bg-white">
    <div className="text-black"><button type="Submit">skip</button></div>
    <h1 className="text-black">What Type of Content Do You Make?</h1>
    <h1 className="text-black">0/3</h1>
    <div className="text-black text-2xl"><button type="submit" className="bg-gray-300">Next</button></div>
    <div className="grid grid-cols-5">
        <div className="relative text-black"><button type="button">Selected content type</button>
        <img src="instagram.png" className="absolute w-20 h-20"></img>
        </div>
        <div className="relative text-black"><button type="button">Selected content type</button>
        <img src="instagram.png" className="absolute w-20 h-20"></img>
        </div>
    </div>




</div>
    );
}