import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import EventCard from "./EventCard";
import { MemoryRouter } from "react-router";

describe("Exo EventCard", () => {
    test("B6 - EventCard", () => {
        render(
            <MemoryRouter>
                <EventCard ev={{
                    id: "Evt-042",
                    title: "Brussels Testing Days",
                    city: "Bruxelles",
                    venue: "Tour & Taxi",
                    starts_at: "11/09/26",
                    cover_color: "#4B0082"
                }} />;
            </MemoryRouter>
        )
    });
})