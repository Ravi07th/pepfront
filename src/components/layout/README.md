# Layout System Documentation

## Overview

The new layout system provides a flexible and organized way to manage header and footer across the application. It includes context-based state management and responsive design utilities.

## Components

### Layout
The base layout component that wraps content with optional header and footer.

```tsx
import { Layout } from './components/layout';

<Layout showHeader={true} showFooter={true}>
  <YourContent />
</Layout>
```

### PageLayout
A higher-level component that provides different layout variants.

```tsx
import { PageLayout } from './components/layout';

// Available variants:
// - 'default': Header + Footer
// - 'full': Header + Footer (same as default)
// - 'content-only': No header, no footer
// - 'minimal': Header only, no footer

<PageLayout variant="full">
  <YourPageContent />
</PageLayout>
```

## Layout Variants

### `default` / `full`
- Shows both header and footer
- Best for regular pages

### `content-only`
- No header or footer
- Perfect for exam interfaces, modals, or immersive experiences

### `minimal`
- Header only, no footer
- Good for landing pages or focused content

## Context System

The layout system uses React Context for state management:

```tsx
import { useLayoutContext } from '../contexts/LayoutContext';

const MyComponent = () => {
  const { variant, setVariant, showHeader, showFooter, isMobile } = useLayoutContext();
  
  // Use layout state
};
```

## Responsive Utilities

The layout system provides responsive breakpoint detection:

```tsx
const { isMobile, isTablet, isDesktop } = useLayoutContext();
```

## Usage Examples

### Basic Page
```tsx
<PageLayout variant="full">
  <YourPageContent />
</PageLayout>
```

### Exam Interface (No Header/Footer)
```tsx
<PageLayout variant="content-only">
  <ExamInterface />
</PageLayout>
```

### Landing Page (Header Only)
```tsx
<PageLayout variant="minimal">
  <LandingPage />
</PageLayout>
```

### Custom Layout
```tsx
<Layout showHeader={false} showFooter={true}>
  <CustomContent />
</Layout>
```

## Benefits

1. **Consistent Layout**: All pages use the same layout system
2. **Flexible**: Easy to change layout per page
3. **Responsive**: Built-in responsive utilities
4. **Context-Based**: State management across components
5. **Type Safe**: Full TypeScript support
6. **Maintainable**: Centralized layout logic

## Migration from Old System

Replace manual header/footer inclusion:

```tsx
// Old way
<>
  <Header />
  <YourContent />
  <Footer />
</>

// New way
<PageLayout variant="full">
  <YourContent />
</PageLayout>
``` 