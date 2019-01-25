# vf-sample-integrations

A few demo pages showing how the (alpha) Visual Framework 2.0  (add link) can be used (fairly) seamlessly with other CSS and JS stacks.

## So, what does this show?

It demonstrates the VF 2.0's CSS and JS isolation through namespacing and element isolation (add link).

To illustrate, on the below demos we use the VF to:

1. pull in reusable content from the EMBL ContentHub (add link) (uses CSS + JS)

```html
<!-- BEGIN: VF 2.0 sample -->
<!-- Jobs feed import -->
<link rel="import" href="https://dev.beta.embl.org/api/v1/pattern.html?pattern=vf-jobs-snippet&filter-content-type=jobs&filter-field-contains[field_jobs_description]=protein&filter-field-date-after[field_jobs_expiration]=today&limit=3&amp;source=contenthub" data-target="self" data-embl-js-content-hub-loader="">
<link rel="stylesheet" media="all" href="https://dev.assets.emblstatic.net/vf/components/raw/vf-summary/vf-summary.css">
<!-- END: VF 2.0 sample -->
```

2. show dismissible banners (uses CSS + JS)

```html
<!-- BEGIN: VF 2.0 sample -->
<!-- Data protection banner -->
<link rel="import" href="https://dev.beta.embl.org/api/v1/pattern.html?filter-content-type=article&filter-id=581&pattern=node-body&amp;source=contenthub" data-target="self" data-embl-js-content-hub-loader>
<link rel="stylesheet" media="all" href="https://dev.assets.emblstatic.net/vf/components/raw/vf-banner/vf-banner.css">
<!-- END: VF 2.0 sample -->
```

In both cases this can be done without disrupting existing page styles and JavaScript.

### View the demos

- [Ensembl](samples/ensembl.html)
- [PDBe](samples/pdbe.html)
- [Uniprot](samples/uniprot.html)
- [Chembl](samples/chembl.html)
- [Chembl beta](samples/chembl-beta.html)

### What are you adding in

For each sample page, three things:

1. A CSS file
    - `<link rel="stylesheet" media="all" href="https://dev.assets.emblstatic.net/vf/css/styles.css">`
1. A JS file
    - `<script src="https://dev.assets.emblstatic.net/vf/scripts/scripts.js"></script>`
1. Snippets of HTML
    - look at the source for `<!-- BEGIN: VF 2.0 sample -->`

## Work on the pages locally

Pages are simple `.html` files and can be easily previewed/refreshed with
[`browsersync`](https://browsersync.io/).

From the command line
- `npm install`
- `gulp`

☝ You'll need [`node`/`npm`](https://nodejs.org/en/) too
