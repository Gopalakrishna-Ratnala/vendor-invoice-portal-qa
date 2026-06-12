# Edge Cases & Boundary Conditions
## B2B Vendor Invoice Management Portal

**Version:** 1.0  
**Date:** June 2026

> Edge cases are scenarios at the limits of expected behavior. They are often missed in standard test cases but are a common source of production defects.

---

## 1. Registration & Authentication

| # | Edge Case | Expected Behavior |
|---|-----------|-------------------|
| EC-001 | Register with email containing special characters (e.g., `user+tag@company.co.uk`) | Should be accepted if valid RFC 5322 email |
| EC-002 | Register with extremely long company name (500+ characters) | System should enforce a max length and show an error |
| EC-003 | Password exactly at minimum length (e.g., 8 characters) | Should be accepted |
| EC-004 | Password of 7 characters (one below minimum) | Should be rejected with clear error |
| EC-005 | Login with email in different case (e.g., `VENDOR@TEST.COM` vs `vendor@test.com`) | Should be treated as the same account (case-insensitive) |
| EC-006 | User attempts login immediately after account lockout is lifted | Should succeed if credentials are correct |
| EC-007 | Two users register simultaneously with the same email | Only one account should be created (race condition handling) |
| EC-008 | Verification email link clicked twice | Second click should show "already verified" gracefully, not error |

---

## 2. Invoice Submission

| # | Edge Case | Expected Behavior |
|---|-----------|-------------------|
| EC-009 | Submit invoice with amount = $0.00 | Should be rejected — zero-value invoices are invalid |
| EC-010 | Submit invoice with amount exactly equal to PO value | Should be accepted (exact match boundary) |
| EC-011 | Submit invoice with amount = $0.01 less than PO value | Should be accepted |
| EC-012 | Submit invoice with amount = $0.01 more than PO value | Should be flagged or rejected per business rule |
| EC-013 | Submit invoice with a date in the future (e.g., invoice dated tomorrow) | Should be rejected — future-dated invoices are invalid |
| EC-014 | Submit invoice with a date more than 1 year in the past | System should warn or reject based on business rules |
| EC-015 | Upload a valid PDF file with 0 bytes (empty file) | Should be rejected: "Uploaded file is empty" |
| EC-016 | Upload a file at exactly the maximum allowed size | Should be accepted |
| EC-017 | Upload a file 1 byte over the maximum allowed size | Should be rejected with file size error |
| EC-018 | Submit invoice against a PO that has already been fully invoiced (100% consumed) | Should be blocked — PO is fully utilized |
| EC-019 | Vendor submits 2 invoices simultaneously for the same PO | System must handle concurrency — one should succeed, or both if partial invoicing is allowed |
| EC-020 | Invoice number with only whitespace (e.g., "   ") | Should fail validation — blank after trimming |
| EC-021 | Invoice line items sum does not match invoice total | Should be rejected with mismatch error |
| EC-022 | Submit invoice with special characters in invoice number (e.g., `INV #001/2026`) | System should handle or restrict to alphanumeric per defined format |

---

## 3. AP Approval Workflow

| # | Edge Case | Expected Behavior |
|---|-----------|-------------------|
| EC-023 | Two AP users attempt to approve the same invoice simultaneously | Only one approval should succeed; second user should see "Already approved" |
| EC-024 | AP user approves an invoice after it has been cancelled by the vendor | Action should be blocked with appropriate message |
| EC-025 | AP user rejects invoice but leaves the rejection reason blank | Should fail validation if rejection reason is mandatory |
| EC-026 | AP user attempts to approve an invoice that is already "Rejected" | Should be blocked — cannot approve a rejected invoice without re-submission |
| EC-027 | Approval SLA expires (e.g., no action taken for 30 days) | Escalation triggered or invoice auto-escalated per business rule |

---

## 4. Email Notifications

| # | Edge Case | Expected Behavior |
|---|-----------|-------------------|
| EC-028 | Vendor's registered email address is invalid / mailbox full | System should log delivery failure; not crash |
| EC-029 | Status changes multiple times in quick succession (Submitted → Approved → Cancelled within 1 minute) | Each status change should trigger its own notification without batching/missing |
| EC-030 | Notification email contains XSS payload in vendor name (e.g., `<script>alert(1)</script>`) | Email should render the name as plain text — no script execution |

---

## 5. Reports

| # | Edge Case | Expected Behavior |
|---|-----------|-------------------|
| EC-031 | Generate report for current month mid-month | Should only include data up to the current date |
| EC-032 | Generate report for a month 2+ years in the past | Should work if data exists; no timeout or error |
| EC-033 | Vendor with 10,000+ invoices in a single month | Report generation should complete within acceptable time (no timeout) |
| EC-034 | Report generation triggered concurrently by two users | Both requests should succeed independently without data collision |

---

## 6. Access Control & Security

| # | Edge Case | Expected Behavior |
|---|-----------|-------------------|
| EC-035 | User modifies invoice ID in URL to access another vendor's invoice (`/invoices/1001` → `/invoices/1002`) | Access denied — IDOR (Insecure Direct Object Reference) protection required |
| EC-036 | User attempts SQL injection in invoice number field (e.g., `'; DROP TABLE invoices; --`) | Input is sanitized; query is not executed; no system error exposed |
| EC-037 | User submits form with JavaScript in a text field (`<script>alert('XSS')</script>`) | Input is escaped or rejected; script does not execute |
| EC-038 | Admin deletes a vendor account that has pending invoices | System should define behavior: block deletion, archive invoices, or transfer ownership |
| EC-039 | Token-based auth: user copies a valid JWT and uses it after logout | Token should be invalidated on logout (stateful invalidation or short expiry) |
| EC-040 | API endpoint called without authentication header | Returns 401 Unauthorized — not 200 or 500 |
| EC-041 | Invoice submitted with a negative amount (e.g., -$500 as a credit note) | Should be rejected — negative amounts are invalid unless credit notes are an explicitly supported feature; system must not accept negatives silently |
| EC-042 | User clicks browser Back button immediately after logging out | Session should already be invalidated; cached page should not be shown, or if shown, any action should redirect to login |
| EC-043 | AP team's email inbox is full or invalid when a new invoice is submitted | Email delivery failure is logged; system does not crash; failure is surfaced to admin or retried; invoice is still saved in Submitted state |

---

*Think. Question. Test.*
