/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CameraDetail {
  /** CameraID */
  cameraID?: number;
  /**
   * Location
   * @minLength 1
   * @maxLength 100
   */
  location: string;
  /** Specification */
  specification: number;
}

export interface SpecificationCamera {
  /**
   * Model
   * @minLength 1
   * @maxLength 100
   */
  model: string;
  /**
   * Resolution
   * @minLength 1
   * @maxLength 100
   */
  resolution: string;
  /** MotionSensor */
  motionSensor: boolean;
  /** DarkMode */
  darkMode: boolean;
}

export interface CameraList {
  /** CameraID */
  cameraID?: number;
  /**
   * Location
   * @minLength 1
   * @maxLength 100
   */
  location: string;
  specification: SpecificationCamera;
}

export interface DangerDetail {
  /**
   * Title
   * @minLength 1
   * @maxLength 50
   */
  title: string;
}

export interface DangerList {
  /** DangerID */
  dangerID?: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 50
   */
  title: string;
  /**
   * Description
   * @minLength 1
   * @maxLength 500
   */
  description: string;
  /**
   * ImageLink
   * @minLength 1
   * @maxLength 50
   */
  imageLink: string;
}

export interface EventCreate {
  /** EventID */
  eventID?: number;
  /**
   * Date
   * @format date
   */
  date: string;
  /** Time */
  time: string;
  /**
   * Img
   * @minLength 1
   */
  img: string;
  /** Danger */
  danger: number;
  /** Camera */
  camera: number;
}

export interface EventEdit {
  /**
   * Video
   * @minLength 1
   * @maxLength 100
   */
  video?: string | null;
}

export interface EventDetail {
  /** EventID */
  eventID?: number;
  /** Danger */
  danger?: string;
  /**
   * Date
   * @format date
   */
  date: string;
  /** Time */
  time: string;
  /**
   * Video
   * @minLength 1
   * @maxLength 100
   */
  video?: string | null;
  /**
   * Img
   * @minLength 1
   */
  img: string;
  /** Camera */
  camera: number;
}

export interface EventList {
  /** EventID */
  eventID?: number;
  /** Danger */
  danger?: string;
  /**
   * Date
   * @format date
   */
  date: string;
  /** Time */
  time: string;
  /**
   * Video
   * @minLength 1
   * @maxLength 100
   */
  video?: string | null;
  /**
   * Img
   * @minLength 1
   */
  img: string;
  /** Camera */
  camera: number;
}

export interface ModuleDetail {
  /** ModuleID */
  moduleID?: number;
  danger: DangerDetail;
}

export interface ModuleList {
  /** ModuleID */
  moduleID?: number;
  /** Danger */
  danger?: string;
}

export interface OrganizationDetail {
  /** OrganizationID */
  organizationID?: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 50
   */
  title: string;
  /**
   * TelephoneNumber
   * @minLength 1
   * @maxLength 30
   */
  telephoneNumber: string;
  /**
   * Address
   * @minLength 1
   * @maxLength 100
   */
  address: string;
}

export interface SpecificationDetail {
  /** SpecificationID */
  specificationID?: number;
  /**
   * Model
   * @minLength 1
   * @maxLength 100
   */
  model: string;
  /**
   * Resolution
   * @minLength 1
   * @maxLength 100
   */
  resolution: string;
  /** MotionSensor */
  motionSensor: boolean;
  /** DarkMode */
  darkMode: boolean;
}

export interface SpecificationList {
  /** SpecificationID */
  specificationID?: number;
  /**
   * Model
   * @minLength 1
   * @maxLength 100
   */
  model: string;
  /**
   * Resolution
   * @minLength 1
   * @maxLength 100
   */
  resolution: string;
  /** MotionSensor */
  motionSensor: boolean;
  /** DarkMode */
  darkMode: boolean;
}

export interface ModuleSubscription {
  danger: DangerDetail;
}

export interface SubscriptionDetail {
  /** SubscriptionID */
  subscriptionID?: number;
  modules: ModuleSubscription[];
  /**
   * Version
   * @minLength 1
   * @maxLength 20
   */
  version: string;
  /**
   * StartDate
   * @format date
   */
  startDate: string;
  /**
   * EndDate
   * @format date
   */
  endDate: string;
}

export interface SubscriptionList {
  /** SubscriptionID */
  subscriptionID?: number;
  modules: ModuleSubscription[];
  /**
   * Version
   * @minLength 1
   * @maxLength 20
   */
  version: string;
  /**
   * StartDate
   * @format date
   */
  startDate: string;
  /**
   * EndDate
   * @format date
   */
  endDate: string;
}

