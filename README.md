# mashup-poca (2025)
Frontend project that connects to Guardian v3, a bot running in the [95 Degrees community Discord server](https://95degrees.cafe), and receives incoming messages from a specified text channel, which can be displayed in various forms such as small popup messages and full screen highlighted messages.

This system was created for the [95 LIVE](https://wiki.95degrees.cafe/95_LIVE) 2025 broadcast run by ThisIsntNath, a yearly event celebrating the 95 Degrees community. 

The messages that were displayed by this system were shown in the broadcast during the half hour pre-show before the main broadcast, with pop-ups accompanying the pre-rendered visuals created by Nath, and full screen messages being displayed separately.

Backend management for this system was handled by Guardian in a separate private text channel.

## Running Locally
You can't run this locally in its complete form as the backend functionality is provided by 95 Degrees Guardian, however debug modes are available to visualise what it would look like, and in theory you could also just look into what socket events are required / the data structure and create backend services yourself if you want lol.

To provide a backend socket URL, use environment variable `VITE_APP_GUARDIAN_SOCKET_URL`.

## URL Options
Any of the following options can be provided as queries in the URL, place after a ?. The value does not matter, just set to true. Options can be chained together.

- `show_full`: Enable full-screen messages
- `show_popup`: Enable popup queue messages
- `debug`: Enable a debug overlay which shows active socket connection and active received message data.
- `fakemsg`: Enable fake message debug mode, which will disable socket connection and allow fake premade popups and full screen messages to be displayed. While this mode is enabled, use `M` key to send a random full screen message and `P` key to start cycling through popups.