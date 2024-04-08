import profilePic from "../assets/profile-pic.jpg";
import githubPic from "../assets/github.png";
import linkedinPic from "../assets/linkedin.png";

export default function Profile() {
  function downloadCV() {
    window.open("../assets/nathapon-tansit-resume-web-dev.pdf");
  }

  return (
    <section className="flex justify-center items-center h-[80vh] gap-20">
      <div className="flex h-[400px] w-[400px] ">
        <img
          className="rounded-full"
          src={profilePic}
          alt="Nathapon Tansit profile picture"
        />
      </div>
      <div className="text-center ">
        <p className="font-semibold">Hello, I'm</p>
        <h1 className="text-5xl font-bold leading-[72px]">Nathapon Tansit</h1>
        <p className="text-3xl mb-4 leading-[42px] font-semibold">
          Frontend Developer
        </p>
        <div className="flex justify-center gap-4">
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