export interface UserCreate {
  /** Userid */
  userid?: number;
  /**
   * Login
   * @minLength 1
   * @maxLength 50
   */
  login: string;
  /**
   * FirstName
   * @minLength 1
   * @maxLength 50
   */
  firstName: string;
  /**
   * LastName
   * @minLength 1
   * @maxLength 50
   */
  lastName: string;
  /**
   * ReceivingNotification
   * @minLength 1
   * @maxLength 50
   */
  receivingNotification: string;
  /**
   * TelephoneNumber
   * @maxLength 15
   */
  telephoneNumber?: string | null;
  /**
   * Email
   * @maxLength 50
   */
  email?: string | null;
  /**
   * Telegram
   * @maxLength 50
   */
  telegram?: string | null;
  /**
   * Role
   * @maxLength 10
   */
  role?: string;
  /** Organization */
  organization: number;
}

export interface UserDetail {
  /** Userid */
  userid?: number;
  /**
   * Login
   * @minLength 1
   * @maxLength 50
   */
  login: string;
  /**
   * FirstName
   * @minLength 1
   * @maxLength 50
   */
  firstName: string;
  /**
   * LastName
   * @minLength 1
   * @maxLength 50
   */
  lastName: string;
  /**
   * ReceivingNotification
   * @minLength 1
   * @maxLength 50
   */
  receivingNotification: string;
  /**
   * TelephoneNumber
   * @maxLength 15
   */
  telephoneNumber?: string | null;
  /**
   * Email
   * @maxLength 50
   */
  email?: string | null;
  /**
   * Telegram
   * @maxLength 50
   */
  telegram?: string | null;
  /**
   * Role
   * @maxLength 10
   */
  role?: string;
  /** Organization */
  organization: number;
}

