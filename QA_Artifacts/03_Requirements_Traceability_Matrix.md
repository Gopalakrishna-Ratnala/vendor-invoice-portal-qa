# Requirements Traceability Matrix (RTM)
## B2B Vendor Invoice Management Portal

**Version:** 1.0  
**Date:** June 2026

> **Purpose:** Maps each business requirement to its corresponding test cases. Ensures 100% test coverage across all requirements.

---

| Req ID | Requirement Description | Test Case IDs | Status |
|--------|------------------------|---------------|--------|
| REQ-01 | Vendors can register and log in to the portal | TC-001, TC-002, TC-003, TC-004, TC-005, TC-006, TC-036, TC-037 | Designed |
| REQ-02 | Vendors can submit invoices against purchase orders | TC-007, TC-008, TC-009, TC-010, TC-011, TC-012, TC-013, TC-038 | Designed |
| REQ-03 | AP team can view, approve, or reject invoices | TC-014, TC-015, TC-016, TC-017, TC-018 | Designed |
| REQ-04 | Approved invoices are forwarded for payment processing | TC-019, TC-020, TC-021 | Designed |
| REQ-05 | Both parties receive email notifications on status changes | TC-022, TC-023, TC-024, TC-025, TC-034, TC-035 | Designed |
| REQ-06 | System generates monthly invoice activity reports | TC-026, TC-027, TC-028 | Designed |
| REQ-07 | Only authorized users may access the system | TC-029, TC-030, TC-031, TC-032, TC-033 | Designed |

---

## Coverage Summary

| Requirement | Test Cases Mapped | Coverage |
|-------------|-------------------|----------|
| REQ-01 | 8 (incl. TC-036, TC-037 — Password Reset) | ✅ Covered |
| REQ-02 | 8 (incl. TC-038 — Invoice History) | ✅ Covered |
| REQ-03 | 5 | ✅ Covered |
| REQ-04 | 3 | ✅ Covered |
| REQ-05 | 6 (incl. TC-034, TC-035 — AP notifications) | ✅ Covered |
| REQ-06 | 3 | ✅ Covered |
| REQ-07 | 5 | ✅ Covered |
| **Total** | **38** | **100%** |

---

## Traceability Notes

- Each test case is tagged with its requirement ID in `04_Test_Cases.md`
- Edge cases in `05_Edge_Cases.md` supplement but do not replace the test cases above
- If any requirement changes post-clarification, the corresponding test case IDs must be reviewed and updated

---

*Think. Question. Test.*
