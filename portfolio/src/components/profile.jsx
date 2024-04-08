import profilePic from "../assets/profile-pic-2.jpg";
import githubPic from "../assets/github.png";
import linkedinPic from "../assets/linkedin.png";

export default function Profile() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center h-[80vh] gap-10 xl:gap-20 mx-10 xl:mx-[160px]">
      <div className="flex aspect-square h-[300px] w-[300px] md:h-[400px] md:w-[400px] ">
        <img
          className="rounded-full"
          src={profilePic}
          alt="Nathapon Tansit profile picture"
        />
      </div>
      <div className="text-center ">
        <p className="font-semibold">Hello, I'm</p>
        <h1 className="text-3xl leading-[48px] font-bold xl:text-5xl xl:leading-[72px]">
          Nathapon Tansit
        </h1>
        <p className="text-xl xl:text-3xl mb-4 leading-[42px] font-semibold">
          Frontend Developer
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <button className="font-semibold  text-sm transition-all duration-300 ease-in-out  w-32 h-[50px] rounded-full border border-slate-700">
            Download CV
          </button>
          <button className="font-semibold  text-sm transition-all duration-300 ease-in-out  w-32 h-[50px] rounded-full border border-slate-700 text-white bg-slate-700">
            Contact Info
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={() => {
              location.href = "https://www.linkedin.com/in/nathapontansit/";
            }}
          >
            <img
              className="h-8 w-8"
              src={linkedinPic}
              alt="My LinkedIn profile"
            />
          </button>
          <button
            onClick={() => {
              location.href = "https://github.com/NTansit";
            }}
          >
            <img className="h-8 w-8" src={githubPic} alt="My Github profile" />
          </button>
        </div>
      </div>
    </section>
  );
}
