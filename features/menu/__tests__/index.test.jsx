import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";

import NavigationMenu from "../index";

const mockItems = [
  {
    label: "Splash",
    path: "/",
    isVisible: false,
  },
  {
    label: "Home",
    path: "/home",
    isVisible: true,
  },
  {
    label: "Activity",
    path: "/activity",
    isVisible: true,
  },
  {
    label: "Sign Up",
    path: "/sign-up",
    isVisible: false,
  },
];

const mockToggleNav = jest.fn();

jest.mock("@/libs/nav/useNav", () => {
  return jest.fn(() => ({
    items: mockItems,
    toggleNav: mockToggleNav,
  }));
});

describe("Snapshot | NavigationMenu", () => {
  it("renders Navigation unchanged", () => {
    const { container } = render(<NavigationMenu />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Unit | NavigationMenu", () => {
  it("renders a list of filtered links", async () => {
    render(<NavigationMenu />);

    fireEvent.click(screen.getByTestId("nav-toggle"));

    expect(screen.getByText("Home")).toHaveTextContent("Home");
    expect(screen.queryByText("Sign Up")).toBeNull();
    expect(mockToggleNav).toHaveBeenCalledTimes(1);
  });
});
