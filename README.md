# QA Assignment — B2B Vendor Invoice Management Portal

## Overview

This repository contains the complete QA deliverables for the **B2B Vendor Invoice Management Portal** assignment, based on the QA Excellence training module.

The portal enables vendors to submit invoices against purchase orders, and allows an AP (Accounts Payable) team to approve or reject them, with email notifications and monthly reporting.

---

## Repository Structure

```
vendor-invoice-portal-qa/
│
├── README.md                          ← This file
├── 01_Clarifying_Questions.md         ← Ambiguous requirements + client questions
│
└── QA_Artifacts/
    ├── 02_Test_Plan.md                ← Overall QA strategy and scope
    ├── 03_Requirements_Traceability_Matrix.md  ← Requirement ↔ Test Case mapping
    ├── 04_Test_Cases.md               ← Detailed test cases (functional)
    ├── 05_Edge_Cases.md               ← Edge and boundary condition tests (43 scenarios)
    ├── 06_Risk_Register.md            ← Identified risks, scores, owners, and mitigations
    ├── 07_Defect_Report_Template.md   ← Standard template for logging defects
    └── 08_Test_Summary_Report_Template.md ← Final sign-off report template
```

---

## Assignment Requirements

| # | Requirement |
|---|-------------|
| 1 | Vendors can register and log in to the portal |
| 2 | Vendors can submit invoices against purchase orders |
| 3 | AP team can view, approve, or reject invoices |
| 4 | Approved invoices are forwarded for payment processing |
| 5 | Both parties receive email notifications on status changes |
| 6 | System generates monthly invoice activity reports |
| 7 | Only authorized users may access the system |

---

## Approach

1. **Requirement Analysis** — Identified ambiguous requirements and raised clarifying questions before designing tests.
2. **Test Planning** — Defined scope, test types, entry/exit criteria, and tools.
3. **Traceability** — Every requirement is mapped to at least one test case.
4. **Test Design** — Functional test cases + edge/boundary cases covering happy paths, negative paths, and security.
5. **Risk Assessment** — Identified hidden risks with mitigation strategies.
6. **Defect Management** — Standard defect logging template for consistent reporting.

---

## Tools & References

- **QA Concepts**: Defect Density, Escape Rate, Severity vs Priority, Pesticide Paradox
- **Test Design Techniques**: Equivalence Partitioning, Boundary Value Analysis, Decision Tables
- **Automation candidates**: Selenium / Playwright (UI), Postman (API)
- **Framework reference**: ISTQB Foundation Level

---

*Assignment based on QA Excellence training — Think. Question. Test.*
