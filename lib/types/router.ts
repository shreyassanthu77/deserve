import { ParamsDictionary } from "../types.ts";
import { DeserveApp, Handler, Method, RouteHandler } from "./core.ts";

export const routesMapSymbol = Symbol();

export interface Route<T = ParamsDictionary> {
  pattern: URLPattern;
  handler: Handler<T>;
}

export interface Router<CtxExtensions> {
  [routesMapSymbol]: Map<Method, Route[]>;
  all<R extends string>(
    path: R,
    ...handler: RouteHandler<R, CtxExtensions>[]
  ): Router<CtxExtensions>;
  get<R extends string>(
    path: R,
    ...handler: RouteHandler<R, CtxExtensions>[]
  ): Router<CtxExtensions>;
  post<R extends string>(
    path: R,
    ...handler: RouteHandler<R, CtxExtensions>[]
  ): Router<CtxExtensions>;
  put<R extends string>(
    path: R,
    ...handler: RouteHandler<R, CtxExtensions>[]
  ): Router<CtxExtensions>;
  patch<R extends string>(
    path: R,
    ...handler: RouteHandler<R, CtxExtensions>[]
  ): Router<CtxExtensions>;
  delete<R extends string>(
    path: R,
    ...handler: RouteHandler<R, CtxExtensions>[]
  ): Router<CtxExtensions>;
  options<R extends string>(
    path: R,
    ...handler: RouteHandler<R, CtxExtensions>[]
  ): Router<CtxExtensions>;
  head<R extends string>(
    path: R,
    ...handler: RouteHandler<R, CtxExtensions>[]
  ): Router<CtxExtensions>;
  trace<R extends string>(
    path: R,
    ...handler: RouteHandler<R, CtxExtensions>[]
  ): Router<CtxExtensions>;
  append<T>(router: Router<T>): Router<CtxExtensions>;
  routes(): Handler;
}

type GetCtxExts<T> = T extends DeserveApp<infer CtxExtensions>
  ? CtxExtensions
  : T;

export type AppRouter<T extends DeserveApp> = Router<GetCtxExts<T>>;