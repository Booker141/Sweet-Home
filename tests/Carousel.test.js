import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "../components/Carousel/Carousel";

describe("Carousel", () => {
  test("should render a carousel", () => {
    const { carousel } = render(<Carousel />);
    const newSlide = carousel.getElementsByClassName("carousel__item");
    const item = carousel.getElementsByClassName("item__text");
    const arrowLeft = carousel.getElementsByClassName("arrow__left");
    const arrowRight = carousel.getElementsByClassName("arrow__right");

    const buttonElement = screen.getByText("Saber más");
    expect(buttonElement).toBeInTheDocument();
    expect(newSlide).toBeInTheDocument();
    expect(item).toBeInTheDocument();
    expect(arrowLeft).toBeInTheDocument();
    expect(arrowRight).toBeInTheDocument();
  });

  test("includes three buttons", () => {
    const buttons = render(<Carousel />);
    expect(buttons.find("button").length).toEqual(3);
  });

  test("when arrow it's clicked it moves the cursor", () => {
    render(<Carousel />);
    const arrowRight = screen.getElementsByClassName("arrow__right");
    fireEvent.click(arrowRight);
  });
});
