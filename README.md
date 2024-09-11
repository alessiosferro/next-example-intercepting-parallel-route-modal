# NextJS Example: Parallel Route + Intercepting Route with a Modal

This example demonstrates the use of intercepting routes in conjunction with parallel routes,
[as described in the documentation](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes).

## Explanation

The parallel route `@foo` is rendered within the root `layout.tsx`, positioned below the container that holds the
children.

When the `bar` route is intercepted within the parallel route `@foo` (defined inside the folder as `(.)bar`), the
corresponding page is displayed instead of the default `bar` page. If no specific slot is active (for example, during
initial navigation), the `default.tsx` will be shown, which returns null and thus renders nothing.

The `page.tsx` file within the parallel route `@foo` is used to handle route matching for `@foo` when users click a link
inside the modal of the intercepted route.

