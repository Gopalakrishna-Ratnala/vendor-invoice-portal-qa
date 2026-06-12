# Test Cases — B2B Vendor Invoice Management Portal

**Version:** 1.0  
**Date:** June 2026

> **Format:** Each test case includes — Test Case ID | Requirement | Priority | Preconditions | Steps | Expected Result | Actual Result | Status | Executed By | Execution Date
>
> **Status values:** Not Executed / Pass / Fail / Blocked / Skipped  
> Fields marked *[Fill during execution]* are left blank intentionally — to be completed by the QA engineer when running the test.

---

## REQ-01: Vendor Registration & Login

### TC-001 — Successful Vendor Registration

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-001 |
| **Title** | Vendor registers successfully with valid details |
| **Requirement** | REQ-01 |
| **Priority** | High |
| **Preconditions** | User is on the Registration page |
| **Test Steps** | 1. Navigate to the registration page. 2. Enter all mandatory fields (company name, email, password, tax ID). 3. Click "Register". |
| **Expected Result** | Account is created. Verification email is sent. User sees a confirmation message. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive |

---

### TC-002 — Vendor Login with Valid Credentials

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-002 |
| **Title** | Vendor logs in with correct email and password |
| **Requirement** | REQ-01 |
| **Priority** | Critical |
| **Preconditions** | Vendor account exists and is verified |
| **Test Steps** | 1. Navigate to login page. 2. Enter valid email and password. 3. Click "Login". |
| **Expected Result** | Vendor is redirected to their dashboard. Session is active. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive |

---

### TC-003 — Vendor Login with Invalid Password

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-003 |
| **Title** | Login fails with incorrect password |
| **Requirement** | REQ-01 |
| **Priority** | High |
| **Preconditions** | Vendor account exists |
| **Test Steps** | 1. Navigate to login page. 2. Enter valid email and wrong password. 3. Click "Login". |
| **Expected Result** | Login is rejected. Error message displayed: "Invalid credentials." No session created. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative |

---

### TC-004 — Account Lockout After Repeated Failed Logins

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-004 |
| **Title** | Account locked after N consecutive failed attempts |
| **Requirement** | REQ-01 |
| **Priority** | High |
| **Preconditions** | Vendor account exists; lockout threshold is defined (e.g., 5 attempts) |
| **Test Steps** | 1. Attempt login with wrong password 5 times in a row. |
| **Expected Result** | Account is locked. User sees "Account locked" message. Login is blocked even with correct password. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative / Security |

---

### TC-005 — Duplicate Email Registration

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-005 |
| **Title** | Registration fails for already registered email |
| **Requirement** | REQ-01 |
| **Priority** | High |
| **Preconditions** | An account with email "vendor@test.com" already exists |
| **Test Steps** | 1. Attempt to register again with "vendor@test.com". |
| **Expected Result** | Error message: "Email already registered." Registration is blocked. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative |

---

### TC-006 — Email Verification Link Expiry

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-006 |
| **Title** | Expired verification link cannot activate account |
| **Requirement** | REQ-01 |
| **Priority** | Medium |
| **Preconditions** | Vendor registered but did not verify email within the allowed window |
| **Test Steps** | 1. Wait for the verification link to expire. 2. Click the link. |
| **Expected Result** | System shows "Verification link has expired." Option to resend link is provided. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative |

---

## REQ-02: Invoice Submission Against Purchase Orders

### TC-007 — Successful Invoice Submission

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-007 |
| **Title** | Vendor submits a valid invoice against an open PO |
| **Requirement** | REQ-02 |
| **Priority** | Critical |
| **Preconditions** | Vendor is logged in; open PO exists in the system |
| **Test Steps** | 1. Navigate to "Submit Invoice". 2. Select PO number. 3. Fill all mandatory fields. 4. Upload invoice PDF. 5. Click "Submit". |
| **Expected Result** | Invoice is submitted successfully. Status set to "Submitted". Confirmation shown. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive |

---

