<b>This is a simple website template using the Bun javascript runtime.</b> https://bun.sh/ <br>

No dependencies (so far), no NPM modules, just good old fashioned HTML, JS, CSS and images<br>

index.js and fileserver.js run from the root directory<br>
.env holds environment variables in the root directory, this is how Bun works. I don't know if there is a way to change this, it is also optional, refer to the Bun documentation at https://bun.sh/docs/runtime/env <br>

/public holds the favicon.png file for the website's icon <br>
(I chose .png rather than .ico because it's simpler)<br>

/public/img holds all image files<br>

/public/js holds all <b>client side</b> javascript files<br>

/public/css holds all css files<br>

/views holds all html files. index.html and 404.html goes here too<br>

<b>Version 1.0:</b><br>
Supports html, gif, png, jpg/jpeg, css, js files<br>
redirects bad domain requests to 404.<br>
missing images/js/css simply won't load<br>

<b>Todo:</b><br>
support subdomains with better url parsing<br>
send error message to client console about missing resources<br>

<b>Probably wont do:</b><br>
Support query via url, as it's not really needed for personal websites<br>