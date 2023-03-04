// Type definitions for koa-better-body 3.3
// Project: https://github.com/tunnckoCore/opensource/tree/master/%40packages/koa-better-body
// Definitions by: David Tanner <https://github.com/DavidTanner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Next, ParameterizedContext, DefaultState, DefaultContext } from 'koa';

declare function KoaBetterBody(
  options?: KoaBetterBody.Options,
): KoaBetterBody.Body;

declare namespace KoaBetterBody {
  interface Options {
    /**
     * {
     * <br />&nbsp;&nbsp;multipart: ['multipart/form-data'],
     * <br />&nbsp;&nbsp;text: ['text/*'],
     * <br />&nbsp;&nbsp;form: ['application/x-www-form-urlencoded'],
     * <br />&nbsp;&nbsp;json: [
     * <br />&nbsp;&nbsp;&nbsp;&nbsp;'application/json',
     * <br />&nbsp;&nbsp;&nbsp;&nbsp;'application/json-patch+json',
     * <br />&nbsp;&nbsp;&nbsp;&nbsp;'application/vnd.api+json',
     * <br />&nbsp;&nbsp;&nbsp;&nbsp;'application/csp-report'
     * <br />&nbsp;&nbsp;],
     * <br />&nbsp;&nbsp;buffer: ['text/*']
     * }
     */
    extendTypes?: Record<string, string | string[]> & {
      custom?: string | string[];
    };

    /**
     * @default false
     */
    fields?: boolean | string;

    /**
     * @default false
     */
    files?: boolean | string;

    /**
     * @default true
     */
    multipart?: boolean;

    /**
     * @default false
     */
    textLimit?: string;

    /**
     * @default false
     */
    formLimit?: string;

    /**
     * @default false
     */
    jsonLimit?: string;

    /**
     * @default true
     */
    jsonStrict?: boolean;

    /**
     * @default () => false
     */
    detectJSON?: <StateT = DefaultState, ContextT = DefaultContext>(
      ctx: ParameterizedContext<StateT, ContextT>,
    ) => boolean;

    /**
     * @default false
     */
    bufferLimit?: string;

    /**
     * limit the amount of uploaded files, set Infinity for unlimited
     *
     * @default Infinity
     */
    maxFiles?: number | undefined;

    /**
     * the minium size of uploaded file
     *
     * @default 1
     */
    minFileSize?: number | undefined;

    /**
     * limit the size of uploaded file
     *
     * @default 200 * 1024 * 1024
     */
    maxFileSize?: number | undefined;

    /**
     * limit the size of the batch of uploaded files
     *
     * @default options.maxFileSize
     */
    maxTotalFileSize?: number | undefined;

    /**
     * limit the number of fields, set 0 for unlimited
     *
     * @default 1000
     */
    maxFields?: number | undefined;

    /**
     * limit the amount of memory all fields together (except files) can allocate in bytes
     *
     * @default 20 * 1024 * 1024
     */
    maxFieldsSize?: number | undefined;

    /**
     * include checksums calculated for incoming files, set this to some hash algorithm, see
     * crypto.createHash for available algorithms
     *
     * @default false
     */
    hashAlgorithm?: string | false | undefined;

    /**
     * @default false
     */
    buffer?: boolean;

    /**
     * @default true
     */
    strict?: boolean;

    /**
     * @default '&'
     */
    delimiter?: string;

    /**
     * @default require('querystring').unescape
     */
    decodeURIComponent?: (query: string) => string;

    /**
     * @default 1000
     */
    maxKeys?: number; // default: 1000

    /**
     * @deprecated use formLimit instead
     * @default config.formLimit
     */
    urlencodedLimit?: string;

    /**
     * @deprecated use delimiter instead
     * @default config.delimiter
     */
    sep?: string;

    /**
     * @default undefined
     */
    onError?: <StateT = DefaultState, ContextT = DefaultContext>(
      err: any,
      ctx: ParameterizedContext<StateT, ContextT>,
    ) => void;

    /**
     * @default undefined
     */
    handler?: <StateT = DefaultState, ContextT = DefaultContext>(
      ctx: ParameterizedContext<StateT, ContextT>,
      options: Options,
      next: Next,
    ) => void;
  }

  type Body = (next: Next) => Generator;
}

export = KoaBetterBody;
