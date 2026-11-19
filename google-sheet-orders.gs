/**
 * APRA store: email every cash-on-delivery order to apradairy@gmail.com
 * and keep a copy in a Google Sheet.
 *
 * One-time setup (about 5 minutes), signed in as apradairy@gmail.com:
 * 1. Create a Google Sheet named "APRA Orders".
 * 2. In the sheet, open Extensions > Apps Script. Delete what is there, paste this whole file, and Save.
 * 3. Click Deploy > New deployment > Select type: Web app.
 *    Execute as: Me.  Who has access: Anyone.  Click Deploy and allow the permissions
 *    (Google asks once, so the script can add rows and send email from your account).
 * 4. Copy the "Web app URL" and paste it into SHEET_URL in CONFIG at the top of the script in index.html.
 */
const ORDER_EMAIL = "apradairy@gmail.com";
const HEADERS = ["Order ID","Placed at","Status","Name","Mobile","Alt mobile","Address","Landmark","City","State","PIN","Items","Total (₹)","Payment","Note"];

function doPost(e) {
  const o = JSON.parse(e.postData.contents);
  const c = o.customer || {};
  const items = (o.items || []).map(i => `${i.title} × ${i.qty} = ₹${i.qty * i.price}`);

  // 1. Save to the sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  sheet.appendRow([o.id, new Date(o.createdAt), "New", c.name, "'" + c.phone, c.phone2 ? "'" + c.phone2 : "",
    c.address, c.landmark, c.city, c.state, "'" + c.pincode, items.join("\n"), o.total, o.payment, c.notes]);

  // 2. Email the order
  const esc = s => String(s || "").replace(/[&<>"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
  const address = [c.address, c.landmark, c.city, c.state + " " + c.pincode].filter(Boolean).join(", ");
  const text = `New order ${o.id}\n\n${items.join("\n")}\n\nTotal (cash on delivery): ₹${o.total}\n\n` +
    `Name: ${c.name}\nMobile: ${c.phone}${c.phone2 ? " / " + c.phone2 : ""}\nAddress: ${address}` + (c.notes ? `\nNote: ${c.notes}` : "");
  const html = `<h2 style="margin:0 0 8px">New order ${esc(o.id)}</h2>
    <table cellpadding="6" style="border-collapse:collapse">${(o.items || []).map(i =>
      `<tr><td>${esc(i.title)} × ${i.qty}</td><td align="right">₹${i.qty * i.price}</td></tr>`).join("")}
    <tr><td><b>Total, cash on delivery</b></td><td align="right"><b>₹${o.total}</b></td></tr></table>
    <p><b>${esc(c.name)}</b><br>Mobile: ${esc(c.phone)}${c.phone2 ? " / " + esc(c.phone2) : ""}<br>${esc(address)}${c.notes ? "<br>Note: " + esc(c.notes) : ""}</p>`;
  MailApp.sendEmail({to: ORDER_EMAIL, subject: `New APRA order ${o.id}: ₹${o.total} from ${c.name}`, body: text, htmlBody: html});

  return ContentService.createTextOutput("ok");
}
