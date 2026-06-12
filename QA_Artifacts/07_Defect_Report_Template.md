# Defect Report Template
## B2B Vendor Invoice Management Portal

**Version:** 1.0  
**Date:** June 2026

> Use this template for every defect found during testing. Consistent reporting helps developers reproduce, prioritize, and fix issues faster.

---

## Defect Report

| Field | Value |
|-------|-------|
| **Defect ID** | DEF-[XXX] (e.g., DEF-001) |
| **Title** | Brief, descriptive summary of the defect |
| **Reported By** | QA Engineer Name |
| **Reported Date** | DD-MMM-YYYY |
| **Assigned To** | Developer Name (if known) |
| **Module / Feature** | e.g., Invoice Submission / Login / Reports |
| **Requirement ID** | e.g., REQ-02 |
| **Test Case ID** | e.g., TC-009 |
| **Build / Version** | e.g., v1.2.3 |
| **Environment** | QA / Staging / UAT |

---

## Defect Classification

| Field | Value |
|-------|-------|
| **Severity** | 🔴 Critical / 🟠 High / 🟡 Medium / 🟢 Low |
| **Priority** | P1 (Immediate) / P2 (High) / P3 (Medium) / P4 (Low) |
| **Defect Type** | Functional / UI / Performance / Security / Data / Integration |
| **Status** | Open / Assigned / In Fix / Ready for Retest / Closed / Reopened |

**Severity Guide:**

| Severity | Definition |
|----------|-----------|
| Critical | Application crash, data loss, security breach, or blocker with no workaround |
| High | Major feature is broken, workaround is difficult or unavailable |
| Medium | Feature partially works; workaround exists |
| Low | Minor UI issue, cosmetic defect, or minor inconvenience |

---

## Defect Details

**Summary:**
> One sentence describing what went wrong.

**Description:**
> Detailed explanation of the defect. Include what was tested, what failed, and how it differs from expected behavior.

---

**Steps to Reproduce:**

1. [Step 1]
2. [Step 2]
3. [Step 3]
4. ...

---

**Expected Result:**
> What should have happened based on the requirement or acceptance criteria.

**Actual Result:**
> What actually happened. Be specific — include error messages, incorrect values, or screenshots.

---

## Evidence

| Type | Detail |
|------|--------|
| **Screenshot / Video** | [Attach file or paste link] |
| **Logs** | [Paste relevant error log or attach log file] |
| **Test Data Used** | e.g., Vendor: vendor_a@test.com, PO: PO-20240601 |

---

## Resolution

| Field | Value |
|-------|-------|
| **Root Cause** | [To be filled by Developer] |
| **Fix Description** | [To be filled by Developer] |
| **Fix Commit / PR** | [Link to code change] |
| **Fixed In Build** | [Version where fix was deployed] |
| **Retested By** | [QA Engineer Name] |
| **Retest Date** | DD-MMM-YYYY |
| **Retest Result** | Pass / Fail |
| **Closed Date** | DD-MMM-YYYY |

---

## Sample Filled Defect Report

| Field | Value |
|-------|-------|
| **Defect ID** | DEF-001 |
| **Title** | Invoice with amount exceeding PO value is accepted without error |
| **Reported By** | QA Engineer |
| **Reported Date** | 10-Jun-2026 |
| **Module** | Invoice Submission |
| **Requirement ID** | REQ-02 |
| **Test Case ID** | TC-009 |
| **Build** | v1.0.1 |
| **Environment** | QA |
| **Severity** | 🔴 Critical |
| **Priority** | P1 |
| **Status** | Open |

**Steps to Reproduce:**
1. Log in as a vendor with an active account
2. Navigate to "Submit Invoice"
3. Select PO-001 (PO value = $10,000)
4. Enter invoice amount = $15,000
5. Fill remaining mandatory fields and click "Submit"

**Expected Result:** System rejects the invoice with message: "Invoice amount exceeds PO value."

**Actual Result:** Invoice is accepted and status is set to "Submitted" with no validation error. Amount: $15,000 against PO of $10,000.

---

*Think. Question. Test.*
