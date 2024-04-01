import smileLogo from "../assets/smile.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-10 bg-slate-500">
      <img className="h-6 mx-2" src={smileLogo} />
      <div className="flex gap-2">
        <h5>Home</h5>
        <h5>Projects</h5>
        <h5>Experience</h5>
        <h5>Education</h5>
        <h5>Contacts</h5>
      </div>
    </div>
  );
}
