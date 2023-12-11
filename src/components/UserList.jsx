/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  MailOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  PhoneOutlined,
} from "@ant-design/icons"; // import icons from ant-design

const UserList = ({ user }) => {
  const {
    id,
    name,
    username,
    email,
    address: { street, suite, city },
    phone,
    website,
    company,
  } = user;
  return (
    // styling the listofUser card wish
    <section className="mx-auto max-w-[37rem] w-screen shadow-gray-800 shadow-xl hover:shadow-black m-5 pb-2 cursor-pointer  grid bg-[url('https://media.istockphoto.com/id/1470522174/vector/grey-map-of-the-world-on-a-white-background.jpg?s=612x612&w=0&k=20&c=SJ0gTX7bQ1UYFXdR5U7F5Kov0Q3R3lk8cxtUMGiAnJo=')]">
      {/* The usernanme and company name is here */}
      <div className="bg-blue-500 flex flex-wrap items-center justify-between">
        <div className="bg-white w-[45%] py-7 -my-2 rounded-br-full text-xl tracking-widest pl-2">
          {name.split(" ")[0]}{" "}
          <span className="font-thin ">{name.split(" ")[1]}</span>
        </div>

        {/* company image and text is here */}
        <div className="flex items-center justify-center gap-4 px-2">
          <img
            className="rounded-full h-20 w-20 object-cover"
            src="https://image.similarpng.com/thumbnail/2021/09/City-logo-design-template-with-business-card-template-on-transparent-background-PNG.png"
            alt=""
          />
          <div className="text-center text break-before-all">
            <p className="text-lg"> {company.name}</p>
            <p className="text-xs text-white">
              {company.bs.split(" ").slice(1, 3).join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Business address is here */}
      <section className="py-4 flex items-center gap-2 px-2">
        <div>
          <EnvironmentOutlined style={{ fontSize: 40 }} />
        </div>
        <div className="align-middle">
          <h2 className="text-xl ">
            {suite}, {street}
          </h2>
          <p className="space-x-2 text-xl">
            <span>{city}.</span>
          </p>
        </div>
        {/* <p className="invisible w-5/12"></p>
        <img
          className="w-20  bg-zinc-700 rounded-lg"
          src="https://png.pngtree.com/png-vector/20221115/ourmid/pngtree-credit-card-chip-illustration-withdrawal-concept-vector-png-image_20504836.png"
          alt="chip logo"
        /> */}
      </section>

      {/* contact details and social media section is here  */}
      <section className="flex flex-wrap justify-between px-2">
        {/* contact details div is here */}
        <div className="grid place-content-center gap-3">
          <p className="flex items-center gap-2 text-lg font-bold">
            <PhoneOutlined rotate={90} style={{ fontSize: 24 }} />
            {phone.split(" ")[0]}
          </p>
          <p className="flex items-center gap-2 text-lg">
            <MailOutlined style={{ fontSize: 24, color: "red" }} />
            {email}
          </p>
          <p className="flex items-center gap-2 text-lg">
            <GlobalOutlined style={{ fontSize: 24 }} />
            {website}
          </p>
        </div>
        {/* ************contact details ends here******************** */}

        {/*  social media username section is here */}
        <section className="text-center pt-4 px-6">
          <p className=" px-4 text-lg">
            @ <span className="tracking-tight">{username}</span>
          </p>
          <div className="gap-x-6 flex justify-center">
            <span className="text-2xl ">
              <GithubOutlined />
            </span>
            <span className="text-2xl text-blue-800">
              <TwitterOutlined />
            </span>
            <span className="text-2xl text-blue-900">
              <LinkedinOutlined />
            </span>
          </div>
        </section>
        {/* ********** social media and username ends here******** */}
      </section>

      {/* business tagline section or footer area */}
      <section className="bg-yellow-50 w-full mt-2 flex items-center justify-center">
        <div className="bg-blue-500 p-2 text-center text-md font-thin tracking-widest text-white w-full rounded-bl-[4rem] rounded-br-[4rem]">
          {company.catchPhrase.split(" ").join(", ")}
        </div>
      </section>
      {/* ------------------------------------- */}
    </section>
  );
};

export default UserList;
