# Clarifying Questions — B2B Vendor Invoice Management Portal

> **Purpose:** Before designing tests, ambiguous requirements must be clarified. The questions below are raised with the client to ensure complete understanding of scope, rules, and expected behavior.

---

## Requirement 1 — Vendor Registration & Login

**Ambiguity:** "Vendors can register and log in" is vague about the registration workflow, approval process, and authentication mechanism.

| # | Clarifying Question |
|---|---------------------|
| 1.1 | Is vendor registration self-service, or does an admin approve new vendor accounts before they can log in? |
| 1.2 | What fields are mandatory during registration? (e.g., company name, tax ID, bank details, contact info) |
| 1.3 | What authentication method is used — username/password, SSO, MFA, or OAuth? |
| 1.4 | Is there an email verification step after registration? If so, what is the link expiry time? |
| 1.5 | What happens if a vendor tries to register with an email/company that already exists in the system? |
| 1.6 | Can one vendor have multiple user accounts (e.g., different employees of the same vendor)? |
| 1.7 | What is the password policy (minimum length, complexity, expiry)? |
| 1.8 | Is there an account lockout policy after failed login attempts? If yes, how many attempts before lockout, and how is it unlocked? |
| 1.9 | Can a vendor account be deactivated or suspended? Who can do this, and what happens to their pending invoices? |
| 1.10 | Is there a "Forgot Password" / password reset flow? What is the reset link expiry time, and is the old password invalidated immediately once a reset is initiated? |

---

## Requirement 2 — Invoice Submission Against Purchase Orders

**Ambiguity:** "Submit invoices against purchase orders" does not define PO matching rules, invoice fields, allowed formats, or duplicate handling.

| # | Clarifying Question |
|---|---------------------|
| 2.1 | What fields are required on an invoice? (e.g., invoice number, date, PO number, line items, tax, currency) |
| 2.2 | What file formats are accepted for invoice uploads? (PDF, XLSX, CSV?) Is there a file size limit? |
| 2.3 | Can a vendor submit multiple invoices against the same PO? Is there a maximum invoice amount per PO? |
| 2.4 | What happens if the invoice amount exceeds the PO value — is it rejected automatically or flagged for manual review? |
| 2.5 | Can a vendor submit a partial invoice (i.e., invoice for a portion of the PO)? |
| 2.6 | How is duplicate invoice detection handled? (Same invoice number from same vendor?) |
| 2.7 | Can a submitted invoice be edited or withdrawn by the vendor before the AP team acts on it? |
| 2.8 | Are there any date validations on the invoice (e.g., invoice date cannot be before PO date, or more than X days old)? |
| 2.9 | What currencies are supported? Is there multi-currency handling with exchange rates? |
| 2.10 | Does the system perform 2-way or 3-way matching (PO + Invoice, or PO + Invoice + Goods Receipt)? |

---

## Requirement 3 — AP Team: View, Approve, or Reject Invoices

**Ambiguity:** Approval workflow, roles, and rejection handling are not defined.

| # | Clarifying Question |
|---|---------------------|
| 3.1 | Is approval a single-level or multi-level process? (e.g., AP Clerk → AP Manager for invoices above a threshold?) |
| 3.2 | Is a rejection reason mandatory when the AP team rejects an invoice? |
| 3.3 | Can the AP team edit an invoice before approving it, or only approve/reject as-is? |
| 3.4 | Is there a time SLA for the AP team to act on invoices? Are there escalation rules if the SLA is breached? |
| 3.5 | Can multiple AP users act on the same invoice, or is it assigned/locked to one reviewer? |
| 3.6 | Can an approved invoice be reversed or recalled after approval? |
| 3.7 | What invoice statuses exist? (e.g., Submitted, Under Review, Approved, Rejected, Paid, Cancelled) |
| 3.8 | Can the AP team filter and search invoices by vendor, date range, status, or PO number? |

---

## Requirement 4 — Approved Invoices Forwarded for Payment Processing

