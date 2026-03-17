# 📧 Automated Report Email System (Google Apps Script)

This project automates the process of generating reports from Google Sheets and sending them via email.

It converts spreadsheet data into formatted HTML tables and delivers them as structured email reports.

---

# 🎯 Objective

To eliminate manual reporting workflows by:

* extracting data from Google Sheets
* converting it into readable HTML tables
* sending automated email reports
* optionally notifying via webhook

---

# 🔗 Workflow Overview

```text
Google Sheets Data
        ↓
HTML Table Generation
        ↓
Email Formatting
        ↓
Send via Gmail
        ↓
(Optional) Chat Notification
```

---

# ⚙️ Key Features

* dynamic HTML table generation from Sheets
* formatted email reports
* reusable configuration
* supports multiple sections in reports
* optional webhook notifications
* fully automated reporting pipeline

---

# 🧩 Use Cases

* daily/weekly KPI reports
* operational dashboards via email
* automated business summaries
* monitoring alerts
* replacing manual spreadsheet reporting

---

# ⚙️ Configuration

Update placeholders inside the script:

```javascript
WEBHOOK_URL = "YOUR_WEBHOOK"
RECIPIENTS = "email@example.com"
SHEET_URL = "YOUR_SHEET_LINK"
SHEET_NAME = "Sheet1"
```

---

# 🧠 What This Project Demonstrates

* automation using Google Apps Script
* email generation with HTML
* integration with Google Sheets
* webhook/API communication
* transforming data into readable reports

---

# 🚀 Why This Matters

Many reporting workflows involve repetitive manual steps.

This automation:

* saves time
* reduces human error
* ensures consistent reporting
* enables scalable reporting systems

---

# 🛠 Tech Stack

* Google Apps Script
* Google Sheets
* Gmail API
* Webhooks (optional)

---

# 📜 License

MIT
