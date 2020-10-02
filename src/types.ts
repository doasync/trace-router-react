import {
  AnchorHTMLAttributes,
  ComponentType,
  DetailedHTMLProps,
  ReactNode,
} from 'react';
import {
  MergedRoute,
  Params,
  Route,
  ParseOptions,
  TokensToFunctionOptions,
} from 'trace-router/dist/types';

export type RouteProps = {
  of: Route;
  children?: ReactNode;
  component?: ComponentType;
};

export type UseRoute = (route: Route<any> | MergedRoute) => boolean;

export type LinkProps<P extends Params> = {
  to: Route<P>;
  children: ReactNode;
  params?: P;
  query?: string[][] | Record<string, string> | string | URLSearchParams;
  hash?: string;
  compileOptions?: ParseOptions & TokensToFunctionOptions;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