### TC-008 — Invoice Submission Without Mandatory Fields

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-008 |
| **Title** | Submission fails when required fields are missing |
| **Requirement** | REQ-02 |
| **Priority** | High |
| **Preconditions** | Vendor is logged in |
| **Test Steps** | 1. Navigate to "Submit Invoice". 2. Leave invoice number blank. 3. Click "Submit". |
| **Expected Result** | Validation error displayed. Invoice is not submitted. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative |

---

### TC-009 — Invoice Amount Exceeds PO Value

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-009 |
| **Title** | Invoice exceeding PO value is flagged or rejected |
| **Requirement** | REQ-02 |
| **Priority** | High |
| **Preconditions** | PO with value $10,000 exists |
| **Test Steps** | 1. Submit an invoice with amount $12,000 against that PO. |
| **Expected Result** | System either rejects automatically with message, or flags for manual review per business rule. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative / Boundary |

---

### TC-010 — Duplicate Invoice Submission

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-010 |
| **Title** | Duplicate invoice number is rejected |
| **Requirement** | REQ-02 |
| **Priority** | High |
| **Preconditions** | Invoice INV-1001 already submitted by this vendor |
| **Test Steps** | 1. Submit another invoice with the same invoice number INV-1001. |
| **Expected Result** | System blocks submission. Error: "Invoice number already exists." |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative |

---

### TC-011 — Upload Unsupported File Format

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-011 |
| **Title** | Upload of unsupported file type is rejected |
| **Requirement** | REQ-02 |
| **Priority** | Medium |
| **Preconditions** | Vendor is logged in |
| **Test Steps** | 1. Attempt to upload a .exe or .zip file as invoice attachment. |
| **Expected Result** | Upload is rejected. Error: "Invalid file type. Only PDF/XLSX accepted." |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative / Security |

---

### TC-012 — Vendor Cannot Submit Invoice Against a Closed PO

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-012 |
| **Title** | Invoice submission blocked for closed/inactive PO |
| **Requirement** | REQ-02 |
| **Priority** | High |
| **Preconditions** | PO exists in "Closed" status |
| **Test Steps** | 1. Try to submit an invoice selecting the closed PO. |
| **Expected Result** | System prevents submission. Error: "PO is closed or inactive." |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative |

---

### TC-013 — Vendor Cannot View Another Vendor's Invoices

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-013 |
| **Title** | Data isolation — vendor can only see their own invoices |
| **Requirement** | REQ-02 / REQ-07 |
| **Priority** | Critical |
| **Preconditions** | Two vendor accounts exist with separate invoices |
| **Test Steps** | 1. Log in as Vendor A. 2. Attempt to access Vendor B's invoice via direct URL manipulation. |
| **Expected Result** | Access denied. Vendor A cannot see Vendor B's data. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Security |

---

## REQ-03: AP Team — View, Approve, or Reject Invoices

### TC-014 — AP Team Views Submitted Invoices

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-014 |
| **Title** | AP team can see all submitted invoices in the queue |
| **Requirement** | REQ-03 |
| **Priority** | High |
| **Preconditions** | AP user is logged in; at least one invoice in "Submitted" status |
| **Test Steps** | 1. Log in as AP user. 2. Navigate to invoice queue. |
| **Expected Result** | All submitted invoices are listed with relevant details. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive |

---

### TC-015 — AP Team Approves an Invoice

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-015 |
| **Title** | AP user approves a submitted invoice |
| **Requirement** | REQ-03 |
| **Priority** | Critical |
| **Preconditions** | Invoice in "Submitted" status exists |
| **Test Steps** | 1. Log in as AP user. 2. Open the invoice. 3. Click "Approve". 4. Verify invoice status in portal. 5. Check vendor email inbox. 6. Verify downstream payment system received the invoice (via mock/log). |
| **Expected Result** | **Verification 1 — Status:** Invoice status changes to "Approved" in the portal. **Verification 2 — Notification:** Vendor receives email notification of approval (see TC-023). **Verification 3 — Forwarding:** Invoice data is sent to payment processing system (see TC-019). Note: Each verification point can be independently Pass/Fail. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive |

