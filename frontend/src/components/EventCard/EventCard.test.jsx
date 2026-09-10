import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import EventCard from "./EventCard";
import { MemoryRouter } from "react-router";

const event = {
    id: "42",
    title: "Brussels Testing Days",
    city: "Brussels",
    venue: "Tour & Taxi",
    starts_at: "2026/09/11",
    cover_color: "#4B0082"
};

const renderEventCard = (ev = event) => render(
    <MemoryRouter>
        <EventCard ev={ev} />
    </MemoryRouter>
);

describe("Exo EventCard", () => {
    test("B6 - EventCard", () => {
        renderEventCard();
        const card = screen.getByText(event.title);
        expect(card).toBeInTheDocument();
    });

    test("B7 - EventCard", () => {
        renderEventCard();
        const card = screen.getByText('Brussels Testing Days');
        expect(card).toBeInTheDocument();
    });

    test("B8 - EventCard", () => {
        renderEventCard();
        const card = screen.getByText('Brussels');
        expect(card).toBeInTheDocument();
    });

    test("B9 - EventCard", () => {
        renderEventCard();
        const card = screen.getByText('Tour & Taxi');
        expect(card).toBeInTheDocument();
    });

    test('B10 - EventCard', () => {
        renderEventCard();
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
    });

    test('B11 - EventCard', () => {
        renderEventCard();
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute("href", `/events/${event.id}`)
    });

    test('B12 - EventCard', () => {
        renderEventCard();
        const voir = screen.getByText('Voir');
        const billets = screen.getByText('Billets');
        expect(voir).toBeInTheDocument();
        expect(billets).toBeInTheDocument();
    });
});