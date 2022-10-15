# Generate code (boilerplate)

Eslint config includes `templates` folder but `lint` script ignores it, as templates may have invalid code meant to be corrected after generation - Husky's `pre-push` needs to allow those.

## Component

`npx @mygento/gen -c` generates a React component from a template according to the selected options.

https://user-images.githubusercontent.com/71220778/195890379-a091a879-c962-4c14-b5e6-f070feb5d12c.mp4
