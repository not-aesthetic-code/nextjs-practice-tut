import EventList from "../components/events/event-list";
import EventItem from "../components/events/event-item";
import { getFeaturedEvents } from "../helpers/api-util";

export default function HomePage(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}
