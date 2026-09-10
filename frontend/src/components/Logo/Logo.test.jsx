import { render, screen } from "@testing-library/react";
import { describe, expect, test } from 'vitest';
import Logo from "./Logo";

test('Intro test', () => {
    expect(true).toBe(true);
});

describe('Exo Logo', () => {
    test('B1 - Logo', () => {
        render(<Logo />);
        const logo = screen.getByLabelText("eventflow");
        expect(logo).toBeInTheDocument();
    });

    test('B2 - Logo Access name', () => {
        render(<Logo />);
        const logo = screen.getByLabelText('eventflow');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('aria-label');
    });

    test('B3 - Default width', () => {
        render(<Logo />);
        const logo = screen.getByLabelText('eventflow');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("width", "34");
    });
});

