# Data Explorer

From the folder containing index.html, run `py -m http.server 8000`.
Open http://localhost:8000/ and click **Load / retry posts**.

- api.js requests and validates the posts.
- view.js renders the list with DOM text.
- app.js connects the button, request, status, and renderer.

Load twice and check that each successful request displays 100 posts.
Use DevTools Network to go offline, retry, restore the connection, and
retry again. The recovery should display 100 posts without duplicates.
