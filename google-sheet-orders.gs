/**
 * APRA store: receive cash-on-delivery orders in a Google Sheet.
 * 1. Create a Google Sheet named "APRA Orders".
 * 2. Extensions > Apps Script, paste this file, Save.
 * 3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
 * 4. Copy the web-app URL and paste it into CONFIG.SHEET_URL in index.html.
 */
const HEADERS = ["Order ID","Placed at","Status","Name","Mobile","Alt mobile","Address","Landmark","City","State","PIN","Items","Total (₹)","Payment","Note"];

function doPost(e) {
  const o = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  const c = o.customer || {};
  const items = (o.items || []).map(i => `${i.title} x ${i.qty} = ₹${i.qty * i.price}`).join("\n");
  sheet.appendRow([o.id, new Date(o.createdAt), "New", c.name, "'" + c.phone, c.phone2 ? "'" + c.phone2 : "",
    c.address, c.landmark, c.city, c.state, "'" + c.pincode, items, o.total, o.payment, c.notes]);
  // Optional: email yourself on every order. Uncomment and set your address.
  // MailApp.sendEmail("you@example.com", "New APRA order " + o.id, items + "\nTotal ₹" + o.total + "\n" + c.name + " " + c.phone);
  return ContentService.createTextOutput("ok");
}
