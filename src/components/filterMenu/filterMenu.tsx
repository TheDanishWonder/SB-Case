import "./filterMenu.css";
import { ReactComponent as FilterLogo } from "../assests/svg/filter.svg";

interface Menu {
  menuItem1: string;
  menuItem2: string;
  menuItem3: string;
  menuItem4: string;
  menuItem5: string;
}

const FilterMenu = ({
  menuItem1,
  menuItem2,
  menuItem3,
  menuItem4,
  menuItem5,
}: Menu) => {
  return (
    <div className="MenuContainer">
      <div className="MenuBox">
        <div className="FilterLogo">
          <FilterLogo />
        </div>
        <div className="Menu" >
          <a  href="#tag:Speaker"><label className="MenuItem" htmlFor="Speaker">{menuItem1}</label></a>
          <a  href="#tag:Grills"><label className="MenuItem" htmlFor="Grills">{menuItem2}</label></a>
          <a  href="#tag:Accessories"><label className="MenuItem" htmlFor="Accessories">{menuItem3}</label></a>
          <a  href="#tag:Bundle"><label className="MenuItem" htmlFor="Bundle">{menuItem4}</label></a>
          <a  href="#tag:Special Editions"><label className="MenuItem" htmlFor="Speacial Editions">{menuItem5}</label></a>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
