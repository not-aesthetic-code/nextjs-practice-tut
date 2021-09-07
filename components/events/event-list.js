import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props;

  return <ul className={classes.list}>{items.map(mapEvents)}</ul>;

  function mapEvents(event) {
    return (
      <EventItem
        key={event.id}
        id={event.id}
        title={event.title}
        location={event.location}
        date={event.date}
        image={event.image}
      />
    );
  }
}

export default EventList;
