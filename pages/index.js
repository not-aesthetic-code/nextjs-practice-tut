import { getFeaturedEvents } from "./api/dummyData";
import EventList from "../components/events/event-list";
import EventItem from "../components/events/event-item";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
