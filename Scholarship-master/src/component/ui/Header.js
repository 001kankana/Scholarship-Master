import "./Header.css";
import education from '../pics/education.png'
function Header() {
  return (
      <div className="containers">
        <div className="p-header">
          <div className="navText"><a id="logo" href="#"><img src={education} alt="s"></img>SCHOLARSHIP</a></div>
          <div className="navText">For Academic Year 2022</div>
        </div>
      </div>
    
  );
}
export default Header;
