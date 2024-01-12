import { google } from "googleapis";

export async function getPosts() {

    try {

        const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            null,
            // we need to replace the escaped newline characters
            // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
            process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
            scopes
        );


        const sheets = google.sheets({ version: "v4", auth: jwt });
        const responseUpcoming = await sheets.spreadsheets.values.get({

            spreadsheetId: process.env.SHEET_ID,
            range: 'Posts',
        })

        // console.log(responseUpcoming.data.values);


        const rowsUpcoming = responseUpcoming.data.values

        if (rowsUpcoming.length) {
            console.log(rowsUpcoming)
            return rowsUpcoming.map((row) => ({
                imageLink: row[1],
                img_title: row[2],
                venue: row[3],
                date: row[4],
                description: row[5],
            }));
        }
    } catch (err) {
        console.log(err);
    }

    return [];
}