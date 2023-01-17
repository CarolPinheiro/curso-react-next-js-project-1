import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock as props } from "./mock";

describe("<PostCard/>", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText(/any-title/i)).toHaveAttribute(
      "src",
      "any-image.png"
    );

    expect(
      screen.getByRole("heading", { name: /any-title/i })
    ).toBeInTheDocument();

    expect(screen.getByText("any-body")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
