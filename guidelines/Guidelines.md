# Loofio Cares Website Guidelines

## Mobile-First Design Requirements

This website MUST be mobile-friendly first and work flawlessly on all mobile devices, especially phones and iOS devices.

### Mobile-First Principles:
* Design for mobile screens first (320px and up), then progressively enhance for larger screens
* All touch targets must be at least 44px × 44px for iOS accessibility
* Text must be readable without zooming (minimum 16px base font size on mobile)
* Images must be optimized and responsive
* Animations must perform smoothly on mobile devices
* Navigation and interactive elements must be thumb-friendly
* Test on actual iOS and Android devices when possible
* Use mobile-first Tailwind classes (default styles for mobile, then use md:, lg: breakpoints for larger screens)

### Responsive Breakpoints:
* Mobile: Default (up to 768px)
* Tablet: md: (768px and up)
* Desktop: lg: (1024px and up)
* Large Desktop: xl: (1280px and up)

### Performance:
* Minimize bundle size for faster mobile load times
* Use lazy loading for images
* Optimize animations to not drain battery
* Avoid layout shifts that affect mobile UX

## General Guidelines

* Only use absolute positioning when necessary. Opt for responsive and well-structured layouts that use flexbox and grid by default
* Keep file sizes small and put helper functions and components in their own files
* Use semantic HTML elements
* Ensure all interactive elements are accessible

## Design System

* Use emerald green as the primary brand color
* Maintain clean, minimal aesthetic with purposeful whitespace
* Use smooth, subtle animations that enhance rather than distract
* Font sizes should scale appropriately from mobile to desktop

<!--
System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->