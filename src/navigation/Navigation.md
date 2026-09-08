# Stack Navigation Architectural Design

- RootStack
  │
  ├── AuthStack
  │ ├── Login
  │ └── Register
  │
  ├── AppStack
  │ ├── Home
  │ ├── Profile
  │ └── Settings
  │
  ├── Success --> all shared screen must go like this for noe might change it later
  ├── WebView
  └── SomethingElse

-      React Navigation
                 │
        ┌────────┴────────┐
        │                 │
  Need now Later
  │ │
  Stack / Nesting Routers
  Params Persistence
  TypeScript Deep linking
  Auth/App Advanced events
  navigationRef
