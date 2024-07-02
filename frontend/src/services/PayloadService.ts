type ParamValue =
  | number
  | boolean
  | string
  | { [key: string]: ParamValue }
  | Array<{ [key: string]: ParamValue }>;

type Param = { [key: string]: ParamValue };

export type Params = Param | Array<Param>;

export class PayloadService {
  public type: 'FormData' | 'URLSearchParams';
  public payload: URLSearchParams | FormData;

  constructor(type: 'FormData' | 'URLSearchParams') {
    this.type = type;

    if (type === 'FormData') {
      this.payload = new FormData();
    } else if (type === 'URLSearchParams') {
      this.payload = new URLSearchParams();
    } else {
      throw new Error(`Unsupported type: ${type}`);
    }
  }

  convert(params: Params | undefined, prefix = '') {
    //# If empty
    if (!params) return;

    //# Split between objects and arrays

    //# Objects {key: value}
    if (typeof params === 'object' && !Array.isArray(params)) {
      Object.keys(params).forEach((key) => {
        const paramValue = params[key];

        const newKey = prefix ? `${prefix}[${key}]` : key;

        if (
          typeof paramValue === 'boolean' ||
          typeof paramValue === 'number' ||
          typeof paramValue === 'string'
        ) {
          this.payload.append(key, String(paramValue));
        } else {
          this.convert(paramValue, newKey);
        }
      });
    } else {
      //# Arrays [{key: value}, {key: value}]
      params.forEach((param, index) => {
        this.convert(param as Params, `${prefix}[${index}]`);
      });
    }
  }
}
