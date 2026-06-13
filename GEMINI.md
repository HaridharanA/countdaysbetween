## CRITICAL CSS RULES - NEVER BREAK THESE

### Text Wrapping Fix
This project has a known CSS variable conflict. The @theme block in global.css uses custom spacing variables (--space-2xl, --space-3xl etc.) that previously conflicted with Tailwind's max-width utilities.

EVERY TIME you create a new component or page:
1. NEVER use max-w-2xl, max-w-3xl, max-w-4xl as standalone classes - they may resolve to tiny px values
2. ALWAYS use inline style="max-width:600px" or style="max-width:800px" for content width constraints
3. ALWAYS add width:100% to text containers
4. NEVER wrap text in flex-col containers without adding width:100% to children
5. NEVER use text-center on a parent div that contains paragraphs - it collapses width
6. For any new section, always start with: <div style="width:100%; max-width:800px; margin:0 auto;">

### Game Pages
For fullscreen game pages, NEVER use Layout.astro - create standalone HTML pages with their own html/head/body tags.
