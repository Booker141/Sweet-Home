/* Static imports */

import Avatar from "../components/Avatar/Avatar";
import {render} from '@testing-library/react'

describe("Avatar Component", () => {
  
  test("render Avatar component", () => {
    const { container } = render(<Avatar />);
    expect(container).toBeInTheDocument();
  });

  test("render Avatar component with props", () => {
    const image = "/avatar.png";
    const name = "Juan";
    const message = "Hola!";

    const { getByText } = render(
      <Avatar image={image} name={name} message={message} />
    );

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(message)).toBeInTheDocument();
  });

  
});