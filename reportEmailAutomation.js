/**
 * Automated Report Email Sender
 * ------------------------------------------------------------
 * This script generates a formatted HTML report from a
 * Google Sheets document and sends it via email.
 *
 * Features:
 * - dynamic HTML tables from sheet ranges
 * - formatted email reports
 * - optional chat/webhook notification
 *
 * NOTE:
 * Replace all placeholder values before use.
 */

const CONFIG = {
  WEBHOOK_URL: "WEBHOOK_URL_PLACEHOLDER",
  RECIPIENTS: "recipient1@example.com, recipient2@example.com",
  SHEET_URL: "SPREADSHEET_LINK_PLACEHOLDER",
  SHEET_NAME: "REPORT_SHEET_NAME"
};

const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName(CONFIG.SHEET_NAME);


/* ============================================================
   MAIN FUNCTION
============================================================ */
function sendReportEmail() {

  const formattedDate = getFormattedDate();
  const subject = `Automated Report - ${formattedDate}`;
  const emailBody = buildEmailBody(formattedDate);

  GmailApp.sendEmail(CONFIG.RECIPIENTS, subject, "", {
    htmlBody: emailBody
  });

  Logger.log("Report email sent.");
}


/* ============================================================
   BUILD EMAIL BODY
============================================================ */
function buildEmailBody(formattedDate) {

  let body = `
    <p>Hello,</p>
    <p>This is an automated report generated from Google Sheets.</p>
    <p>
      View full dataset:
      <a href="${CONFIG.SHEET_URL}">Open Spreadsheet</a>
    </p>
  `;

  /* Example section */
  body += `<h2>Summary Table</h2>`;
  body += buildTable("A1:D10");

  body += `
    <hr>
    <p><b>Best regards,</b></p>
    <p>Automated Reporting System</p>
  `;

  return body;
}


/* ============================================================
   TABLE BUILDER
============================================================ */
function buildTable(range) {

  const values = sheet.getRange(range).getDisplayValues();
  const backgrounds = sheet.getRange(range).getBackgrounds();
  const fontColors = sheet.getRange(range).getFontColors();

  let html = `<table border="1" style="border-collapse: collapse; text-align: center;">`;

  values.forEach((row, i) => {
    html += "<tr>";

    row.forEach((cell, j) => {
      html += `
        <td style="
          padding: 6px;
          background-color: ${backgrounds[i][j]};
          color: ${fontColors[i][j]};
        ">
          ${cell}
        </td>
      `;
    });

    html += "</tr>";
  });

  html += "</table>";

  return html;
}


/* ============================================================
   HELPER: FORMAT DATE
============================================================ */
function getFormattedDate() {

  const today = new Date();
  return Utilities.formatDate(
    today,
    Session.getScriptTimeZone(),
    "yyyy-MM-dd"
  );

}


/* ============================================================
   OPTIONAL: SEND CHAT NOTIFICATION
============================================================ */
function sendChatNotification(message) {

  if (!CONFIG.WEBHOOK_URL ||
      CONFIG.WEBHOOK_URL === "WEBHOOK_URL_PLACEHOLDER") return;

  const payload = {
    text: `Report Notification\n${message}`
  };

  UrlFetchApp.fetch(CONFIG.WEBHOOK_URL, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  });

}
