# Risk Register — B2B Vendor Invoice Management Portal

**Version:** 1.0  
**Date:** June 2026

> **Risk Rating:** Likelihood (1–5) × Impact (1–5) = Risk Score  
> **Priority:** Critical (15–25) | High (10–14) | Medium (5–9) | Low (1–4)

---

## Risk Matrix

| Risk ID | Risk Description | Category | Likelihood | Impact | Score | Priority | Owner | Mitigation Strategy |
|---------|-----------------|----------|-----------|--------|-------|----------|-------|---------------------|
| RSK-001 | Concurrent approvals cause double payment | Functional | 3 | 5 | 15 | **Critical** | Dev Lead | Implement optimistic locking or mutex on invoice approval; test concurrent approval TC (EC-023) |
| RSK-002 | IDOR vulnerability allows vendor to access another vendor's invoices | Security | 4 | 5 | 20 | **Critical** | Dev Lead | Enforce server-side authorization on every API call; test EC-035 |
| RSK-003 | SQL injection via invoice/search fields | Security | 3 | 5 | 15 | **Critical** | Dev Lead | Use parameterized queries / ORM; input validation; test EC-036 |
| RSK-004 | Payment forwarding silently fails without alerting anyone | Integration | 3 | 5 | 15 | **Critical** | Dev Lead | Implement retry logic + alerting; test TC-020 |
| RSK-005 | No audit trail for financial actions — compliance violation | Compliance | 2 | 5 | 10 | **High** | BA / Dev Lead | Implement immutable audit log; test TC-033 |
| RSK-006 | Duplicate invoice processed and paid twice | Functional | 3 | 4 | 12 | **High** | Dev Lead | Enforce unique invoice number per vendor; test TC-010 |
| RSK-007 | Vendor data leakage in monthly reports | Security | 2 | 4 | 8 | **Medium** | QA Lead | Scope reports by authenticated vendor ID; test TC-027 |
| RSK-008 | XSS via user-controlled fields (names, notes) in email notifications | Security | 3 | 3 | 9 | **Medium** | Dev Lead | HTML encode all user input in email templates; test EC-030 |
| RSK-009 | Session tokens not invalidated on logout | Security | 3 | 3 | 9 | **Medium** | Dev Lead | Implement server-side session invalidation; test EC-039, EC-042 |
| RSK-010 | Zero-value or negative invoices submitted | Functional | 2 | 3 | 6 | **Medium** | QA Engineer | Server-side validation: invoice amount must be > 0; test EC-009, EC-041 |
| RSK-011 | File upload used as vector for malicious files | Security | 2 | 4 | 8 | **Medium** | Dev Lead | Restrict file types server-side (not just client-side); scan uploads; test TC-011 |
| RSK-012 | Report generation times out for high-volume vendors | Performance | 2 | 3 | 6 | **Medium** | Dev Lead | Async report generation with download link; test EC-033 |
| RSK-013 | Email notification service outage causes silent failures | Integration | 2 | 3 | 6 | **Medium** | Dev Lead | Queue-based email delivery with retry; log all failures; test EC-028, EC-043 |
| RSK-014 | Multi-currency invoice amounts calculated incorrectly | Functional | 2 | 4 | 8 | **Medium** | BA / Dev Lead | Define currency handling policy; validate amounts in base currency; add currency-specific test cases |
| RSK-015 | Unauthenticated API endpoints expose data | Security | 2 | 5 | 10 | **High** | Dev Lead | API security review; test EC-040; verify all endpoints require valid auth token |
| RSK-016 | Account lockout not implemented, allowing brute force | Security | 3 | 3 | 9 | **Medium** | Dev Lead | Implement and test lockout policy; test TC-004 |
| RSK-017 | Admin deletes vendor with pending invoices causing data orphans | Data Integrity | 2 | 3 | 6 | **Medium** | Dev Lead | Define and implement deletion policy (block, archive, or reassign); test EC-038 |
| RSK-018 | Requirements misunderstood due to lack of clarifications | Process | 3 | 4 | 12 | **High** | BA / QA Lead | Clarifying questions submitted before design (see `01_Clarifying_Questions.md`) |
| RSK-019 | QA environment instability causes false test failures | Environment | 2 | 2 | 4 | **Low** | QA Lead | Maintain dedicated stable staging environment; track environment incidents separately |
| RSK-020 | GDPR non-compliance — vendor PII stored without consent | Compliance | 2 | 5 | 10 | **High** | BA / Project Manager | Confirm data retention and consent requirements with client; include in clarifying questions |

---

## Top 5 Risks to Monitor Closely

| Rank | Risk | Why It's Top Priority |
|------|------|-----------------------|
| 1 | RSK-002 — IDOR Vulnerability | Direct financial and data privacy impact |
| 2 | RSK-001 — Concurrent Double Payment | Could cause financial loss with no rollback |
| 3 | RSK-004 — Silent Payment Forwarding Failure | Invoice approved but never paid — hidden until vendor escalates |
| 4 | RSK-003 — SQL Injection | Could compromise entire database |
| 5 | RSK-015 — Unauthenticated API Endpoints | Bypasses all UI-level security |

---

*Think. Question. Test.*
