# Migration procedure

1. Pin any historical `ores-shell` use to an immutable commit before changing behavior.
2. Classify the responsibility instead of copying the old bundle wholesale.
3. Move fleet governance/CLI behavior to `ORESoftware/ores-cli`.
4. Move reusable GitHub Actions/CI orchestration to `ORESoftware/ores-gha-workflows`.
5. Move provider- or environment-specific deployment logic to the owning product's `*-infra` repository.
6. Keep one-off local helpers local unless they satisfy a reviewed shared-library boundary.
7. Remove the legacy dependency only after replacement behavior is tested in the consumer.

Compatibility changes in this repository are limited to security and reproducibility fixes. Historical commits and tags remain preserved.
