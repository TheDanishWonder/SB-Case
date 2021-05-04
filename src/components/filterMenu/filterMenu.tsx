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
        <div className="Menu">
          <div className="MenuItem">{menuItem1}</div>
          <div className="MenuItem">{menuItem2}</div>
          <div className="MenuItem">{menuItem3}</div>
          <div className="MenuItem">{menuItem4}</div>
          <div className="MenuItem">{menuItem5}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
