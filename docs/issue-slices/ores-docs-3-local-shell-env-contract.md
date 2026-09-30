# local shell env/enc integration

Driver: `ORESoftware/ores-docs#3`

This document is a bounded review contract for one slice of the driver issue. It is intentionally mergeable independently and does **not** claim the parent issue is fully implemented.

## Invariants

- Shell helpers consume the canonical ores-sops renderer instead of implementing a second dotenv precedence model.
- Local profile composition must not grant access to stage/prod ciphertext by implication.
- Secret values are never echoed while diagnostics may report key names and provenance.
- Cleanup must remove decrypted runtime files on normal exit and failure paths.

## Verification

- Review the exact PR head, not a synthetic or stale revision.
- Run the repository's normal format/lint/test/conformance gates that touch this boundary.
- Treat skipped or zero-step CI as missing evidence.
- Preserve existing public behavior unless the driver issue explicitly authorizes a breaking change.

## Non-goals

This slice does not add credentials, bypass branch protection, or declare the broader fleet rollout complete.
