## CS4249 - Group 4

The web page is built with ReactJS, using [react-boilerplate-cra](https://github.com/react-boilerplate/react-boilerplate-cra-template).

### URL:
- Github: https://github.com/snguyenthanh/cs4249-project-task-4
- Netlify: https://cs4249-group4.netlify.app/

### Project structure

The actual code is inside folder `src`.

The main webpage and all the UI components are at `src\app\containers\ImprovedPage`.

#### Main components

##### `index.tsx`

This is the main file that renders the web page. It accepts 3 query parameters (`use_menu_a`, `size` and `list_length`) and uses them to render the web UI components.

##### `saga.ts`

This is where the actual network call to Google Form is called. The network call is asynchronous to not block any renders on the UI.

The `logging.js` function is replicated into `src\utils\googleForm.tsx`.
