### Ok, reviewed TODO:
1. Add a Skeleton which will contain all the Routes + shared UI.
2. Expose the skeleton config to consumer(s).
3. Add a shared Header.
4. Add 2 Routes/Pages: homepage and article.
5. Add and expose a service to fetch articles from articles.json.
6. Add a user flow: load the articles on the homepage, and redirect to the article page (using the slug) when clicking on one of them.
7. Add an analytic service to "track" (log) all the user interactions.
8. Add and expose a controller for the Header to allow each consumer (Page) to set the header title when navigated to.
9. Add and expose a provider which will cache an article fetched by slug (article-1.json, article-2.json, ...) and return it instead of fetching it through the service endpoint.
10. Add a new slot in the Skeleton/skeleton_config for a Modal.
   - Create a Username dialog Modal which disappears when the user clicks on the bg or on a close button in the dialog. It should contain a text input field and a save button.
   - Add a button in the Header to display the Username dialog Modal on click, and display the current username (or a default one) for the user.
   - Use the localStorage to store that value, and hydrate from it on app install.
     - Optionally, add and expose a StorageProvider to abstract the storage logic.