export interface UserList {
  /** Userid */
  userid?: number;
  /**
   * Login
   * @minLength 1
   * @maxLength 50
   */
  login: string;
  /**
   * FirstName
   * @minLength 1
   * @maxLength 50
   */
  firstName: string;
  /**
   * LastName
   * @minLength 1
   * @maxLength 50
   */
  lastName: string;
  /**
   * ReceivingNotification
   * @minLength 1
   * @maxLength 50
   */
  receivingNotification: string;
  /**
   * TelephoneNumber
   * @maxLength 15
   */
  telephoneNumber?: string | null;
  /**
   * Email
   * @maxLength 50
   */
  email?: string | null;
  /**
   * Telegram
   * @maxLength 50
   */
  telegram?: string | null;
  /**
   * Role
   * @maxLength 10
   */
  role?: string;
  /** Organization */
  organization: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://ml-iu5.local.bmstu.ru:8110";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title CCTV API
 * @version v1
 * @license BSD License
 * @termsOfService https://www.google.com/policies/terms/
 * @baseUrl http://ml-iu5.local.bmstu.ru:8110
 * @contact <contact@snippets.local>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name AuthTokenList
     * @request GET:/auth/token
     * @secure
     */
    authTokenList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/token`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUserList
     * @request GET:/auth/user
     * @secure
     */
    authUserList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/user`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  camera = {
    /**
     * No description
     *
     * @tags camera
     * @name CameraRead
     * @request GET:/camera/{cameraID}
     * @secure
     */
    cameraRead: (cameraId: number, params: RequestParams = {}) =>
      this.request<CameraDetail, any>({
        path: `/camera/${cameraId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  cameras = {
    /**
     * No description
     *
     * @tags cameras
     * @name CamerasRead
     * @request GET:/cameras/{organizationID}/
     * @secure
     */
    camerasRead: (organizationId: string, params: RequestParams = {}) =>
      this.request<CameraList[], any>({
        path: `/cameras/${organizationId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  danger = {
    /**
     * No description
     *
     * @tags danger
     * @name DangerRead
     * @request GET:/danger/{dangerID}/
     * @secure
     */
    dangerRead: (dangerId: number, params: RequestParams = {}) =>
      this.request<DangerDetail, any>({
        path: `/danger/${dangerId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  dangers = {
    /**
     * No description
     *
     * @tags dangers
     * @name DangersList
     * @request GET:/dangers/
     * @secure
     */
    dangersList: (params: RequestParams = {}) =>
      this.request<DangerList[], any>({
        path: `/dangers/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  event = {
    /**
     * No description
     *
     * @tags event
     * @name EventCreate
     * @request POST:/event/
     * @secure
     */
    eventCreate: (data: any, params: RequestParams = {}) =>
      this.request<EventCreate, any>({
        path: `/event/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event
     * @name EventUpdate
     * @request PUT:/event/
     * @secure
     */
    eventUpdate: (data: any, params: RequestParams = {}) =>
      this.request<EventEdit, any>({
        path: `/event/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event
     * @name EventUpdateCreate
     * @request POST:/event/update/{id}
     * @secure
     */
    eventUpdateCreate: (id: string, data: any, params: RequestParams = {}) =>
      this.request<EventCreate, any>({
        path: `/event/update/${id}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event
     * @name EventUpdateUpdate
     * @request PUT:/event/update/{id}
     * @secure
     */
    eventUpdateUpdate: (id: string, data: any, params: RequestParams = {}) =>
      this.request<EventEdit, any>({
        path: `/event/update/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event
     * @name EventRead
     * @request GET:/event/{eventID}
     * @secure
     */
    eventRead: (eventId: number, params: RequestParams = {}) =>
      this.request<EventDetail, any>({
        path: `/event/${eventId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  events = {
    /**
     * No description
     *
     * @tags events
     * @name EventsRead
     * @request GET:/events/organizationID={organizationID}/
     * @secure
     */
    eventsRead: (organizationId: string, params: RequestParams = {}) =>
      this.request<EventList[], any>({
        path: `/events/organizationID=${organizationId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name EventsRead2
     * @request GET:/events/{cameraIDs}/
     * @originalName eventsRead
     * @duplicate
     * @secure
     */
    eventsRead2: (cameraIDs: string, params: RequestParams = {}) =>
      this.request<EventList[], any>({
        path: `/events/${cameraIDs}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name EventsRead3
     * @request GET:/events/{cameraID}/
     * @originalName eventsRead
     * @duplicate
     * @secure
     */
    eventsRead3: (cameraId: string, params: RequestParams = {}) =>
      this.request<EventList[], any>({
        path: `/events/${cameraId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  module = {
    /**
     * No description
     *
     * @tags module
     * @name ModuleRead
     * @request GET:/module/{moduleID}
     * @secure
     */
    moduleRead: (moduleId: number, params: RequestParams = {}) =>
      this.request<ModuleDetail, any>({
        path: `/module/${moduleId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  modules = {
    /**
     * No description
     *
     * @tags modules
     * @name ModulesRead
     * @request GET:/modules/{subscriptionID}/
     * @secure
     */
    modulesRead: (subscriptionId: string, params: RequestParams = {}) =>
      this.request<ModuleList[], any>({
        path: `/modules/${subscriptionId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  organization = {
    /**
     * No description
     *
     * @tags organization
     * @name OrganizationRead
     * @request GET:/organization/{organizationID}/
     * @secure
     */
    organizationRead: (organizationId: number, params: RequestParams = {}) =>
      this.request<OrganizationDetail, any>({
        path: `/organization/${organizationId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  specification = {
    /**
     * No description
     *
     * @tags specification
     * @name SpecificationRead
     * @request GET:/specification/{specificationID}/
     * @secure
     */
    specificationRead: (specificationId: number, params: RequestParams = {}) =>
      this.request<SpecificationDetail, any>({
        path: `/specification/${specificationId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  specifications = {
    /**
     * No description
     *
     * @tags specifications
     * @name SpecificationsList
     * @request GET:/specifications/
     * @secure
     */
    specificationsList: (params: RequestParams = {}) =>
      this.request<SpecificationList[], any>({
        path: `/specifications/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  subscription = {
    /**
     * No description
     *
     * @tags subscription
     * @name SubscriptionRead
     * @request GET:/subscription/{subscriptionID}
     * @secure
     */
    subscriptionRead: (subscriptionId: number, params: RequestParams = {}) =>
      this.request<SubscriptionDetail, any>({
        path: `/subscription/${subscriptionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  subscriptions = {
    /**
     * No description
     *
     * @tags subscriptions
     * @name SubscriptionsRead
     * @request GET:/subscriptions/{organizationID}/
     * @secure
     */
    subscriptionsRead: (organizationId: string, params: RequestParams = {}) =>
      this.request<SubscriptionList[], any>({
        path: `/subscriptions/${organizationId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags user
     * @name UserCreate
     * @request POST:/user/
     * @secure
     */
    userCreate: (data: UserCreate, params: RequestParams = {}) =>
      this.request<UserCreate, any>({
        path: `/user/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserRead
     * @request GET:/user/{login}
     * @secure
     */
    userRead: (login: string, params: RequestParams = {}) =>
      this.request<UserDetail, any>({
        path: `/user/${login}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserRead2
     * @request GET:/user/{userid}
     * @originalName userRead
     * @duplicate
     * @secure
     */
    userRead2: (userid: string, params: RequestParams = {}) =>
      this.request<UserDetail, any>({
        path: `/user/${userid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserUpdate
     * @request PUT:/user/{userid}
     * @secure
     */
    userUpdate: (userid: string, data: UserDetail, params: RequestParams = {}) =>
      this.request<UserDetail, any>({
        path: `/user/${userid}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserPartialUpdate
     * @request PATCH:/user/{userid}
     * @secure
     */
    userPartialUpdate: (userid: string, data: UserDetail, params: RequestParams = {}) =>
      this.request<UserDetail, any>({
        path: `/user/${userid}`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDelete
     * @request DELETE:/user/{userid}
     * @secure
     */
    userDelete: (userid: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/${userid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags users
     * @name UsersRead
     * @request GET:/users/{organizationID}/
     * @secure
     */
    usersRead: (organizationId: string, params: RequestParams = {}) =>
      this.request<UserList[], any>({
        path: `/users/${organizationId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
