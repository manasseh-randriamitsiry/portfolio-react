import Link from "next/link";

import {
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "GitHub",
    link: "https://github.com/manasseh-randriamitsiry",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manasseh-randriamitsiry-2b76821b6",
    Icon: RiLinkedinLine,
  },
  {
    name: "Email",
    link: "mailto:manassehrandriamitsiry@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "Phone",
    link: "tel:+261342943971",
    Icon: RiPhoneLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "GitHub"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
