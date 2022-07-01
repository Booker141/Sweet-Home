import { colors } from "styles/frontend-conf.js";

export default function Button({ href, name, size}) {
  return (
    <>
      <a onClick={href}>{name}</a>
      <style jsx>
        {`
          a {
            height: 7vh;
            width: ${size};
            padding: 1vh 2vh;
            position: relative;
            margin: 0 auto;
            background-color: ${colors.tertiary};
            border-radius: 40px;
            border: none;
            color: ${colors.secondary};
            display: block;
            font-family: "Poppins-Light";
            font-style: bold;
          }
        `}
      </style>
    </>
  );
}
