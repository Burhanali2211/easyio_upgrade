# Codebase Fragmentation Prompts

This document contains precise prompts to fragment heavy files in the codebase for better performance, maintainability, and optimal working.

---

## 1. Admin Page (CRITICAL - 1528 lines)
**File:** `src/app/admin/page.tsx` (1528 lines)

### Fragmentation Prompt:

```
Fragment the admin page (src/app/admin/page.tsx) into smaller, maintainable components following this structure:

1. **Create component structure:**
   - `src/components/admin/AuthForm.tsx` - Extract authentication UI (lines 601-659)
   - `src/components/admin/AdminHeader.tsx` - Extract header section (lines 664-686)
   - `src/components/admin/TabNavigation.tsx` - Extract tab navigation (lines 688-714)
   - `src/components/admin/DataList.tsx` - Extract data listing component (lines 962-1092)
   - `src/components/admin/FormPanel.tsx` - Extract form panel (lines 1095-1521)
   - `src/components/admin/WebsiteSettingsForm.tsx` - Extract website settings form (lines 716-959)
   - `src/components/admin/hooks/useAdminData.ts` - Extract data fetching logic
   - `src/components/admin/hooks/useImageUpload.ts` - Extract image upload logic
   - `src/components/admin/utils/formDefaults.ts` - Extract form default values
   - `src/components/admin/types.ts` - Extract all TypeScript interfaces

2. **Extract constants:**
   - `src/components/admin/constants/iconOptions.ts` - Icon options array (lines 69-102)
   - `src/components/admin/constants/colorOptions.ts` - Color options array (lines 104-111)

3. **Extract utilities:**
   - `src/components/admin/utils/imageUtils.ts` - ImageWithFallback component and image handling
   - `src/components/admin/utils/dataTransformers.ts` - Data transformation functions

4. **Maintain exact functionality:**
   - All state management should remain in the main AdminPage component
   - Pass props down to child components
   - Keep all Supabase operations in custom hooks
   - Preserve all form validation and error handling
   - Maintain all animations and UI interactions

5. **File size targets:**
   - Main AdminPage: ~200-300 lines
   - Each component: ~100-200 lines max
   - Hooks: ~50-100 lines each
   - Utils: ~30-50 lines each

6. **Import organization:**
   - Use absolute imports (@/components/admin/...)
   - Group imports: React, Next.js, third-party, local
   - Export all components as named exports where possible

7. **Type safety:**
   - Create shared types file for all interfaces
   - Use proper TypeScript generics where needed
   - Ensure all props are properly typed

8. **Testing considerations:**
   - Each component should be independently testable
   - Hooks should be testable in isolation
   - Maintain all existing functionality without breaking changes
```

---

## 2. Our Work Component (308 lines)
**File:** `src/components/sections/our-work.tsx`

### Fragmentation Prompt:

```
Fragment the OurWork component (src/components/sections/our-work.tsx) into smaller components:

1. **Create component structure:**
   - `src/components/sections/our-work/ProjectCard.tsx` - Extract ProjectCard component (lines 30-91)
   - `src/components/sections/our-work/ProjectModal.tsx` - Extract ProjectModal component (lines 95-212)
   - `src/components/sections/our-work/OurWorkSection.tsx` - Main section wrapper
   - `src/components/sections/our-work/types.ts` - Extract Project interface

2. **Extract constants:**
   - `src/components/sections/our-work/constants.ts` - IconMap constant (lines 23-28)

3. **Maintain functionality:**
   - Keep state management (selectedProject, showAll) in main component
   - Preserve all animations and interactions
   - Maintain responsive design
   - Keep lazy loading for images

4. **File size targets:**
   - Main component: ~100-150 lines
   - ProjectCard: ~60-80 lines
   - ProjectModal: ~120-150 lines
```

---

## 3. About Page (230 lines)
**File:** `src/app/about/page.tsx`

### Fragmentation Prompt:

```
Fragment the About page (src/app/about/page.tsx) into smaller components:

1. **Create component structure:**
   - `src/components/pages/about/AboutHero.tsx` - Extract hero section (lines 38-55)
   - `src/components/pages/about/StatsGrid.tsx` - Extract stats grid (lines 58-90)
   - `src/components/pages/about/ValuesGrid.tsx` - Extract values grid (lines 93-123)
   - `src/components/pages/about/ContentSection.tsx` - Extract content sections (lines 126-207)
   - `src/components/pages/about/AboutCTA.tsx` - Extract CTA section (lines 210-222)
   - `src/components/pages/about/types.ts` - Extract types for stats and values

2. **Extract constants:**
   - `src/components/pages/about/constants.ts` - Stats and values arrays (lines 13-25)

3. **Maintain functionality:**
   - Preserve all animations (framer-motion)
   - Keep hover interactions
   - Maintain responsive design
   - Preserve image loading and effects

4. **File size targets:**
   - Main page: ~50-80 lines
   - Each component: ~40-80 lines
```

