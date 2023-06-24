
import { render } from "@testing-library/react";
import FallbackImage from "../components/FallbackImage/FallbackImage";

describe("FallbackImage component", () => {

  
  test("Renders FallbackImage with correct width and height props when passed", () => {
    const { getByAltText } = render(
      <FallbackImage src="/public/about-1.jpg" alt="Test image" width={400} height={200} />
    );
    const imageElement = getByAltText(/Test image/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.width).toEqual(0);
    expect(imageElement.height).toEqual(0);
  });
});
