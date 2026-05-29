# Case Study Sanitization Summary

## Overview
All Federal Reserve Bank case studies have been sanitized to remove potentially sensitive information while preserving all technical content and achievements.

## Changes Made

### 1. mpls-design-system/page.mdx
**Removed:**
- `@mpls-ds/uswds-mpls` package name → "Enterprise USWDS Library"
- "Minneapolis Federal Reserve Bank" → "Large Financial Institution"
- "LMSO and TRIM themes" → "Theme A/Theme B" or "multi-brand themes"
- "GitLab CI/CD" → "Automated CI/CD"
- "Artifactory" → "Package registry"
- Specific attribution line at end

**Kept:**
- All technical architecture details
- All metrics (60+ components, 4+ applications, etc.)
- All code examples
- All technical achievements
- WCAG compliance details
- USWDS references (public standard)

### 2. trim-design-system/page.mdx
**Removed:**
- "ux-lib-uswds-react" → "Enterprise React Component Library"
- "Federal Reserve Bank of Minneapolis" → "Large financial institution"
- "GitLab" references → Generic "repository" or "internal"
- "Artifactory" → "package registry"

**Kept:**
- All component details
- All technical implementation
- All architecture decisions
- Scale metrics (50+ components, 10+ applications)
- Testing strategies

### 3. uxdc-design-system/page.mdx
**Removed:**
- "Federal Reserve Bank" → "Large Financial Institution"
- "CRM (Credit Risk Management)" → "Brand A" or "Risk management applications"
- "STAR" → "Brand B" or "Supervisory applications"
- "LMSO" and "TRIM" → Generic brand references
- Specific color hex codes for brands → Generic descriptions
- "GitLab" references → "Internal repository"
- Attribution line at end

**Kept:**
- All technical architecture (Angular 21, Material Design 3)
- Design token pipeline details
- All component counts and metrics
- All code examples
- Architecture diagrams
- Development workflow
- Lessons learned

### 4. components/sections/work.tsx
**Updated card titles:**
- "UXDC Design System" → "Enterprise Angular Design System"
- "USWDS MPLS Design System" → "Enterprise USWDS Design System"
- "TRIM Design System" → "Enterprise React Component Library"
- "Federal Reserve Bank" → "financial institution"

## What Remains Safe

### Public Information
- USWDS (U.S. Web Design System) - public standard
- WCAG 2.1 AA compliance - public requirement
- General financial institution context
- Technology stack (all public tools)

### Technical Content
- Architecture decisions and rationale
- Code examples (sanitized of internal names)
- Testing strategies
- Performance optimizations
- Component categories and counts
- Design token architecture
- CI/CD concepts (not specific tooling)

### Professional Achievements
- Leadership role
- Scope of work (component counts, user counts)
- Impact metrics (development speed improvements, etc.)
- Technical expertise demonstrated
- Problem-solving approach

## Policy Compliance

### ✅ Safe to Include
- General enterprise/financial institution references
- Public standards (USWDS, WCAG, Material Design)
- Technical concepts and architecture
- Generic metrics and improvements
- Technology stack (all public tools)

### ❌ Removed
- Specific organization names (Minneapolis Federal Reserve Bank)
- Internal package names (@mpls-ds/uswds-mpls)
- Internal application names (CRM, STAR, LMSO, TRIM)
- Internal tooling (GitLab, Artifactory)
- Attribution lines explicitly mentioning the Fed

## Interview Guidance

When discussing these projects in interviews:
1. You can provide more specific details under NDA
2. Reference "financial institution" or "large enterprise"
3. Focus on technical achievements and problem-solving
4. Emphasize scale, compliance, and impact
5. Offer to discuss specifics in confidence if appropriate

## Result

Your portfolio now showcases impressive enterprise design system work while protecting your employer's confidentiality. All technical value and your achievements remain fully intact.
