import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Avatar from "./Avatar";

describe("Exo Avatar", () => {
    test("B4 - Avatar", () => {
        render(<Avatar user={{ full_name: "Camille Client" }} />);
        const avatar = screen.getByText('CC');
        expect(avatar).toBeInTheDocument();
    });

    test("B5 - Avatar", () => {
        render(<Avatar user={{ email: "client@eventflow.test" }} />);
        const avatar = screen.getByText('C');
        expect(avatar).toBeInTheDocument();
    });
});


describe("Exo Avatar 2", () => {
    test("C3 - Avatar", () => {
        render(<Avatar size={50} />);
        const avatar = screen.getByText("?");
        expect(avatar).toHaveStyle("width: 50px ; height: 50px");
    });
});