---

### TC-016 — AP Team Rejects an Invoice with Reason

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-016 |
| **Title** | AP user rejects invoice with a mandatory rejection reason |
| **Requirement** | REQ-03 |
| **Priority** | High |
| **Preconditions** | Invoice in "Submitted" status exists |
| **Test Steps** | 1. Log in as AP user. 2. Open invoice. 3. Click "Reject". 4. Enter rejection reason. 5. Confirm. |
| **Expected Result** | Invoice status changes to "Rejected". Rejection reason is saved. Vendor receives notification. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive |

---

### TC-017 — AP User Cannot Approve Already Approved Invoice

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-017 |
| **Title** | Duplicate approval is prevented |
| **Requirement** | REQ-03 |
| **Priority** | High |
| **Preconditions** | Invoice is already in "Approved" status |
| **Test Steps** | 1. Attempt to approve an already approved invoice. |
| **Expected Result** | Action is blocked. Error: "Invoice has already been approved." |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative |

---

### TC-018 — Vendor Cannot Access AP Approval Screens

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-018 |
| **Title** | Vendor role cannot perform AP actions |
| **Requirement** | REQ-03 / REQ-07 |
| **Priority** | Critical |
| **Preconditions** | Logged in as Vendor role |
| **Test Steps** | 1. Attempt to access the AP approval URL directly. |
| **Expected Result** | Access denied. "Unauthorized" or redirect to vendor dashboard. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Security |

---

## REQ-04: Approved Invoices Forwarded for Payment Processing

### TC-019 — Approved Invoice Is Forwarded Automatically

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-019 |
| **Title** | Approved invoice triggers payment processing forwarding |
| **Requirement** | REQ-04 |
| **Priority** | Critical |
| **Preconditions** | Invoice in "Submitted" status; payment system mock is active |
| **Test Steps** | 1. AP user approves the invoice. |
| **Expected Result** | Invoice data is sent to payment system. Invoice status updates to "Payment Initiated" or equivalent. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Integration |

---

### TC-020 — Payment Forwarding Failure Is Handled Gracefully

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-020 |
| **Title** | System handles payment system unavailability without data loss |
| **Requirement** | REQ-04 |
| **Priority** | High |
| **Preconditions** | Payment system is mocked to be unavailable |
| **Test Steps** | 1. AP user approves an invoice while payment system is down. |
| **Expected Result** | Invoice stays in "Approved" state. Error is logged. Retry mechanism or alert is triggered. No data is lost. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative / Integration |

---

### TC-021 — Payment Confirmation Status Reflects in Portal

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-021 |
| **Title** | Payment status from downstream system is reflected in portal |
| **Requirement** | REQ-04 |
| **Priority** | Medium |
| **Preconditions** | Invoice forwarded to payment system; payment system returns confirmation |
| **Test Steps** | 1. Payment system processes the invoice. 2. Check invoice status in portal. |
| **Expected Result** | Invoice status updated to "Paid" or equivalent in the portal. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Integration |

---

## REQ-05: Email Notifications on Status Changes

### TC-022 — Vendor Receives Email on Invoice Submission

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-022 |
| **Title** | Vendor receives confirmation email after submitting invoice |
| **Requirement** | REQ-05 |
| **Priority** | Medium |
| **Preconditions** | Vendor submits a valid invoice |
| **Test Steps** | 1. Submit an invoice. 2. Check vendor's email inbox. |
| **Expected Result** | Vendor receives email with invoice number and status "Submitted". |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive / Integration |

---

### TC-023 — Vendor Receives Email on Approval

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-023 |
| **Title** | Vendor notified when their invoice is approved |
| **Requirement** | REQ-05 |
| **Priority** | High |
| **Preconditions** | Invoice in "Submitted" state; AP user approves it |
| **Test Steps** | 1. AP user approves invoice. 2. Check vendor email. |
| **Expected Result** | Vendor receives email: "Your invoice INV-XXXX has been approved." |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive / Integration |

---

