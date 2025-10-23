# 🔐 What Is OAuth?
OAuth (Open Authorization) is a secure authorization protocol that allows one application to access limited data from another application on behalf of a user, without exposing the user's credentials.

## 🧩 Key Concepts
Resource Owner: The user who owns the data.

Client: The app requesting access (e.g., a calendar app).

Authorization Server: Verifies the user and issues tokens.

Resource Server: Hosts the protected data (e.g., Google Drive).

## 🔄 Typical Flow (OAuth 2.0)
User initiates login via a third-party provider (e.g., “Sign in with Google”).

Client app redirects the user to the provider’s authorization server.

User grants permission (e.g., “Allow access to your calendar”).

Authorization server issues an access token to the client.

Client uses the token to access the resource server — no password shared.

## 🧠 Why It Matters
Security: Users don’t share passwords with third-party apps.

Granular Access: Apps can request only the permissions they need.

Revocable: Users can revoke access anytime.