**Ambiguity:** "Forwarded for payment processing" is undefined — no details on the downstream system, timing, or failure handling.

| # | Clarifying Question |
|---|---------------------|
| 4.1 | Where are approved invoices forwarded — an ERP system (SAP, Oracle), a payment gateway, or a manual finance team queue? |
| 4.2 | Is the forwarding automatic (triggered on approval) or batched (e.g., nightly job)? |
| 4.3 | What happens if the downstream payment system is unavailable — does the invoice stay in "Approved" status and retry? |
| 4.4 | Who is notified if forwarding fails? Is there an alert or dashboard for failed transmissions? |
| 4.5 | Is there a payment confirmation/status that flows back to the portal? (e.g., status changes to "Payment Initiated" or "Paid") |

---

## Requirement 5 — Email Notifications on Status Changes

**Ambiguity:** "Both parties" and "status changes" are vague — no details on which statuses trigger emails, email content, or fallback.

| # | Clarifying Question |
|---|---------------------|
| 5.1 | Which status changes trigger email notifications? (All changes, or only Approved/Rejected/Paid?) |
| 5.2 | What does "both parties" mean exactly — the vendor and which AP team member (the reviewer, the manager, the whole team)? |
| 5.3 | Can vendors or AP users configure their notification preferences (opt out of certain notifications)? |
| 5.4 | What happens if an email delivery fails? Is it retried, and is the failure logged? |
| 5.5 | Are there email templates defined? Are they customizable per client/tenant? |
| 5.6 | Is there a fallback notification channel (e.g., in-app notification, SMS) if email is not delivered? |

---

## Requirement 6 — Monthly Invoice Activity Reports

**Ambiguity:** Report scope, format, access control, and delivery method are not specified.

| # | Clarifying Question |
|---|---------------------|
| 6.1 | Who can access reports — all vendors (their own data only), AP team (all vendors), or admins only? |
| 6.2 | What data is included in the report? (Invoice count, total value, approval rate, rejection rate, aging invoices?) |
| 6.3 | In what format is the report generated — PDF, Excel, in-app dashboard, or all three? |
| 6.4 | Are reports generated automatically at month-end, or can users generate on-demand? |
| 6.5 | Is there a report delivery mechanism (emailed to stakeholders, available for download, or both)? |
| 6.6 | Should the report cover the calendar month or a configurable date range? |
| 6.7 | How long are historical reports retained in the system? |

---

## Requirement 7 — Access Control / Authorization

**Ambiguity:** "Only authorized users" gives no detail on roles, permissions matrix, or session management.

| # | Clarifying Question |
|---|---------------------|
| 7.1 | What user roles exist in the system? (e.g., Vendor User, AP Clerk, AP Manager, System Admin, Read-Only Auditor?) |
| 7.2 | Is there a defined permissions matrix — which role can perform which action? |
| 7.3 | How is role assignment managed — self-service, admin-assigned, or imported from an identity provider? |
| 7.4 | What is the session timeout duration for inactive users? |
| 7.5 | Are all API endpoints protected by authorization checks, or only UI screens? |
| 7.6 | Is there audit logging for sensitive actions (login, approval, rejection, report download)? |
| 7.7 | Is the system single-tenant or multi-tenant? If multi-tenant, is data isolation enforced at the database level? |

---

## Hidden Risks Identified

| Risk | Why It Matters |
|------|----------------|
| No mention of GDPR / data privacy | Vendor bank details and PII must be handled compliantly |
| No mention of audit trail | Financial systems typically require immutable audit logs for compliance |
| No mention of rate limiting or anti-spam | Invoice submission endpoint could be abused without throttling |
| Multi-currency not addressed | Could cause calculation errors in reports and payment forwarding |
| Concurrent approval not addressed | Two AP users approving the same invoice simultaneously could cause double payment |
| Downstream payment system integration not scoped | Failure modes and retry logic need to be tested but are completely undefined |

---

*Think. Question. Test.*
