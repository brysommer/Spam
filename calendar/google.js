import { google } from "googleapis";

export const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: 'https://www.googleapis.com/auth/calendar.readonly',
});

export const getClient = async () => {
  return await auth.getClient();
};

export const getCalendarInstances = (client) => {
  return google.calendar({ version: "v3", auth: client });
};