## Example of using tsup to build your React Email templates

This is an example repository meant to show a way of using `tsup` as a preprocessor
on a NodeJS server that wants to use React Email for templating emails without
having to compile the whole server. With that being said, my recommendation is to still
use `tsup` on _the whole project_ as it is going to avoid a few caveats that this brings (i.e. `emails/src`).

This means that it only compiles the emails, as **there is no other way** to use
the React Email templates.

### Oveview of the file structure

```bash
├── emails
│   └── src
│       └── email.jsx
├── src
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

The root `src` directory is meant for your actual project files.
The source code for the email is hosted inside `emails/src`.

### Scripts that this runs

There are a few scripts this package contains:

| command       | description                                                        |
| ------------- | ------------------------------------------------------------------ |
| `start`       | Runs `node src/index.js`                                           |
| `email:dev`   | Runs an email preview server                                       |
| `email:build` | Compiles all the email templates from `emails/src`                 |
| `email:watch` | Watches for changes to compile the email templates on `emails/src` |

You will need to either run `email:build` or `email:watch` to compile the emails
before actually running the project as otherwise they won't import correctly.

### Importing the email templates

The emails are meant to be imported from outside `emails/src`, that is just `emails/*`.
You can find how this is done inside [./src/index.js](./src/index.js).
