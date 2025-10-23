# 🔐 What Is OAuth?

OAuth (Open Authorization) is a **secure authorization protocol** that allows one application to access **limited data** from another application **on behalf of a user**, without exposing the user's credentials.

## 🧩 Key Concepts

- **Resource Owner**: The user who owns the data.
- **Client**: The app requesting access (e.g., a calendar app).
- **Authorization Server**: Verifies the user and issues tokens.
- **Resource Server**: Hosts the protected data (e.g., Google Drive).

## 🔄 Typical Flow (OAuth 2.0)

1. **User initiates login** via a third-party provider (e.g., “Sign in with Google”).
2. **Client app redirects** the user to the provider’s authorization server.
3. **User grants permission** (e.g., “Allow access to your calendar”)
4. **Authorization server issues an access token** to the client.
5. **Client uses the token** to access the resource server — no password shared.

## 🧠 Why It Matters

- **Security**: Users don’t share passwords with third-party apps.
- **Granular Access**: Apps can request only the permissions they need.
- **Revocable**: Users can revoke access anytime.




# 🧭 Mapping OAuth Roles in Internal Systems
In a typical FE → BE setup:

| OAuth Role | Internal Equivalent |
|---|---|
| Client | Frontend (SPA, mobile app) |
| Resource Owner | End user (via browser) |
| Authorization Server | Identity Provider (e.g., Azure AD, Auth0) |
| Resource Server | Backend API |

Even though it’s all “within the org,” the FE still acts as a client requesting access to protected resources (e.g., user profile, data) hosted by the BE.

## 🔄 Common Flow: Authorization Code with PKCE

1. User logs in via FE, which redirects to the authorization server.
2. Authorization server authenticates the user and returns an authorization code.
3. FE exchanges the code for an access token (using PKCE for security).
4. FE sends the access token in API calls to the BE.
5. BE validates the token (often via introspection or JWT verification) and serves the data.

## 🧱 Why Use OAuth Internally?

- ✅ Decouples auth logic from the backend — BE doesn’t need to manage sessions.
- ✅ Token-based access enables microservices to validate requests independently.
- ✅ Scopes and claims allow fine-grained access control.
- ✅ Federation-ready — same flow works across org boundaries if needed.

## 🧠 Bonus: Machine-to-Machine (M2M) OAuth

In pure backend-to-backend scenarios (no user), you'd use the Client Credentials Flow:
- BE service authenticates with the authorization server using its client ID/secret.
- Gets an access token scoped for another internal service.
- Uses that token to call downstream APIs.

No user involved — just service identity.
