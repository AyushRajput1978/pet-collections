# AI Prompt Log

This file documents the prompts and requests used with AI tools during the development of this React and TypeScript take-home project. The goal was to use AI as a development assistant while keeping implementation decisions, project direction, and final review grounded in front-end engineering judgment.

## Initial Build Prompt

I asked the AI assistant to create a front-end project for the following take-home challenge:

> Build a React and TypeScript front-end that displays a list of pet images from a `GET /pets` endpoint. Each pet should include an image URL, title, description, and creation date. The UI should present these images and their related data in a compelling and interactive way.
>
> Requirements included:
>
> - Fetch pet data from `/pets` using `fetch`.
> - Display a searchable, sortable image gallery.
> - Allow users to select multiple images and download them.
> - Show selected item count and estimated total file size.
> - Support Select All and Clear Selection.
> - Sort by name A-Z, name Z-A, newest first, and oldest first.
> - Filter displayed images by title or description.
> - Use `styled-components` for UI styling.
> - Use `react-router-dom` for routes, including a pet detail view at `/pets/:id`.
> - Add an About page and any other useful pages.
> - Create a custom hook for loading and managing data.
> - Explicitly handle loading, error, and empty states.
> - Manage global and local state effectively.
> - Preserve selection state when navigating between routes.
> - Implement pagination or infinite scroll.
> - Make the gallery responsive: 1 column on mobile, 2 on tablet, and 4 on desktop.
> - Document code where helpful.

## Styling Structure Prompt

After the initial implementation, I asked the AI assistant to improve the styling architecture:

> Instead of writing styled-components inside the same component file, separate styles into dedicated style modules that can be imported into the components.

This led to a structure where component and page styling lives in sibling files such as:

```text
src/components/PetCard.tsx
src/components/PetCard.styles.ts

src/pages/GalleryPage.tsx
src/pages/GalleryPage.styles.ts
```

The project still uses `styled-components`, as required by the challenge, but the component files are cleaner and easier to review.

## UI Refinement Prompts

I then used AI assistance to iterate on the visual design and usability of the interface.

### Pet Card Design

Prompt:

> Optimize the pet card to give it a more modern and premium view.

Follow-up prompt:

> Make the card look like a premium image card with a full image background, dark gradient overlay, rounded corners, title, description, metadata chips, and clear actions.

Further refinement:

> The card content is overlapping. Restore the floating select/remove icon button, add proper gaps between cards, allow individual image downloads, and use clear view text for the detail action.

This resulted in a more polished gallery card with:

- Full-bleed image presentation.
- Gradient overlay for readable text.
- Floating selection button.
- Individual image download action.
- Detail navigation button.
- Improved spacing in the responsive grid.

### Detail Page Image Behavior

Prompt:

> On the pet detail page, give the image a fixed size. It should not take space based on the natural image dimensions. Different image orientations should behave consistently.

Follow-up prompt:

> The image is now cropped too aggressively. Keep synchronization, but show the image properly.

Final refinement:

> Fill the empty space of the image container to give the feeling of the complete image.

This led to a synchronized detail image layout using:

- A fixed responsive image frame.
- A foreground image with `object-fit: contain`.
- A blurred background copy using `object-fit: cover` to fill empty space.

### About Page Design

Prompt:

> Improve the UI of the About page.

The About page was redesigned with:

- A stronger intro section.
- A metrics panel.
- A polished feature grid.
- A short workflow/implementation summary.

## Component Reuse Prompt

I also asked the AI assistant to optimize the component architecture:

> Optimize the components by reusing components or sections wherever possible.

This resulted in reusable components for repeated UI patterns:

```text
src/components/PageIntro.tsx
src/components/PetGrid.tsx
src/components/DetailPhoto.tsx
src/components/FactCard.tsx
```

These components reduced duplication across the gallery, selected pets page, and pet detail page.

## Documentation Prompt

Finally, I asked the AI assistant to create this file:

> Create a `PROMPTS.md` file in the root of the repository containing a log of the messages sent to AI tools during development. Use the prompts provided, but polish and organize the content so it is suitable for presenting with a front-end developer take-home project.

## Notes On AI Usage

AI was used as a pair-programming and iteration assistant for:

- Project scaffolding and implementation planning.
- UI structure and styling iteration.
- Component extraction and reuse opportunities.
- Documentation cleanup.

The final project decisions were guided by the take-home requirements, front-end maintainability, responsive design behavior, and user experience polish.