---

## 4. Our Team Page (191 lines)
**File:** `src/app/ourteam/page.tsx`

### Fragmentation Prompt:

```
Fragment the OurTeam page (src/app/ourteam/page.tsx) into smaller components:

1. **Create component structure:**
   - `src/components/pages/ourteam/TeamHero.tsx` - Extract hero section (lines 56-72)
   - `src/components/pages/ourteam/TeamGrid.tsx` - Extract team member grid (lines 85-153)
   - `src/components/pages/ourteam/TeamMemberCard.tsx` - Extract individual member card
   - `src/components/pages/ourteam/TeamCTA.tsx` - Extract CTA section (lines 155-183)
   - `src/components/pages/ourteam/hooks/useTeamData.ts` - Extract data fetching logic

2. **Extract types:**
   - `src/components/pages/ourteam/types.ts` - TeamMember interface

3. **Maintain functionality:**
   - Keep Supabase data fetching in custom hook
   - Preserve social link handling
   - Maintain loading states
   - Keep all animations

4. **File size targets:**
   - Main page: ~40-60 lines
   - TeamGrid: ~60-80 lines
   - TeamMemberCard: ~50-70 lines
   - Hook: ~30-50 lines
```

---

## 5. Navigation Component (410 lines)
**File:** `src/components/sections/navigation.tsx`

### Fragmentation Prompt:

```
Fragment the Navigation component (src/components/sections/navigation.tsx) into smaller components:

1. **Create component structure:**
   - `src/components/sections/navigation/DesktopNav.tsx` - Extract desktop navigation (lines 185-319)
   - `src/components/sections/navigation/MobileNav.tsx` - Extract mobile navigation (lines 321-402)
   - `src/components/sections/navigation/MobileHeader.tsx` - Extract mobile header (lines 321-332)
   - `src/components/sections/navigation/NetworkStats.tsx` - Extract network stats widget (lines 224-294)
   - `src/components/sections/navigation/SocialLinks.tsx` - Extract social links (lines 296-316, 380-400)
   - `src/components/sections/navigation/hooks/useNetworkStats.ts` - Extract network stats logic
   - `src/components/sections/navigation/hooks/useSocialLinks.ts` - Extract social links logic

2. **Extract constants:**
   - `src/components/sections/navigation/constants.ts` - menuItems array (lines 29-41)

3. **Extract types:**
   - `src/components/sections/navigation/types.ts` - Network stats and social links types

4. **Maintain functionality:**
   - Keep mobile menu state in main Navigation component
   - Preserve all Supabase queries in hooks
   - Maintain responsive behavior
   - Keep all animations and transitions

5. **File size targets:**
   - Main Navigation: ~80-120 lines
   - DesktopNav: ~100-130 lines
   - MobileNav: ~80-100 lines
   - NetworkStats: ~70-90 lines
   - Each hook: ~40-60 lines
```

---

## 6. Solutions Page (305 lines)
**File:** `src/app/solutions/page.tsx`

### Fragmentation Prompt:

```
Fragment the Solutions page (src/app/solutions/page.tsx) into smaller components:

1. **Create component structure:**
   - `src/components/pages/solutions/SolutionsHero.tsx` - Extract hero section (lines 204-220)
   - `src/components/pages/solutions/EngineCard.tsx` - Extract engine card (lines 114-158)
   - `src/components/pages/solutions/EnginesGrid.tsx` - Extract engines grid with loading/error states
   - `src/components/pages/solutions/CustomDevelopmentCTA.tsx` - Extract CTA section (lines 254-297)
   - `src/components/pages/solutions/hooks/useEngines.ts` - Extract data fetching logic

2. **Extract constants:**
   - `src/components/pages/solutions/constants/iconMap.ts` - IconMap (lines 51-80)
   - `src/components/pages/solutions/constants/iconColorMap.ts` - IconColorMap (lines 83-112)

3. **Extract types:**
   - `src/components/pages/solutions/types.ts` - LogicEngine interface

4. **Maintain functionality:**
   - Keep loading and error states
   - Preserve all animations
   - Maintain responsive design
   - Keep Supabase integration in hook

5. **File size targets:**
   - Main page: ~60-80 lines
   - EngineCard: ~50-70 lines
   - EnginesGrid: ~60-80 lines
   - Hook: ~30-50 lines
```