### TC-024 — Vendor Receives Email on Rejection

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-024 |
| **Title** | Vendor notified with rejection reason when invoice is rejected |
| **Requirement** | REQ-05 |
| **Priority** | High |
| **Preconditions** | AP user rejects invoice with a reason |
| **Test Steps** | 1. AP user rejects invoice. 2. Check vendor email. |
| **Expected Result** | Vendor receives email including the rejection reason. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive / Integration |

---

### TC-025 — No Notification Sent for Non-Status-Change Actions

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-025 |
| **Title** | Email is not sent when AP user only views an invoice |
| **Requirement** | REQ-05 |
| **Priority** | Low |
| **Preconditions** | Invoice in "Submitted" state |
| **Test Steps** | 1. AP user opens and views the invoice without taking action. 2. Check vendor email. |
| **Expected Result** | No email is sent to vendor. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative |

---

## REQ-06: Monthly Invoice Activity Reports

### TC-026 — Monthly Report Is Generated with Correct Data

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-026 |
| **Title** | Monthly report includes all invoice activity for the period |
| **Requirement** | REQ-06 |
| **Priority** | High |
| **Preconditions** | Invoice data exists for the target month |
| **Test Steps** | 1. Trigger report generation for last month. 2. Download/view report. |
| **Expected Result** | Report includes total invoices submitted, approved, rejected, and pending for the month. Data matches portal records. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive |

---

### TC-027 — Vendor Can Only See Their Own Data in Report

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-027 |
| **Title** | Report is scoped to the logged-in vendor's data |
| **Requirement** | REQ-06 / REQ-07 |
| **Priority** | High |
| **Preconditions** | Multiple vendors have invoice activity |
| **Test Steps** | 1. Log in as Vendor A. 2. Generate monthly report. |
| **Expected Result** | Report contains only Vendor A's invoices. No data from Vendor B is visible. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Security |

---

### TC-028 — Report for Month With No Activity

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-028 |
| **Title** | Report handles months with zero invoice activity |
| **Requirement** | REQ-06 |
| **Priority** | Low |
| **Preconditions** | No invoices submitted in the selected month |
| **Test Steps** | 1. Generate report for a month with no invoices. |
| **Expected Result** | Report is generated with zero values. No error is thrown. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Edge Case |

---

## REQ-07: Access Control / Authorization

### TC-029 — Unauthenticated User Cannot Access Portal

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-029 |
| **Title** | Unauthenticated access to portal pages is blocked |
| **Requirement** | REQ-07 |
| **Priority** | Critical |
| **Preconditions** | User is not logged in |
| **Test Steps** | 1. Attempt to access the invoice submission page via direct URL. |
| **Expected Result** | User is redirected to the login page. Access is denied. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Security |

---

### TC-030 — Session Timeout After Inactivity

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-030 |
| **Title** | User session expires after defined inactivity period |
| **Requirement** | REQ-07 |
| **Priority** | High |
| **Preconditions** | User is logged in; session timeout is defined (e.g., 30 minutes) |
| **Test Steps** | 1. Log in. 2. Leave session idle for the timeout duration. 3. Attempt to perform any action. |
| **Expected Result** | Session is expired. User is redirected to login page. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Security |

---

### TC-031 — Role Enforcement: AP Role Cannot Submit Invoices

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-031 |
| **Title** | AP team user cannot access vendor invoice submission |
| **Requirement** | REQ-07 |
| **Priority** | High |
| **Preconditions** | Logged in as AP role |
| **Test Steps** | 1. Attempt to navigate to the vendor invoice submission page. |
| **Expected Result** | Access denied. Page is not visible or returns "Unauthorized". |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Security |

---

### TC-032 — Admin Can Manage User Roles

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-032 |
| **Title** | System admin can assign and change user roles |
| **Requirement** | REQ-07 |
| **Priority** | Medium |
| **Preconditions** | Admin user is logged in |
| **Test Steps** | 1. Navigate to user management. 2. Change a vendor user's role to AP Clerk. 3. Log in as that user. |
| **Expected Result** | The user now has AP Clerk permissions and no longer has vendor-only access. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive |

