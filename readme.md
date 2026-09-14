# ores-shell

> **Lifecycle: legacy / compatibility-only.** This repository is not a current fleet architecture authority and must not receive new feature work or new mutable dependencies.

`ores-shell` contains older shell, TypeScript/RxJS, Go, and cloud-operation utilities. Historical commits remain available for reproducibility, but new shared automation should be placed in the current owning boundary rather than extending this repository.

## Where new work belongs

- Fleet governance and CLI behavior: `ORESoftware/ores-cli`.
- Shared CI/CD automation: `ORESoftware/ores-gha-workflows`.
- Provider- or environment-specific deployment logic: the owning product's `*-infra` repository.
- One-off local shell helpers: keep them local to the consumer unless they satisfy a reviewed shared-library boundary.

There is no declared drop-in successor for the historical package. Migration is intentionally by responsibility rather than by copying the repository wholesale.

## Compatibility policy

Existing consumers may stay on immutable commit pins while migrating. New branch references, moving tags, Git dependencies, or submodules pointing here are forbidden unless a reviewed legacy exception is recorded. Compatibility changes are limited to security and reproducibility fixes; new functionality belongs in the current owner.

The machine-readable policy is [`LIFECYCLE.json`](./LIFECYCLE.json). Run `npm run validate:lifecycle` to ensure package metadata and this document still agree with it.

## Consumer inventory

A fleet search on 2026-09-14 found no active ORESoftware dependency on `ores-shell` outside this repository and organization/catalog metadata. If a consumer is discovered later, record the repository plus immutable revision in `LIFECYCLE.json` before changing compatibility code.

## Retirement criterion

Archive-only treatment is appropriate once there are no mutable fleet dependencies, no compatibility fix has been required for 180 days, and useful surviving automation has an explicit home in `ores-cli`, `ores-gha-workflows`, or the relevant product `*-infra` repository. Preserve history and historical artifacts.
