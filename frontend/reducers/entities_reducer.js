import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import eventsReducer from './events_reducer';
import ticketsReducer from './tickets_reducer';
import bookmarksReducer from './bookmarks_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  tickets: ticketsReducer,
  bookmarks: bookmarksReducer
});

export default entitiesReducer;