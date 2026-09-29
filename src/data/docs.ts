/**
 * Docs navigation — controls the order and labels for on-site help guides
 * served at /admin/docs/. The actual content lives in the repo's /docs/*.md
 * files, so anyone editing on github.com sees the same guides.
 */

export type DocEntry = {
  slug: string;
  title: string;
  description: string;
  audience: string;
};

export const docs: DocEntry[] = [
  {
    slug: "composer",
    title: "Using the Composer",
    description:
      "Fill in a form, download a file, send to the publisher. No YAML, no GitHub, no code.",
    audience: "For coordinators submitting news, events, or outputs",
  },
  {
    slug: "editing-directly",
    title: "Editing existing content",
    description:
      "How to change news items, events, outputs, partner info, team bios, and basic site information — all on github.com in your browser.",
    audience: "For anyone updating content that's already on the website",
  },
  {
    slug: "managing-images",
    title: "Adding photos",
    description:
      "How to upload and use photos for news, events, team portraits, hero images, and partner logos.",
    audience: "For coordinators managing site imagery",
  },
  {
    slug: "publishing",
    title: "Publishing content",
    description:
      "How the publisher takes content sent by coordinators and commits it to the site.",
    audience: "For the designated publisher",
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    description:
      "Symptom-first fixes for common issues — failed commits, missing photos, stale pages.",
    audience: "For anyone hitting a problem",
  },
];

// Note: `deployment.md` deliberately isn't listed here. It's a maintainer-facing
// guide (GitHub setup, DNS, branch protection). It stays in the repo's docs/
// folder and can be read on github.com; there's no reason to serve it on the
// live site.
