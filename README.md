# Trace Router React

React bindings for `trace-router` - the next generation router

### Installation

```
yarn add effector trace-router trace-router-react
```

### Exports

```ts
export { useRoute, Route, Link } from './react';
````

### Examples

Use routes:

```jsx
export const Root = () => (
  <>
    {useRoute(user) && <UserPage />}
    {useRoute(info) && <InfoPage />}
    {useStore(router.noMatches) && <NotFound />}
  </>
);
```

You can use `Route` instead of a hook:

```jsx
export const UserPage = () => (
  <AppFrame>
    <UserTemplate>
      <Route of={userProfile} component={UserProfile} />
      <Route of={userTickets} component={UserTickets} />
      <Route of={userTicket} component={UserTicket} />
    </UserTemplate>
  </AppFrame>
);
```

Or use children of `Route`:

```jsx
export const InfoPage = () => (
  <AppFrame>
    <InfoTemplate>
      <Route of={joinUs}>
        <JoinUs />
      </Route>
      <Route of={about}>
        <About />
      </Route>
      <Route of={privacy}>
        <Privacy />
      </Route>
    </InfoTemplate>
  </AppFrame>
);
```

Use links:

```jsx
<Link to={about}>About</Link>
````

Use can compile links with params:

```jsx
<Link to={userTicket} params={{ id: 100 }}>Month</Link>
````

The above link compiles to something like:

```jsx
<a href="/user-tiket/100" onClick={/* prevent default & navigate */}>Join Us</a>
````

### Types

<details>
<summary>
  Link
</summary>

```ts
  type LinkProps<P extends Params> = {
    to: RouteType<P>;
    children: ReactNode;
    params?: P;
    query?: string[][] | Record<string, string> | string | URLSearchParams;
    hash?: string;
    compileOptions?: ParseOptions & TokensToFunctionOptions;
  } & DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
```

</details>

<details>
<summary>
  Route
</summary>

```ts
type RouteProps = {
  of: RouteType;
  children?: ReactNode;
  component?: ComponentType;
};
```

</details>

### Implementation

Hook:

```ts
export const useRoute = route => useStore(route.visible);
````

Route component:

```tsx
export const Route = ({
  of: route,
  component: Component,
  children,
}: RouteProps): JSX.Element => {
  const element = children ?? (Component && <Component />);
  return <>{useStore(route.visible) && element}</>;
};
````

Link implementation is more advanced...

### Docs

See the source code ;)
