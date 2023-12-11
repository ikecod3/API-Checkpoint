import { MenuOutlined } from "@ant-design/icons";
const NavBar = () => {
  return (
    <div className="bg-purple-700">
      <div className="flex items-center justify-between max-w-5xl mx-auto p-4 text-white text-4xl">
        <div className="flex gap-4 items-center">
          <img
            className=" h-10"
            src="https://companieslogo.com/img/orig/APG-33ef3959.png?t=1670908945"
            alt="app logo"
          />
          <p>Checkpoint</p>
        </div>
        <div className="cursor-pointer">
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
