# Recipe page

My solution to the [Recipe page](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://recipe-page.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/recipe-page

## Built with

- Next.js 16, App Router, static
- React 19 and TypeScript
- Tailwind CSS v4
- Young Serif and Outfit via `next/font`

## Notes

The hero keeps one aspect ratio at every breakpoint, so it uses `next/image` with
`width`/`height` rather than `fill`. I reached for `fill` first and spent a while
fighting it before realising I only needed it for cropping, which this image never does.

Without a `sizes` prop Next was handing every device the 1920w variant. The list is
first-match-wins, so it runs largest to smallest, and the breakpoints match where the
layout actually changes:

```tsx
sizes = "(min-width: 1024px) 41rem, (min-width: 768px) 33.5rem, 100vw";
```

It's the LCP image, so it gets `priority`.

I originally wrapped the image in a `<figure>` with the `<h1>` and intro inside
`<figcaption>`. That's not what a caption is. The heading is the page's own content, not
a description of the photo, so the wrapper came out and the three sit as siblings.

Style-guide type presets are `@utility` classes, which compose with variant prefixes
(`sm:text-preset-1`) the way a `@layer components` class doesn't.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
