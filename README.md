# nuxt-test

## Demo Considerations

[A simple page](pages/index.vue) which features a grid of [cards](components/Card.vue) based on a sampling of the famous [Star Wars Dev API](https://swapi.dev)

### [API](lib/api.ts)
- A rudimentary API handler for URI paths and content formatter help pull different data, and prepare data for display. Descriptions are dynamic based on the selected content type isolating unique properties from the API response per API type
- Features a sidebar menu which lets you switch between the different API content types

### [Page](pages/index.vue)
- A page loader (and local state) tracks when the API is loading and displays a loading indicator and rough skeleton cards to help convey something is taking place 
- `watchQuery` is leveraged to dynamically update the cards based on the selected content type alongside a `asyncData` query to pull in the content
- A rudimentary [rating component](components/Rating.vue) and [Vuex state](store/index.js) against each unique API entry, using its name, to allow ratings to be set and temporarily stored in memory, reset on reload

### Library's used
- Buefy, Axios, Vuex, Typescript (for api.ts)
