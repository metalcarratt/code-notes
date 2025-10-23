# 🔐 What Is OAuth?

OAuth (Open Authorization) is a **secure authorization protocol** that allows one application to access **limited data** from another application **on behalf of a user**, without exposing the user's credentials.

- [Mapping OAuth Roles in Internal Systems](#mapping-oauth-roles-in-internal-systems)
- [Token Introspection vs JWT Verification](#token-introspection-vs-jwt-verification)
- [Different token types](#different-token-types)

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



# 🔍 Token Introspection vs 🔐 JWT Verification

| Feature | Introspection | JWT Verification |
|---|---|---|
| Token Type | Opaque (random string) | JWT (self-contained JSON Web Token) |
| Validation Method | API call to the authorization server | Local signature verification |
| Who validates? | Resource server asks the auth server | Resource server verifies independently |
| Latency | Higher (network round-trip) | Lower (local check) |
| Revocation support | ✅ Easy to revoke centrally | 🚫 Harder — must track revocation externally |
| Token contents | Stored server-side | Encoded in the token itself (claims, scopes, etc.) |
| Scalability | Less scalable (central dependency) | Highly scalable (no external calls) |

## 🧠 When to Use Which?

- Use introspection when:
  - You need centralized control (e.g. revoking tokens instantly).
  - You’re using opaque tokens for security or simplicity.
  - You want fine-grained access decisions based on real-time token state.
- Use JWT verification when:
  - You want performance and scalability.
  - You trust the token issuer and can validate signatures locally.
  - You’re okay with short-lived tokens and external revocation strategies.

In practice, many systems use JWTs for access tokens and introspection for refresh tokens or opaque tokens. Some even layer both — verifying JWTs locally but calling introspection for high-risk operations.



# Different token types

## 🪙 1. Access Token
- Purpose: Grants access to protected resources (e.g., APIs).
- Scope: Limited to specific permissions (e.g., read:profile, write:calendar).
- Lifetime: Short-lived (minutes to hours).
- Format:
  - Can be opaque (random string, validated via introspection).
  - Or JWT (self-contained, signed, includes claims like sub, exp, scope).
- Usage: Sent in Authorization: Bearer <token> header to resource server.

## 🔁 2. Refresh Token
- Purpose: Used to obtain a new access token without re-authenticating the user.
- Scope: Typically broader than access tokens.
- Lifetime: Long-lived (days to months); revocable.
- Format: Usually opaque.
- Usage: Sent to the authorization server’s /token endpoint to get a new access token.

🔐 Refresh tokens are never sent to resource servers — only to the authorization server.

## 🧾 3. ID Token (OpenID Connect only)
- Purpose: Authenticates the user — proves identity, not authorization.
- Scope: Contains identity claims (e.g., name, email, picture).
- Lifetime: Short-lived.
- Format: Always a JWT.
0 Usage: Used by the client to establish a session or display user info.

🧠 ID tokens are not meant for API access — they’re for identity, not resource access.

## 🧠 Summary Table
| Token Type | Purpose | Format | Sent To | Typical Lifetime |
|---|---|---|---|---|
| Access Token | Authorize API use | Opaque or JWT | Resource Server | Short |
| Refresh Token | Renew access | Opaque | Authorization Server | Long |
| ID Token | Prove identity | JWT | Client App | Short |
