import AbstractComponent from "./abstract-component";

export default class NoTripPoints extends AbstractComponent {
  getTemplate() {
    return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
  }
}
