import { getClient, getCalendarInstances } from "./google.js";
//import { dataBot } from './values.js';

const calendarId = '03770211bcfad39ea731c697338f1d171259de21f67581ca85ad0d2a5f7648e7@group.calendar.google.com';

const writeEvent = async (event) => {
    const client = await getClient();
    const calendars = getCalendarInstances(client);
    const request = {
        calendarId,
        requestBody: event,
        conferenceDataVersion: 1, 
        sendNotifications: true,
    };
    const response = await calendars.events.insert(request);
    return response.data;
  };

const readGoogle = async (range) => {
    const client = await getClient();
    const sheets = getSheetsInstance(client);
    const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
    if (response.data.values) {
      if (response.data.values.length > 1) return response.data.values.map(row => row[0]);
      return response.data.values[0];
    } 
    return response.data;
};

export { writeEvent, readGoogle }
  