// Import required classes
import { EventDisplay, PhoenixLoader } from 'phoenix-event-display';

// Create the event display
const eventDisplay = new EventDisplay();

// Define the configuration
const configuration = {
  elementId: '<wrapper_element_id>',
  eventDataLoader: new PhoenixLoader(), // or some other event data loader
  // ... other configuration options
};

// Initialize the event display with the configuration
eventDisplay.init(configuration);

// Load and parse event data in Phoenix format and display it
fetch('path/to/event-data.json')
  .then((res) => res.json())
  .then((res) => {
    eventDisplay.parsePhoenixEvents(res);
  });

// Load detector geometry
eventDisplay.loadOBJGeometry(
  'path/to/geometry.obj',
  'Detector OBJ',
  0x8c8c8c /* color */
);