---

### TC-033 — Audit Log Captures Sensitive Actions

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-033 |
| **Title** | Audit log records logins, approvals, rejections, and report downloads |
| **Requirement** | REQ-07 |
| **Priority** | High |
| **Preconditions** | Admin has access to audit logs |
| **Test Steps** | 1. Perform login, approve an invoice, download a report. 2. Check audit log. |
| **Expected Result** | All three actions are recorded in the audit log with timestamp, user, and action detail. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive / Compliance |

---

## REQ-05 (Additional) — AP Team Email Notifications

### TC-034 — AP Team Receives Email When Vendor Submits Invoice

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-034 |
| **Title** | AP team receives notification email when a new invoice is submitted |
| **Requirement** | REQ-05 |
| **Priority** | High |
| **Preconditions** | AP user account exists with a valid email; vendor is logged in |
| **Test Steps** | 1. Log in as a vendor. 2. Submit a valid invoice against an open PO. 3. Check the AP team's email inbox. |
| **Expected Result** | AP team receives an email notification informing them of the new invoice submission, including vendor name and invoice reference number. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive / Integration |

---

### TC-035 — AP Team Receives Email When Invoice Payment is Processed

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-035 |
| **Title** | AP team notified when payment processing completes for an approved invoice |
| **Requirement** | REQ-05 |
| **Priority** | Medium |
| **Preconditions** | Invoice has been approved and forwarded to payment system; payment system mock returns confirmation |
| **Test Steps** | 1. AP user approves invoice. 2. Payment system confirms payment. 3. Check AP team's email inbox. |
| **Expected Result** | AP team receives email confirming payment has been initiated/processed for the invoice. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive / Integration |

---

## REQ-01 (Additional) — Password Reset

### TC-036 — Vendor Resets Password via Forgot Password Flow

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-036 |
| **Title** | Vendor successfully resets password using "Forgot Password" |
| **Requirement** | REQ-01 |
| **Priority** | High |
| **Preconditions** | Vendor account exists with a verified email |
| **Test Steps** | 1. Navigate to the login page. 2. Click "Forgot Password". 3. Enter registered email address. 4. Click "Send Reset Link". 5. Open email and click the reset link. 6. Enter a new valid password. 7. Confirm the new password. 8. Submit. 9. Log in using the new password. |
| **Expected Result** | Password reset email is sent. New password is accepted. Vendor can log in successfully with the new password. Old password no longer works. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive |

---

### TC-037 — Password Reset Link Expires After Defined Time

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-037 |
| **Title** | Expired password reset link is rejected |
| **Requirement** | REQ-01 |
| **Priority** | High |
| **Preconditions** | Vendor has requested a password reset; reset link has expired |
| **Test Steps** | 1. Request a password reset. 2. Wait for the link to expire. 3. Click the expired link. |
| **Expected Result** | System shows "This reset link has expired or already been used." User is prompted to request a new link. Old password remains unchanged. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Negative |

---

## REQ-02 (Additional) — Vendor Invoice History

### TC-038 — Vendor Can View Their Submitted Invoice History and Status

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-038 |
| **Title** | Vendor can view a list of all their submitted invoices with current status |
| **Requirement** | REQ-02 |
| **Priority** | High |
| **Preconditions** | Vendor is logged in; vendor has previously submitted at least 3 invoices in different statuses (Submitted, Approved, Rejected) |
| **Test Steps** | 1. Log in as vendor. 2. Navigate to "My Invoices" or invoice history page. 3. Verify the invoice list is displayed. 4. Confirm each invoice shows: invoice number, PO number, amount, submission date, and current status. |
| **Expected Result** | All previously submitted invoices are listed. Status reflects the latest state (Submitted / Approved / Rejected / Paid). Data is accurate and matches what was submitted. |
| **Actual Result** | *[Fill during execution]* |
| **Status** | Not Executed |
| **Executed By** | *[Fill during execution]* |
| **Execution Date** | *[Fill during execution]* |
| **Test Type** | Positive |

---

*Think. Question. Test.*
