import { FaGithub } from "react-icons/fa";

const Card = ({ data }) => {
  const { name, description, github } = data;
  return (
    <li className="flex flex-col bg-white px-8 py-4 shadow-lg rounded-lg hover:scale-105 ease-out duration-300">
      <h3 className="text-center text-2xl border-b-4 pb-2 border-primary mb-4">
        {name}
      </h3>
      <p className="intro text-lg mb-6">{description}</p>
      <div className="flex justify-center">
        <a href={github} target="_blank">
          <FaGithub />
        </a>
      </div>
    </li>
  );
};
export default Card;
