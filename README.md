# Game Design Portfolio

A static portfolio site, currently focused on Daggerheart homebrew design
work (a class, subclass, domain card, and the Sanctums downtime system),
with stub pages for Legends of Runeterra and League of Legends projects.

## Structure

```
index.html            Home page
daggerheart.html       Main Daggerheart showcase (class/subclass/domain card)
sanctums.html           The Sanctums downtime system, on its own page
runeterra.html          Placeholder for LoR card work
leagueoflegends.html    Placeholder for LoL champion concepts
css/styles.css          All shared styles
js/script.js            Nav toggle + scroll reveal
```

## Before you publish

- Replace `[Your Name]` in every page's `<title>`, nav brand, and footer.
- Replace `mailto:you@example.com` with your real contact info, and the
  GitHub footer link with your actual GitHub profile.
- Swap the placeholder Daggerheart content (Warden class, Bonecarver
  subclass, Ashen Ward domain card, Sanctums text) with your real designs —
  everything is written in plain HTML inside `daggerheart.html` and
  `sanctums.html`, following the same `.showcase` section pattern, so you
  can copy a section and edit the text/values in place.
- Add real artwork if you have it — swap the `.domain-card` / `.feature-stack`
  mockups for `<img>` tags where you'd rather show actual art.

## Deploying with GitHub Pages

1. Create a **public** GitHub repository (GitHub Pages requires a public
   repo unless you're on a paid GitHub plan).
2. Push these files to the repository root (or to a `/docs` folder — either
   works, you just need to tell GitHub Pages which one in step 3).
3. In the repo, go to **Settings → Pages**, and under "Build and
   deployment," set the source to "Deploy from a branch," pick your main
   branch, and the root (or `/docs`) folder.
4. GitHub will give you a URL like `https://yourusername.github.io/repo-name/`
   within a minute or two. That's the link to send.

No build step is required — this is plain HTML/CSS/JS, so whatever you push
is exactly what goes live.