---

## 7. Contact Page (348 lines)
**File:** `src/app/contact/page.tsx`

### Fragmentation Prompt:

```
Fragment the Contact page (src/app/contact/page.tsx) into smaller components:

1. **Create component structure:**
   - `src/components/pages/contact/ContactHero.tsx` - Extract hero section (lines 112-124)
   - `src/components/pages/contact/ContactForm.tsx` - Extract form component (lines 148-257)
   - `src/components/pages/contact/ContactTypeSelector.tsx` - Extract type selector (lines 149-185)
   - `src/components/pages/contact/TerminalWidget.tsx` - Extract terminal widget (lines 260-289)
   - `src/components/pages/contact/ContactInfo.tsx` - Extract contact information (lines 291-338)
   - `src/components/pages/contact/SuccessMessage.tsx` - Extract success state (lines 128-146)
   - `src/components/pages/contact/hooks/useContactForm.ts` - Extract form logic
   - `src/components/pages/contact/hooks/useTerminal.ts` - Extract terminal animation logic

2. **Extract constants:**
   - `src/components/pages/contact/constants.ts` - contactTypes array (lines 95-99)

3. **Extract types:**
   - `src/components/pages/contact/types.ts` - ContactType and form data types

4. **Maintain functionality:**
   - Keep form state management in hook
   - Preserve terminal animation
   - Maintain all form validation
   - Keep API integration

5. **File size targets:**
   - Main page: ~50-70 lines
   - ContactForm: ~80-100 lines
   - TerminalWidget: ~40-60 lines
   - Each hook: ~40-60 lines
```

---

## 8. Website Settings API Route (214 lines)
**File:** `src/app/api/website-settings/route.ts`

### Fragmentation Prompt:

```
Fragment the website settings API route (src/app/api/website-settings/route.ts) into smaller modules:

1. **Create module structure:**
   - `src/lib/api/website-settings/db.ts` - Extract database client and connection logic (lines 5-27)
   - `src/lib/api/website-settings/schema.ts` - Extract table creation and schema logic (lines 29-90)
   - `src/lib/api/website-settings/queries.ts` - Extract query functions (GET operations)
   - `src/lib/api/website-settings/mutations.ts` - Extract mutation functions (POST operations)
   - `src/lib/api/website-settings/errors.ts` - Extract error handling utilities

2. **Refactor route handlers:**
   - Keep GET and POST handlers in main route file
   - Import functions from modules
   - Maintain error handling structure
   - Keep response format consistent

3. **Maintain functionality:**
   - Preserve all database operations
   - Keep table creation logic
   - Maintain error handling
   - Preserve transaction safety

4. **File size targets:**
   - Main route: ~60-80 lines
   - Each module: ~40-60 lines
```

---

## General Fragmentation Guidelines

### Best Practices for All Fragments:

1. **Component Organization:**
   - Group related components in folders
   - Use index.ts files for clean imports
   - Follow consistent naming conventions

2. **State Management:**
   - Keep shared state in parent components
   - Use custom hooks for complex logic
   - Minimize prop drilling

3. **Performance:**
   - Use React.memo for expensive components
   - Implement lazy loading where appropriate
   - Optimize re-renders with useMemo/useCallback

4. **Type Safety:**
   - Create shared type files
   - Use TypeScript strictly
   - Export types from index files

5. **Testing:**
   - Each component should be independently testable
   - Hooks should be testable in isolation
   - Maintain test coverage

6. **Code Splitting:**
   - Use dynamic imports for heavy components
   - Implement route-based code splitting
   - Lazy load non-critical components

7. **Import Optimization:**
   - Use absolute imports consistently
   - Group imports logically
   - Remove unused imports

---

## Implementation Order (Recommended)

1. **Priority 1 (Critical):**
   - Admin Page (1528 lines) - Most complex, highest impact

2. **Priority 2 (High):**
   - Navigation Component (410 lines)
   - Contact Page (348 lines)
   - Our Work Component (308 lines)

3. **Priority 3 (Medium):**
   - Solutions Page (305 lines)
   - About Page (230 lines)
   - Our Team Page (191 lines)

4. **Priority 4 (Low):**
   - Website Settings API Route (214 lines)

---

## Notes

- All fragments should maintain 100% functional parity
- No breaking changes to existing APIs
- Preserve all animations and interactions
- Maintain responsive design
- Keep all TypeScript types strict
- Follow existing code style and patterns
- Test each fragment independently before integration

