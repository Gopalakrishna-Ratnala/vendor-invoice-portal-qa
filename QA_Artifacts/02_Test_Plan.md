# Test Plan — B2B Vendor Invoice Management Portal

**Version:** 1.0  
**Prepared By:** QA Engineer  
**Date:** June 2026  
**Project:** B2B Vendor Invoice Management Portal

---

## 1. Introduction

This Test Plan defines the QA strategy, scope, approach, resources, and schedule for testing the B2B Vendor Invoice Management Portal. The system enables vendors to submit invoices against purchase orders, allows an AP team to approve or reject them, and automates downstream payment forwarding with notifications and reporting.

---

## 2. Objectives

- Validate that all 7 functional requirements are implemented correctly
- Ensure the system is secure and accessible only to authorized users
- Verify data integrity across invoice submission, approval, and payment forwarding
- Confirm email notifications are triggered correctly on status changes
- Validate report accuracy and access control

---

## 3. Scope

### In Scope

| Area | Details |
|------|---------|
| Functional Testing | All 7 requirements |
| Negative Testing | Invalid inputs, unauthorized access, duplicate submissions |
| Boundary Value Testing | Invoice amounts, date ranges, file sizes |
| Integration Testing | Email notification service, payment processing forwarding |
| Security Testing | Authentication, authorization, session management, role enforcement |
| UI Testing | Portal usability across key workflows |
| Regression Testing | Re-testing after defect fixes |

### Out of Scope

- Performance / Load testing (to be covered in a separate phase)
- Downstream payment system internal logic
- Mobile app (if not part of current release)
- Third-party ERP system testing

---

## 4. Test Types

| Test Type | Purpose |
|-----------|---------|
| Smoke Testing | Verify basic navigation and core flows after each build |
| Functional Testing | Verify each requirement works as specified |
| Negative Testing | Verify system handles invalid/unexpected inputs gracefully |
| Integration Testing | Verify data flows correctly between portal, email service, and payment system |
| Security Testing | Verify role enforcement, session timeouts, and unauthorized access prevention |
| Regression Testing | Ensure new changes do not break existing functionality |
| UAT (User Acceptance Testing) | Final sign-off by client/stakeholders |

---

## 5. Test Environment

| Parameter | Details |
|-----------|---------|
| Environment | QA / Staging environment (separate from Production) |
| Browser Support | Chrome (latest), Firefox (latest), Edge (latest) |
| Test Data | Synthetic vendor accounts, POs, and invoices — no production data |
| Email Testing | Use a test inbox (e.g., Mailinator or dedicated QA mailbox) |
| API Testing | Postman collections for all API endpoints |

---

## 5a. Tools & Test Management

| Tool | Purpose |
|------|---------|
| **JIRA / Azure DevOps** | Defect tracking and project management |
| **TestRail / Zephyr** | Test case management, execution tracking, and test run reporting |
| **Postman** | API functional and security testing |
| **Selenium / Playwright** | UI regression automation (future phase) |
| **Mailinator / QA Mailbox** | Email notification verification |
| **Browser DevTools** | Network request inspection, session/cookie testing |
| **Git / GitHub** | Version control for all QA artifacts |
| **Mock Server (WireMock / Postman Mock)** | Simulate payment processing system for integration tests |

---

## 5b. Test Schedule

| Phase | Activity | Estimated Duration |
|-------|----------|--------------------|
| Phase 1 | Requirement analysis + clarifying questions | 2 days |
| Phase 2 | Test plan + test case design | 3 days |
| Phase 3 | Test environment setup + test data preparation | 1 day |
| Phase 4 | Test execution (functional, security, integration) | 5 days |
| Phase 5 | Defect reporting + retest cycles | 3 days |
| Phase 6 | UAT support + sign-off | 2 days |
| **Total** | | **~16 business days** |

> Note: Schedule assumes clarifications are received within 2 days of submission. Delays in environment setup or requirement changes will impact the timeline.

---

## 6. Entry Criteria

- All 7 requirements are documented and clarifications are received
- Application is deployed to QA environment and smoke test passes
- Test data (vendor accounts, POs) is set up
- Test cases are reviewed and approved

---

## 7. Exit Criteria

- All High and Critical test cases executed
- Zero open Critical/High severity defects
- All blocking defects resolved and re-tested
- Test summary report signed off by stakeholders
- Traceability matrix confirms 100% requirement coverage

---

## 8. Test Deliverables

| Deliverable | Description |
|-------------|-------------|
| Clarifying Questions | Ambiguities raised before test design |
| Requirements Traceability Matrix (RTM) | Maps requirements to test cases |
| Test Cases | Detailed functional test cases |
| Edge Cases | Boundary and negative test scenarios |
| Defect Reports | Logged using standard defect template (`07_Defect_Report_Template.md`) |
| Test Summary Report | Final pass/fail metrics and sign-off (`08_Test_Summary_Report_Template.md`) |

---

## 9. Roles & Responsibilities

| Role | Responsibility |
|------|---------------|
| QA Engineer | Test design, execution, defect logging |
| QA Lead | Test plan review, metrics, sign-off |
| Developer | Defect fixes, support for environment issues |
| Business Analyst | Requirement clarification, UAT support |
| Client / Stakeholder | UAT execution, final sign-off |

---

## 10. Defect Management

- Defects logged using the standard Defect Report Template (see `07_Defect_Report_Template.md`)
- Severity levels: **Critical, High, Medium, Low**
- Priority levels: **P1 (Immediate), P2 (High), P3 (Medium), P4 (Low)**
- Defect lifecycle: Open → Assigned → In Fix → Ready for Retest → Closed / Reopened

---

## 11. Risk & Mitigation

| Risk | Mitigation |
|------|-----------|
| Unstable QA environment | Maintain a separate stable staging environment |
| Unclear requirements | Raise clarifying questions before test design (see `01_Clarifying_Questions.md`) |
| Integration with payment system unavailable | Use mocks/stubs for payment API during testing |
| Email delivery delays in testing | Use dedicated QA mailbox with real-time monitoring |
| Scope creep | Change requests must go through formal sign-off before test scope expands |

---

*Think. Question. Test.*
