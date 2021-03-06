import { Fragment } from "react";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Head from "next/head";

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>;
      </div>
    );
  } else {
    return (
      <Fragment>
        <Head>
          <title>{event.title}</title>
          <meta name="description" content={event.content} />
        </Head>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    );
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: paths,
    fallback: true, //'blocking'
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export default EventDetailPage;
