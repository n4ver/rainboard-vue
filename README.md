# Rainboard (Vue)
Rainboard is a dashboard that can be used for Team Fortress 2 Competitive 6v6 stats analysis, as well as rendering log files for use on broadcast. It was made with Vite + Vue.

## Usage
Under the Rainboard directory, use `npm i` to install dependencies and `npm run dev` to create a local server.<br>
Enter a logs.tf URL in the search bar to create a page for broadcast. Copy this URL into a browser source on your preferred streaming application, like OBS.

## OBS
Launch OBS with `obs64.exe --disable-web-security`.<br>
The `disable-web-security` flag allows the browser source to make requests to the logs.tf api. Otherwise, OBS will deny requests due to CORS.